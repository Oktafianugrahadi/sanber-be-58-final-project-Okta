# 📁 Collection: NodeJS (ExpressJS) Batch 58

## 📁 Collection: Categories

## End-point: Create

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/categories
> ```

### Body (**raw**)

```json
{
  "name": "Elektronik"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/categories
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update

### Method: PUT

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/categories/:id
> ```

### Body (**raw**)

```json
// {
//     "productId":"66a10c1a72b4cd0429ff3204"
// }

{
  "name": "Parabotan"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get One

### Method: GET

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/categories/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete

### Method: DELETE

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/categories/:id
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Collection: Products

## End-point: Create

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/products
> ```

### Body (**raw**)

```json
{
  "name": "Axio Hype 3",
  "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
  "images": [
    "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
  ],
  "price": 289000,
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

### Body (**raw**)

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

## 📁 Collection: User

## End-point: Registrasi

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/auth/register
> ```

### Body (**raw**)

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

### Body (**raw**)

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

## 📁 Collection: Order

## End-point: Create

### Method: POST

> ```
> https://sanber-be-58-final-project-okta-production.up.railway.app/api/orders
> ```

### Body (**raw**)

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

### Body (**raw**)

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
