import React from 'react';
import HighlightCard from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/59187401?v=4' }} />

            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Josué</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransacrion="Última entrada dia 13 de abril"
          />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransacrion="Última entrada dia 03 de abril"
          />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransacrion="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
      </Transactions>
    </Container>
  );
}

export default Dashboard;