export default [
	{
		prompt:
			'Create a react component called SendButton that has a button with onclick functionality',
		generated_code: `() => {
                            const handleClick = () => {
                                alert('Button clicked!');
                            };

                            return (
                                <button onClick={handleClick}>
                                    Send
                                </button>
                            );
                        };`,
	},
];
