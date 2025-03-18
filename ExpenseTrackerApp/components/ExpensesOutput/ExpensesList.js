import { FlatList, Text } from 'react-native';

const renderExpenseItem = itemData => <Text>{itemData.item.description}</Text>;

const ExpensesList = ({ expenses }) => (
  <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={item => item.id} />
);

export default ExpensesList;
