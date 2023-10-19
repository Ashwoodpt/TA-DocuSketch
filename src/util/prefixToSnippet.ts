import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Prefix } from './types';

export const prefixToSnippet = (prefix: IconPrefix): Prefix => {
	switch (prefix) {
		case 'fas':
			return 'fa-solid';
		case 'far':
			return 'fa-regular';
		case 'fab':
			return 'fa-brands';
		case 'fal':
			return 'fa-light';
		case 'fat':
			return 'fa-thin';
		case 'fad':
			return 'fa-duotone';
		default:
			return 'fa-solid';
	}
};
