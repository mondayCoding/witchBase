import * as React from 'react';
import { Heading, TextInputField, Button, TextInput } from 'Common/Index';
import { Formik, Field, FieldProps, FormikProps } from 'formik';
import * as Yup from 'yup';
import * as routes from 'Constants/Routes';

export class SignIn extends React.Component<object> {
	handleSubmit = (values: any) => {
		console.log(values);
		if (confirm('really?')) {
		}
	};

	render() {
		return (
			<div className="content--md">
				<Heading headingText="Sign In" />

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={this.handleSubmit}
					render={Form}
				/>
			</div>
		);
	}
}

const initialValues = {
	password: '',
	email: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required('Required'),
	password: Yup.string()
		.min(6)
		.required()
});

const Form = ({ handleReset, handleSubmit, isValid }: FormikProps<any>) => (
	<>
		<Field name="email" component={FormikField} label={'Email'} placeholder={'Email'} />
		<Field
			name="password"
			component={FormikField}
			label={'Password'}
			type="password"
			placeholder={'Password'}
		/>
		<Button onClick={handleReset} buttonText="reset" />
		<Button onClick={handleSubmit} disabled={!isValid} buttonText="submit" />
	</>
);

const FormikField = ({
	field,
	form: { touched, errors },
	label,
	...props
}: FieldProps & { label: string }) => (
	<TextInput
		id={`field_id_${name}_TID`}
		{...field}
		{...props}
		error={touched[field.name] && errors[field.name]}
		title={touched[field.name] && errors[field.name]}
	/>
);
