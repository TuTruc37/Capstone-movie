import React from 'react';
import Lottie from 'lottie-react';
import RobotAnimation from '../../assets/animation/RobotAnimation.json';
import WelcomeAnimation from '../../assets/animation/WelcomeAnimation.json';
import FormRegister from '../../components/Form/FormRegister/FormRegister';
import style from './register.module.css';
const Register = () => {
  return (
    <div className="grid grid-cols-2 gap-10 h-screen bg-black">
      {/* animation  */}
      <div>
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
