import validator from 'validator';
import { string } from 'prop-types';

//****************************************************************************
// Rule class
//****************************************************************************

// per field rule
class Rule {
	key: string;
	message: string;
	active: boolean;
	validIf: any;

	constructor(rule: IConfigObject) {
		this.key = rule.key;
		this.message = rule.message;
		this.validIf = rule.validIf;
		this.active = true;
	}
}

// per field config
interface IConfigObject {
	key: string;
	message: string;
	validIf(param: string): boolean;
}

interface IValidationObject {
	[key: string]: string;
}

//****************************************************************************
//  Results
//****************************************************************************

// class FieldResult {
// 	isValid: boolean = true;
// 	message: string = null;
// }

// class FormResult {
// 	validations: { [x: string]: FieldResult };
// 	formIsValid: boolean;

// 	constructor(rules: Rule[]) {
// 		let validations: {};
// 		rules.forEach((rule) => {
// 			validations = { ...validations, [rule.key]: new FieldResult() };
// 		});
// 		this.validations = validations;
// 		this.formIsValid = true;
// 	}
// }

//****************************************************************************
// Validation Class
// Rule = rule by which class validates
// Field = string that class validates
//****************************************************************************

export class FormValidation {
	static test = validator;
	rules: Rule[];
	config: IConfigObject[];
	validationIsActivated: boolean = false;
	formIsvalid: boolean = true;

	constructor(rules: IConfigObject[]) {
		this.config = rules;
		this.initializeRuleArray();
	}

	initializeRuleArray = () => {
		this.rules = this.config.map((rule) => new Rule(rule));
		return this;
	};

	beginValidation() {
		this.validationIsActivated = true;
	}

	stopValidation() {
		this.validationIsActivated = false;
	}

	ruleIsActive(rule: Rule) {
		return rule.active;
	}

	activateAllRules() {
		this.beginValidation();
		this.rules.forEach((rule) => {
			rule.active = true;
		});
	}

	activateRule(field: string) {
		this.beginValidation();
		this.rules.forEach((rule) => {
			if (rule.key === field) {
				rule.active = true;
			}
		});
	}

	getValidation = (key: string, value: string) => {
		const validation = this.validateKeyAndValue(key, value);
		return validation ? validation.message : null;
	};

	validateKeyAndValue = (key: string, value: string) => {
		const matchingRules = this.rules.filter((rule) => (rule.key = key));
		const invalidRule = matchingRules.find((rule) => !rule.validIf(value));
		return invalidRule ? { message: invalidRule.message, key: invalidRule.key } : null;
	};

	validate = (formFields: IValidationObject) => {
		if (!this.validationIsActivated) return false;

		let validations: any[] = [];

		// for (const x in formFields) {
		// 	if (formFields.hasOwnProperty(x)) {
		// 		const result = this.validateKeyAndValue(x, formFields[x]);
		// 		result && validations.push(result);
		// 	}
		// }

		Object.keys(formFields).forEach((key: string) => {
			const result = this.validateKeyAndValue(key, formFields[key]);
			result && validations.push(result);
		});

		this.formIsvalid = validations.length > 0;

		return {
			formIsvalid: this.formIsvalid,
			validations
		};
	};

	// ruleIsPresent(rule: Rule, validationTarget: IValidationObject) {
	// 	if (rule.key in validationTarget) {
	// 		return true;
	// 	} else {
	// 		console.log('Tried to validate field with no rules');
	// 		return false;
	// 	}
	// }

	// hasInvalidRule(result: FormResult) {
	// 	let formIsValid = true;

	// 	for (const i in result.validations) {
	// 		if (result.validations.hasOwnProperty(i)) {
	// 			if (!result.validations[i].isValid) {
	// 				formIsValid = false;
	// 			}
	// 		}
	// 	}
	// 	return formIsValid;
	// }

	// isValid(field: string) {
	// 	if (field in this.result.validations) {
	// 		let validity = this.result.validations[field].isValid;
	// 		return validity;
	// 	}
	// 	return null;
	// }

	// getMessage(field: string) {
	// 	if (field in this.result.validations) {
	// 		let message = this.result.validations[field].message;
	// 		return message;
	// 	}
	// 	return null;
	// }

	// getValidatedMessage(field: string) {
	// 	if (field in this.result.validations) {
	// 		if (!this.result.validations[field].isValid) {
	// 			let message = this.result.validations[field].message;
	// 			return message;
	// 		}
	// 	}
	// 	return null;
	// }

	// validate received key-value pairs (form)
	// validate = (formFields: IValidationObject) => {
	// 	if (!this.validationIsActivated) return false;

	// 	// assume all key-value pairs valid
	// 	// let result = this.setDefaultResult();

	// 	// compare key-value pairs against validation rules
	// 	this.rules.forEach((rule) => {
	// 		const ruleField = rule.field;
	// 		const hasMatchingField = this.ruleIsPresent(rule, formFields);
	// 		const ruleIsActive = this.ruleIsActive(rule);
	// 		// const fieldIsStillValid = this.result.validations[ruleField].isValid;

	// 		if (ruleIsActive && hasMatchingField) {
	// 			const formValue = formFields[ruleField].toString();
	// 			this.result.validations[ruleField] = this.validateAgainstRule(formValue, rule);
	// 		}
	// 	});

	// 	this.result.formIsValid = this.hasInvalidRule(this.result);
	// 	this.result = this.result;
	// 	return this.result;
	// };
}

export default FormValidation;
