Môi trường chạy: NodeJS
Ngôn ngữ : Javascript
Framework :Express JS

//Khởi tạo:
1. npm init
2. npm install express--save
3. Tạo File index.js()

//Template engine 
SPA vs MPA
Tempate engine là ngôn ngữ render HTML
- Pug(jade) 
- Mustache
- ejs

1. npm install pug --save
2. Tạo folder views
3. Thêm vào index.js
    - app.set('view engine','pug)
    - app.set('views', ./views)

Web: pughtml.com conver HTML <-> Pug

res.render(path(file_template),key=value)

//Query Parameters
req.body.q => q
user.name.indexOf(q) -> -1 là k tồn tại 

//POST METHOD
Post - gửi dữ liệu lên server ,xử lý và lưu lại dữ liệu
1 path có thể có 2 method
input luôn phải có name
req.body để xem body request -> undifend nếu k cài body-parser
1. npm install body-parser --save
2. require body-parser
3. Thêm 2 dòng 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

Khong co databse thi restart server se mat du lieu => dung lowdb
