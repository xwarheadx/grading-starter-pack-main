import styled from 'styled-components';
import { Container, Link as RouterLink, PageTitle }from 'components/common/common';

export const Link = styled(RouterLink)`
display: block;
max-width: 250px;
font-size: ${({ theme }) => theme.font.upperbase};
line-height: 16px;
letter-spacing: 0.03em;
font-weight: 800;
color: ${({ theme }) => theme.color.whiteSmoke};
padding: 20px;
background-color: ${({ theme }) => theme.color.carrotOrange};
border-radius: 10px;
text-align: center;
margin: 0 auto;
&:focus,
&:hover {
  color: ${({ theme }) => theme.color.eclipse};
}
`;

export const ErrorText = styled(PageTitle)`
font-size: ${({ theme }) => theme.font.upperbase};
text-align: center;
padding-bottom: 50px;
font-weight: 600;
line-height: 200%;
`;

export const Main = styled(Container)`
max-width: 1080px;
margin-top: 120px;
margin-bottom: 120px;
@media (max-width: 1150px) {
  display: flex;
  flex-direction: column;
  max-width: initial;
  padding-left: 32px;
  padding-right: 33px;
}
&:after {
  content: '';
  z-index: 4;
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background: linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%);
  opacity: 0.8;
  pointer-events: none;
}
`;
