import { http } from "./config"

export const quanLyPhimSer = {
    layDanhSachTrailer: () => {
        return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=Ng%C6%B0%E1%BB%9Di%20V%E1%BB%A3%20Cu%E1%BB%91i%20C%C3%B9ng%20-%20Victo%20V%C5%A9');
    },
}