# 📁 NodeJS (ExpressJS) Batch 58

## Best URL

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app
> ```

## 📁 Categories

## POST - /api/categories (Buat kategori)

### Request Body (**json**)

```json
{
  "name": "Elektronik"
}
```

### Response Success (**json**)

Status 201

```json
{
  "data": {
    "name": "Parabotann",
    "_id": "66b63f095809fee1a224b533",
    "createdAt": "2024-08-09T16:08:41.565Z",
    "updatedAt": "2024-08-09T16:08:41.565Z",
    "__v": 0
  },
  "message": "Success create category"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed create category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/categories (Tampilkan semua kategori)

### Response Success (**json**)

Status 200

```json
{
  "data": [
    {
      "_id": "66b5cf43864df478dfbfce1b",
      "name": "Elektronik",
      "createdAt": "2024-08-09T08:11:47.782Z",
      "updatedAt": "2024-08-09T08:11:47.782Z",
      "__v": 0
    },
    {
      "_id": "66b5cf58864df478dfbfce1d",
      "name": "Parabotan",
      "createdAt": "2024-08-09T08:12:08.787Z",
      "updatedAt": "2024-08-09T08:14:24.540Z",
      "__v": 0
    }
  ],
  "message": "Success get all category"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed get all category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## PUT - /api/categories/:id (Ubah kategori berdasarkan id)

### Body (**json**)

```json
// {
//     "productId":"66a10c1a72b4cd0429ff3204"
// }

{
  "name": "Parabotan"
}
```

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b5cf58864df478dfbfce1d",
    "name": "Parabotannn",
    "createdAt": "2024-08-09T08:12:08.787Z",
    "updatedAt": "2024-08-09T16:23:44.540Z",
    "__v": 0
  },
  "message": "Success update category"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed update category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/categories/:id (Tampilkan satu kategori berdasarkan id)

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b5cf58864df478dfbfce1d",
    "name": "Parabotannn",
    "createdAt": "2024-08-09T08:12:08.787Z",
    "updatedAt": "2024-08-09T16:23:44.540Z",
    "__v": 0
  },
  "message": "Success get one category"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed get one category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## DELETE - /api/categories/:id

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b63f095809fee1a224b533",
    "name": "Parabotann",
    "createdAt": "2024-08-09T16:08:41.565Z",
    "updatedAt": "2024-08-09T16:08:41.565Z",
    "__v": 0
  },
  "message": "Success delete category"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed delete category"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Upload

## End-point: Single

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/upload/single
> ```

### Body formdata

| Param | value                                                 | Type |
| ----- | ----------------------------------------------------- | ---- |
| file  | postman-cloud:///1ef49c69-8ff1-41a0-a879-99cafbbc8b59 | file |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Multiple

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/upload/multiple
> ```

### Body formdata

| Param | value | Type |
| ----- | ----- | ---- |
| files |       | text |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Products

## End-point: Create

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products
> ```

### Body (**json**)

```json
{
  "name": "Axio Hype 3",
  "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
  "images": [
    "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
  ],
  "price": 2890000,
  "qty": 10,
  "category": "66b2eef3be13015862b1514b"
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                               | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMmM5OTI0ZWQ5MzM0ZGRmMzY1MiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcyMzAwNDM1NiwiZXhwIjoxNzIzMDI1OTU2fQ.JYbPjYoyIKHLdFrhknnKl5syRQKbeygMZDCUr4Fobbw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

### Method: DELETE

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update

### Method: PUT

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products/:id
> ```

### Body (**json**)

```json
{
  "name": "Axio Hype-3"
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                               | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMmM5OTI0ZWQ5MzM0ZGRmMzY1MiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcyMzAwNDM1NiwiZXhwIjoxNzIzMDI1OTU2fQ.JYbPjYoyIKHLdFrhknnKl5syRQKbeygMZDCUr4Fobbw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get One

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 User

## End-point: Registrasi

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/auth/register
> ```

### Body (**json**)

```json
// {
//   "email": "user@gmail.com",
//   "fullName": "User",
//   "password": "123456",
//   "username": "user",
//   "roles": ["user"]
// }

{
  "email": "oktafianugrahadi95@gmail.com",
  "fullName": "Oktafianugrahadi",
  "password": "123456",
  "username": "okta_user",
  "roles": ["user"]
}

// {
//   "email": "oktafianugrahadi95@gmail.com",
//   "fullName": "Oktafianugrahadi",
//   "password": "123456",
//   "username": "okta",
//   "roles": ["admin"]
// }
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/auth/login
> ```

### Body (**json**)

```json
// {
//   "email": "admin@gmail.com",
//   "password": "123456"
// }

// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }

// {
//   "email": "oktafianugrahadi195@gmail.com",
//   "password": "123456"
// }
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Auth Me

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/auth/me
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMzBlOTI0ZWQ5MzM0ZGRmMzY1NSIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTExNjgzLCJleHAiOjE3MjMxMzMyODN9.knaXm9wIch4OH8I9EB17AevwUreAW6_P7XVyeeQvRyM | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Order

## End-point: Create

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/orders
> ```

### Body (**json**)

```json
{
  "grandTotal": 289000,
  "orderItems": [
    {
      "productId": "66b2f60aa6486268e1a408f4",
      "quantity": 1
    }
  ]
}

// {
//   "grandTotal": 2890000,
//   "orderItems": [
//     {
//       "productId": "66b2f60aa6486268e1a408f4",
//       "quantity": 2
//     }
//   ]
// }
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMzBlOTI0ZWQ5MzM0ZGRmMzY1NSIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTExNjgzLCJleHAiOjE3MjMxMzMyODN9.knaXm9wIch4OH8I9EB17AevwUreAW6_P7XVyeeQvRyM | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

### Method: DELETE

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/orders/:id
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjQyNTA3ZGQ5NzI3ODU5NDY0NGQ5YiIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTAzNDMwLCJleHAiOjE3MjMxMjUwMzB9.6bqAw55tpCTEVMGpTh-k9NsJ6k6EDxz2N9-tIsxgEBw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update

### Method: PUT

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/orders/:id
> ```

### Body (**json**)

```json
{
  "grandTotal": 867000,
  "orderItems": [
    {
      "productId": "66b2f60aa6486268e1a408f4",
      "quantity": 3
    }
  ]
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjQyNTA3ZGQ5NzI3ODU5NDY0NGQ5YiIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTAzNDMwLCJleHAiOjE3MjMxMjUwMzB9.6bqAw55tpCTEVMGpTh-k9NsJ6k6EDxz2N9-tIsxgEBw | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get by user

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/orders/history
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMzBlOTI0ZWQ5MzM0ZGRmMzY1NSIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTExNjgzLCJleHAiOjE3MjMxMzMyODN9.knaXm9wIch4OH8I9EB17AevwUreAW6_P7XVyeeQvRyM | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
