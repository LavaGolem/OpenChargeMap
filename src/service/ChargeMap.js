
export const getChargeMap = (center, dist) => {
	return fetch(getOpenChargeMapUri(center, dist))
		.then((res) => res.json());

}

const getOpenChargeMapUri = (center, dist) => {
	const {lng, lat} = center;
	return `https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&compact=true&verbose=false&latitude=${lat}&longitude=${lng}&distance=${dist}&distanceunit=KM`;
}
