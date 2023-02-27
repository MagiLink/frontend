import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const TabBar = () => {
	const { currentLink, setCurrentLink } = useStateContext();

	const commonStyles = 'w-52 my-2 mx-2 rounded-xl font-medium px-4 py-6';
	const activeLink = `${commonStyles} bg-black text-white hover:bg-black/80`;
	const inactiveLink = `${commonStyles} bg-white text-black border border-black hover:bg-black/20 hover:border-white`;

	return (
		<div className="flex my-5 w-full  justify-center">
			<button
				className={currentLink === 'generate' ? activeLink : inactiveLink}
				onClick={() => setCurrentLink('generate')}
			>
				Generate
			</button>

			<button
				className={currentLink === 'library' ? activeLink : inactiveLink}
				onClick={() => setCurrentLink('library')}
			>
				Library
			</button>
		</div>
	);
};

export default TabBar;
