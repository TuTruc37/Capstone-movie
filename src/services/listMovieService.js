import { http } from './config';

export const listMovieServices = {
  getListMovie: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
};
