
### Инструкция по локальному развертыванию
1. ##### Установите зависимости:
  - npm install --force
2. ##### Задайте переменные окружения

| Переменная              | Описание        | Значение(по-умолчанию) |
|-------------------------|-----------------|------------------------|
| **MONGO_LOGIN**                | Mongo логин     | admin                  |
| **MONGO_PASSWORD**            | Mongo пароль    | admin-agency           |
| **MONGO_HOST**            | Mongo хост      | localhost              |
| **MONGO_PORT** | Mongo порт      | 27017                  |
| **MONGO_AUTHDATABASE** | Имя базы данных | admin                  |

3. ##### Прежде чем запускать приложение:
  - Убедитесь, что запущено приложение RAG-model-go.
  - У вас авторизован клиент Telegram(*на будущее, проверка авторизации STRING_SESSION, API_ID, API_HASH)
4. Запуск:
  - npm run start



# 📚 API Документация для модуля Отзывов, Фильмов и Страниц

## Базовый URL

/api

## Эндпоинты

### 🎬 Модуль Фильмов

#### Создать фильм

**Эндпоинт**
POST /movie/create

**Описание**
Создает новый фильм.

**Тело запроса**
```json
{
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```
Ответ
```json
{
  "id": "string",
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Эндпоинт

```bash
GET /movie/:id
```
Описание
Получает фильм по его ID.

Параметры

* id: string (параметр пути) - ID фильма.

Ответ

```json
{
  "id": "string",
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
  {
  "name": "string",
  "value": "string"
  }],
  "createdAt": "date",
  "updatedAt": "date"
  }
```
Удалить фильм по ID

Эндпоинт
```bash
DELETE /movie/:id
```
Описание
Удаляет фильм по его ID.

Параметры
* id: string (параметр пути) - ID фильма.
Ответ
  * Статус код: 204 Нет содержимого
  Ошибки
```json
{
  "statusCode": 404,
  "message": "Фильм не найден",
  "error": "Not Found"
}
```
Обновить фильм по ID
Эндпоинт

```bash
PATCH /movie/:id
```
Описание
Обновляет фильм по его ID.

Параметры

* id: string (параметр пути) - ID фильма.

Тело запроса

```json
  {
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
  {
  "name": "string",
  "value": "string"
  }]
}
```
Ответ

```json
{
  "id": "string",
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
  {
  "name": "string",
  "value": "string"
  }],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Найти фильмы

Эндпоинт

```bash
POST /movie/find
```
Описание
Ищет фильмы по заданным критериям.

Тело запроса

```json
{
  "category": "string",
  "limit": 1
}
```
Ответ

```json
{
  "id": "string",
  "image": "string",
  "title": "string",
  "link": "string",
  "initialRating": 1,
  "description": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
  {
  "name": "string",
  "value": "string"
  }],
  "createdAt": "date",
  "updatedAt": "date"
}
```


📄 Модуль Страниц
Создать страницу

Эндпоинт

```bash
POST /top-page/create
```
Описание
Создает новую страницу.

Тело запроса

```json
{
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"]
}
```
Ответ

```json
{
  "id": "string",
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Получить страницу по ID

Эндпоинт


```bash
GET /top-page/:id
```
Описание
Получает страницу по её ID.

Параметры

* id: string (параметр пути) - ID страницы.

Ответ


```json
  {
  "id": "string",
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Получить страницу по алиасу

Эндпоинт


```bash
GET /top-page/byAlias/:alias
```
Описание
Получает страницу по её алиасу.

Параметры

* alias: string (параметр пути) - Алиас страницы.

Ответ


```json
{
  "id": "string",
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Удалить страницу по ID

Эндпоинт

```bash
DELETE /top-page/:id
```
Описание
Удаляет страницу по её ID.

Параметры

* id: string (параметр пути) - ID страницы.

Ответ

* Статус код: 204 Нет содержимого

Ошибки

```json
{
  "statusCode": 404,
  "message": "Страница не найдена",
  "error": "Not Found"
}
```
Обновить страницу по ID

Эндпоинт

```bash
PATCH /top-page/:id
```
Описание
Обновляет страницу по её ID.

Параметры

* id: string (параметр пути) - ID страницы.

Тело запроса

```json
{
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"]
}
```
Ответ


```json
{
  "id": "string",
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```
Найти страницы

Эндпоинт

```bash
POST /top-page/find
```
Описание
Ищет страницы по заданным критериям.

Тело запроса

```json
{
  "firstCategory": "string"
}
```

Ответ

```json
[
{
    "id": "string",
    "firstCategory": "string",
    "secondCategory": "string",
    "alias": "string",
    "title": "string",
    "metaTitle": "string",
    "metaDescription": "string",
    "category": "string",
    "seoText": "string",
    "tagsTitle": "string",
    "tags": ["string"],
    "createdAt": "date",
    "updatedAt": "date"
}
]
```
Поиск текста на страницах

Эндпоинт

```bash
GET /top-page/textSearch/:text
````
Описание
Ищет страницы по тексту.

Параметры

* text: string (параметр пути) - Текст для поиска.

Ответ

```json
{
  "id": "string",
  "firstCategory": "string",
  "secondCategory": "string",
  "alias": "string",
  "title": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "category": "string",
  "seoText": "string",
  "tagsTitle": "string",
  "tags": ["string"],
  "createdAt": "date",
  "updatedAt": "date"
}
```
💬 Модуль Отзывов
Создать отзыв

Эндпоинт

```bash
POST /review/create
```
Описание
Создает новый отзыв для фильма.

Тело запроса

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "rating": 1,
  "movieId": "string"
}
```
Ответ

```json
{
  "id": "string",
  "name": "string",
  "title": "string",
  "description": "string",
  "rating": 1,
  "movieId": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```
Уведомление об отзыве

Эндпоинт

```bash
POST /review/notify
```
Описание
Отправляет уведомление о новом отзыве.

Тело запроса


```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "rating": 1,
  "movieId": "string"
}
```
Ответ

* Статус код: 201 Создано

Удалить отзыв по ID

Эндпоинт


```bash
DELETE /review/:id
```
Описание
Удаляет отзыв по его ID.

Параметры

* id: string (параметр пути) - ID отзыва.

Ответ

* Статус код: 204 Нет содержимого

Ошибки

```json
{
  "statusCode": 404,
  "message": "Отзыв не найден",
  "error": "Not Found"
}
```
Получить отзывы по ID фильма

Эндпоинт


```bash
GET /review/byMovie/:movieId
```
Описание
Получает отзывы для определенного фильма.

Параметры

* movieId: string (параметр пути) - ID фильма.

Ответ


```json
[
{
  "id": "string",
  "name": "string",
  "title": "string",
  "description": "string",
  "rating": 1,
  "movieId": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
]
```

📤 Модуль файлов
Базовый URL

```bash
/files
```
Эндпоинты
Загрузка файла 

Эндпоинт

```bash
POST /files/upload
```
Описание
Загружает файл на сервер. Если файл является изображением, он будет конвертирован в формат WebP, и оба файла (оригинальный и конвертированный) будут сохранены.

Запрос

Заголовки http
* Content-Type: multipart/form-data
Формат данных
* file: Загружаемый файл (обязательно).

Ответ

```json
[
{
"url": "string",
"name": "string"
}
]
```

Переменные окружения
