import { http } from './config';
export const quanLyNguoiDungServ = {
  dangNhap: data => {
    console.log(data);
    return http.post('/QuanLyNguoiDung/DangNhap', data);
  },
  dangKy: data => {
    console.log(data);
    return http.post('/QuanLyNguoiDung/DangKy', data);
  },
};
