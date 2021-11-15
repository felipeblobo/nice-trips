import { ReactNode } from 'react';
import { Wrapper } from './styles';
import Link from 'next/link';

type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <Wrapper>
      <Link href={href}>{children}</Link>
    </Wrapper>
  );
};

export default LinkWrapper;
