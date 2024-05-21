import React, { useEffect, useState } from 'react'
import { quanLyPhimSer } from '../../services/quanLyPhimSer';

const Trailer = () => {
  const [arrTrailer, setArrTrailer] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    quanLyPhimSer
      .layDanhSachTrailer()
      .then((res) => {
        console.log(res);
        setArrTrailer(res.data.content);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to load videos. Please try again later.');
      })
  }, []);
  return (
    <div>
      {error && <div>{error}</div>}
      <div>
        {arrTrailer.length > 0 ? (
          arrTrailer.map((video, index) => (
            <div key={index}>
              <video width="320" height="240" controls>
                <source src={video.trailer} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <div>No videos available.</div>
        )}
      </div>



    </div>
  )
}

export default Trailer