import { http } from "./config"

export const quanLyRapSer = {
    layThongTinHeThongRap: () => {
        return http.get("/QuanLyRap/LayThongTinHeThongRap");
    },
};