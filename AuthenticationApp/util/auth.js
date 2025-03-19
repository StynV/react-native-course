import axios from 'axios';

const API_KEY = 'AIzaSyBU1UspouZtVsQt8fAs9fmP5TFKWv-3_Vc';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const result = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(result.data);
};

export const createUser = async (email, password) => {
  authenticate('signUp', email, password);
};

export const login = async (email, password) => {
  authenticate('signInWithPassword', email, password);
};
