import { Icon } from '@fortawesome/fontawesome-svg-core';
import { Framework } from './types';
import { prefixToSnippet } from './prefixToSnippet';

export const getCodeSnippet = (input: Framework, icon: Icon, color: React.CSSProperties['color']): string => {
	const { prefix, iconName } = icon;
	switch (input) {
		case 'HTML':
			return `<i class="${prefixToSnippet(prefix)} fa-${iconName}" style="color: ${color};" />`;
		case 'REACT':
			return `<FontAwesomeIcon icon="${prefixToSnippet(prefix)} fa-${iconName}" style={{color: "${color}"}} />`;
		case 'VUE':
			return `<font-awesome-icon :icon="['${prefix}', '${iconName}']" style="color: ${color}" />`;
	}
};
