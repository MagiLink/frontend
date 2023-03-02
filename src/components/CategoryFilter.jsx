import React from 'react';

const CategoryFilter = ({
	selectedCategories,
	setSelectedCategories,
	categories,
}) => {
	return (
		<div className='flex gap-6 items-center mt-6'>
			<div className='flex flex-col flex-1'>
				<label className='block mb-2 text-sm font-medium text-gray-400'>
					Filter Categories
				</label>
				<select
					onChange={(e) => setSelectedCategories(e.target.value)}
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
				>
					{categories.map((category) => (
						<option className='capitalize' value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			{!!selectedCategories && (
				<button
					onClick={() => setSelectedCategories('')}
					className='text-gray-400 underline flex-2'
				>
					remove filter
				</button>
			)}
		</div>
	);
};

export default CategoryFilter;
