// import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useStateContext } from '../context/ContextProvider';

const CodeEditor = () => {
	const { code, setCode } = useStateContext();

	return (
		<div>
			<CodeMirror
				value={code}
				height="200px"
				extensions={[javascript({ jsx: true })]}
				onChange={(newVal) => setCode(newVal)}
			/>
		</div>
	);
};

export default CodeEditor;
