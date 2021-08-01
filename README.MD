# Project: Node - Ecommerce

## Format trả về

Là một object kiểu Json

```json
{
    "success": true,
    "data": data
}
```

ví dụ

```json
{
  "success": true,
  "data": {
    "price_after_discount": 0,
    "rating": 0,
    "quantity": 1000,
    "sold": 0,
    "view": 2,
    "images": [
      "https://res.cloudinary.com/mern-itachi/image/upload/v1627463175/products/iveitcjc1uw7bvfkvdrv.png",
      "https://res.cloudinary.com/mern-itachi/image/upload/v1627463177/products/l9emniadb2jma9nard38.png"
    ],
    "_id": "61011e0c86ba11306ceb35d4",
    "name": "Laptop dell",
    "categoryId": {
      "_id": "6100033de2d5fe2234d5a639",
      "categoryName": "Laptop",
      "createdAt": "2021-07-27T12:59:41.882Z",
      "updatedAt": "2021-07-27T12:59:41.882Z",
      "__v": 0
    },
    "image": "https://res.cloudinary.com/mern-itachi/image/upload/v1627463170/products/ahhnawhxqkvyxijvzb5p.png",
    "price": 200000,
    "createdAt": "2021-07-28T09:06:20.379Z",
    "updatedAt": "2021-07-31T15:49:13.318Z",
    "__v": 0
  }
}
```

## Format lỗi

Là một object kiểu Json

```json
{
  "success": false,
  "data": "message"
}
```

## Project sử dụng: Framwork Express, Mongoose, Cloudinary, JWT,..

> Note: Update, Delete phải xóa hay cập nhật ở Model liên quan và Cloudinary

## 1. Register, Login

- Hash password: dùng bcrypt
- Lưu token: header
- Check validate, authenticate, authorize

## 2. User

- Get Users
- Get User By User
- Get User By Admin
- Upload Avatar to Cloudinay
- Update User By User
- Update User By Admin
- Delete User

## 3. Category

- Create Category
- Get Category By Id
- Update Category
- Delete Category

## 4. Product

- Get Product based on params
- Get Product by Id
- Get Product By Admin
- Create Product
- Update Product
- Delete Product
- Rating Star
- Search through $text

## 5. Order

- Cart is [products] based on status
- Get Cart
- Add to Cart
- Update Cart
- Delete Cart
- Buy Products
