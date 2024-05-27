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
                                    <iframe
                                        width="700"
                                        height="500"
                                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.trailer)}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    ></iframe>

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

function getYouTubeVideoId(url) {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
}


export default TrailerVideo