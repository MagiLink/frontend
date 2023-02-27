import React from 'react';

function CardComponent({ data }) {
	const { prompt, component, score } = data;
	return (
		<div className="max-w-sm bg-black rounded-lg shadow my-5">
			<a href="#">
				<img className="rounded-t-lg" src="https://source.unsplash.com/random" alt="" />
			</a>
			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DUMMY COMPONENT NAME</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prompt}</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{score}</p>
			</div>
		</div>
	);
}

export default CardComponent;
