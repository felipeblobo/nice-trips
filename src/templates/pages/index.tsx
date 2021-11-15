import LinkWrapper from 'components/LinkWrapper';
import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Body, Content, Heading } from './styles';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <Heading>{heading}</Heading>
      <Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Body>
    </Content>
  );
};

export default PageTemplate;
