import { useState } from 'react';
import TestComponent from '../components/TestComponent';
import { useStateContext } from '../context/ContextProvider';
import axios from 'axios';

function Generate() {
	const [userPrompt, setUserPrompt] = useState('');
	const { code, setCode } = useStateContext();
	const [loading, setLoading] = useState(false);

	const placeholderText = `Enter your prompt here...`;

	const SERVER_URL = import.meta.env.VITE_SERVER_URL;
	
	console.log(SERVER_URL);

	const handleGenerateComponent = () => {
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
		<div>
			<main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-10 sm:mt-16'>
				<div className='max-w-xl w-full'>
					<label
						for='message'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Describe the component you want to generate
					</label>
					<textarea
						id='message'
						rows='4'
						className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black'
						onChange={(e) => setUserPrompt(e.target.value)}
						placeholder={placeholderText}
						value={userPrompt}
					/>
					<button
						className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full'
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

export default Generate;
