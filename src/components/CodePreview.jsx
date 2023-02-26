import { LiveProvider, LiveError, LivePreview } from 'react-live';

const CodePreview = ({ generatedCode }) => {
	return (
		<div className='flex justify-center items-center'>
			<LiveProvider code={generatedCode}>
				<LiveError />
				<LivePreview />
			</LiveProvider>
		</div>
	);
};

export default CodePreview;
