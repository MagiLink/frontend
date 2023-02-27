import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const TabBar = () => {
	const { currentLink, setCurrentLink } = useStateContext();

	console.log(currentLink);

	const activeLink = 'inline-block px-4 py-3 text-white bg-black rounded-lg';
	const inactiveLink =
		'inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white';

	return (
		<ul class='flex flex-wrap gap-6 text-sm font-medium text-center text-gray-600 dark:text-gray-600'>
			<li>
				<button
					className={currentLink === '/generate' ? activeLink : inactiveLink}
					onClick={() => setCurrentLink('generate')}
				>
					Generate
				</button>
			</li>
			<li>
				<button
					className={currentLink === '/library' ? activeLink : inactiveLink}
					onClick={() => setCurrentLink('library')}
				>
					Library
				</button>
			</li>
		</ul>
	);
};

export default TabBar;
