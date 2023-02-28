import React from 'react';
import CodePreview from './CodePreview';

function CardComponent({ data }) {
	const { prompt, component, score, component_name, upvotes, username, category } = data;
	return (
		<div className="w-80 bg-gray-500 rounded-lg shadow my-5">
			{/* <a href="#">
				<img className="rounded-t-lg" src={`https://source.unsplash.com/random/${category}`} alt="" />
			</a> */}
			{/* <CodePreview generatedCode={component} /> */}
			<div
				className="p-5 pb-2 flex flex-col items-center
			"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{component_name}</h5>

				<p className="mb-3 text-xl  text-center font-normal text-white">"{prompt}"</p>

				<div className="text-xs font-light flex w-full  justify-between items-center">
					<div className="text-white flex items-center">
						<button className="px-1 font-bold">{`↓`}</button>
						<span>{upvotes}</span>
						<span>❤️</span>
						<button className="px-1 font-bold">{`↑`}</button>
					</div>
					<div className="  text-white">{score * 100}% similarity</div>
					<div className="  text-white">{username || 'anon'}</div>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
