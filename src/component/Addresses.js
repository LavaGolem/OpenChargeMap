import React from 'react';

export function Addresses({data}) {
	return (<div style={{backgroundColor: 'lightgray', position:'fixed', top: 0, right:0, bottom: 0}}>
		{data && data.map((address, index) => {
				return <div  key={address.AddressInfo.AddressLine1 + index}>
					<b>Street: </b> {address.AddressInfo.AddressLine1}
				</div>;
			})
		}
	</div>)
}
