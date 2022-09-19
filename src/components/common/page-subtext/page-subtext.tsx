import * as S from './page-subtext.styled';
import { CommonProps } from '../../../types/types';

function PageSubtext({ children, ...props } : CommonProps) : JSX.Element {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
}

export default PageSubtext;
