import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [code, setCode] = useState(`() => {
	const handleClick = () => {
		alert('Button clicked!');
	};

	return <button onClick={handleClick}>Send</button>;
}`);

	return (
		<StateContext.Provider
			value={{
				code,
				setCode,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
