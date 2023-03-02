import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useStateContext } from '../context/ContextProvider';
import CopyBtn from './CopyBtn';

const CodeEditor = () => {
	const { code, setCode } = useStateContext();

	return (
		<div className='relative'>
			<CodeMirror
				value={code}
				height='200px'
				extensions={[javascript({ jsx: true })]}
				onChange={(newVal) => setCode(newVal)}
			/>

			<CopyBtn copy={code} />
		</div>
	);
};

export default CodeEditor;
