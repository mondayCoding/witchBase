// Event recurrency

export class OccurranceAbstract {
	readonly annualRepeats: number;
	readonly label: string;
	readonly description: string;
	readonly class_basic: string;
}

export enum OccurranceConstant {
	Annual = 'annual',
	Monthly = 'monthly',
	Quarterly = 'quarterly'
}

class Annual implements OccurranceAbstract {
	readonly annualRepeats = 1;
	readonly label = 'Annual';
	readonly description = 'Occurs once each year';
	readonly class_basic = 'generic--expense';
}

class Monthly implements OccurranceAbstract {
	readonly annualRepeats = 12;
	readonly label = 'Monthly';
	readonly description = 'Occurs each month';
	readonly class_basic = 'generic--expense';
}

class Quartely implements OccurranceAbstract {
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
