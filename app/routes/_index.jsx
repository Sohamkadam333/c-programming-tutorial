import fs from 'fs/promises';
import path from 'path';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Quote from '../components/Quote';
import DataTable from '../components/DataTable';

export const meta = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

// Loader function to fetch the quote
// export async function loader() {
// 	try {
// 		const response = await fetch('https://zenquotes.io/api/random');
// 		if (!response.ok) {
// 			throw new Error('Failed to fetch quote');
// 		}
// 		const data = await response.json();
// 		return json({ quote: data[0].q, author: data[0].a });
// 	} catch (error) {
// 		return json({ quote: 'Could not load a quote. Please try again later.', author: '' });
// 	}
// }

export async function loader() {
	try {
		// Load data.json
		const filePath = path.join(process.cwd(), 'app/DB/search-data.json');
		const fileContent = await fs.readFile(filePath, 'utf-8');
		const jsonData = JSON.parse(fileContent);

		// Fetch motivational quote
		const quoteResponse = await fetch('https://zenquotes.io/api/random');
		let quoteData = null;

		if (quoteResponse.ok) {
			const quoteJson = await quoteResponse.json();
			quoteData = { quote: quoteJson[0].q, author: quoteJson[0].a };
		} else {
			quoteData = { quote: 'Could not load a quote. Please try again later.', author: '' };
		}

		// Return combined data
		return json({ jsonData, quoteData });
	} catch (error) {
		console.error('Error in loader:', error);
		return json({
			error: 'Failed to load data or motivational quote.',
			jsonData: [],
			quoteData: { quote: 'No quote available.', author: '' },
		});
	}
}

export default function Index() {
	// const { quote, author } = useLoaderData();

	const { jsonData, quoteData, error } = useLoaderData();

	console.log(jsonData);

	return (
		<div className='p-2'>
			<h1 className='text-2xl lg:text-4xl font-bold text-center'>C Programming Tutorial</h1>
			{/* Motivational Quote Section */}

			<Quote quoteData={quoteData} />

			<DataTable data={jsonData} />
		</div>
	);
}
