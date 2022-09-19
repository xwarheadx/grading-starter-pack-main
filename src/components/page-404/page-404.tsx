import * as S from './page-404.styled';
import { MainLayout } from 'components/common/common';
import { AppRoute } from 'const';

function Page404() : JSX.Element {
  return(
    <MainLayout>
      <S.Main>
        <S.ErrorText>СТРАНИЦА НЕ НАЙДЕНА</S.ErrorText>
        <S.Link to={AppRoute.MAIN}>На главную</S.Link>
      </S.Main>
    </MainLayout>
  );}

export default Page404;
