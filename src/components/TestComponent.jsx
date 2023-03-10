import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';
import { useStateContext } from '../context/ContextProvider';

const TestComponent = ({ loading }) => {
	const { code, setCode } = useStateContext();

	if (loading) return <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>;

	return (
		<div className="flex flex-col ">
			{/* <h1 className="text-2xl font-semibold text-center mb-2 mt-4">{!!prompt}</h1> */}
			<div className="grid grid-cols-2 gap-10 my-10">
				<CodeEditor generatedCode={code} />
				<div className="bg-gray-50">
					<CodePreview generatedCode={code} />
				</div>
			</div>
		</div>
	);
};

export default TestComponent;
