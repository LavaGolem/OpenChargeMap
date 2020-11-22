import React from 'react';

export function Addresses({data}) {
	return (<div style={{backgroundColor: 'lightgray', position:'fixed', top: 0, right:0, bottom: 0}}>
		{data && data.map((address, index) => {
				return <div  key={address.addressName + index}>
					<b>Street: </b> {address.addressName}
				</div>;
			})
		}
	</div>)
}
