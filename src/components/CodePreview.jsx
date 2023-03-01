import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live';

const CodePreview = ({ generatedCode }) => {
	console.log('generatedCode: ', generatedCode);
	return (
		<div className="h-full w-full flex justify-center items-center ">
			<LiveProvider code={generatedCode}>
				<LiveError />
				<LivePreview />
			</LiveProvider>
		</div>
	);
};

export default CodePreview;
