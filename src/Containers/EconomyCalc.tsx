import * as React from 'react';
import { Heading, TextInputField, TextInput, Button, Icons } from 'Common/Index';
import { List } from './List';
import { Select } from 'Common/Select/Select';
import { EventType, EventTypeAbstract, EventTypeConstant } from 'Constants/EconomyType';
import {
	Occurance,
	OccurranceAbstract,
	OccurranceConstant
} from 'Constants/EconomyOccurrance';
import { Formik, FieldProps, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
import { EventForm } from './EventForm';
import { Toggleable } from 'Common/Utility/Toggleable';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { database } from 'Firebase/index';

export interface IOption {
	label: string;
	value: any;
}

interface IEventParams {
	name: string;
	value: string;
	type: EventTypeConstant;
	repeat: OccurranceConstant;
}

export class EconomyEvent {
	readonly name: string = '';
	readonly id: number = 0;
	readonly value: number = 0;
	readonly type: EventTypeConstant;
	readonly repeat: OccurranceConstant;

	constructor(
		id: number,
		name: string = 'new item',
		value: number,
		type: EventTypeConstant,
		repeat: OccurranceConstant
	) {
		this.id = id;
		this.name = name;
		this.value = value;
		this.repeat = repeat;
		this.type = type;
	}
}

class State {
	readonly eventList: EconomyEvent[] = [];
	readonly selectedEvent: number | null = null;
}

export class BudjetCalculator extends React.Component<object, State> {
	state = new State();

	componentDidMount = () => {
		this.setState({ eventList: EventList });
		database
			.collection('events')
			.get()
			.then((collection) =>
				collection.docs.forEach((document) => {
					console.log(document.id);
					console.log(document.data());
				})
			);
	};

	AddNewItem = (item: EconomyEvent) => {
		const listWithNewItem = [...this.state.eventList, item];
		this.setState({ eventList: listWithNewItem });
	};

	doCreateNewEvent = (values: any) => {
		const nom = validationSchema.cast(values);

		// const newItem = new EconomyEvent(
		// 	Math.random(),
		// 	name,
		// 	parseFloat(value),
		// 	type,
		// 	repeat
		// );
		// this.AddNewItem(newItem);
		console.log(nom);

		// database.collection('events').add({ name, value, repeat, type });
	};

	doSetActiveItem = (id: number) => {
		this.setState({ selectedEvent: id });
	};

	removeItemWithId = (id: number) => {
		const clone = [...this.state.eventList];
		const list = clone.filter((item) => item.id !== id);
      this.setState({ eventList: list });
	};

	reduceToAnnualBalance = (list: EconomyEvent[], m: number) => {
		return list
			.reduce(
				(accumulator, current) =>
					accumulator +
					(Occurance[current.repeat].annualRepeats *
						EventType[current.type].modifier *
						current.value) /
						m,
				0
			)
			.toLocaleString('FI-fi', { style: 'currency', currency: 'EUR' });
	};

	render() {
		const annualBalance = this.reduceToAnnualBalance(this.state.eventList, 1);
		const monthlyBalance = this.reduceToAnnualBalance(this.state.eventList, 12);

		return (
			<div>
				<Heading headingText="Sign Up" className="underlined" />

				<div style={{ border: 'green solid .2rem', padding: '1rem' }}>
					{this.state.selectedEvent && (
						<EventForm
							event={this.state.eventList.find(
								(event) => event.id === this.state.selectedEvent
							)}
							onSubmit={(event: any) => console.log(event)}
						/>
					)}
				</div>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values) => this.doCreateNewEvent(values)}
					render={FormikRender}
				/>

				<List
					list={this.state.eventList}
					headingText="Expense / Income"
					removeFromList={this.removeItemWithId}
					setActive={this.doSetActiveItem}
				/>

				<Heading
					headingText="Balance forecast"
					icon={Icons.banned}
					className="underlined margin-before"
				/>
				<Toggleable>
					{({ show, toggle }) => (
						<>
							<button onClick={toggle}>näytä lisää</button>
							<SlideDown className={'my-dropdown-slidedown'}>
								{show && (
									<div>
										<div>
											<span>Annual total: </span>
											<span>{annualBalance}</span>
										</div>
										<div>
											<span>Monthly total: </span>
											<span>{monthlyBalance}</span>
										</div>
									</div>
								)}
							</SlideDown>
						</>
					)}
				</Toggleable>
			</div>
		);
	}
}

