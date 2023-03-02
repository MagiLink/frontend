import React, { useState } from 'react';
import Button from './Button';
import CopySVG from './CopySVG';
import { useStateContext } from '../context/ContextProvider';

const CopyBtn = ({ copy }) => {
	const [pressed, setPressed] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(copy);
		setPressed(true);
		setTimeout(() => setPressed(false), 2000);
	};

	return (
		<Button
			styles={
				'absolute -top-2 right-0 w-fit bg-black my-2 rounded-xl text-white font-medium px-3 py-2 hover:bg-black/80 '
			}
			onClick={handleCopy}
		>
			{pressed ? 'Copied' : <CopySVG />}
		</Button>
	);
};

export default CopyBtn;
