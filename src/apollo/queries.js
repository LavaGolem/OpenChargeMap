import {gql} from '@apollo/client';

export const ADDRESSES_QUERY = gql`
query addresses($lat: Float!, $lng: Float!, $dist: Int!) {
  addresses(lat: $lat, lng: $lng, dist: $dist) {
		lat,
		lng,
		addressName,
  }
}
`;
