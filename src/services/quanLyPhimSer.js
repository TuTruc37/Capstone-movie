import { http } from "./config"

export const quanLyPhimSer = {
    layDanhSachTrailer: () => {
        return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
    },
}