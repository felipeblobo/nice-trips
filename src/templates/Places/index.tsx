import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Body, Container, Gallery, Heading, Wrapper } from './styles';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { NextSeo } from 'next-seo';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - Lobo Trips`}
        description={place.description.html}
        openGraph={{
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <Wrapper>
        <Container>
          <Heading>{place.name}</Heading>
          <Body dangerouslySetInnerHTML={{ __html: place.description.html }} />
          <Gallery>
            {place.gallery.map((image, index) => (
              <Image
                width={1000}
                height={600}
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                quality={75}
                objectFit="contain"
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  );
}
