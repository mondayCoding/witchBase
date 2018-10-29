import * as React from 'react';
import { Heading, TextInputField, Button } from 'Common/Index';
import { Formik, Form, yupToFormErrors } from 'formik';
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
						list: []
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email()
							.required('Required'),
						password: Yup.string().required()
					})}
					onSubmit={this.handleSubmit}
					render={({
						values,
						handleChange,
						dirty,
						handleReset,
						handleSubmit,
						setFieldValue,
						errors,
						touched
					}) => (
						<>
							<TextInputField
								id={'email_ID'}
								name={'email'}
								placeholder="Email"
								label={'Email'}
								onChange={handleChange}
								value={values.email}
							/>
							<TextInputField
								id={'password_ID'}
								name={'password'}
								placeholder="Password"
								label={'Password'}
								type="password"
								onChange={handleChange}
								value={values.password}
								title={errors.email ? errors.email : null}
							/>
							{errors.email && <div className="generic--warning">{errors.email}</div>}
							{/* <Select
								isMulti={true}
								onChange={(option) => setFieldValue('list', option)}
								options={options}
							/> */}
							<Button onClick={handleReset} buttonText="reset" />
							<Button onClick={handleSubmit} disabled={!dirty} buttonText="submit" />
						</>
					)}
				/>
			</div>
		);
	}
}

const options = [
	{ label: 'sdasasd1', value: 'sdassa2123' },
	{ label: 'sdasasd2', value: 'sdassa13123123' },
	{ label: 'sdasasd3', value: 'sdassa212312313' }
];
