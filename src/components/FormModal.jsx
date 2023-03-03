import React, { useState } from 'react';
import axios from 'axios';
import { componentCategories } from '../constants/categories';
import { useStateContext } from '../context/ContextProvider';
import Button from './Button';

const FormModal = () => {
	const {
		isFormModalActive,
		setIsFormModalActive,
		code,
		promp,
		setCurrentLink,
	} = useStateContext();

	const [componentName, setComponentName] = useState('');
	const [componentCategory, setComponentCategory] = useState('');

	const SERVER_URL = import.meta.env.VITE_SERVER_URL;

	const compObj = {
		name: componentName,
		category: componentCategory,
		component: code,
		prompt,
	};

	const handleShare = async () => {
		try {
			const result = await axios.post(`${SERVER_URL}/library`, compObj);
			console.log(result, '<<< result');
			setIsFormModalActive(false);
			setCurrentLink('library');
			return result;
		} catch (error) {
			console.log(error);
			setIsFormModalActive(false);
			setCurrentLink('library');
		}
	};

	return (
		<div>
			<Button
				className='block text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				onClick={() => setIsFormModalActive(true)}
			>
				Share your component!
			</Button>

			{isFormModalActive && (
				<div className='absolute flex justify-center items-center w-screen h-screen p-4 overflow-x-hidden overflow-y-auto inset-0'>
					<div className='bg-white rounded-lg shadow w-[50vw] h-[60vh] flex justify-center items-center'>
						<button
							onClick={() => setIsFormModalActive(false)}
							type='button'
							className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
						>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
							<span className='sr-only'>Close modal</span>
						</button>
						<div className='px-6 py-6 lg:px-8'>
							<h3 className='mb-4 text-xl font-medium text-gray-900e'>
								Component submission
							</h3>
							<form className='space-y-6' action='#'>
								<div>
									<label className='block mb-2 text-sm font-medium text-gray-900'>
										Component Name
									</label>
									<input
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
										placeholder='A descriptive title for your component'
										onChange={(e) => setComponentName(e.target.value)}
										required
									/>
								</div>

								<div>
									<label className='block mb-2 text-sm font-medium text-gray-900'>
										Category
									</label>

									<select
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5'
										onChange={(e) => setComponentCategory(e.target.value)}
									>
										{componentCategories.map((category) => (
											<option key={category.value} value={category.value}>
												{category.label}
											</option>
										))}
									</select>
								</div>

								<Button
									className='w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
									onClick={handleShare}
								>
									Share
								</Button>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default FormModal;
