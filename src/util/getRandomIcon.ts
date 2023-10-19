import { Icon, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Style } from './types';

export const getRandomIcon = (style: Style): Icon => {
	switch (style) {
		case 'fas':
			var keys = Object.keys(fas);
			return icon(fas[keys[(keys.length * Math.random()) << 0]]);
		case 'far':
			var keys = Object.keys(far);
			return icon(far[keys[(keys.length * Math.random()) << 0]]);
		case 'fab':
			var keys = Object.keys(fab);
			return icon(fab[keys[(keys.length * Math.random()) << 0]]);
	}
};
