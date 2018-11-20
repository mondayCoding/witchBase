// Event Type

export class EventTypeAbstract {
	readonly modifier: number;
	readonly label: string;
	readonly class_basic: string;
	readonly class_interactive: string;
}

export enum EventTypeConstant {
	Expense = 'expense',
	Income = 'income'
}

class Expense implements EventTypeAbstract {
	readonly modifier = -1;
	readonly label = 'Expense';
	readonly class_basic = 'generic--expense';
	readonly class_interactive = 'generic--expense';
}

class Income implements EventTypeAbstract {
	readonly modifier = 1;
	readonly label = 'Income';
	readonly class_basic = 'generic--income';
	readonly class_interactive = 'generic--income';
}

export const EventType = {
	expense: new Expense(),
	income: new Income()
};

// TESTING

const EXPENSE: EventTypeAbstract = Object.freeze({
	modifier: -1,
	label: 'Expense',
	class_basic: 'generic--expense',
	class_interactive: 'generic--expense'
});

const INCOME: EventTypeAbstract = Object.freeze({
	modifier: 1,
	label: 'Income',
	class_basic: 'generic--income',
	class_interactive: 'generic--income'
});

const TYPES = {
	EXPENSE,
	INCOME
};
