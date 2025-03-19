const { default: axios } = require('axios');

const BACKEND_URL = 'https://react-native-1ec13-default-rtdb.europe-west1.firebasedatabase.app/';

export const storeExpense = async expenseData => {
  try {
    const response = await axios.post(BACKEND_URL + 'expenses.json', expenseData);
    return response.data;
  } catch (error) {
    console.error('Error storing expense: ', error);
    throw error;
  }
};

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}expenses.json`);

    if (!response.data) {
      return [];
    }

    const expenses = Object.keys(response.data).map(key => ({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    }));

    return expenses;
  } catch (error) {
    console.error('Error fetching expense: ', error);
    throw error;
  }
};
