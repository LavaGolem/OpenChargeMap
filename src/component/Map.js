import React, {useEffect, useState, useRef} from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {API_KEY_GOOGLE_MAPS} from '../env';
import {Addresses} from "./Addresses";
import {addressesClient} from '../apollo/client';
import {ADDRESSES_QUERY} from "../apollo/queries";

const containerStyle = {
	width: '1500px',
	height: '1000px'
};

export function Map() {
	const [stations, setStations] = useState();
	const [center, setCenter] = useState({
		lat: 52.5200,
		lng: 13.4050
	});
	useEffect(() => {
		addressesClient.query({
			query: ADDRESSES_QUERY,
			fetchPolicy: "cache-first",
			variables: {
				lat: center.lat,
				lng: center.lng,
				dist: 10
			},
		}).then(result => {
			setStations(result.data.addresses);
		});
	}, [center.lat, center.lng]);

	const mapRef = useRef();
	const onIdle = () => {
		setCenter(currentCenter => {
			const {lat, lng} = mapRef.current.state.map.center
			if (currentCenter.lat === lat() && currentCenter.lng === lng()) return currentCenter

			return {lat: lat(), lng: lng()}
		})
	}


	return (
		<div>
			<LoadScript
				googleMapsApiKey={API_KEY_GOOGLE_MAPS}
			>
				<GoogleMap
					ref={mapRef}
					mapContainerStyle={containerStyle}
					center={center}
					zoom={12}
					onIdle={onIdle}
				>
					{stations && stations.map((res) => {
						return <Marker
							key={res.lat + res.lng}
							position={
								{
									lat: res.lat,
									lng: res.lng
								}}
							onClick={() => {
							}}
						/>
					})}
				</GoogleMap>
			</LoadScript>
			<Addresses data={stations}/>
		</div>
	)
}
