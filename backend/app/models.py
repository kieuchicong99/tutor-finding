from django.db import models
from django.utils import timezone
# Create your models here.
SEX = (
        ('M','Male'),
        ('F','Female'),
        ('O','Other')
    )

STATUS = (
    ('1','chưa mời gia sư'),
    ('2','đã mời gia sư'),
    ('3','ẩn lớp'),
    ('4','hoàn thành'),

)

class Level(models.Model):
    id_level = models.AutoField(primary_key = True,auto_created=True)
    ten_level = models.CharField(max_length=50)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.ten_level

class Mon_hoc(models.Model):
    id_mon = models.AutoField(primary_key=True,auto_created=True)
    ten_mon = models.CharField(max_length=100)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.ten_mon

class Gia_su(models.Model):
    id_gia_su = models.AutoField(primary_key=True,auto_created=True)
    ho_ten = models.CharField(max_length=50)
    mat_khau= models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=20,unique=True)
    ngay_sinh =  models.DateTimeField(blank= True, null = True)
    gioi_tinh = models.CharField(max_length=10,choices=SEX,null=True)
    gioi_thieu = models.TextField(null=True,blank=True)
    hinh_dai_dien_url = models.URLField(null=True,blank=True)
    dia_chi = models.TextField(blank=True)
    khu_vuc_day =models.CharField(max_length=150,blank=True)
    hoc_phi_gs = models.CharField(max_length=50,blank=True)
    hinh_thuc_day = models.CharField(max_length=150,blank=True)
    kinh_nghiem = models.TextField(blank=True)
    buoi_day = models.CharField(max_length=50,null=True)
    hoc_truong = models.CharField(max_length=250,null=True)
    chuyen_nganh = models.CharField(max_length=250,null=True)
    nam_tot_nghiep = models.CharField(max_length=50,null=True)
    cv_hien_tai = models.CharField(max_length=250,null=True)
    thanh_tich = models.CharField(max_length=400,null=True)
    mon_hoc = models.CharField(max_length=250,null=True)
    thong_tin_them = models.CharField(max_length=400,null=True)
    id_level = models.ForeignKey(Level, on_delete=models.CASCADE,blank=True, null=True)
    id_mon = models.ForeignKey(Mon_hoc, on_delete=models.CASCADE,blank=True, null=True)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)   
    role = models.IntegerField(blank=True,null=True) 
    def __str__(self):
        return self.ho_ten
           

class Phu_huynh(models.Model):
    id_phu_huynh = models.AutoField(primary_key=True,auto_created=True)
    ho_ten = models.CharField(max_length=100)
    mat_khau= models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=20,unique=True)
    ngay_sinh =  models.DateTimeField(blank= True, null = True)
    gioi_tinh = models.CharField(max_length=10,choices=SEX,null=True)
    gioi_thieu = models.TextField(null=True,blank=True)
    hinh_dai_dien_url = models.URLField(null=True,blank=True)
    dia_chi = models.TextField(blank=True)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)
    role = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return self.ho_ten

class Danh_sach_lop(models.Model):
    id_lop = models.AutoField(primary_key=True,auto_created=True)
    id_mon_hoc = models.ForeignKey(Mon_hoc, on_delete=models.CASCADE)
    ten_lop = models.CharField(max_length=50)
    gia = models.FloatField()
    mo_ta = models.TextField(null=True,blank=True)
    dia_chi = models.TextField()
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.ten_lop

class So_lien_lac(models.Model):
    id_sll = models.AutoField(primary_key=True,auto_created=True)
    ngay = models.DateField(auto_now=False, auto_now_add=False)
    noi_dung = models.TextField(blank=True)
    id_lop = models.ForeignKey(Danh_sach_lop, on_delete=models.CASCADE)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)

class Danh_gia(models.Model):
    id_danh_gia = models.AutoField(primary_key = True,auto_created=True)
    diem = models.FloatField()
    mo_ta = models.TextField(blank=True)
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE,blank=True, null=True)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.diem

class Binh_luan(models.Model):
    id_binh_luan = models.AutoField(primary_key = True,auto_created=True)
    binh_luan = models.TextField()
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE,blank=True)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE, blank=True)
    id_lop = models.ForeignKey(Danh_sach_lop, on_delete=models.CASCADE,blank=True)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)
    
class Lop_yeu_cau(models.Model):
    id_lop = models.AutoField(primary_key=True,auto_created=True)
    id_phu_huynh  = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE) 
    trang_thai = models.CharField(max_length=20, choices = STATUS)## trang thai da nhan hay chua 
    mo_ta = models.TextField(blank=True)
    hinh_thuc_day = models.CharField(max_length=150,blank=True)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE,blank=True,null=True)
    id_mon_hoc = models.ForeignKey(Mon_hoc, on_delete=models.CASCADE,blank=True,null=True)
    yeu_cau_gioi_tinh = models.CharField(max_length=50,choices=SEX,null=True)
    so_buoi_hoc_moi_tuan = models.IntegerField(null=True)
    so_gio_moi_buoi = models.IntegerField(null=True)
    gia_thue_moi_buoi =  models.IntegerField(null=True)
    dia_chi =  models.TextField(blank=True)
    ngay_tao = models.DateTimeField(auto_now_add=True)
    ngay_chinh_sua = models.DateTimeField(auto_now=True)


class Lop_yeu_cau_Gia_su(models.Model):
     id = models.AutoField(primary_key=True,auto_created=True)
     id_lop_yeu_cau = models.ForeignKey(Lop_yeu_cau, on_delete=models.CASCADE,blank=True,null=True)
     id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE,blank=True,null=True)