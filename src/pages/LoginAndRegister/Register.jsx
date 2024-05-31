import React from 'react';
import Lottie from 'lottie-react';
import RobotAnimation from '../../assets/animation/RobotAnimation.json';
import WelcomeAnimation from '../../assets/animation/WelcomeAnimation.json';
import FormRegister from '../../components/Form/FormRegister/FormRegister';
import style from './register.module.css';
const Register = () => {
  return (
    <div className={`grid h-screen bg-black ${style.gridAll}`}>
      {/* animation  */}
      <div className={`${style.lottieCenter} ${style.displayNone}`}>
        <Lottie
          animationData={RobotAnimation}
          loop={true}
          className={style.robots}
        />
        <Lottie
          animationData={WelcomeAnimation}
          loop={true}
          className={style.welcome}
        />
      </div>
      {/* form  */}
      <div>
        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
