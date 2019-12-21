# Generated by Django 2.2.6 on 2019-11-04 17:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Danh_sach_lop',
            fields=[
                ('id_lop', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ten_lop', models.CharField(max_length=50)),
                ('ten_lop_khong_dau', models.CharField(max_length=50)),
                ('gia', models.FloatField()),
                ('mo_ta', models.TextField()),
                ('dia_chi', models.TextField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Gia_su',
            fields=[
                ('id_gia_su', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ho_ten', models.CharField(max_length=50)),
                ('ho_ten_khong_dau', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('gioi_tinh', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=10)),
                ('gioi_thieu', models.TextField()),
                ('hinh_dai_dien_url', models.URLField()),
                ('phone', models.CharField(max_length=20)),
                ('dia_chi', models.TextField()),
                ('hoc_phi_gs', models.TextField()),
                ('hinh_thuc_day', models.CharField(max_length=150)),
                ('kinh_nghiem', models.TextField()),
                ('so_hoc_vien', models.IntegerField()),
                ('buoi_day', models.CharField(max_length=50)),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id_level', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ten_level', models.CharField(max_length=50)),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Mon_hoc',
            fields=[
                ('id_mon', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ten_mon', models.CharField(max_length=100)),
                ('ten_mon_khong_dau', models.CharField(max_length=100)),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='So_lien_lac',
            fields=[
                ('id_sll', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ngay', models.DateField()),
                ('noi_dung', models.TextField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
                ('id_lop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Danh_sach_lop')),
            ],
        ),
        migrations.CreateModel(
            name='Phu_huynh',
            fields=[
                ('id_phu_huynh', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('ho_ten', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('dia_chi', models.TextField()),
                ('gioi_tinh_yc', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=50)),
                ('hinh_thuc_day', models.TextField()),
                ('so_buoi_hoc', models.IntegerField()),
                ('luong_tra', models.IntegerField()),
                ('buoi_hoc', models.TextField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
                ('id_mon', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Mon_hoc')),
            ],
        ),
        migrations.CreateModel(
            name='Lop_yeu_cau',
            fields=[
                ('id_lop', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('trang_thai', models.CharField(choices=[('0', 'Chua xac thuc'), ('1', 'Da xac thuc')], max_length=20)),
                ('mo_ta', models.TextField()),
                ('hinh_thuc_day', models.CharField(max_length=150)),
                ('yeu_cau_gioi_tinh', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=50)),
                ('ghi_chu', models.TextField()),
                ('so_buoi_hoc', models.IntegerField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
                ('id_gia_su', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Gia_su')),
                ('id_mon_hoc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Mon_hoc')),
                ('id_phu_huynh', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Phu_huynh')),
            ],
        ),
        migrations.AddField(
            model_name='gia_su',
            name='id_level',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Level'),
        ),
        migrations.AddField(
            model_name='gia_su',
            name='id_mon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Mon_hoc'),
        ),
        migrations.AddField(
            model_name='danh_sach_lop',
            name='id_gia_su',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Gia_su'),
        ),
        migrations.AddField(
            model_name='danh_sach_lop',
            name='id_mon_hoc',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Mon_hoc'),
        ),
        migrations.AddField(
            model_name='danh_sach_lop',
            name='id_phu_huynh',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Phu_huynh'),
        ),
        migrations.CreateModel(
            name='Danh_gia',
            fields=[
                ('id_danh_gia', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('diem', models.FloatField()),
                ('mo_ta', models.TextField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
                ('id_gia_su', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Gia_su')),
                ('id_phu_huynh', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Phu_huynh')),
            ],
        ),
        migrations.CreateModel(
            name='Binh_luan',
            fields=[
                ('id_binh_luan', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('binh_luan', models.TextField()),
                ('ngay_tao', models.DateTimeField(auto_now_add=True)),
                ('ngay_chinh_sua', models.DateTimeField(auto_now=True)),
                ('id_gia_su', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Gia_su')),
                ('id_lop', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Danh_sach_lop')),
                ('id_phu_huynh', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='tutor_app.Phu_huynh')),
            ],
        ),
    ]