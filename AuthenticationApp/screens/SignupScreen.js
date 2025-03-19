import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';
import { Alert } from 'react-native';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState();

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user, please check your input.');
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
