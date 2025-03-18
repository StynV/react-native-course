import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const ExpensesOutput = ({ expenses, expensesPeriod }) => (
  <View style={styles.container}>
    <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />

    <ExpensesList expenses={expenses} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default ExpensesOutput;
