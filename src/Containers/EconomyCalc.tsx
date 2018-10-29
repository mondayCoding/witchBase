import * as React from 'react';
import { Heading, TextInputField, TextInput, Button, Icons } from 'Common/Index';
import { List } from './List';
import SelectBase from 'react-select';
import { IOccurrance, Occurance, IEventType, EventType } from 'Constants/Economy';
import { FormValidation } from 'Utils/FieldRules';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface IOption {
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
}

const validationRuleset = new FormValidation([
	{ key: 'eventname', message: 'empty', validIf: (x) => !(x.length === 0) },
	{ key: 'eventname', message: 'too short', validIf: (x) => x.length > 1 },
	{ key: 'eventname', message: 'too long', validIf: (x) => x.length < 25 },
	{ key: 'eventname2', message: 'dasda', validIf: (x) => x.length > 1 },
	{ key: 'eventname2', message: 'asdasd', validIf: (x) => x.length < 25 }
]);

export class BudjetCalculator extends React.Component<object, State> {
	state = new State();
	validation = validationRuleset;

	componentDidMount = () => {
		this.setState({ eventList: EventList });
		this.validation.beginValidation();
		this.validation.activateAllRules();
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

	handleValueOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		if (value.match(/^\d{0,6}(?:[.,]\d{0,3})?$/)) {
			value = value.replace('.', ',');
			this.setState({ value });
		}
	};

	handleNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ name: e.target.value });
	};

	handleTypeChange = (type: IOption) => {
		this.setState({ type: type.value });
	};

	handleRepeatTypeChange = (repeat: IOption) => {
		this.setState({ repeat: repeat.value });
	};

	AddNewItem = (item: EconomyEvent) => {
		const listWithNewItem = [...this.state.eventList, item];
		this.setState({ eventList: listWithNewItem });
	};

	handleAddNew = () => {
		if (this.state.name.length > 2 && this.state.value.length > 2) {
			const newItem = new EconomyEvent(
				Math.random(),
				this.state.name,
				parseFloat(this.state.value),
				this.state.repeat,
				this.state.type
			);
			this.AddNewItem(newItem);
		} else {
			console.log('Data is not valid');
		}
	};

	handleAddNewEvent = ({ name, value, repeat, type }: IEventParams) => {
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

	render() {
		const annualBalance = this.state.eventList
			.reduce(
				(acc, current) =>
					acc + current.repeat.annualRepeats * current.type.modifier * current.value,
				0
			)
			.toLocaleString('FI-fi', { style: 'currency', currency: 'EUR' });

		const monthlyBalance = this.state.eventList
			.reduce(
				(acc, current) =>
					acc + (current.repeat.annualRepeats * current.type.modifier * current.value) / 12,
				0
			)
			.toLocaleString('FI-fi', { style: 'currency', currency: 'EUR' });

		// this.validation.validate({ eventname: this.state.name, eventname2: 's' });
		// console.log(this.validation.validate({ eventname: this.state.name, eventname2: 's' }));
		// console.log(this.validation.getValidation('eventname', this.state.name));

		return (
			<div>
				<Heading headingText="Sign Up" className="underlined" />
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
					onSubmit={(values) => this.handleAddNewEvent(values)}
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
							</div>
							<Button buttonText="reset" onClick={handleReset} />
							<Button buttonText="submit" disabled={!dirty} onClick={handleSubmit} />
						</div>
					)}
				</Formik>

				<div className="row-flex">
					<TextInput
						id={`event_item_name_id`}
						name={`event_item_name_name`}
						placeholder={'Name'}
						value={this.state.name}
						onChange={this.handleNameOnChange}
						onKeyUp={this.onKeyUp}
						error={this.validation.getValidation('eventname', this.state.name)}
					/>

					<TextInput
						id={`event_item_value_id`}
						name={`event_item_value_id`}
						placeholder={'Value'}
						value={this.state.value}
						onChange={this.handleValueOnChange}
						onKeyUp={this.onKeyUp}
					/>

					<Button onClick={this.handleAddNew} style={{ marginLeft: '1rem' }} />
					<Button onClick={this.removeLastChild} style={{ marginLeft: '1rem' }} />
				</div>
				<div className="row-flex">
					<SelectBase
						options={TypeOptions}
						placeholder={'Type'}
						onChange={this.handleTypeChange}
					/>
					<SelectBase
						options={OccuranceOptions}
						placeholder={'Occurrance'}
						onChange={this.handleRepeatTypeChange}
					/>
				</div>
				<List
					list={this.state.eventList}
					headingText="Expense / Income"
					onSubmit={this.AddNewItem}
					removeFromList={this.removeItemWithId}
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
		repeat: Occurance.annual
	},
	{
		name: 'Nettimaksu',
		id: 2,
		value: 39.99,
		type: EventType.expense,
		repeat: Occurance.annual
	},
	{
		name: 'Puhelinliittymä - kuukausittainen',
		id: 3,
		value: 34.99,
		type: EventType.expense,
		repeat: Occurance.annual
	},
	{
		name: 'Muu tulo',
		id: 4,
		value: 12,
		type: EventType.expense,
		repeat: Occurance.annual
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
