export class Tutor {
  title : string;
  detail :string;
  wage :number;
  subject :string;
  address :string;
  require :string;
}


export interface TutorProfile {
  id_gia_su?:number;
  ho_ten?: string;
  mat_khau?:string;
  phone?:string;
  email?:string;
  ngay_sinh?:Date;
  gioi_tinh?:string;
  gioi_thieu?:string;
  hinh_dai_dien_url?:string;
  dia_chi?:string;
  khu_vuc_day?:string;
  hoc_phi_gs?:string;
  hinh_thuc_day?:string;
  kinh_nghiem?:string;
  buoi_day?:number;
  hoc_truong?:string;
  chuyen_nganh?:string;
  nam_tot_nghiep?:string;
  cv_hien_tai?:string;
  thanh_tich?:string;
  mon_hoc?:string;
  thong_tin_them?:string;
}
