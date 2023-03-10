import { useState } from 'react';
import TestComponent from '../components/TestComponent';
import { useStateContext } from '../context/ContextProvider';
import axios from 'axios';
import Button from '../components/Button';
import FormModal from '../components/FormModal';
import { autoCloseTags } from '@codemirror/lang-javascript';

function Generate() {
	// const [userPrompt, setUserPrompt] = useState('');
	const { code, setCode, setPrompt, prompt } = useStateContext();

	const [loading, setLoading] = useState(false);

	const placeholderText = `Enter your prompt here...`;

	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const handleGenerateComponent = async () => {
		setLoading(true);
		try {
			const result = await axios.post(`${SERVER_URL}/generate`, {
				prompt,
			});

			setCode(result.data.component);
			setLoading(false);

			return result.data.component;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 ">
				<div className="max-w-xl w-full">
					<textarea
						id="message"
						rows="4"
						className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
						onChange={(e) => setPrompt(e.target.value)}
						placeholder={placeholderText}
						value={prompt}
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
