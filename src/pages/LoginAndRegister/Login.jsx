import React from 'react';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/animation/LoginAnimation.json';
import FormLogin from '../../components/Form/FormLogin/FormLogin';
import style from './register.module.scss';
const Login = () => {
  return (
    <div className={`grid h-screen bg-black ${style.gridAll}`}>
      {/* animation  */}
      <div className={style.displayNone}>
        <Lottie
          animationData={loginAnimation}
          loop={false}
          className="h-full "
        />
      </div>
      {/* form  */}
      <div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
