import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });
const place = {
  id: '1',
  name: 'Lençois',
  slug: 'lencois',
  location: {
    latitude: -12.123,
    longitude: -41.123,
  },
};

export default function Home() {
  return <Map places={[place]} />;
}