const initialValues: IEventParams = {
	name: '',
	value: '',
	type: EventTypeConstant.Expense,
	repeat: OccurranceConstant.Monthly
};

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(2),
	value: Yup.string()
		.matches(/^\d{0,6}(?:[.,]\d{0,3})?$/)
		.required()
		.transform((value) => value.replace(',', '.')),
	type: Yup.string().required(),
	repeat: Yup.string().required()
});

const FormikRender = ({
	values,
	handleSubmit,
	setFieldValue,
	isValid,
	handleReset
}: FormikProps<typeof initialValues>) => (
	<div>
		<div className="row-flex">
			<Field name="name" placeholder="Name" component={FormikInput} />
			<Field name="value" placeholder="value" component={FormikInput} />
			<Select
				onChange={(option: { label: string; value: EventTypeAbstract }) =>
					setFieldValue('type', option.value)
				}
				defaultValue={TypeOptions.find(
					(type) => values.type && type.value === values.type
				)}
				placeholder={'Type'}
				options={TypeOptions}
			/>
			<Select
				onChange={(option: { label: string; value: OccurranceAbstract }) =>
					setFieldValue('repeat', option.value)
				}
				defaultValue={OccuranceOptions.find(
					(item) => values.repeat && item.value === values.repeat
				)}
				placeholder={'Occurrance'}
				options={OccuranceOptions}
			/>
		</div>
		<div className="row-flex">
			<Button buttonText="reset" onClick={handleReset} />
			<Button buttonText="submit" disabled={!isValid} onClick={handleSubmit} />
		</div>
	</div>
);

const FormikInput = ({
	field,
	form: { touched, errors },
	placeholder,
	...props
}: FieldProps & { placeholder: string }) => (
	<TextInput
		error={touched[field.name] && errors[field.name]}
		placeholder={placeholder}
		{...field}
		{...props}
	/>
);

const TypeOptions = [
	{
		label: EventType[EventTypeConstant.Expense].label,
		value: EventTypeConstant.Expense
	},
	{
		label: EventType[EventTypeConstant.Income].label,
		value: EventTypeConstant.Income
	}
];

const OccuranceOptions = [
	{
		label: Occurance[OccurranceConstant.Monthly].label,
		value: OccurranceConstant.Monthly
	},
	{
		label: Occurance[OccurranceConstant.Annual].label,
		value: OccurranceConstant.Annual
	},
	{
		label: Occurance[OccurranceConstant.Quarterly].label,
		value: OccurranceConstant.Quarterly
	}
];

const EventList: EconomyEvent[] = [
	{
		name: 'Vuokra',
		id: 1,
		value: 500.99,
		type: EventTypeConstant.Expense,
		repeat: OccurranceConstant.Monthly
	},
	{
		name: 'Nettimaksu',
		id: 2,
		value: 39.99,
		type: EventTypeConstant.Expense,
		repeat: OccurranceConstant.Annual
	},
	{
		name: 'Puhelinliittymä - kuukausittainen',
		id: 3,
		value: 34.99,
		type: EventTypeConstant.Expense,
		repeat: OccurranceConstant.Monthly
	},
	{
		name: 'Muu tulo',
		id: 4,
		value: 12,
		type: EventTypeConstant.Expense,
		repeat: OccurranceConstant.Quarterly
	},
	{
		name: 'Palkka',
		id: 5,
		value: 120,
		type: EventTypeConstant.Income,
		repeat: OccurranceConstant.Monthly
	},
	{
		name: 'Metsämaat',
		id: 6,
		value: 12,
		type: EventTypeConstant.Income,
		repeat: OccurranceConstant.Monthly
	},
	{
		name: 'Palkka',
		id: 7,
		value: 120,
		type: EventTypeConstant.Expense,
		repeat: OccurranceConstant.Monthly
	}
];
