import React, { useEffect, useState } from 'react';
import CodePreview from './CodePreview';
import axios from 'axios';

function CardComponent({ data }) {
	const { prompt, component, score, component_name, upvotes, username, category } = data;

	const [localUpvotes, setLocalUpvotes] = useState(upvotes);
	const [liked, setLiked] = useState(false);
	const handleLikePress = async () => {
		try {
			setLiked(!liked);
			// await axios.post(`/api/like/${data.id}`);
		} catch (error) {
			console.log('error liking component ', error);
		}
	};

	useEffect(() => {
		if (liked) {
			setLocalUpvotes(localUpvotes + 1);
		} else {
			setLocalUpvotes(localUpvotes - 1);
		}
	}, [liked]);

	return (
		<div className="w-80 bg-gray-500 rounded-lg shadow m-5">
			{/* <CodePreview generatedCode={component} /> */}
			<div className="p-5 pb-2 flex flex-col items-center">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{component_name}</h5>

				<p className="mb-5 text-xl  text-center font-normal text-white">"{prompt}"</p>

				<div className="text-xs font-light flex w-full  justify-between items-center">
					<div className="text-white flex items-center">
						<span>{localUpvotes}</span>

						<button className=" text-base px-1" onClick={handleLikePress}>
							{liked ? `♥️` : `♡`}
						</button>
					</div>
					<div className="text-white">{score * 100}% similarity</div>
					<div className="text-white">{username || 'anon'}</div>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
