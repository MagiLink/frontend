import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [code, setCode] = useState(`() => {
	const handleClick = () => {
		alert('Button clicked!');
	};

	return <button onClick={handleClick}>Send</button>;
}`);
	const [currentLink, setCurrentLink] = useState('generate');

	const [isFormModalActive, setIsFormModalActive] = useState(false);

	return (
		<StateContext.Provider
			value={{
				code,
				setCode,
				currentLink,
				setCurrentLink,
				isFormModalActive,
				setIsFormModalActive,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
