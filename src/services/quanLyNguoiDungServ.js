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
  LayDanhSachPhim: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  layDanhSachNguoiDung: () => {
    return http.get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
  },
  xoaNguoiDung: taiKhoan => {
    return http.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  },
  LayDanhSachLoaiNguoiDung: () => {
    return http.get('/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung');
  },
  themNguoiDung: data => {
    console.log(data);
    return http.post('/QuanLyNguoiDung/ThemNguoiDung', data);
  },

  CapNhatThongTinNguoiDung: user => {
    console.log(user);
    return http.push('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', user);
  },
  thongTinTaiKhoan: taiKhoan => {
    return http.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan);
  },
};
