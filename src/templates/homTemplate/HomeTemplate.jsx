import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import HomePage from '../../pages/homePage/HomePage';

const HomeTemplate = () => {
  return (
    <div className='bg-black w-full h-screen '>
      <Header />
      <HomePage  />   
      <Footer/>
    </div>
  );
};

export default HomeTemplate;
