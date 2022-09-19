import { LoadingStatus, NameSpace } from '../../const';
import { StateType } from 'types/state-type';

export const getPostSendingStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.Orders].orderPostSendingStatus;
