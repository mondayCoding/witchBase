import * as React from 'react';
import { Heading, TextInputField, TextInput, Button, Icons } from 'Common/Index';
import { List } from './List';
import SelectBase from 'react-select';
import { IOccurrance, Occurance, IEventType, EventType } from 'Constants/Economy';
import { FormValidation } from 'Utils/FieldRules';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EventForm } from './EventForm';

export interface IOption {
	label: string;
	value: any;
}

interface IEventParams {
	name: string;
	value: string;
	repeat: IOccurrance;
	type: IEventType;
}

export class EconomyEvent {
	readonly name: string = '';
	readonly id: number = 0;
	readonly value: number = 0;
	readonly type: IEventType;
	readonly repeat: IOccurrance;

	constructor(
		id: number,
		name: string = 'new item',
		value: number,
		repeat: IOccurrance = Occurance.annual,
		type: IEventType = EventType.expense
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
	readonly total: number;
	readonly value: string = '';
	readonly name: string = '';
	readonly type?: IEventType;
	readonly repeat?: IOccurrance;
	readonly selectedEvent: number | null = null;
}

export class BudjetCalculator extends React.Component<object, State> {
	state = new State();

	componentDidMount = () => {
		this.setState({ eventList: EventList });
	};

	onKeyUp = (e: React.KeyboardEvent) => {
		if (e.keyCode === 13) {
			if (this.state.name.length > 2 && this.state.value.length > 2) {
				const id = Math.random();
				const item = new EconomyEvent(id, this.state.name, parseFloat(this.state.value));
				this.AddNewItem(item);
			} else {
				console.log('Data is not valid');
			}
		}
	};

	AddNewItem = (item: EconomyEvent) => {
		const listWithNewItem = [...this.state.eventList, item];
		this.setState({ eventList: listWithNewItem });
	};

	doCreateNewEvent = ({ name, value, repeat, type }: IEventParams) => {
		const newItem = new EconomyEvent(Math.random(), name, parseFloat(value), repeat, type);
		this.AddNewItem(newItem);
	};

	removeLastChild = () => {
		const clone = [...this.state.eventList];
		clone.pop();
		this.setState({ eventList: clone });
	};

	removeItemWithId = (id: number) => {
		const clone = [...this.state.eventList];
		const list = clone.filter((item) => item.id !== id);
		this.setState({ eventList: list });
	};

	doSetActiveItem = (id: number) => {
		this.setState({ selectedEvent: id });
	};

	reduceToAnnualBalance = (list: EconomyEvent[], m: number) => {
		return list
			.reduce(
				(accumulator, current) =>
					accumulator +
					(current.repeat.annualRepeats * current.type.modifier * current.value) / m,
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
					initialValues={{ name: '', value: '', type: null, repeat: null }}
					validationSchema={Yup.object().shape({
						name: Yup.string()
							.required()
							.min(2)
							.max(20),
						value: Yup.string().required(),
						type: Yup.object().required(),
						repeat: Yup.object().required()
					})}
					onSubmit={({ name, value, type, repeat }) =>
						this.doCreateNewEvent({ name, value, type: type.value, repeat: repeat.value })
					}
				>
					{({
						values,
						errors,
						dirty,
						handleSubmit,
						handleChange,
						setFieldValue,
						handleReset
					}) => (
						<div>
							<div className="row-flex">
								<TextInput
									name="name"
									onChange={handleChange}
									error={errors.name && errors.name}
									placeholder="Name"
								/>
								<TextInput
									name="value"
									onChange={handleChange}
									error={errors.value && errors.value}
									placeholder="Value"
								/>
								<SelectBase
									onChange={(option: IOption) => setFieldValue('type', option)}
									value={values.type}
									placeholder={'Type'}
									options={TypeOptions}
								/>
								<SelectBase
									onChange={(option: IOption) => setFieldValue('repeat', option)}
									value={values.repeat}
									placeholder={'Occurrance'}
									options={OccuranceOptions}
								/>
								<Button buttonText="reset" onClick={handleReset} />
								<Button buttonText="submit" disabled={!dirty} onClick={handleSubmit} />
							</div>
						</div>
					)}
				</Formik>

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
				<div>
					<span>Annual total: </span>
					<span>{annualBalance}</span>
				</div>
				<div>
					<span>Monthly total: </span>
					<span>{monthlyBalance}</span>
				</div>
			</div>
		);
	}
}

const TypeOptions = Object.keys(EventType).map((key) => ({
	label: EventType[key].label,
	value: EventType[key]
}));

const OccuranceOptions = Object.keys(Occurance).map((key) => ({
	label: Occurance[key].label,
	value: Occurance[key]
}));

const EventList: EconomyEvent[] = [
	{
		name: 'Vuokra',
		id: 1,
		value: 500.99,
		type: EventType.expense,
		repeat: Occurance.monthly
	},
	{
		name: 'Nettimaksu',
		id: 2,
		value: 39.99,
		type: EventType.expense,
		repeat: Occurance.monthly
	},
	{
		name: 'Puhelinliittymä - kuukausittainen',
		id: 3,
		value: 34.99,
		type: EventType.expense,
		repeat: Occurance.monthly
	},
	{
		name: 'Muu tulo',
		id: 4,
		value: 12,
		type: EventType.expense,
		repeat: Occurance.quarterly
	},
	{
		name: 'Palkka',
		id: 5,
		value: 120,
		type: EventType.income,
		repeat: Occurance.annual
	},
	{
		name: 'Metsämaat',
		id: 6,
		value: 12,
		type: EventType.income,
		repeat: Occurance.annual
	},
	{
		name: 'Palkka',
		id: 7,
		value: 120,
		type: EventType.expense,
		repeat: Occurance.annual
	}
];
