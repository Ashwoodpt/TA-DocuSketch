import { Icon } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { Framework, frameworks } from '../util/types';
import { getCodeSnippet } from '../util/getCodeSnippet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const isFramework = (string: string): string is Framework => {
	return string === 'HTML' || string === 'REACT' || string === 'VUE' || string === 'SVG';
};

const CodeSnippet = ({ icon, color }: { icon: Icon; color: React.CSSProperties['color'] }) => {
	const [selectedFramework, setSelectedFramework] = useState<Framework>('REACT');
	const [isCopiedToClipboard, setIsCopiedToClipboard] = useState<boolean>(false);
	const [timeoutID, setTimeoutID] = useState<number | null>(null);

	const handleFrameworkChange = (input: string) => {
		if (isFramework(input)) setSelectedFramework(input);
	};

	const handleCopyToClipboard = (e: React.MouseEvent<HTMLInputElement>) => {
		e.preventDefault();
		navigator.clipboard.writeText(e.currentTarget.value);
		setIsCopiedToClipboard(true);

		if (timeoutID) clearInterval(timeoutID);
		const timeout = setTimeout(() => {
			setIsCopiedToClipboard(false);
		}, 3000);
		setTimeoutID(timeout);
	};

	return (
		<div className="snippet-container">
			<div className="chooseFramework-container">
				{frameworks.map((framework, index) => (
					<button key={index} type="button" className={`btn ${framework === selectedFramework ? 'active' : null}`} onClick={() => handleFrameworkChange(framework)}>
						{framework}
					</button>
				))}
			</div>
			{isCopiedToClipboard && <p className="copied-alert">Code copied to clipboard!</p>}
			<input name="codeSnippet" id="codeSnippet" readOnly type="text" onClick={handleCopyToClipboard} value={getCodeSnippet(selectedFramework, icon, color)} />
			<FontAwesomeIcon icon={faCopy} />
		</div>
	);
};
export default CodeSnippet;
