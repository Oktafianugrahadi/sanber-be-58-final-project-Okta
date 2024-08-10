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

### Request Body (**json**)

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

## 📁 Upload Gambar

## POST - /api/upload/single (Upload gambar untuk 1 File)

### Request Body formdata

| Param | value                                                 | Type |
| ----- | ----------------------------------------------------- | ---- |
| file  | postman-cloud:///1ef49c69-8ff1-41a0-a879-99cafbbc8b59 | file |

### Response Success (**json**)

Status 200

```json
{
  "asset_id": "b22a056125fc4f01f7285631ea4850da",
  "public_id": "Meja Sakula.jpg",
  "version": 1723189875,
  "version_id": "2fafe1b2a6c49f38d1911f87ec6bc7db",
  "signature": "881098ad9550f1ae289acf016978761b530b284e",
  "width": 700,
  "height": 700,
  "format": "jpg",
  "resource_type": "image",
  "created_at": "2024-08-09T07:51:15Z",
  "tags": [],
  "bytes": 109830,
  "type": "upload",
  "etag": "ed978162a0f8469a8dd2202dff5a061e",
  "placeholder": false,
  "url": "http://res.cloudinary.com/dllzqbcsp/image/upload/v1723189875/Meja%20Sakula.jpg.jpg",
  "secure_url": "https://res.cloudinary.com/dllzqbcsp/image/upload/v1723189875/Meja%20Sakula.jpg.jpg",
  "asset_folder": "",
  "display_name": "Meja Sakula.jpg",
  "overwritten": true,
  "original_filename": "file",
  "api_key": "818299398519899"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## POST - /api/upload/multiple (Upload gambar untuk banyak file max 10)

### Request Body formdata

| Param | value | Type |
| ----- | ----- | ---- |
| files |       | text |

### Response Success (**json**)

Status 200

```json
{
  "asset_id": "b22a056125fc4f01f7285631ea4850da",
  "public_id": "Meja Sakula.jpg",
  "version": 1723189875,
  "version_id": "2fafe1b2a6c49f38d1911f87ec6bc7db",
  "signature": "881098ad9550f1ae289acf016978761b530b284e",
  "width": 700,
  "height": 700,
  "format": "jpg",
  "resource_type": "image",
  "created_at": "2024-08-09T07:51:15Z",
  "tags": [],
  "bytes": 109830,
  "type": "upload",
  "etag": "ed978162a0f8469a8dd2202dff5a061e",
  "placeholder": false,
  "url": "http://res.cloudinary.com/dllzqbcsp/image/upload/v1723189875/Meja%20Sakula.jpg.jpg",
  "secure_url": "https://res.cloudinary.com/dllzqbcsp/image/upload/v1723189875/Meja%20Sakula.jpg.jpg",
  "asset_folder": "",
  "display_name": "Meja Sakula.jpg",
  "overwritten": true,
  "original_filename": "file",
  "api_key": "818299398519899"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Products

## POST - /api/products (Tambah produk)

### Request Body (**json**)

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

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "name": "Axio Hype - 3",
    "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
    "images": [
      "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
    ],
    "price": 2890000,
    "qty": 10,
    "category": "66b5cf43864df478dfbfce1b",
    "_id": "66b6bfb0e010351002953d0a",
    "createdAt": "2024-08-10T01:17:36.635Z",
    "updatedAt": "2024-08-10T01:17:36.635Z",
    "slug": "axio-hype---333",
    "__v": 0
  },
  "message": "Success create product"
}
```

### Response Error (**json**)

Status 401

```json
{
  "message": "Token tidak valid. Akses ditolak."
}
```

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed create product"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/products (tampilkan semua produk)

### Response Success (**json**)

Status 200

```json
{
  "data": [
    {
      "_id": "66b6bfb0e010351002953d0a",
      "name": "Axio Hype - 333",
      "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
      "images": [
        "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
      ],
      "price": 2890000,
      "qty": 10,
      "category": {
        "_id": "66b5cf43864df478dfbfce1b",
        "name": "Elektronik",
        "createdAt": "2024-08-09T08:11:47.782Z",
        "updatedAt": "2024-08-09T08:11:47.782Z",
        "__v": 0
      },
      "createdAt": "2024-08-10T01:17:36.635Z",
      "updatedAt": "2024-08-10T01:17:36.635Z",
      "slug": "axio-hype---333",
      "__v": 0
    },
    {
      "_id": "66b5d1ec864df478dfbfce2e",
      "name": "Axio Hype 3",
      "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
      "images": [
        "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
      ],
      "price": 2890000,
      "qty": 8,
      "category": {
        "_id": "66b5cf43864df478dfbfce1b",
        "name": "Elektronik",
        "createdAt": "2024-08-09T08:11:47.782Z",
        "updatedAt": "2024-08-09T08:11:47.782Z",
        "__v": 0
      },
      "createdAt": "2024-08-09T08:23:08.470Z",
      "updatedAt": "2024-08-09T08:37:49.354Z",
      "slug": "axio-hype-3",
      "__v": 0
    }
  ],
  "message": "Success get all products",
  "page": 1,
  "limit": 10,
  "total": 2,
  "totalPages": 1
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed get all products"
}
```

## DELETE - /api/products/:id (Delete produk berdasarkan id)

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b6bfb0e010351002953d0a",
    "name": "Axio Hype - 333",
    "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
    "images": [
      "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
    ],
    "price": 2890000,
    "qty": 10,
    "category": "66b5cf43864df478dfbfce1b",
    "createdAt": "2024-08-10T01:17:36.635Z",
    "updatedAt": "2024-08-10T01:17:36.635Z",
    "slug": "axio-hype---333",
    "__v": 0
  },
  "message": "Success delete product"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed delete products"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## PUT - /api/products/:id (Ubah data produk berdasarkan id)

### Request Body (**json**)

```json
{
  "name": "Axio Hype-3"
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                               | Type   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMmM5OTI0ZWQ5MzM0ZGRmMzY1MiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcyMzAwNDM1NiwiZXhwIjoxNzIzMDI1OTU2fQ.JYbPjYoyIKHLdFrhknnKl5syRQKbeygMZDCUr4Fobbw | string |

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b5d1ec864df478dfbfce2e",
    "name": "Axio Hype - 3",
    "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
    "images": [
      "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
    ],
    "price": 2890000,
    "qty": 8,
    "category": "66b5cf43864df478dfbfce1b",
    "createdAt": "2024-08-09T08:23:08.470Z",
    "updatedAt": "2024-08-10T01:27:20.716Z",
    "slug": "axio-hype-3",
    "__v": 0
  },
  "message": "Success update product"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed update products"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/products/:id (Tampilkan satu produk berdasarkan id)

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b5d1ec864df478dfbfce2e",
    "name": "Axio Hype - 3",
    "description": "Intel Core  i3-1005G1, Intel UHD Graphics, 14 inch IPS FHD Display, 8 GB DDR4 3200 Memory, 256 GB SSD NVme Storage",
    "images": [
      "https://res.cloudinary.com/dllzqbcsp/image/upload/v1721830288/f05nd7fdkhmcbexwxkyv.jpg"
    ],
    "price": 2890000,
    "qty": 8,
    "category": "66b5cf43864df478dfbfce1b",
    "createdAt": "2024-08-09T08:23:08.470Z",
    "updatedAt": "2024-08-10T01:27:20.716Z",
    "slug": "axio-hype-3",
    "__v": 0
  },
  "message": "Success get one product"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Failed get one products"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 User

