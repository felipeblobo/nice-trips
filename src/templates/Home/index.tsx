import LinkWrapper from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Lobo Trips"
        description="A biologist travel book diary..."
        canonical="https://lobotrips.com.br"
        openGraph={{
          url: 'http://lobotrips.com.br',
          title: 'Lobo Trips',
          images: [
            {
              url: '../../../public/img/icon-512.png',
              alt: 'Lobo Trips',
            },
          ],
          site_name: 'Lobo Trips',
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
