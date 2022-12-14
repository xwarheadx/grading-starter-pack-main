import * as S from './quests-filter.styled';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestGenresName } from '../../../../const';
import { useAppDispatch } from 'hooks';
import { changeGenre } from 'store/app-process/app-process';

type QuestFilterPropsType = {
  activeQuestGenre: string;
}

const createGenreIcon = (genre: string) => {
  switch(genre){
    case 'all-quests':
      return <IconAllQuests />;
    case 'adventures':
      return <IconAdventures />;
    case 'horror':
      return <IconHorrors />;
    case 'mystic':
      return <IconMystic />;
    case 'detective':
      return <IconDetective />;
    case 'sci-fi':
      return <IconScifi />;
    default:
      throw new Error(`${genre} не существует`);
  }
};

function QuestFilter({activeQuestGenre} : QuestFilterPropsType) : JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <S.Tabs>
      {Object.keys(QuestGenresName).map((genre) => {
        const isActive = activeQuestGenre === genre;

        return (
          <S.TabItem key={genre} onClick={() => {
            dispatch(changeGenre(genre));
          }}
          >
            <S.TabBtn isActive={isActive}>
              {createGenreIcon(genre)}
              <S.TabTitle>{QuestGenresName[genre]}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );}
      )}
    </S.Tabs>
  );
}
export default QuestFilter;
