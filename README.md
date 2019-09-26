# Công việc team frontend :

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
