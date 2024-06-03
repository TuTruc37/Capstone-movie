import React, { useContext, useState } from 'react';
import color from './Profile.module.scss';
import InputCustom from '../../components/Input/InputCustom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { quanLyNguoiDungServ } from '../../services/quanLyNguoiDungServ';
import { AlertContext } from '../../App';
import { handleSetValueLocalStore } from '../../utils/utils';
import HistoryData from '../../layouts/HistoryData/HistoryData';
const Profile = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = index => {
    setToggleState(index);
    // console.log(toggleState);
    // console.log(index);
  };

  const { handleAlert } = useContext(AlertContext);
  const { handleChange, handleBlur, errors, values, handleSubmit, touched } =
    useFormik({
      initialValues: {
        // initialValues đóng vai trò quản lí dữ liệu mặc định cho các input
        taiKhoan: '',
        email: '',
        matKhau: '',
        soDt: '',
        hoTen: '',
        maNhom: 'GP06',
      },
      // onSubmit là phương thức chạy khi form được submit
      onSubmit: async values => {
        console.log(values); //lấy được dữ liệu vừa nhập của các input nhưng bị báo lỗi là Bạn không có quyền thay đổi tài khoản người khác !
        try {
          const res = await quanLyNguoiDungServ.CapNhatThongTinNguoiDung(
            values
          );
          handleAlert('success', 'Cập nhập thành công');
          // gọi hàm xử lí load lại dữ liệu mới từ backend
          handleSetValueLocalStore('dataUser', res.data.content);
        } catch (err) {
          console.log(err);
          handleAlert('error', err.response.data.content);
        }
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required('Vui lòng không bỏ trống')
          .min(5, 'Vui lòng nhập tối thiêu 5 ký tự'),
        email: Yup.string()
          .required('Vui lòng không bỏ trống')
          .email('Vui lòng nhập đúng email'),
        soDt: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            'Đây không phải số điện thoại'
          ),
        hoTen: Yup.string().required('Vui lòng không bỏ trống'),
        matKhau: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            // tạo một mật khẩu có ít nhất 8 ký tự bao gồm 1 ký tự viết hoa 1 ký tự đặc biệt và số
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            'Vui lòng nhập mật khẩu bao gồm ít nhất 1 ký tự viết hoa và số'
          ),
      }),
    });

  return (
    <div>
      <div>
        <h1 className="bg-black text-white pl-28 py-10 text-lg">
          Cài đặt tài khoản
        </h1>
      </div>
      {/* Navs-tab */}
      <div className="container">
        <div className={`${color.blocTabs}`}>
          <div
            className={
              toggleState === 1
                ? `${color.tabs} ${color.activeTabs}`
                : `${color.tabs}`
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            Thông tin tài khoản
          </div>
          <div
            className={
              toggleState === 2
                ? `${color.tabs} ${color.activeTabs}`
                : `${color.tabs}`
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            Lịch sử đặt vé
          </div>
        </div>
        <div className="contentTabs">
          <div
            className={
              toggleState === 1
                ? `${color.content} ${color.activeContent}`
                : `${color.content}`
            }
          >
            <div>
              <form onSubmit={handleSubmit} className="space-y-5 w-full ">
                <div className="grid grid-cols-2 gap-5 ">
                  <InputCustom
                    label="Tài khoản"
                    name="taiKhoan"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Vui lòng nhập tài khoản"
                    error={errors.taiKhoan}
                    touched={touched.taiKhoan}
                    value={values.taiKhoan}
                    labelColor="text-black"
                  />
                  <InputCustom
                    label="Email"
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Vui lòng nhập email"
                    error={errors.email}
                    touched={touched.email}
                    value={values.email}
                    labelColor="text-black"
                  />
                  <InputCustom
                    label="Số điện thoại"
                    name="soDt"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Vui lòng nhập số điện thoại"
                    error={errors.soDt}
                    touched={touched.soDt}
                    value={values.soDt}
                    labelColor="text-black"
                  />
                  <InputCustom
                    label="Họ tên"
                    name="hoTen"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Vui lòng nhập họ tên"
                    error={errors.hoTen}
                    touched={touched.hoTen}
                    value={values.hoTen}
                    labelColor="text-black"
                  />
                  <InputCustom
                    label="Mật khẩu"
                    name="matKhau"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Vui lòng nhập mật khẩu"
                    type="password"
                    error={errors.matKhau}
                    touched={touched.matKhau}
                    className="col-span-2"
                    value={values.matKhau}
                    labelColor="text-black"
                  />
                </div>
                <div>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white px-5 py-2 rounded-md w-full text-center"
                    type="submit"
                  >
                    Cập nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? `${color.content} ${color.activeContent}`
                : `${color.content}`
            }
          >
            <HistoryData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
