import { http } from './config';

export const quanLyPhimServ = {
  themPhimUploadHinh: data => {
    return http.post('/QuanLyPhim/ThemPhimUploadHinh', data);
  },
};
