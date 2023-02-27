import { useState } from 'react';
import TestComponent from './components/TestComponent';
import { useStateContext } from './context/ContextProvider';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Generate from './pages/Generate';
import Home from './pages/Home';

function App() {
	const [userPrompt, setUserPrompt] = useState('');
	const { code, setCode } = useStateContext();
	const [loading, setLoading] = useState(false);

	const placeholderText = `DUMMY PLACEHOLDER`;

	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	return (
		<div className='flex max-w-5xl mx-auto flex-col items-center justify-center p-10 min-h-screen'>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
