import * as React from 'react';
import { Heading, TextInputField, TextInputMaterial, TextInput, Button } from 'Common/Index';
import { auth } from '../../Firebase';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import * as routes from 'Constants/Routes';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Notify } from 'Utils/Notify';

interface IFormFields {
	email: string;
	password: string;
	passwordConfirm: string;
}

//**********************************************************************************
// Form
//**********************************************************************************

const SignUpForm: React.SFC<RouteComponentProps> = ({ history }) => {
	const handleSubmit = (values: IFormFields, resetForm: () => void) => {
		console.log(values);
		if (confirm('really?')) {
			auth
				.createUserWithEmailAndPassword(values.email, values.password)
				.then((authe: any) => {
					resetForm();
					history.push(routes.LANDING);
					console.log(authe);
				})
				.catch((error) => Notify(error));
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			render={Form}
			onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
		/>
	);
};

const initialValues = {
	email: '',
	password: '',
	passwordConfirm: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required(),
	password: Yup.string()
		.min(6)
		.required(),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password'), null], "Passwords don't match")
		.required()
});

const Form = ({ handleSubmit, resetForm, isValid }: FormikProps<IFormFields>) => (
	<React.Fragment>
		<Field name="email" component={FormikField} placeholder={'Email'} type={'text'} />
		<Field name="password" component={FormikField} placeholder={'Password'} />
		<Field name="passwordConfirm" component={FormikField} placeholder={'Confirm Password'} />
		<Button buttonText="Submit" disabled={!isValid} onClick={handleSubmit} />
		<Button buttonText="Reset" onClick={resetForm} />
	</React.Fragment>
);

const FormikField = ({
	field,
	form: { touched, errors },
	placeholder,
	type,
	...props
}: FieldProps & { placeholder: string; type: string }) => (
	<TextInput
		id={`field_id_${name}_TID`}
		placeholder={placeholder}
		type={type || 'password'}
		{...field}
		{...props}
		error={touched[field.name] && errors[field.name]}
		title={touched[field.name] && errors[field.name]}
	/>
);

//**********************************************************************************
// Form
//**********************************************************************************

export const SignUp = withRouter(SignUpForm);

// TODO Useful pattern => save for posteriety
// handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//    const newState = { [e.target.name]: e.target.value };
//    this.setState((prevState) => ({
//       ...this.state,
//       ...newState
//    }));
// };
