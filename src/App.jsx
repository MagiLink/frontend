import { useStateContext } from './context/ContextProvider';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	const { isFormModalActive } = useStateContext();

	return (
		<div
			className={
				isFormModalActive
					? 'flex w-full mx-auto flex-col items-center justify-center p-10 min-h-screen bg-black/[.25]'
					: 'flex w-full mx-auto flex-col items-center justify-center p-10 min-h-screen bg-gray-50'
			}
		>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
