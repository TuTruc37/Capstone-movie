// services/listMovieService.js
import { http } from './config';

export const listMovieServices = {
  getListMovie: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  deleteMovie: maPhim => {
    return http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
};

// Đảm bảo bạn import đúng tên
export const { getListMovie, deleteMovie } = listMovieServices;
