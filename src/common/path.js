// path.js
export const path = {
  trangChu: '/',
  dangNhap: '/login',
  dangKy: '/register',
  admin: {
    quanLy: '/admin/quanlynguoidung',
    films: '/admin/films',
    addNew: '/admin/films/add-new/',
    editFilms: maPhim => `/admin/films/edit/${maPhim}`,
    quanLyNguoiDung: '/admin/quanlynguoidung/index',
  },
  chiTietPhongVe: '/chitietphongve/:maLichChieu',
  profile: '/profile',
};
