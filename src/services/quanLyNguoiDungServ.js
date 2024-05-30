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
  layDanhSachNguoiDung: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
};
