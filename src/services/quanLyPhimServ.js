import { http } from './config';

export const quanLyPhimServ = {
  themPhimUploadHinh: data => {
    return http.post('/QuanLyPhim/ThemPhimUploadHinh', data);
  },
  CapNhatPhimUpload: data => {
    return http.post('/QuanLyPhim/CapNhatPhimUpload', data);
  },
  XoaPhim: maPhim => {
    return http.delete(`/QuanLyPhim/XoaPhim?maPhim=${maPhim}`);
  },
};
