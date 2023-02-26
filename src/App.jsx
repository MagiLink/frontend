import { useState } from 'react';
import TestComponent from './components/TestComponent';
import { useStateContext } from './context/ContextProvider';
import axios from 'axios';

function App() {
	const [userPrompt, setUserPrompt] = useState('');
	const { code, setCode } = useStateContext();
	const [loading, setLoading] = useState(false);

	const placeholderText = `DUMMY PLACEHOLDER`;

	//TODO: set this up as an env variable
	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const handleGenerateComponent = () => {
		// make axios call to backend
		setLoading(true);
		axios({
			method: `POST`,
			url: SERVER_URL,
			headers: { Authorization: `` },
			data: {
				prompt: userPrompt,
			},
		})
			.then(function (response) {
				setCode(response.data.generated_code);
				setLoading(false);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(`error:`, error);
			});
	};
	return (
		<div className="flex max-w-5xl mx-auto flex-col items-center justify-center p-10 min-h-screen">
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-10 sm:mt-16">
				<h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
					Generate React components from a prompt
				</h1>

				<div className="max-w-xl w-full">
					<div className="flex mt-10 items-center space-x-3">
						<p className="text-left font-medium">Describe the component you want to generate</p>
					</div>
					<textarea
						value={userPrompt}
						onChange={(e) => setUserPrompt(e.target.value)}
						rows={4}
						className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
						placeholder={placeholderText}
					/>
					<button
						className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
						onClick={handleGenerateComponent}
						disabled={loading}
					>
						{loading ? `Generating...` : `Generate your component`}
					</button>
				</div>
			</main>

			<TestComponent loading={loading} />
		</div>
	);
}

export default App;
