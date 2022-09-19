import * as S from './page-heading.styled';
import { CommonProps } from '../../../types/types';

function PageHeading({ children, ...props } : CommonProps) : JSX.Element {
  return <S.PageHeading {...props}>{children}</S.PageHeading>;
}

export default PageHeading;
