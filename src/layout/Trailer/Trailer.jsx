import React, { useEffect, useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { quanLyPhimSer } from '../../services/quanLyPhimSer';
import { PlayCircleOutlined } from '@ant-design/icons';
import TrailerVideo from './TrailerVideo';


const Trailer = () => {
  const [arrTrailer, setArrTrailer] = useState([]);
  const [error, setError] = useState(null);
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }


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
                <img className='opacity-60 hover:opacity-25 h-1/4 mx-96 ' src={video.hinhAnh} alt="nguoivocuoicung" />
              </div>
            ))
          ) : (
            <div>No videos available.</div>
          )}
        </div>
      </div>


      <div className="fixed absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-3xl bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
        <PlayCircleOutlined style={{fontSize: '50px'}}/>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">                  
                  <div className="mt-2">
                    <TrailerVideo/>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Trailer