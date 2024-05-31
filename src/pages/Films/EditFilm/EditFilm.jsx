import React, { useContext, useEffect, useState } from 'react';
import InputCustom from '../../../components/Input/InputCustom';
import { DatePicker, Rate, Switch } from 'antd';
import { useFormik } from 'formik';
import { quanLyPhimServ } from '../../../services/quanLyPhimServ';
import { AlertContext } from '../../../App';
const EditFilm = () => {
  const [image, setImage] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [updateUser, setUpdateUser] = useState({});
  useEffect(() => {
    setValues({ ...updateUser, maPhim: updateUser.maPhim });
  }, [updateUser]);
  const handleUpdateUser = user => {
    console.log(user);
    setUpdateUser(user);
  };

  const { handleAlert } = useContext(AlertContext);
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
      console.log(values);
      // tạo đối tượng formData
      const formData = new FormData();
      // thực hiện sử dụng vòng lặp for in để truyền dữ liệu vào formData
      for (let key in values) {
        if (key == 'hinhAnh') {
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
            console.log(res);
            handleAlert('success', 'Đăng ký thành công');
            resetForm();
          })
          .catch(err => {
            console.log(err);
            handleAlert('error', err.response.data.content);
          });
      }
    },
    // validationSchema: {},
  });
  // Function to reset the image and hide it
  const cancelImage = () => {
    setImage('');
    setShowImage(false);
    setFieldValue('hinhAnh', ''); // Reset the value of the "hinhAnh" field in formik
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
            {/* Ngày khởi chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Ngày khởi chiếu
              </label>
              {/* về nhà validation dữ liệu của datepicker nếu người dùng chọn ngày trong quá khứ sẽ báo lỗi  */}
              <DatePicker
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  // console.log(date);
                  // console.log(dateString);
                  setFieldValue('ngayKhoiChieu', dateString);
                }}
              />
            </div>
            {/* Đang chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đang chiếu
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('dangChieu', checked);
                  // console.log(event.target.value);
                }}
                value={values.dangChieu}
              />
            </div>
            {/* Sắp chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('sapChieu', checked);
                  // console.log(event.target.value);
                }}
                value={values.sapChieu}
              />
            </div>
            {/* Hot */}
            <div>
              <label htmlFor="" className="block mb-2">
                Hot
              </label>
              <Switch
                onChange={checked => {
                  console.log(checked);
                  setFieldValue('hot', checked);
                  // console.log(event.target.value);
                }}
                value={values.hot}
              />
            </div>
            {/* Đánh giá  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá (trên thang điểm 10, mỗi ngôi sao 2đ)
              </label>
              <Rate
                onChange={value => {
                  console.log(value * 2);
                  setFieldValue('danhGia', value * 2);
                }}
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
              onChange={handleChange}
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="col-span-2">
            {/* Uploaded image */}
            {showImage && (
              <>
                <label htmlFor="">Hình ảnh phim</label>
                <img className="w-40" src={image} alt="" />
                <button
                  className="py-2 px-4 rounded text-white bg-red-600 mr-3"
                  onClick={cancelImage} // Call the cancelImage function on button click
                >
                  X
                </button>
              </>
            )}
            {/* Input for selecting a new image */}
            {!showImage && (
              <>
                <input
                  name="hinhAnh"
                  onChange={event => {
                    const img = event.target.files[0];
                    if (img) {
                      const urlImg = URL.createObjectURL(img);
                      console.log(urlImg);
                      setImage(urlImg);
                      setShowImage(true); // Show the uploaded image
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
            <button
              className="py-2 px-5 bg-yellow-500 text-white rounded"
              type="submit"
            >
              Cập nhập
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFilm;
