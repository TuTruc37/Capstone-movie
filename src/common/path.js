// path.js
export const path = {
  trangChu: '/',
  dangNhap: '/login',
  dangKy: '/register',
  admin: {
    films: '/admin/films',
    addNew: '/admin/films/add-new/',
    editFilms: (maPhim) => `/admin/films/edit/${maPhim}`,
  },
  chiTietPhongVe: '/chitietphongve/:maLichChieu',
};
