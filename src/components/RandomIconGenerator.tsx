import { Icon } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { getRandomIcon } from '../util/getRandomIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Style } from '../util/types';
import ColorPicker from 'react-pick-color';
import CodeSnippet from './CodeSnippet';

const isStyle = (string: string): string is Style => {
	return string === 'fas' || string === 'far' || string === 'fab';
};

const RandomIconGenerator = () => {
	const [style, setStyle] = useState<Style>('fas');
	const [color, setColor] = useState<React.CSSProperties['color']>('#fff');
	const [generatedIcon, setGeneratedIcon] = useState<Icon>(getRandomIcon(style));
	const [timeoutID, setTimeoutID] = useState<number | null>(null);

	const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (isStyle(e.currentTarget.value)) setStyle(e.currentTarget.value);
	};

	const handleGenerateIcon = () => {
		if (timeoutID) clearInterval(timeoutID);

		const timeout = setTimeout(() => {
			setGeneratedIcon(getRandomIcon(style));
		}, 3000);
		setTimeoutID(timeout);
	};

	return (
		<section>
			<div className="options-container">
				<p>Pick a style</p>
				<select value={style} onChange={handleStyleChange}>
					<option value="fas">solid</option>
					<option value="far">regular</option>
					<option value="fab">brands</option>
				</select>
				<ColorPicker color={color} onChange={(color) => setColor(color.hex)} theme={{ background: 'transparent', color: '#fff7d6aa', inputBackground: '#545479', width: '20rem' }} />
			</div>
			<div className="icon-container">
				<FontAwesomeIcon icon={generatedIcon} color={color} />
				<p>{generatedIcon.iconName}</p>
			</div>
			<CodeSnippet icon={generatedIcon} color={color} />
			<button type="button" className="btn" onClick={handleGenerateIcon}>
				Generate Random Icon
			</button>
		</section>
	);
};
export default RandomIconGenerator;
