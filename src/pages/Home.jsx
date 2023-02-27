import React from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import { useStateContext } from '../context/ContextProvider';
import Generate from './Generate';
import Library from './Library';

const Home = () => {
	const { currentLink } = useStateContext();

	return (
		<main className="flex flex-1 w-full flex-col items-center justify-center px-4 mt-10 sm:mt-16">
			<Header />
			<TabBar />
			{currentLink === 'library' ? (
				<Library />
			) : (
				<div>
					<Generate />
				</div>
			)}
		</main>
	);
};

export default Home;
