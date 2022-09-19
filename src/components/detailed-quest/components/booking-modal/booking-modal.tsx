import * as S from './booking-modal.styled';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ClickAwayListener from 'react-click-away-listener';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { LoadingStatus, PHONE_NUMBER_FORMAT, PHONE_NUMBER_LENGTH } from '../../../../const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getPostSendingStatus } from 'store/order-data/selectors';
import { sendOrderPostAction } from 'store/api-actions';
import { OrderPostType } from 'types/types';

type BookingModalPropsType = {
  setIsBookingModalOpened: (status: boolean) => void;
  peopleCount: [number, number];
}

function BookingModal({ setIsBookingModalOpened, peopleCount} : BookingModalPropsType) : JSX.Element {
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector(getPostSendingStatus);

  const [isFormDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    switch (sendingStatus) {
      case LoadingStatus.Fulfilled:
        setFormDisabled(false);
        setIsBookingModalOpened(false);
        break;
      case LoadingStatus.Pending:
        setFormDisabled(true);
        break;
      case LoadingStatus.Rejected:
        setFormDisabled(false);
        break;
      case LoadingStatus.Idle:
        setFormDisabled(false);
        break;
      default:
        throw new Error(`sendingStatus-${sendingStatus} dosn't exist`);
    }
  }, [sendingStatus, setIsBookingModalOpened]);

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<OrderPostType>({
    mode: 'all'
  });

  const onSubmit = (order: OrderPostType) => dispatch(sendOrderPostAction(order));
  return(
    <S.BlockLayer>
      <ClickAwayListener onClickAway={() => setIsBookingModalOpened(false)}>
        <S.Modal>
          <S.ModalCloseBtn onClick={() => setIsBookingModalOpened(false)}>
            <IconClose width="16" height="16" />
            <S.ModalCloseLabel>
            Закрыть окно
            </S.ModalCloseLabel>
          </S.ModalCloseBtn>
          <S.ModalTitle>Оставить заявку</S.ModalTitle>
          <S.BookingForm
            action="#"
            method="post"
            id="booking-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
              <S.BookingInput
                type="text"
                id="booking-name"
                placeholder="Имя"
                {...register('name', {
                  required: 'Поле обязательно к заполнению!'
                })}
                required
              />
              {errors?.name?.message}
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон +7...
              </S.BookingLabel>
              <S.BookingInput
                type="tel"
                id="booking-phone"
                placeholder="Телефон"
                {...register('phone', {
                  required: 'Поле обязательно к заполнению!',
                  pattern: {
                    value: PHONE_NUMBER_FORMAT,
                    message: 'Неверный формат ввода'
                  },
                  minLength: {
                    value: PHONE_NUMBER_LENGTH,
                    message: 'Телефон должен содержать ровно 10 символов!'
                  },
                  maxLength: {
                    value: PHONE_NUMBER_LENGTH,
                    message: 'Телефон должен содержать ровно 10 символов!'
                  }
                })}
              />
              {errors?.phone?.message}
            </S.BookingField>
            <S.BookingField>
              <S.BookingLabel htmlFor="booking-people">
            Количество участников
              </S.BookingLabel>
              <S.BookingInput
                type="number"
                id="booking-people"
                placeholder="Количество участников"
                {...register('peopleCount', {
                  required: 'Поле обязательно к заполнению!',
                  valueAsNumber: true,
                  min: {
                    value: peopleCount[0],
                    message: `${'Недостаточно участников! Необходимо минимум'} ${peopleCount[0]} участников`
                  },
                  max: {
                    value: peopleCount[1],
                    message: `${'Участников слишком много! Максимум'} ${peopleCount[1]} участников`
                  }
                })}
              />
              {errors?.peopleCount?.message}
            </S.BookingField>
            <S.BookingSubmit type="submit" disabled={isFormDisabled || !isValid}>
              {isFormDisabled ? 'Отправка...' : 'Отправить заявку'}
            </S.BookingSubmit>
            <S.BookingCheckboxWrapper>
              <S.BookingCheckboxInput
                type="checkbox"
                id="booking-legal"
                {...register('isLegal', {
                  required: 'Необходимо согласиться с условиями!'
                })}
              />
              {errors?.isLegal?.message}
              <S.BookingCheckboxLabel
                className="checkbox-label"
                htmlFor="booking-legal"
              >
                <S.BookingCheckboxText>
              Я согласен с{' '}
                  <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
                  </S.BookingLegalLink>
                </S.BookingCheckboxText>
              </S.BookingCheckboxLabel>
            </S.BookingCheckboxWrapper>
          </S.BookingForm>
        </S.Modal>
      </ClickAwayListener>
    </S.BlockLayer>
  );
}

export default BookingModal;
