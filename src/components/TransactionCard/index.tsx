import React from 'react';

import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionProps {
  type: 'income' | 'outcome';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface TransactionCardProps {
  data: TransactionProps;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  data: {
    type,
    title,
    amount,
    category,
    date,
  }
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Amount type={type}>
        { type === 'outcome' && '- ' }
        { amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}

export default TransactionCard;