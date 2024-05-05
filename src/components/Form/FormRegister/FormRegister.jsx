import React, { useContext } from 'react';
import { useFormik } from 'formik';
import InputCustom from '../../Input/InputCustom';
import * as Yup from 'yup';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
import { AlertContext } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../../common/path';
import { handleSetValueLocalStore } from '../../../utils/utils';
import { useDispatch } from 'react-redux';
import { handleGetValue } from '../../../redux/slice/userSlice';

const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      onSubmit: async (values, { resetForm }) => {
        console.log(values);
        // khi sử dụng async await luôn có một try catch bọc lại để bắt các vấn đề về lỗi

        try {
          const res = await quanLyNguoiDungServ.dangKy(values);
          // console.log(res);
          handleAlert('success', 'Đăng ký thành công');
          navigate(path.dangNhap);
          // gọi hàm xử lí load lại dữ liệu mới từ backend
          handleSetValueLocalStore('dataUser', res.data.content);
          dispatch(handleGetValue(res.data.content));
          // đưa tất cả dữ liệu về mặc định
          resetForm();
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
    <div className="flex items-center justify-center h-full w-2/3 text-white">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <h1 className="md:text-2xl font-bold leading-tight mt-12">
          Tạo tài khoản riêng của bạn
        </h1>

        <InputCustom
          label="Tài khoản"
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          placeholder="Vui lòng nhập tài khoản"
          error={errors.taiKhoan}
          touched={touched.taiKhoan}
          value={values.taiKhoan}
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
        />

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-full text-center"
            type="submit"
          >
            Đăng Ký
          </button>
          <p className="mt-8">
            Bạn đã có tài khoản?
            <Link
              to={path.dangNhap}
              className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
