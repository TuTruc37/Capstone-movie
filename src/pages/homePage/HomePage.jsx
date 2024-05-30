import ListEvents from '../../components/listEvents/ListEvents';
import Banner from '../../layouts/banner/Banner';
import ListMovie from '../../layouts/listMovie/ListMovie';
import ShowTimes from '../../layouts/showTimes/ShowTimes';

const HomePage = () => {
  return (
    <div className="bg-black">
      <Banner />
      <ListMovie />
      <ShowTimes />
      <ListEvents />
    </div>
  );
};

export default HomePage;
