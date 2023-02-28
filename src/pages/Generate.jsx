import { useState } from 'react';
import TestComponent from '../components/TestComponent';
import { useStateContext } from '../context/ContextProvider';
import axios from 'axios';
import Button from '../components/Button';
import FormModal from '../components/FormModal';

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
		<div className='flex flex-col items-center'>
			<main className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 '>
				<div className='max-w-xl w-full'>
					<textarea
						id='message'
						rows='4'
						className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black'
						onChange={(e) => setUserPrompt(e.target.value)}
						placeholder={placeholderText}
						value={userPrompt}
					/>

					<Button
						text={loading ? `Generating...` : `Generate your component`}
						onClick={handleGenerateComponent}
						disabled={loading}
					/>
				</div>
			</main>
			<TestComponent loading={loading} />

			<FormModal />
		</div>
	);
}

export default Generate;
