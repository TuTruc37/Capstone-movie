import { http } from "./config"

export const bannerMovieService = {
  getListBanner: ()=> {
    return http.get("/QuanLyPhim/LayDanhSachBanner")
  }
}