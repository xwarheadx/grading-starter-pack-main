import * as S from './error-screen.styled';
import { AppRoute } from 'const';
import { MainLayout } from 'components/common/common';

function ErrorScreen() : JSX.Element {
  return(
    <MainLayout>
      <S.Main>
        <S.ErrorText>СЕРВИС ВРЕМЕННО НЕ ДОСТУПЕН</S.ErrorText>
        <S.Link to={AppRoute.MAIN}>На главную</S.Link>
      </S.Main>
    </MainLayout>
  );}

export default ErrorScreen;
