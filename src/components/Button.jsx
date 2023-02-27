import React from 'react';

function Button({ text, onClick, disabled }) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="max-w-sm bg-black my-2 rounded-xl text-white font-medium px-4 py-2 hover:bg-black/80 w-full"
		>
			{text}
		</button>
	);
}

export default Button;
