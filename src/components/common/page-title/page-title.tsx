import * as S from './page-title.styled';
import { CommonProps } from '../../../types/types';

function PageTitle({ children, ...props } : CommonProps) : JSX.Element {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

export default PageTitle;
