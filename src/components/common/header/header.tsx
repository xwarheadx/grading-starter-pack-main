import * as S from './header.styled';
import logo from 'assets/img/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';

function Header() : JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (currentRoute: string): boolean => location.pathname === currentRoute;

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo onClick={() => navigate(AppRoute.MAIN)}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link $isActiveLink={isActive(AppRoute.MAIN)} to={AppRoute.MAIN}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link $isActiveLink={isActive(AppRoute.CONTACTS)} to={AppRoute.CONTACTS}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
