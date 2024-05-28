import { http } from "./config"

export const quanLyRapSer = {
    layThongTinHeThongRap: () => {
        return http.get("/QuanLyRap/LayThongTinHeThongRap");
    },
    layThongTinLichChieuHeThongRap: rap => {
        return http.get(
            `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=GP01 `
        );
    },
    layThongTinLichChieuPhim: phim => {
        return http.get(
            `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${phim}`
        );
    }
};