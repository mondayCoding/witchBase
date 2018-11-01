import * as React from 'react';
import { Heading, TextInputField, Button, TextInput } from 'Common/Index';
import { Formik, Form, yupToFormErrors, Field } from 'formik';
import { Select } from 'Common/Select/Select';
import * as Yup from 'yup';

export class SignIn extends React.Component<object> {
	handleSubmit = (values: any) => {
		console.log(values);
	};

	render() {
		return (
			<div className="content--md">
				<Heading headingText="Sign In" />

				<Formik
					initialValues={{
						password: '',
						email: '',
						list: [],
						required: ['password', 'email']
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email()
							.required('Required'),
						password: Yup.string()
							.min(6)
							.required()
					})}
					onSubmit={this.handleSubmit}
					render={({ handleReset, handleSubmit, isValid }) => (
						<>
							<Field name="email" component={Custom} label={'Email'} placeholder={'Email'} />
							<Field
								name="password"
								component={Custom}
								label={'Password'}
								type="password"
								placeholder={'Password'}
							/>
							<Button onClick={handleReset} buttonText="reset" />
							<Button onClick={handleSubmit} disabled={!isValid} buttonText="submit" />
						</>
					)}
				/>
			</div>
		);
	}
}

const Custom = ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	label,
	...props
}: any) => {
	console.log(label);

	return (
		<TextInput
			label={label}
			id={`field_id_${name}_TID`}
			{...field}
			{...props}
			onChange={field.onChange}
			value={field.value}
			error={touched[field.name] && errors[field.name]}
			title={touched[field.name] && errors[field.name]}
		/>
	);
};
