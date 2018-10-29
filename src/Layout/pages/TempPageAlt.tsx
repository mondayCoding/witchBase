import * as React from 'react';
import {
	Heading,
	Button,
	Checkbox,
	SliderCheckbox,
	Tab,
	Tabs,
	TextInputMaterial,
	TextInputField,
	TextArea,
	TextAreaResponsive
} from 'Common/Index';

export interface IProps {
	name?: string;
}

export const TempPageAlt: React.SFC<IProps> = (props) => {
	return (
		<div className="content--md">
			<Heading headingText="Alternate template heading" />
			<Button buttonText="nom" />
			<Button buttonText="nom" className="rounded" />
			<Button buttonText="nom" className="dark" />
			<Button buttonText="nom" className="fat" />
			<Checkbox label="text" />
			<Checkbox label="text" />
			<SliderCheckbox label="slider" />
			<SliderCheckbox label="slider" />
			<SliderCheckbox label="slider" />
			<Tabs>
				<Tab title="Page1" />
				<Tab title="Page2" />
				<Tab title="Page3" />
				<Tab title="Page4" />
			</Tabs>
			<TextInputMaterial label="testikenttä" />
			<TextInputMaterial label="testikenttä" />
			<TextInputField id="sdfasdasd" name="sdasdas" label="testikenttä" value="" />
			<TextInputField
				id="sdfasdasdadaasd"
				name="sdaasdas"
				label="testikenttä"
				value=""
				tooltip="message"
			/>
			<TextArea label="nomnam" />
			<TextAreaResponsive label="sadasd" id="nosda2" />
		</div>
	);
};
