import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

type PluralizeOptions = Record<Intl.LDMLPluralRule, string>;

export const pluralize = (count: number, options: PluralizeOptions) => {
	switch (new Intl.PluralRules("ru").select(count)) {
		case "few": {
			return options.few;
		}
		case "many": {
			return options.many;
		}
		case "one": {
			return options.one;
		}
		case "other": {
			return options.other;
		}
		case "two": {
			return options.two;
		}
		case "zero": {
			return options.zero;
		}
	}
};
