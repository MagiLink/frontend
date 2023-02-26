import { useEffect } from 'react';
import prompts from '../data/prompts';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';
import js_beautify from 'js-beautify';
import { useStateContext } from '../context/ContextProvider';

const TestComponent = () => {
	const { code, setCode } = useStateContext();

	const prompt = prompts[0].prompt;
	const generatedCode = js_beautify(prompts[0].generated_code);

	// useEffect(() => {
	//     // setCode(generatedCode);
	//     // setCode(code);
	// }, []);

	console.log(code, '<<< STORED CODE');

	return (
		<div>
			<h1 className='text-2xl font-semibold text-center mb-2 mt-4'>{prompt}</h1>

			<div className='grid grid-cols-2 justify-center items-center gap-10'>
				<CodeEditor generatedCode={code} />
				<CodePreview generatedCode={code} />
			</div>
		</div>
	);
};

export default TestComponent;
