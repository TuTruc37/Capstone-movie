import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/animation/LoginAnimation.json';
import FormLogin from '../../components/Form/FormLogin/FormLogin';
const Login = () => {
  return (
    <div className="grid grid-cols-2 gap-10 h-screen bg-black">
      {/* animation  */}
      <div>
        <Lottie animationData={loginAnimation} loop={false} />
      </div>
      {/* form  */}
      <div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
