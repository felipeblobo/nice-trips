import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

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
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[place]} />
    </>
  );
}
