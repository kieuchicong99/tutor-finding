# 1. Hướng dẫn chung về git

- ## 1. Clone source về
    ```bash
    git clone https://github.com/kieuchicong99/tutor-finding.git
    ```
- ## 2. Add Remote 
    ```bash
    git init
    ```
    ```bash
    git remote add git://github.com/kieuchicong99/tutor-finding
    ```
- ## 3. Tạo nhánh làm việc 
    - #### a, Tạo nhánh

        ```bash
        git branch <tên_nhánh_lấy_tên_của_ mọi người>
        ```
        ví dụ:
        ```bash
        git branch kieuchicong  
        ```
    -  #### b, Một số lệch làm việc với nhánh

        **Display tất cả các nhánh**
        ```bash
        git branch -a
        ```        
        **Chuyển nhánh**
        ```bash
        git checkout <tên nhánh>
        ```
        **Xóa nhánh ở local**
        ```bash
        git branch -D <tên nhánh>
        ```
        **Xóa nhánh ở remote**

        Nên xóa nhánh ỏ remote sau khi code đã được merge vào master, sau đó pull code mới từ master về, tạo nhánh và tiếp tục làm việc

        ```bash
        git push origin --delete  <tên nhánh> 
        ```
        **Xem hiện tại mình đang ở nhánh nào**

        ```bash
        git branch 
        ```
        Nhánh hiện tại bạn đang làm việc sẽ có 1 dấu * đằng trước tên nhánh
    
        **Lưu ý: Sau khi chuyển nhánh mọi thao tác sẽ được tính trên nhánh đó, nên mọi người lưu ý xem hiện tại mình đang ở nhánh nào**

    - #### c, Tham khaỏ thêm về các thao tác với nhánh ở đây :
        [làm việc với nhánh](https://xuanthulab.net/lam-viec-voi-nhanh-branch-tao-nhanh-gop-nhanh-trong-git.html)

- ## 4. Commmit
    ```bash
    git add .
    git commit -m "nội_dung"
    ```
- ## 5. Push code lần đầu lên nhánh

    ```bash
    git push --set-upstream origin <tên nhánh mọi người vừa tạo>
    ```
    Ở những lần push sau chỉ cần push với cú pháp thông thường là đc (lưu ý kiếm tra nhánh trước khi push)


# 2. Công việc team frontend :

Hướng dẫn làm việc cho team front end:

## **Lưu ý**: 
- Project chỉ chạy với angular 4 nên nếu có add thêm thư viện thì mọi người nhớ cài cho đúng bản

- Project đã cài bootstrap 4 mọi người có thể sử dụng mà ko cần config
- Template chuẩn của 1 component folder 

    - css/scss/sass file
    - html file
    - spec.ts file (file test)
    - ts file

- Mọi người chỉ cần quan tâm tới 3 file là css html và ts file. Nếu có thay đổi css thì cũng chỉ thay đổi ở file css ở từng component folder

- Angular hỗ trợ tạo mẫu component bằng cli
    - Để tạo một commpent kèm folder (foler này sẽ được thêm mặc định vào app.module vị trí thư mục /fontend/App/src/app/ )
    ```bash
        ng g c <tên_component>
    ```
    - Nếu đã có sẵn folder rồi thì di chuyển nơi làm việc vào trong folder đó rồi angular sẽ tạo cho bạn 4 file như template và không có thư mục bao ngoài, ví dụ tôi có sẵn thư mục student và module **student.module.ts** thì sau khi thực hiện lệnh generate compoent thì angular sẽ tự động add component đó vào module student 

    ```bash
        ng g c <tên_component> --flat
    ```

    - Để generate một module thì cũng gần tương tự như compoent 
    ví dụ:

    ```bash
        ng g m <tên_module>
    ```
    - Chỉ có thể dùng các lệnh của angular sau khi đã di chuyển vào thư mục *frontend/App* hoặc các thư mục con của nó 

## Thư mục làm việc 

```bash
cd fontend/App 
```
### *Lưu ý:* mọi người cũng chỉ cần quan tâm tới thu mục ***src*** trong *frontend/App*

## Cài đạt thư viện (nodemodules)

```bash
npm i
```

## Chạy project 

```bash
ng serve 
```
hoặc 
```bash
npm start
```
## View ứng dụng 

```bash
http://localhost:4200
```
