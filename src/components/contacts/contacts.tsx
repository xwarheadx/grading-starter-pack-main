import * as S from './contacts.styled';
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';

function Contacts() : JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                Санкт-Петербург,
                  <br />
                Набережная реки Карповки, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <iframe
                title="Мы находимся по адресу Санкт-Петербург, Набережная реки Карповки, д 5"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4280934bece617e33d8acf0324e860dd4905035edd280998c42dd10bf4cbf33&amp;source=constructor"
                width="649"
                height="336"
              />
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

export default Contacts;
