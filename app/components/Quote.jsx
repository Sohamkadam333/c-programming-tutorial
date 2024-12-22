import { useState, useEffect } from 'react';

const Quote = ({ quoteData }) => {
	const [gradient, setGradient] = useState('');

	useEffect(() => {
		const gradients = [
			'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
			'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500',
			'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500',
			'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
			'bg-gradient-to-r from-red-400 via-yellow-500 to-green-500', // New gradient 1
			'bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600', // New gradient 2
			'bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500', // New gradient 3
			'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700', // New gradient 4
			'bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-600', // New gradient 5
		];

		const randomIndex = Math.floor(Math.random() * gradients.length);
		setGradient(gradients[randomIndex]);
	}, []); // Run only once when the component mounts

	return (
		<div id='quoteContainer' className='p-6 rounded-md shadow-sm mb-4 flex justify-center item-center'>
			<blockquote className={`italic text-transparent bg-clip-text ${gradient} text-2xl`}>
				"{quoteData.quote}"
				{quoteData.author && (
					<span className='block mt-2 text-sm text-gray-800 font-bold' style={{ fontFamily: 'Consolas, monospace' }}>
						– {quoteData.author}
					</span>
				)}
			</blockquote>
		</div>
	);
};

export default Quote;
