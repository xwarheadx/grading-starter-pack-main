import * as S from './container.styled';
import { CommonProps } from '../../../types/types';

function Container ({ children, ...props } : CommonProps) : JSX.Element
{ return <S.Container {...props}>{children}</S.Container>;
}

export default Container;
