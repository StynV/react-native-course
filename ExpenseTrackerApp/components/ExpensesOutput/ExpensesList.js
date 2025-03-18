import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = itemData => <ExpenseItem {...itemData.item} />;

const ExpensesList = ({ expenses }) => (
  <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={item => item.id} />
);

export default ExpensesList;