## POST - /api/auth/register (Buat user baru)

### Request Body (**json**)

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

### Response Success (**json**)

Status 200

```json
{
  "message": "User registered successfully",
  "data": {
    "fullName": "User",
    "username": "user",
    "email": "user@gmail.com",
    "roles": ["user"],
    "profilePicture": "default.jpg",
    "_id": "66b6bef1e010351002953d06",
    "createdAt": "2024-08-10T01:14:25.577Z",
    "updatedAt": "2024-08-10T01:14:25.577Z",
    "__v": 0
  }
}
```

### Response Error (**json**)

Status 500

```json
{
  "message": "Error registering user",
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## POST - /api/auth/login (Login user)

### Request Body (**json**)

```json
// {
//   "email": "admin@gmail.com",
//   "password": "123456"
// }

// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }

{
  "email": "oktafianugrahadi195@gmail.com",
  "password": "123456"
}
```

### Response Success (**json**)

Status 200

```json
{
  "message": "User logged in successfully",
  "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjVkMDhkODY0ZGY0NzhkZmJmY2UyNiIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTcyMzI1MjUwNywiZXhwIjoxNzIzMjc0MTA3fQ.CFRvJJjBQ-jh22lcHXNmn0YXSyY-dHLBQYrhxs6zBas"
}
```

### Response Error (**json**)

Status 500

```json
{
  "message": "Error logging in user",
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/auth/me (Cek user yang login)

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMzBlOTI0ZWQ5MzM0ZGRmMzY1NSIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTExNjgzLCJleHAiOjE3MjMxMzMyODN9.knaXm9wIch4OH8I9EB17AevwUreAW6_P7XVyeeQvRyM | string |

### Response Success (**json**)

Status 200

```json
{
  "message": "User details",
  "data": {
    "_id": "66b5d0a0864df478dfbfce28",
    "fullName": "Oktafianugrahadi",
    "username": "okta_user",
    "email": "oktafianugrahadi195@gmail.com",
    "roles": ["user"],
    "profilePicture": "default.jpg",
    "createdAt": "2024-08-09T08:17:36.786Z",
    "updatedAt": "2024-08-09T08:17:36.786Z",
    "__v": 0
  }
}
```

### Response Error (**json**)

Status 500

```json
{
  "message": "Error getting user details",
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Order

## POST - /api/orders (Buat order)

### Request Body (**json**)

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

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "grandTotal": 2890000,
    "orderItems": [
      {
        "name": "Axio Hype - 3",
        "productId": "66b5d1ec864df478dfbfce2e",
        "price": 2890000,
        "quantity": 1
      }
    ],
    "createdBy": "66b5d0a0864df478dfbfce28",
    "status": "pending",
    "_id": "66b6c47ae010351002953d17",
    "createdAt": "2024-08-10T01:38:02.764Z",
    "updatedAt": "2024-08-10T01:38:02.764Z",
    "__v": 0
  },
  "message": "Berhasil membuat pesanan"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Gagal membuat pesanan"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## DELETE - /api/orders/:id (Hapus Order)

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjQyNTA3ZGQ5NzI3ODU5NDY0NGQ5YiIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTAzNDMwLCJleHAiOjE3MjMxMjUwMzB9.6bqAw55tpCTEVMGpTh-k9NsJ6k6EDxz2N9-tIsxgEBw | string |

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b6c47ae010351002953d17",
    "grandTotal": 5780000,
    "orderItems": [
      {
        "productId": "66b5d1ec864df478dfbfce2e",
        "quantity": 2
      }
    ],
    "createdBy": "66b5d0a0864df478dfbfce28",
    "status": "pending",
    "createdAt": "2024-08-10T01:38:02.764Z",
    "updatedAt": "2024-08-10T01:39:41.304Z",
    "__v": 0
  },
  "message": "Berhasil menghapus pesanan"
}
```

### Response Error (**json**)

Status 404

```json
{
  "message": "Pesanan tidak ditemukan"
}
```

Status 500

```json
{
  "data": "Cast to ObjectId failed for value \"66b6c47ae010351002953d1\" (type string) at path \"_id\" for model \"Orders\"",
  "message": "Gagal menghapus pesanan"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## PUT - /api/orders/:id (Update Order)

### Request Body (**json**)

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

### Response Success (**json**)

Status 200

```json
{
  "data": {
    "_id": "66b6c47ae010351002953d17",
    "grandTotal": 5780000,
    "orderItems": [
      {
        "productId": "66b5d1ec864df478dfbfce2e",
        "quantity": 2
      }
    ],
    "createdBy": "66b5d0a0864df478dfbfce28",
    "status": "pending",
    "createdAt": "2024-08-10T01:38:02.764Z",
    "updatedAt": "2024-08-10T01:39:41.304Z",
    "__v": 0
  },
  "message": "Berhasil memperbarui pesanan"
}
```

### Response Error (**json**)

Status 404

```json
{
  "message": "Pesanan tidak ditemukan"
}
```

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Gagal Ubah order"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## GET - /api/orders/history (Tampilkan semua pesanan dari pengguna)

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                             | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjJmMzBlOTI0ZWQ5MzM0ZGRmMzY1NSIsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzIzMTExNjgzLCJleHAiOjE3MjMxMzMyODN9.knaXm9wIch4OH8I9EB17AevwUreAW6_P7XVyeeQvRyM | string |

### Response Success (**json**)

Status 200

```json
{
  "data": [
    {
      "_id": "66b5d4bfd70aad4f0b99c50f",
      "grandTotal": 5780000,
      "orderItems": [
        {
          "productId": "66b5d1ec864df478dfbfce2e",
          "quantity": 2
        }
      ],
      "createdBy": {
        "_id": "66b5d0a0864df478dfbfce28",
        "fullName": "Oktafianugrahadi",
        "username": "okta_user",
        "email": "oktafianugrahadi195@gmail.com",
        "roles": ["user"],
        "profilePicture": "default.jpg",
        "createdAt": "2024-08-09T08:17:36.786Z",
        "updatedAt": "2024-08-09T08:17:36.786Z",
        "__v": 0
      },
      "status": "pending",
      "createdAt": "2024-08-09T08:35:11.213Z",
      "updatedAt": "2024-08-09T08:36:47.492Z",
      "__v": 0
    }
  ],
  "message": "Berhasil mengambil semua order berdasarkan pengguna"
}
```

### Response Error (**json**)

Status 500

```json
{
  "data": "400CD8F1097F0000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:ssl/record/rec_layer_s3.c:1590:SSL alert number 80\n",
  "message": "Gagal mengambil order berdasarkan pengguna"
}
```
