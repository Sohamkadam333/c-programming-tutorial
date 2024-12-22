import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import './tailwind.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import CommonStyles from './styles/common-styles.css';
import Sidebar2 from './components/Sidebar2';
import Sidebar3 from './components/Sidebar3';

export const links = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{
		rel: 'stylesheet',
		href: './styles/common-styles.css',
	},
	{
		rel: 'stylesheet',
		href: './styles/footer.css',
	},
];

export function Layout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				{/* <Navbar /> */}
				<Sidebar3 children={children} />
				{/* <Sidebar2 /> */}
				{/* <Sidebar children={children} /> */}
				{/* {} */}
				{/* <Footer programmingLanguage='C' /> */}
				{/* <div className='md:hidden'> */}
				{/* <Footer /> */}
				{/* </div> */}
				<ScrollRestoration />
				<Scripts />
				<script src='./node_modules/preline/dist/preline.js'></script>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
