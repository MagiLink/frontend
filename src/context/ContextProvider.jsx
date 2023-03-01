import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [prompt, setPrompt] = useState();
	const [code, setCode] = useState(``);
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
				prompt,
				setPrompt,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
