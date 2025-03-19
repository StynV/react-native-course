import axios from 'axios';

const API_KEY = 'AIzaSyBU1UspouZtVsQt8fAs9fmP5TFKWv-3_Vc';

export const createUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
};
