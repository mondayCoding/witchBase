import * as React from 'react';
import { TextInput, Button } from 'Common/Index';
import { EventType } from 'Constants/EconomyType';
import { Occurance } from 'Constants/EconomyOccurrance';
import { Formik, FormikProps, FieldProps, Field } from 'formik';
import { EconomyEvent } from './EconomyCalc';
import * as Yup from 'yup';
import { Select } from 'Common/Select/Select';

interface IOption {
	label: string;
	value: any;
}

interface IProps {
	event: EconomyEvent;
	onSubmit(event: Partial<EconomyEvent>): void;
}

export const EventForm: React.SFC<IProps> = (props) => {
	const handleEventEdit = (event: Partial<EconomyEvent>) => {
		props.onSubmit(event);
	};

	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				name: props.event.name,
				value: props.event.value.toString(),
				type: props.event.type,
				repeat: props.event.repeat
			}}
			validationSchema={validationSchema}
			onSubmit={
				(values) => console.log(values)

				// handleEventEdit({
				// 	name: values.name,
				// 	value: parseFloat(values.value),
				// 	type: values.type,
				// 	repeat: values.repeat
				// })
			}
			render={formikForm}
		/>
	);
};

const formikForm = ({
	values,
	handleSubmit,
	setFieldValue,
	handleReset,
	isValid
}: FormikProps<any>) => (
	<div>
		<Field name="name" placeholder="Name" component={FormikInput} />
		<Field name="value" placeholder="Value" component={FormikInput} />
		<Select
			onChange={(option: IOption) => setFieldValue('type', option.value)}
			value={TypeOptions.find((option) => option.value.label === values.type.label)}
			placeholder={'Type'}
			options={TypeOptions}
		/>
		<Select
			onChange={(option: IOption) => setFieldValue('repeat', option.value)}
			value={OccuranceOptions.find((item) => item.value.label === values.repeat.label)}
			placeholder={'Occurrance'}
			options={OccuranceOptions}
		/>
		<Button buttonText="reset" onClick={handleReset} />
		<Button buttonText="submit" disabled={!isValid} onClick={handleSubmit} />
	</div>
);

const FormikInput = ({
	field,
	form: { touched, errors },
	placeholder,
	...props
}: FieldProps & { placeholder: string }) => (
	<div className="row-flex">
		<TextInput error={errors[field.name]} placeholder={placeholder} {...field} {...props} />
	</div>
);

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(2),
	value: Yup.string()
		.matches(/^\d{0,6}(?:[.,]\d{0,3})?$/)
		.required(),
	repeat: Yup.object(),
	type: Yup.object()
});

const TypeOptions = Object.keys(EventType).map((key) => ({
	label: EventType[key].label,
	value: EventType[key]
}));

const OccuranceOptions = Object.keys(Occurance).map((key) => ({
	label: Occurance[key].label,
	value: Occurance[key]
}));
