import { Text, View } from 'react-native';

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <View>
        <Text>{periodName}</Text>
        <Text>${expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;
