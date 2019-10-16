from django.db import models

# Create your models here.
SEX = (
        ('M','Male'),
        ('F','Female'),
        ('O','Other')
    )
class Level(models.Model):
    id_level = models.AutoField(primary_key = True,auto_created=True)
    ten_level = models.CharField(max_length=50)
    def __str__(self):
        return self.ten_level
class Mon_hoc(models.Model):
    id_mon = models.AutoField(primary_key=True,auto_created=True)
    ten_mon = models.CharField(max_length=100)
    def __str__(self):
        return self.ten_mon
class Gia_su(models.Model):
    id_gia_su = models.AutoField(primary_key=True,auto_created=True)
    ho_ten = models.CharField(max_length=50)
    ho_ten_khong_dau = models.CharField(max_length=50)# set url
    email = models.EmailField(max_length=254)
    gioi_tinh = models.CharField(max_length=10,choices=SEX)
    gioi_thieu = models.TextField()
    hinh_dai_dien_url = models.URLField()
    phone = models.CharField(max_length=20)
    dia_chi = models.TextField()
    hoc_phi_gs = models.TextField()
    hinh_thuc_day = models.CharField(max_length=150)
    kinh_nghiem = models.TextField()
    so_hoc_vien = models.IntegerField()
    buoi_day = models.CharField(max_length=50)
    ngay_tao = models.DateField(auto_now=False, auto_now_add=False)
    id_level = models.ForeignKey(Level, on_delete=models.CASCADE,blank=True, null=True)
    id_mon = models.ForeignKey(Mon_hoc, on_delete=models.CASCADE,blank=True, null=True)
    def __str__(self):
        return self.ho_ten
    

class Phu_huynh(models.Model):
    id_phu_huynh = models.AutoField(primary_key=True,auto_created=True)
    ho_ten = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=20)
    dia_chi = models.TextField()
    gioi_tinh_yc = models.CharField(max_length=50,choices=SEX)
    hinh_thuc_day = models.TextField()
    so_buoi_hoc = models.IntegerField()
    luong_tra = models.IntegerField()
    buoi_hoc = models.TextField()
    id_mon = models.ForeignKey(Mon_hoc, on_delete=models.CASCADE,blank=True, null=True) # cai nay la khoa ngoai
    def __str__(self):
        return self.ho_ten

class Danh_sach_lop(models.Model):
    id_lop = models.AutoField(primary_key=True,auto_created=True)
    ten_lop = models.CharField(max_length=50)
    gia = models.FloatField()
    mo_ta = models.TextField()
    dia_chi = models.TextField()
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE)
    def __str__(self):
        return self.ten_lop

class So_lien_lac(models.Model):
    id_sll = models.AutoField(primary_key=True,auto_created=True)
    ngay = models.DateField(auto_now=False, auto_now_add=False)
    noi_dung = models.TextField()
    id_lop = models.ForeignKey(Danh_sach_lop, on_delete=models.CASCADE)


    



class Danh_gia(models.Model):
    id_danh_gia = models.AutoField(primary_key = True,auto_created=True)
    diem = models.FloatField()
    mo_ta = models.TextField()
    date = models.DateField(auto_now=False, auto_now_add=False)
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE,blank=True, null=True)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE)
    def __str__(self):
        return self.diem

class Binh_luan(models.Model):
    id_binh_luan = models.AutoField(primary_key = True,auto_created=True)
    binh_luan = models.TextField()
    date = models.DateField(auto_now=False, auto_now_add=False)
    id_phu_huynh = models.ForeignKey(Phu_huynh, on_delete=models.CASCADE,blank=True, null=True)
    id_gia_su = models.ForeignKey(Gia_su, on_delete=models.CASCADE, blank=True, null=True)
    id_lop = models.ForeignKey(Danh_sach_lop, on_delete=models.CASCADE,blank=True, null=True)
    
    


    

