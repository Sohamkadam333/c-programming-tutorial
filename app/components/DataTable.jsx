import React from 'react';

const DataTable = (params) => {
	const data = params.data;
	return (
		<div className='space-y-6 flex flex-wrap justify-around'>
			{data.map((section, index) => {
				const [title, rows] = section;
				return (
					<div key={index} className='bg-white rounded-lg shadow-md p-4 !w-[500px] '>
						<h2 className='text-xl font-semibold mb-4'>{title.title}</h2>
						<table className='min-w-full table-auto text-sm text-gray-700'>
							<thead>
								<tr>
									<th className='px-3 py-2 border-b'>Sr.no</th>
									<th className='px-3 py-2 border-b'>Link</th>
								</tr>
							</thead>
							<tbody>
								{rows.map((row, rowIndex) => (
									<tr key={rowIndex}>
										<td className='px-3 py-2 border-b text-center'>{rowIndex + 1}</td>
										<td className='px-3 py-2 border-b'>{row.url || '-'}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);
			})}
		</div>
	);
};

export default DataTable;
