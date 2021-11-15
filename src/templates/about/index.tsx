import LinkWrapper from 'components/LinkWrapper';
import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Body, Content, Heading } from './styles';

const AboutTemplate = () => {
  return (
    <Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <Heading>Nice Trips!</Heading>
      <Body>
        This site intend to <span>inspire</span> people to <span>dream </span>
        with outstanding places around the world!
      </Body>
    </Content>
  );
};

export default AboutTemplate;
