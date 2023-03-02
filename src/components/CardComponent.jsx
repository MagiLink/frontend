import React, { useState } from 'react';
import CodePreview from './CodePreview';
import CopyBtn from './CopyBtn';

function CardComponent({ data }) {
	const { prompt, component, score, name, upvotes, username, category } = data;
	const similarityScore = Math.round(score * 100);

	const [localUpvotes, setLocalUpvotes] = useState(upvotes);

	const [liked, setLiked] = useState(false);
	const handleLikePress = async () => {
		try {
			setLiked(!liked);
			if (liked) setLocalUpvotes(Number(localUpvotes - 1));
			if (!liked) setLocalUpvotes(Number(localUpvotes + 1));

			//TODO make api call for upvoting or downvoting
		} catch (error) {
			console.log('error liking component ', error);
		}
	};

	const progressBarColor = (score) => {
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

	return (
		<div className='flex flex-col justify-center items-center h-[420px]'>
			<div className='relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-lg shadow-shadow-500'>
				<div className='relative flex h-32 w-full justify-center rounded-xl bg-cover'>
					<div className='absolute flex h-full w-full justify-center rounded-xl bg-cover bg-gradient-to-tl from-green-50 to-green-300'>
						<CopyBtn copy={component} />
						<CodePreview generatedCode={component} />
					</div>
					<div className='absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'>
						<img
							className='h-full w-full rounded-full'
							src='https://i.pravatar.cc/300
'
							alt=''
						/>
					</div>
				</div>
				<div className='mt-16 flex flex-col items-center'>
					<h4 className='text-xl font-bold text-gray-600 capitalize'>{name}</h4>
					<p className='text-base font-normal text-gray-400 text-center'>
						{prompt}
					</p>
				</div>
				<div className='mt-6 mb-3 px-4 flex items-center text-xs w-full justify-between gap-6'>
					<div className='flex flex-col justify-center items-center'>
						<p className='text-base font-semibold text-gray-500'>
							{localUpvotes}
						</p>
						<button
							onClick={handleLikePress}
							className='text-md font-normal text-red-500'
						>
							{liked ? `♥️` : `♡`}
						</button>
					</div>
					{score && (
						<div className='relative w-full bg-gray-200 rounded-full mx-3 h-4'>
							<div
								style={{
									width: `${similarityScore}%`,
									backgroundColor: progressBarColor(similarityScore),
									height: '100%',
								}}
								className='text-xs absolute font-medium left-0 top-0 text-blue-100 text-center p-0.5 leading-none rounded-full  z-0'
							></div>
							<p className='justify-center items-center flex absolute w-full top-0 text-white text-center'>
								{similarityScore}% similarity
							</p>
						</div>
					)}
					<div>
						<p className='text-base font-semibold text-gray-500'>
							{username || 'anon'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardComponent;
