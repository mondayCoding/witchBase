// Event Type

export class IEventType {
	readonly modifier: number;
	readonly label: string;
	readonly class_basic: string;
	readonly class_interactive: string;
}

class Expense implements IEventType {
	readonly modifier = -1;
	readonly label = 'Expense';
	readonly class_basic = 'generic--expense';
	readonly class_interactive = 'generic--expense';
}

class Income implements IEventType {
	readonly modifier = 1;
	readonly label = 'Income';
	readonly class_basic = 'generic--income';
	readonly class_interactive = 'generic--income';
}

export const EventType = {
	expense: new Expense(),
	income: new Income()
};

// Event recurrency

export class IOccurrance {
	readonly annualRepeats: number;
	readonly label: string;
	readonly description: string;
	readonly class_basic: string;
}

class Annual implements IOccurrance {
	readonly annualRepeats = 1;
	readonly label = 'Annual';
	readonly description = 'Occurs once each year';
	readonly class_basic = 'generic--expense';
}

class Monthly implements IOccurrance {
	readonly annualRepeats = 12;
	readonly label = 'Monthly';
	readonly description = 'Occurs each month';
	readonly class_basic = 'generic--expense';
}

class Quartely implements IOccurrance {
	readonly annualRepeats = 4;
	readonly label = 'Quarterly';
	readonly description = 'Occurs in each quarter';
	readonly class_basic = 'generic--expense';
}

export const Occurance = {
	annual: new Annual(),
	monthly: new Monthly(),
	quarterly: new Quartely()
};
