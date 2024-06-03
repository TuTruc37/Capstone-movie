import React, { useContext, useEffect, useState } from 'react';
import InputCustom from '../../../components/Input/InputCustom';
import { useFormik } from 'formik';
import { AlertContext } from '../../../App';
import { quanLyNguoiDungServ } from '../../../services/quanLyNguoiDungServ';
import * as Yup from 'yup';
import SelectCustom from '../../../components/SelectCustom/SelectCustom';
import { useDispatch } from 'react-redux';
import { handleGetValue } from '../../../redux/slice/userSlice';
import { handleSetValueLocalStore } from '../../../utils/utils';
import { Link } from 'react-router-dom';
import { path } from '../../../common/path';
const CreateUser = () => {
  const dispatch = useDispatch();
  // Loại người dùng
  const [selectedRole, setSelectedRole] = useState('');
  const [loaiNguoiDung, setLoaiNguoiDung] = useState([]);

  const handleRoleChange = event => {
    setSelectedRole(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await quanLyNguoiDungServ.LayDanhSachLoaiNguoiDung();
        const data = response.data.content;
        setLoaiNguoiDung(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // Loại người dùng
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
        maLoaiNguoiDung: '',
      },
      // onSubmit là phương thức chạy khi form được submit
      onSubmit: async (values, { resetForm }) => {
        console.log(values);
        // khi sử dụng async await luôn có một try catch bọc lại để bắt các vấn đề về lỗi
        try {
          const res = await quanLyNguoiDungServ.themNguoiDung(values);
          console.log(res);
          handleAlert('success', 'Thêm thành công');
          handleSetValueLocalStore('dataUser', res.data.content);
          dispatch(handleGetValue(res.data.content));
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
        hoTen: Yup.string().required('Vui lòng không bỏ trống'),
        matKhau: Yup.string()
          .required('Vui lòng không bỏ trống')
          .matches(
            // tạo một mật khẩu có ít nhất 8 ký tự bao gồm 1 ký tự viết hoa 1 ký tự đặc biệt và số
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            'Vui lòng nhập mật khẩu bao gồm ít nhất 1 ký tự viết hoa và số'
          ),
        // maLoaiNguoiDung: Yup.string().required('Vui lòng chọn loại người dùng'),
      }),
    });
  return (
    <div className="py-16">
      <h1 className="text-2xl font-bold">Thêm người dùng</h1>
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
              value={values.matKhau}
              labelColor="text-black"
            />
            {/* select */}
            <SelectCustom
              label="Loại người dùng"
              name="maLoaiNguoiDung"
              handleChange={handleRoleChange}
              value={selectedRole}
              options={loaiNguoiDung} // Truyền danh sách loại người dùng từ API vào options
              labelColor="text-black"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Link path={path.admin.quanLy}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-full text-center">
                  Trở về
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white px-5 py-2 rounded-md w-full text-center"
                type="submit"
              >
                Thêm người dùng
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-md w-full text-center"
                // type="submit"
              >
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
