// EditFilm.jsx
import React, { useContext, useEffect, useState } from 'react';
import InputCustom from '../../../components/Input/InputCustom';
import { DatePicker, Rate, Switch } from 'antd';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { quanLyPhimServ } from '../../../services/quanLyPhimServ';
import { AlertContext } from '../../../App';
import moment from 'moment'; 

const EditFilm = () => {
  const { maPhim } = useParams();
  const { handleAlert } = useContext(AlertContext);
  const [image, setImage] = useState('');
  const [showImage, setShowImage] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setTouched,
    setValues,
    isValid,
  } = useFormik({
    initialValues: {
      maPhim: 0,
      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: 'GP01',
      ngayKhoiChieu: '',
      sapChieu: true,
      dangChieu: true,
      hot: true,
      danhGia: 0,
      hinhAnh: '',
    },
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      for (let key in values) {
        if (key === 'hinhAnh' && values.hinhAnh) {
          formData.append('File', values[key]);
        } else {
          formData.append(key, values[key]);
        }
      }
      const objectTouched = {};
      for (let key in values) {
        objectTouched[key] = true;
      }
      setTouched(objectTouched);
      if (isValid) {
        quanLyPhimServ
          .CapNhatPhimUpload(formData)
          .then(res => {
            handleAlert('success', 'Cập nhật phim thành công');
            resetForm();
          })
          .catch(err => {
            handleAlert('error', err.response.data.content);
          });
      }
    },
  });

  useEffect(() => {
    if (maPhim) {
      quanLyPhimServ
        .layThongTinPhim(maPhim)
        .then(res => {
          setValues(res.data.content);
        })
        .catch(err => {
          handleAlert('error', 'Lấy thông tin phim thất bại');
        });
    }
  }, [maPhim]);

  const cancelImage = () => {
    setImage('');
    setShowImage(false);
    setFieldValue('hinhAnh', '');
  };

  return (
    <div className="py-16">
      <h1 className="text-2xl font-bold">Trang chỉnh sửa phim</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputCustom
            value={values.tenPhim}
            name="tenPhim"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Tên phim"
            placeholder="Nhập tên phim"
            error={errors.tenPhim}
            touched={touched.tenPhim}
          />
          <InputCustom
            value={values.trailer}
            name="trailer"
            handleChange={handleChange}
            handleBlur={handleBlur}
            label="Trailer"
            placeholder="Nhập trailer"
            error={errors.trailer}
            touched={touched.trailer}
          />
          <div className="flex justify-between col-span-2">
            <div>
              <label htmlFor="" className="block mb-2">
                Ngày khởi chiếu
              </label>
              <DatePicker
                format="DD-MM-YYYY"
                value={values.ngayKhoiChieu ? moment(values.ngayKhoiChieu, "DD-MM-YYYY") : null}
                onChange={(date, dateString) => setFieldValue('ngayKhoiChieu', dateString)}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Đang chiếu
              </label>
              <Switch
                checked={values.dangChieu}
                onChange={checked => setFieldValue('dangChieu', checked)}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu
              </label>
              <Switch
                checked={values.sapChieu}
                onChange={checked => setFieldValue('sapChieu', checked)}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Hot
              </label>
              <Switch
                checked={values.hot}
                onChange={checked => setFieldValue('hot', checked)}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá (trên thang điểm 10, mỗi ngôi sao 2đ)
              </label>
              <Rate
                value={values.danhGia / 2}
                onChange={value => setFieldValue('danhGia', value * 2)}
                allowHalf
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block" htmlFor="">
              Mô tả
            </label>
            <textarea
              name="moTa"
              value={values.moTa}
              onChange={handleChange}
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="col-span-2">
            {showImage && (
              <>
                <label htmlFor="">Hình ảnh phim</label>
                <img className="w-40" src={image} alt="" />
                <button className="py-2 px-4 rounded text-white bg-red-600 mr-3" onClick={cancelImage}>
                  X
                </button>
              </>
            )}
            {!showImage && (
              <>
                <input
                  name="hinhAnh"
                  onChange={event => {
                    const img = event.target.files[0];
                    if (img) {
                      const urlImg = URL.createObjectURL(img);
                      setImage(urlImg);
                      setShowImage(true);
                      setFieldValue('hinhAnh', img);
                    }
                  }}
                  type="file"
                  accept="image/*"
                />
              </>
            )}
          </div>
          <div>
            <button className="py-2 px-5 bg-yellow-500 text-white rounded" type="submit">
              Cập nhập
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFilm;
