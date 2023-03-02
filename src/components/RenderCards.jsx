import CardComponent from '../components/CardComponent';

const RenderCards = ({
	selectedCategories,
	loading,
	filteredCategories,
	categories,
}) => {
	return (
		<div className='flex flex-col items-center'>
			{loading ? (
				<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black'></div>
			) : (
				<div>
					{!!selectedCategories || selectedCategories !== 'all'
						? filteredCategories.map((group, index) => {
								const [category, components] = group;
								return (
									<div key={index}>
										<h1 className='mt-10'>#{category || 'misc'}</h1>

										<div className='max-w-7xl flex gap-10 overflow-x-scroll'>
											{components.length ? (
												components.map((data, index) => {
													return <CardComponent key={index} data={data} />;
												})
											) : (
												<h1 className='text-7xl font-bold text-red-500'>
													No components found - generate one
												</h1>
											)}
										</div>
									</div>
								);
						  })
						: categories.map((group, index) => {
								const [category, components] = group;
								return (
									<div key={index}>
										<h1 className='mt-10'>#{category || 'misc'}</h1>

										<div className='max-w-7xl flex gap-10 overflow-x-scroll'>
											{components.length ? (
												components.map((data, index) => {
													return <CardComponent key={index} data={data} />;
												})
											) : (
												<h1>No components found - generate one</h1>
											)}
										</div>
									</div>
								);
						  })}
				</div>
			)}
		</div>
	);
};

export default RenderCards;
