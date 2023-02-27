import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useStateContext } from '../context/ContextProvider';
import Button from './Button';
import CopySVG from './CopySVG';
const CodeEditor = () => {
	const { code, setCode } = useStateContext();
	const [pressed, setPressed] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setPressed(true);
		setTimeout(() => setPressed(false), 2000);
	};

	return (
		<div className="relative">
			<CodeMirror
				value={code}
				height="200px"
				extensions={[javascript({ jsx: true })]}
				onChange={(newVal) => setCode(newVal)}
			/>

			<Button
				styles={
					'absolute -top-2 right-0 w-fit bg-black my-2 rounded-xl text-white font-medium px-3 py-2 hover:bg-black/80 '
				}
				onClick={handleCopy}
			>
				{pressed ? 'Copied' : <CopySVG />}
			</Button>

			<Button text={'Share your creation'} />
		</div>
	);
};

export default CodeEditor;
