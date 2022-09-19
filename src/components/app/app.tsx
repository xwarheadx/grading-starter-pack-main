import * as S from './app.styled';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './common';
import { useAppSelector } from 'hooks';
import { getQuestsDataLoadedStatus } from 'store/quests-data/selectors';
import { AppRoute, LoadingStatus } from '../../const';
import { Routes, Route, HistoryRouter } from 'components/common/common';
import browserHistory from 'components/browser-history';
import ErrorScreen from 'components/error-screen/error-screen';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import Page404 from 'components/page-404/page-404';
import LoadingComponent from 'components/loading-component/loading-component';


function App() : JSX.Element {
  const questsLoadingStatus = useAppSelector(getQuestsDataLoadedStatus);

  if (
    questsLoadingStatus === LoadingStatus.Idle ||
    questsLoadingStatus === LoadingStatus.Pending
  ) {
    return <LoadingComponent />;
  }

  if (questsLoadingStatus === LoadingStatus.Rejected) {
    return <ErrorScreen />;
  }
  return (
    <HistoryRouter history={browserHistory}>
      <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
        <Routes>
          <Route path={AppRoute.QUEST} element={<DetailedQuest />} />
          <Route path={AppRoute.CONTACTS} element={<Contacts />} />
          <Route path={AppRoute.MAIN} element={<Home />} />
          <Route path={AppRoute.PAGE404} element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </HistoryRouter>
  );
}

export default App;
