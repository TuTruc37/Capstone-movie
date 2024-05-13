import Header from '../../layouts/header/Header';
import HomePage from '../../pages/homePage/HomePage';

const HomeTemplate = () => {
  return (
    <div className='bg-black w-full h-screen '>
      <Header />
      <HomePage  />
    </div>
  );
};

export default HomeTemplate;
