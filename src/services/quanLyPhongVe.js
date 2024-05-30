import { http } from "./config"

export const chiTietPhongVe = {
    thongTinLichChieu: (maLichChieu) => {
        return http.get('/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=' + maLichChieu);
    },
}