import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [prompt, setPrompt] = useState(
		'Create a react component called SendButton that has a button with onclick functionality',
	);
	const [code, setCode] = useState(`() => {
		return (
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		);
	}`);
	// 	const [code, setCode] = useState(`() => {
	// 	const handleClick = () => {
	// 		alert('Button clicked!');
	// 	};

	// 	return <button onClick={handleClick}>Send</button>;
	// }`);
	const [currentLink, setCurrentLink] = useState('generate');

	return (
		<StateContext.Provider
			value={{
				code,
				setCode,
				currentLink,
				setCurrentLink,
				prompt,
				setPrompt,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
