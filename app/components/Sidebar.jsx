import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// 1. Basics of C
// 2. Operators and Expressions
// 3. Statements
// 4. Functions
// 5. Array
// 6. Pointer
// 7. Strings
// 8. Structure
// 9. Union
// 10. Storage Classes
// 11. Preprocessor
// 12. File Handling
// 13. Memory Management
// 14. Command Line Arguments

const Sidebar = (params) => {
	const children = params.children;
	return (
		<div className=''>
			{/* <!-- ========== MAIN CONTENT ========== --> */}
			{/* <!-- Breadcrumb --> */}
			<div className='sticky top-0 inset-x-0  bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700'>
				<div className='sticky top-0 flex items-center py-2 '>
					{/* <!-- Navigation Toggle --> */}
					<button
						type='button'
						className='size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500'
						aria-haspopup='dialog'
						aria-expanded='false'
						aria-controls='hs-application-sidebar'
						aria-label='Toggle navigation'
						data-hs-overlay='#hs-application-sidebar'>
						<span className='sr-only'>Toggle Navigation</span>
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
							<rect width='18' height='18' x='3' y='3' rx='2' />
							<path d='M15 3v18' />
							<path d='m8 9 3 3-3 3' />
						</svg>
					</button>
					{/* <!-- End Navigation Toggle --> */}

					{/* <!-- Breadcrumb --> */}
					<ol className=' ms-3 flex items-center whitespace-nowrap'>
						<li className='flex items-center text-sm text-gray-800 dark:text-neutral-400'>
							Application Layout
							<svg
								className='shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500'
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
								/>
							</svg>
						</li>
						<li className='text-sm font-semibold text-gray-800 truncate dark:text-neutral-400' aria-current='page'>
							Dashboard
						</li>
					</ol>
					{/* <!-- End Breadcrumb --> */}
				</div>
			</div>
			{/* <!-- End Breadcrumb --> */}

			{/* <!-- Sidebar --> */}
			<div
				id='hs-application-sidebar'
				className='hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700'
				role='dialog'
				tabIndex='-1'
				aria-label='Sidebar'>
				<div className='relative flex flex-col h-full max-h-full'>
					{/* <div className='px-6 pt-4'>
						<a
							className='flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80'
							href='#'
							aria-label='Preline'></a>
						<!-- End Logo -->
					</div> */}

					{/* <!-- Content --> */}
					<div className=' [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
						<nav className='hs-accordion-group p-3 w-full flex flex-col flex-wrap' data-hs-accordion-always-open>
							<ul className='flex flex-col space-y-1'>
								<li>
									<a
										className='flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white'
										href='#'>
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
											<path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
										</svg>
										Contents
									</a>
								</li>

								{/* <li className='hs-accordion' id='users-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='users-accordion-child'>
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
										Users
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='users-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='users-accordion'>
										<ul className='hs-accordion-group ps-8 pt-1 space-y-1' data-hs-accordion-always-open>
											<li className='hs-accordion' id='users-accordion-sub-1'>
												<button
													type='button'
													className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
													aria-expanded='true'
													aria-controls='users-accordion-sub-1-child'>
													Sub Menu 1
													<svg
														className='hs-accordion-active:block ms-auto hidden size-4'
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
														className='hs-accordion-active:hidden ms-auto block size-4'
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
													id='users-accordion-sub-1-child'
													className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
													role='region'
													aria-labelledby='users-accordion-sub-1'>
													<ul className='pt-1 space-y-1'>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
																href='#'>
																Link 1
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
																href='#'>
																Link 2
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
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
													className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
													aria-expanded='true'
													aria-controls='users-accordion-sub-2-child'>
													Sub Menu 2
													<svg
														className='hs-accordion-active:block ms-auto hidden size-4'
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
														className='hs-accordion-active:hidden ms-auto block size-4'
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
													id='users-accordion-sub-2-child'
													className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
													role='region'
													aria-labelledby='users-accordion-sub-2'>
													<ul className='pt-1 space-y-1'>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
																href='#'>
																Link 1
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
																href='#'>
																Link 2
															</a>
														</li>
														<li>
															<a
																className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
																href='#'>
																Link 3
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li> */}

								{/* ------------------------- 01 BASICS STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z' />
										</svg>
										01. Basics of C
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 01 BASICS ENDS ------------------------- */}

								{/* ------------------------- 02 Operators and Expressions STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										{/* 02. Operators and Expressions */}
										02. Operators
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 02 Operators and Expressions ENDS ------------------------- */}

								{/* ------------------------- 03 Statements STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										03. Statements
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 03 Statements ENDS ------------------------- */}

								{/* ------------------------- 04 Functions STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										04. Functions
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 04 Functions ENDS ------------------------- */}

								{/* ------------------------- 05 Arrays STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										05. Arrays
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 05 Arrays ENDS ------------------------- */}

								{/* ------------------------- 06 Pointers STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										06. Pointers
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 06 Pointers ENDS ------------------------- */}

								{/* ------------------------- 07 Strings STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										07. Strings
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 07 Strings ENDS ------------------------- */}

								{/* ------------------------- 08 Structures STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										08. Structures
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 08 Structures ENDS ------------------------- */}

								{/* ------------------------- 09 Unions STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										09. Unions
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 09 Unions ENDS ------------------------- */}

								{/* ------------------------- 10 Storage Classes STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										10. Storage Classes
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 10 Storage Classes ENDS ------------------------- */}

								{/* ------------------------- 11 Preprocessor STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										11. Preprocessor
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 11 Preprocessor ENDS ------------------------- */}

								{/* ------------------------- 12 File Handling STARTS ------------------------- */}
								<li className='hs-accordion' id='account-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='account-accordion-child'>
										{/* <svg
											className='shrink-0 mt-0.5 size-4'
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
										</svg> */}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
											<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
										</svg>
										12. File Handling
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='account-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='account-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li>

								{/* ------------------------- 12 File Handling ENDS ------------------------- */}

								{/* <li className='hs-accordion' id='projects-accordion'>
									<button
										type='button'
										className='hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
										aria-expanded='true'
										aria-controls='projects-accordion-child'>
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
											<rect width='20' height='14' x='2' y='7' rx='2' ry='2' />
											<path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
										</svg>
										Projects
										<svg
											className='hs-accordion-active:block ms-auto hidden size-4'
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
											className='hs-accordion-active:hidden ms-auto block size-4'
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
										id='projects-accordion-child'
										className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden'
										role='region'
										aria-labelledby='projects-accordion'>
										<ul className='ps-8 pt-1 space-y-1'>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 1
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 2
												</a>
											</li>
											<li>
												<a
													className='flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200'
													href='#'>
													Link 3
												</a>
											</li>
										</ul>
									</div>
								</li> */}

								{/* <li>
									<a
										className='w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300'
										href='#'>
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
										Calendar
									</a>
								</li> */}
								{/* <li>
									<a
										className='w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300'
										href='#'>
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
										Documentation
									</a>
								</li> */}
							</ul>
						</nav>
					</div>
					{/* <!-- End Content --> */}
				</div>
			</div>
			{/* <!-- End Sidebar --> */}

			{/* <!-- Content --> */}
			<div className='w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72'>
				{/* <!-- your content goes here ... --> */}
				{/* <Navbar /> */}
				{children}
				<Footer />
			</div>
			{/* <!-- End Content --> */}
			{/* <!-- ========== END MAIN CONTENT ========== --> */}
		</div>
	);
};

export default Sidebar;
