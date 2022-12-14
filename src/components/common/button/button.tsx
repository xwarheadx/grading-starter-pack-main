import * as S from './button.styled';

type ButtonPropsType = {
  children?: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...props } : ButtonPropsType) : JSX.Element {
  return <S.Button {...props}>{children}</S.Button>;
}

export default Button;
