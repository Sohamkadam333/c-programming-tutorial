import React, { useEffect } from 'react';

const Sidebar2 = () => {
	useEffect(() => {
		const { element } = window.HSLayoutSplitter.getInstance('#hs-offcanvas-example', true);

		const handleOnPrevLimit = (prev) => {
			prev.classList.add('prev-limit-reached');
		};

		const handleOnPrevPreLimit = (prev) => {
			prev.classList.add('prev-pre-limit-reached');
		};

		const handleOnDrag = ({ prev, previousFlexSize, previousPreLimitFlexSize, previousMinFlexSize }) => {
			if (previousFlexSize > previousMinFlexSize) prev.classList.remove('prev-limit-reached');
			if (previousFlexSize > previousPreLimitFlexSize) prev.classList.remove('prev-pre-limit-reached');
		};

		element.on('onPrevLimit', handleOnPrevLimit);
		element.on('onPrevPreLimit', handleOnPrevPreLimit);
		element.on('drag', handleOnDrag);

		// Cleanup the event listeners when the component is unmounted
		return () => {
			element.off('onPrevLimit', handleOnPrevLimit);
			element.off('onPrevPreLimit', handleOnPrevPreLimit);
			element.off('drag', handleOnDrag);
		};
	}, []); // The empty array ensures this effect runs only once when the component mounts

	return (
		<div>
			{/* <!-- Navigation Toggle --> */}
			<div className='py-16 text-center'>
				<button
					type='button'
					className='py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200'
					aria-haspopup='dialog'
					aria-expanded='false'
					aria-controls='hs-offcanvas-example'
					aria-label='Toggle navigation'
					data-hs-overlay='#hs-offcanvas-example'>
					Open
				</button>
			</div>
			{/* <!-- End Navigation Toggle --> */}

			{/* <!-- Sidebar --> */}
			<div
				id='hs-offcanvas-example'
				className='hs-overlay pointer-events-none w-full [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0'
				role='dialog'
				tabIndex='-1'
				aria-label='Sidebar'
				data-hs-layout-splitter='{
  "horizontalSplitterTemplate": "<div><span className=\"absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-6 flex justify-center items-center bg-white border border-gray-200 text-gray-400 rounded-md cursor-grab hover:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-900\"><svg className=\"shrink-0 size-3.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"9\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"5\" r=\"1\"/><circle cx=\"9\" cy=\"19\" r=\"1\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><circle cx=\"15\" cy=\"19\" r=\"1\"/></svg></span></div>",
  "horizontalSplitterClasses": "pointer-events-auto relative flex"
}'>
				<div className='relative z-[60] flex h-full pointer-events-none' data-hs-layout-splitter-horizontal-group>
					<div
						className='pointer-events-auto bg-white border-e border-gray-200 pt-7 pb-10 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700'
						data-hs-layout-splitter-item='{
      "dynamicSize": 37.0,
      "minSize": 13.0,
      "preLimitSize": 25.0
    }'
						style={{
							flex: '37 1 0px',
						}}>
						<div className='px-6'>
							<a
								className='hs-layout-splitter-prev-pre-limit-reached:hidden block flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white'
								href='#'
								aria-label='Brand'>
								Brand
							</a>
							<a
								className='hs-layout-splitter-prev-pre-limit-reached:block hidden flex-none focus:outline-none focus:opacity-80'
								href='#'
								aria-label='Brand'>
								<svg
									className='w-10 h-auto'
									width='100'
									height='100'
									viewBox='0 0 100 100'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<rect width='100' height='100' rx='10' fill='black'></rect>
									<path
										d='M37.656 68V31.6364H51.5764C54.2043 31.6364 56.3882 32.0507 58.1283 32.8793C59.8802 33.696 61.1882 34.8146 62.0523 36.2351C62.9282 37.6555 63.3662 39.2654 63.3662 41.0646C63.3662 42.5443 63.0821 43.8108 62.5139 44.8643C61.9458 45.906 61.1823 46.7524 60.2235 47.4034C59.2646 48.0544 58.1934 48.522 57.0097 48.8061V49.1612C58.2999 49.2322 59.5369 49.6288 60.7206 50.3509C61.9162 51.0611 62.8927 52.0672 63.6503 53.3693C64.4079 54.6714 64.7867 56.2457 64.7867 58.0923C64.7867 59.9744 64.3309 61.6671 63.4195 63.1705C62.508 64.6619 61.1349 65.8397 59.3002 66.7038C57.4654 67.5679 55.1572 68 52.3754 68H37.656ZM44.2433 62.4957H51.3279C53.719 62.4957 55.4413 62.04 56.4948 61.1286C57.5601 60.2053 58.0928 59.0215 58.0928 57.5774C58.0928 56.5002 57.8264 55.5296 57.2938 54.6655C56.7611 53.7895 56.0035 53.103 55.021 52.6058C54.0386 52.0968 52.8667 51.8423 51.5054 51.8423H44.2433V62.4957ZM44.2433 47.1016H50.7597C51.896 47.1016 52.92 46.8944 53.8314 46.4801C54.7429 46.054 55.459 45.4562 55.9798 44.6868C56.5125 43.9055 56.7789 42.9822 56.7789 41.9169C56.7789 40.5083 56.2817 39.3482 55.2874 38.4368C54.3049 37.5253 52.843 37.0696 50.9017 37.0696H44.2433V47.1016Z'
										fill='white'></path>
								</svg>
							</a>
						</div>
						<nav className='hs-accordion-group p-6 w-full flex flex-col flex-wrap' data-hs-accordion-always-open>
							<ul className='space-y-1.5'>
								<li>
									<a
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white'
										href='#'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
											<polyline points='9 22 9 12 15 12 15 22' />
										</svg>
										Dashboard
									</a>
									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
												<polyline points='9 22 9 12 15 12 15 22'></polyline>
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Dashboard
											</span>
										</button>
									</div>
								</li>

								<li className='hs-accordion' id='users-accordion'>
									<button
										type='button'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300'
										aria-expanded='true'
										aria-controls='users-accordion'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
											<circle cx='9' cy='7' r='4' />
											<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
											<path d='M16 3.13a4 4 0 0 1 0 7.75' />
										</svg>
										Users
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m18 15-6-6-6 6' />
										</svg>
										<svg
											className='hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m6 9 6 6 6-6' />
										</svg>
									</button>

									<div
										id='users-accordion'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='users-accordion'>
										<ul className='hs-accordion-group ps-3 pt-2' data-hs-accordion-always-open>
											<li className='hs-accordion' id='users-accordion-sub-1'>
												<button
													type='button'
													className='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300'
													aria-expanded='true'
													aria-controls='users-accordion-sub-1'>
													Sub Menu 1
													<svg
														className='hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path d='m18 15-6-6-6 6' />
													</svg>
													<svg
														className='hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path d='m6 9 6 6 6-6' />
													</svg>
												</button>

												<div
													id='users-accordion-sub-1'
													className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
													role='region'
													aria-labelledby='users-accordion-sub-1'>
													<ul className='pt-2 ps-2'>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 1
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 2
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 3
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li className='hs-accordion' id='users-accordion-sub-2'>
												<button
													type='button'
													className='hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300'
													aria-expanded='true'
													aria-controls='users-accordion-sub-2'>
													Sub Menu 2
													<svg
														className='hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path d='m18 15-6-6-6 6' />
													</svg>
													<svg
														className='hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path d='m6 9 6 6 6-6' />
													</svg>
												</button>

												<div
													id='users-accordion-sub-2'
													className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
													role='region'
													aria-labelledby='users-accordion-sub-2'>
													<ul className='pt-2 ps-2'>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 1
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 2
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
																href='#'>
																Link 3
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>

									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
												<circle cx='9' cy='7' r='4' />
												<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
												<path d='M16 3.13a4 4 0 0 1 0 7.75' />
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Users
											</span>
										</button>
									</div>
								</li>

								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300'
										aria-expanded='true'
										aria-controls='account-accordion'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<circle cx='18' cy='15' r='3' />
											<circle cx='9' cy='7' r='4' />
											<path d='M10 15H6a4 4 0 0 0-4 4v2' />
											<path d='m21.7 16.4-.9-.3' />
											<path d='m15.2 13.9-.9-.3' />
											<path d='m16.6 18.7.3-.9' />
											<path d='m19.1 12.2.3-.9' />
											<path d='m19.6 18.7-.4-1' />
											<path d='m16.8 12.3-.4-1' />
											<path d='m14.3 16.6 1-.4' />
											<path d='m20.7 13.8 1-.4' />
										</svg>
										Account
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m18 15-6-6-6 6' />
										</svg>
										<svg
											className='hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m6 9 6 6 6-6' />
										</svg>
									</button>

									<div
										id='account-accordion'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='pt-2 ps-2'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>

									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<circle cx='18' cy='15' r='3' />
												<circle cx='9' cy='7' r='4' />
												<path d='M10 15H6a4 4 0 0 0-4 4v2' />
												<path d='m21.7 16.4-.9-.3' />
												<path d='m15.2 13.9-.9-.3' />
												<path d='m16.6 18.7.3-.9' />
												<path d='m19.1 12.2.3-.9' />
												<path d='m19.6 18.7-.4-1' />
												<path d='m16.8 12.3-.4-1' />
												<path d='m14.3 16.6 1-.4' />
												<path d='m20.7 13.8 1-.4' />
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Account
											</span>
										</button>
									</div>
								</li>

								<li className='hs-accordion' id='projects-accordion'>
									<button
										type='button'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300'
										aria-expanded='true'
										aria-controls='projects-accordion'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z' />
											<path d='M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8' />
											<path d='M15 2v5h5' />
										</svg>
										Projects
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m18 15-6-6-6 6' />
										</svg>
										<svg
											className='hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='m6 9 6 6 6-6' />
										</svg>
									</button>

									<div
										id='projects-accordion'
										className='hs-layout-splitter-prev-pre-limit-reached:hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='projects-accordion'>
										<ul className='pt-2 ps-2'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>

									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path d='M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z' />
												<path d='M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8' />
												<path d='M15 2v5h5' />
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Projects
											</span>
										</button>
									</div>
								</li>

								<li>
									<a
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
										href='#'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
											<line x1='16' x2='16' y1='2' y2='6' />
											<line x1='8' x2='8' y1='2' y2='6' />
											<line x1='3' x2='21' y1='10' y2='10' />
											<path d='M8 14h.01' />
											<path d='M12 14h.01' />
											<path d='M16 14h.01' />
											<path d='M8 18h.01' />
											<path d='M12 18h.01' />
											<path d='M16 18h.01' />
										</svg>
										Calendar
									</a>
									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
												<line x1='16' x2='16' y1='2' y2='6' />
												<line x1='8' x2='8' y1='2' y2='6' />
												<line x1='3' x2='21' y1='10' y2='10' />
												<path d='M8 14h.01' />
												<path d='M12 14h.01' />
												<path d='M16 14h.01' />
												<path d='M8 18h.01' />
												<path d='M12 18h.01' />
												<path d='M16 18h.01' />
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Calendar
											</span>
										</button>
									</div>
								</li>
								<li>
									<a
										className='hs-layout-splitter-prev-pre-limit-reached:hidden flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
										href='#'>
										<svg
											className='size-4'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
											<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
										</svg>
										Documentation
									</a>
									<div className='hs-layout-splitter-prev-pre-limit-reached:block hidden hs-tooltip [--placement:right] inline-block'>
										<button
											type='button'
											className='hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700'>
											<svg
												className='shrink-0 size-4'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'>
												<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
												<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
											</svg>
											<span
												className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700 hidden'
												role='tooltip'
												style={{
													position: 'fixed',
													inset: '0px auto auto 0px',
													margin: '0px',
													transform: 'translate3d(63.5px, 99px, 0px)',
												}}
												data-popper-placement='right'>
												Documentation
											</span>
										</button>
									</div>
								</li>
							</ul>
						</nav>
					</div>
					<div
						className='overflow-hidden self-start'
						data-hs-layout-splitter-item='63.0'
						style={{
							flex: '63 1 0px',
						}}></div>
				</div>
			</div>
			{/* <!-- End Sidebar --> */}

			<script src='../scripts/js/open-modals-on-init.js'></script>
		</div>
	);
};

export default Sidebar2;
