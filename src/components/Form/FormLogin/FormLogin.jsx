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
import styles from '../FormRegister/formRegister.module.scss';
const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleAlert } = useContext(AlertContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: '',
        matKhau: '',
      },
      onSubmit: async values => {
        // khi sử dụng async await luôn có một try catch bọc lại để bắt các vấn đề về lỗi
        try {
          const res = await quanLyNguoiDungServ.dangNhap(values);
          console.log(res);
          handleAlert('success', 'Đăng nhập thành công');
          navigate(path.trangChu);
          handleSetValueLocalStore('dataUser', res.data.content);
          dispatch(handleGetValue(res.data.content));
        } catch (error) {
          console.log(error);
          handleAlert('error', error.response.data.content);
        }
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required('Vui lòng không bỏ trống')
          .min(5, 'Vui lòng nhập tối thiêu 5 ký tự'),
        matKhau: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            // tạo một mật khẩu có ít nhất 8 ký tự bao gồm 1 ký tự viết hoa 1 ký tự đặc biệt và số
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            'Vui lòng nhập mật khẩu bao gồm ít nhất 8 ký tự bao gồm 1 ký tự viết hoa và số'
          ),
      }),
    });
  return (
    <div
      className={`flex items-center justify-center h-full lg:w-2/3 text-white md:w-11/12 ${styles.endBeautiful}`}
    >
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <h1 className="md:text-2xl font-bold leading-tight mt-12">
          Đăng nhập vào tài khoản của bạn
        </h1>
        <InputCustom
          label="Tài khoản"
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.taiKhoan}
          touched={touched.taiKhoan}
          placeholder="Vui lòng nhập tài khoản"
          value={values.taiKhoan}
          labelColor="text-white"
        />
        <InputCustom
          label="Mật khẩu"
          name="matKhau"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.matKhau}
          touched={touched.matKhau}
          placeholder="Vui lòng nhập mật khẩu"
          value={values.matKhau}
          type="password"
          labelColor="text-white"
        />
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-full text-center"
            type="submit"
          >
            Đăng nhập
          </button>
          <p className="mt-8">
            Bạn cần một tài khoản?
            <Link
              to={path.dangKy}
              className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
            >
              đăng ký tài khoản
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
