import React, { useEffect, useState } from 'react';
import CodePreview from './CodePreview';
import axios from 'axios';

function CardComponent({ data }) {
	const { prompt, component, score, component_name, upvotes, username, category } = data;
	const similarityScore = Math.round(score * 100);
	console.log('similarityScore: ', similarityScore);
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

	const progressBarColor = (score) => {
		console.log('percentage: ', score);

		if (score <= 25) {
			return '#EF4444';
		} else if (score <= 50) {
			return '#F59E0B';
		} else if (score <= 75) {
			return '#FCD34D';
		} else {
			return '#10B981';
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
		<div className="w-80  border border-black rounded-lg shadow">
			{/* <CodePreview generatedCode={component} /> */}
			<div className="p-5 pb-2 flex flex-col items-center">
				<h1 className="mb-2 text-xl font-bold text-gray-900">{component_name}</h1>

				<p className="mb-5 text-lg  text-center font-normal text-black">"{prompt}"</p>

				<div className="text-xs font-light flex w-full  justify-between items-center">
					<div className="text-black flex items-center">
						<span>{localUpvotes}</span>

						<button className=" text-base px-1" onClick={handleLikePress}>
							{liked ? `♥️` : `♡`}
						</button>
					</div>

					<div className="relative w-full bg-gray-200 rounded-full dark:bg-gray-700 mx-3 h-4 ">
						<div
							style={{
								width: `${similarityScore}%`,
								backgroundColor: progressBarColor(similarityScore),
								height: '100%',
							}}
							className="text-xs absolute  font-medium left-0 top-0 text-blue-100 text-center p-0.5 leading-none rounded-full  z-0"
						></div>
						<p className="justify-center items-center flex absolute w-full top-0 text-white text-center">
							{similarityScore}% similarity
						</p>
					</div>

					<div className="text-black">{username || 'anon'}</div>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
