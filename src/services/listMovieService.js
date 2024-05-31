import { http } from './config';

export const listMovieServices = {
  getListMovie: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  getMovie: () => {
    return http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=13769`);
  },
  getTrailer: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=Kung%20Fu%20Panda%204');
  },
};
