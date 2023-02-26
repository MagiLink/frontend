export default [
	{
		prompt: 'Create a react component called SendButton that has a button with onclick functionality',
		generated_code: `import React from 'react';

                        const SendButton = () => {
                            const handleClick = () => {
                                alert('Button clicked!');
                            };

                            return (
                                <button onClick={handleClick}>
                                    Send
                                </button>
                            );
                        };

                        export default SendButton;`,
	},
];
