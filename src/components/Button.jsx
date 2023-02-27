import React from 'react';

function Button({ text, onClick, disabled, styles, children }) {
	return (
		<button
			// style={styles}
			onClick={onClick}
			disabled={disabled}
			className={
				styles ? styles : 'max-w-sm bg-black my-2 rounded-xl text-white font-medium px-4 py-2 hover:bg-black/80 w-full'
			}
		>
			{!!children ? children : text}
		</button>
	);
}

export default Button;
