import QuestItem from '../quest-item/quest-item';
import QuestFilter from '../quest-filter/quest-filter';
import { useAppSelector } from 'hooks';
import { getActiveGenre } from 'store/app-process/selectors';

function QuestsCatalog() : JSX.Element {
  const activeQuestGenre = useAppSelector(getActiveGenre);

  return (
    <>
      <QuestFilter activeQuestGenre={activeQuestGenre} />
      <QuestItem />
    </>
  );}

export default QuestsCatalog;
