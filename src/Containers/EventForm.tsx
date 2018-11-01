import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial, TextInput, Button } from 'Common/Index';
import { IOccurrance, IEventType, EventType, Occurance } from 'Constants/Economy';
import { Formik, FormikValues } from 'formik';
import { EconomyEvent } from './EconomyCalc';
import * as Yup from 'yup';
import SelectBase from 'react-select';

interface IOption {
	label: string;
	value: any;
}

interface ISubmitParams {
	name: string;
	value: string;
	repeat: IOccurrance;
	type: IEventType;
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
			validationSchema={Yup.object().shape({
				name: Yup.string()
					.required()
					.min(2)
					.max(20),
				value: Yup.string()
					.matches(/^\d{0,6}(?:[.,]\d{0,3})?$/)
					.required(),
				type: Yup.object().required(),
				repeat: Yup.object().required()
			})}
			onSubmit={(values) =>
				handleEventEdit({
					name: values.name,
					value: parseFloat(values.value),
					type: values.type,
					repeat: values.repeat
				})
			}
		>
			{({ values, errors, dirty, handleSubmit, handleChange, setFieldValue, handleReset }) => (
				<div>
					<div className="row-flex">
						<TextInput
							name="name"
							value={values.name}
							onChange={handleChange}
							error={errors.name && errors.name}
							placeholder="Name"
						/>
					</div>
					<div className="row-flex">
						<TextInput
							name="value"
							value={values.value}
							onChange={handleChange}
							error={errors.value && errors.value}
							placeholder="Value"
						/>
					</div>
					<SelectBase
						onChange={(option: IOption) => setFieldValue('type', option.value)}
						value={TypeOptions.find((option) => option.value.label === values.type.label)}
						placeholder={'Type'}
						options={TypeOptions}
					/>
					<SelectBase
						onChange={(option: IOption) => setFieldValue('repeat', option.value)}
						value={OccuranceOptions.find((item) => item.value.label === values.repeat.label)}
						placeholder={'Occurrance'}
						options={OccuranceOptions}
					/>
					<Button buttonText="reset" onClick={handleReset} />
					<Button buttonText="submit" disabled={!dirty} onClick={handleSubmit} />
				</div>
			)}
		</Formik>
	);
};

const TypeOptions = Object.keys(EventType).map((key) => ({
	label: EventType[key].label,
	value: EventType[key]
}));

const OccuranceOptions = Object.keys(Occurance).map((key) => ({
	label: Occurance[key].label,
	value: Occurance[key]
}));
