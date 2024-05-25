import React, { useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { quanLyPhimSer } from '../../services/quanLyPhimSer';

const TrailerVideo = () => {
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
        <>
            <div>
                {error && <div>{error}</div>}
                <div>
                    {arrTrailer.length > 0 ? (
                        arrTrailer.map((video, index) => (
                            <div className='bg-slate-900' key={index}>                                
                                <div>
                                    <video id="my-player" className="video-js" controls preload="auto" data-setup="{}">
                                        <source src={video.trailer} type="video/mp4" />
                                        <source src={video.trailer} type="video/webm" />
                                        <source src={video.trailer} type="video/ogg" />
                                        <p className="vjs-no-js">
                                            To view this video please enable JavaScript, and consider upgrading to a
                                            web browser that
                                            <a href="https://videojs.com/html5-video-support/" target="_blank">
                                                supports HTML5 video
                                            </a>
                                        </p>
                                    </video>

                                </div>





                            </div>
                        ))
                    ) : (
                        <div>No videos available.</div>
                    )}
                </div>
            </div>

        </>


    )
}

export default TrailerVideo