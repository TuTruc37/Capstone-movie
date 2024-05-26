import { http } from './config';

export const listCinema = {
  getListCinema: () => {
    return http.get('/QuanLyRap/LayThongTinHeThongRap');
  },
  getListTimeShowTimes: rap => {
    return http.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=GP01`
    );
  },
};
