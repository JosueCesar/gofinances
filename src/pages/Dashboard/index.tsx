import React from 'react';

import HighlightCard from '../../components/HighlightCard';
import TransactionCard, { TransactionProps } from '../../components/TransactionCard';

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
  TransactionsListing,
} from './styles';

export interface TransactionDataProps extends TransactionProps {
  id: string;
}

const Dashboard: React.FC = () => {
  const data: TransactionDataProps[] = [
    {
      id: '43erfd',
      type: "income",
      title: "Desenvolvimento de Software",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/04/2020",
    },
    {
      id: 'jedtgy',
      type: "outcome",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "13/04/2020",
    },
    {
      id: 'uj6e4f',
      type: "outcome",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag"
      },
      date: "13/04/2020",
    },
  ]

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

        <TransactionsListing
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;