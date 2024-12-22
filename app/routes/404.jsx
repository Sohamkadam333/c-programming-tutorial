// app/routes/404.jsx

import { Link } from '@remix-run/react';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
			<p className='text-xl mt-4'>Oops! The page you are looking for doesn't exist.</p>
			<Link to='/' className='mt-6 text-blue-500 hover:underline'>
				Go back to Home
			</Link>
		</div>
	);
}
