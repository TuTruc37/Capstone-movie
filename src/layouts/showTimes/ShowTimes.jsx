import { Tabs } from 'antd';
import { useEffect, useState, memo } from 'react';
import { listCinema } from '../../services/listCinema';
import './showTimes.scss';
import ListCinemas from '../../components/listCinemas/ListCinemas';

const ShowTimes = () => {
  const [arrCinema, setArrCinema] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCinema
      .getListCinema()
      .then(res => {
        if (res.data && res.data.content) {
          setArrCinema(res.data.content);
        } else {
          console.error('Unexpected response format', res);
        }
      })
      .catch(err => {
        console.error('Error fetching cinema systems', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderTabItems = () => {
    return arrCinema.map((item, index) => ({
      label: <img className="w-16" src={item.logo} alt={item.tenHeThongRap} />,
      key: index,
      children: <ListCinemas idCinema={item.maHeThongRap} />,
    }));
  };

  return (
    <div className="mt-20 py-10 showTimes">
      <div className="mx-auto container space-y-14 ">
        <h2 className="text-center text-5xl font-semibold text-gray-300 text-opacity-55 tracking-widest">
          CINEMAS
        </h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <Tabs tabPosition="top" items={renderTabItems()} />
        )}
      </div>
    </div>
  );
};

export default ShowTimes;
