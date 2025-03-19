import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState();

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    await createUser(email, password);

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
