import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live';

const CodePreview = ({ generatedCode }) => {
	return (
		<div className='h-full w-[30vw] px-10 flex justify-center items-center '>
			<LiveProvider code={generatedCode}>
				{generatedCode !== '' && <LiveError />}
				<LivePreview />
			</LiveProvider>
		</div>
	);
};

export default CodePreview;
