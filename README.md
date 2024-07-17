# api-movie

## 📑 Инструкция по локальному развертыванию
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

Конечные точки
1. Создание фильма
   POST /movie/create

Создает новый фильм.

Тело запроса:

```json
{
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
]
}
```
Ответ:

```json
{
  "id": "60c72b2f4f1a4e3a2c8b4567",
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
  ],
  "createdAt": "2024-07-17T08:47:56.000Z",
  "updatedAt": "2024-07-17T08:47:56.000Z"
}
```
2. Получение фильма по ID
   GET /movie/:id

Возвращает фильм по его ID.

Параметры URL:

* id (string, обязательный): Идентификатор фильма.

Ответ:

```json

{
  "id": "60c72b2f4f1a4e3a2c8b4567",
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
  ],
  "createdAt": "2024-07-17T08:47:56.000Z",
  "updatedAt": "2024-07-17T08:47:56.000Z"
}
```

3. Получение всех фильмов
   GET /movie

Возвращает фильмы по их ID.



4. Удаление фильма
   DELETE /movie/:id

Удаляет фильм по его ID.

Параметры URL:

* id (string, обязательный): Идентификатор фильма.

Ответ:

```json
{
  "message": "Фильм успешно удален."
}
```
Обновление фильма
   PATCH /movie/:id

Обновляет информацию о фильме по его ID.

Параметры URL:

* id (string, обязательный): Идентификатор фильма.

Тело запроса:

```json
{
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
  ]
}
```
Ответ:

```json
{
  "id": "60c72b2f4f1a4e3a2c8b4567",
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
  ],
  "createdAt": "2024-07-17T08:47:56.000Z",
  "updatedAt": "2024-07-17T08:50:00.000Z"
}
```
6. Поиск фильмов с рецензиями
   POST /movie/find

Ищет фильмы по заданным критериям с включением рецензий.

Тело запроса:

```json
{
"title": "Король Лев",
"genre": ["Анимация", "Драма"]
}
```
Ответ:


```json
[
{
  "id": "60c72b2f4f1a4e3a2c8b4567", 
  "title": "Король Лев",
  "year": 1994,
  "genre": ["Анимация", "Приключения", "Драма"],
  "rating": 8.5,
  "director": "Роджер Аллерс, Роб Минкофф",
  "actors": ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс"],
  "plot": "Лев-принц Симба и его отец становятся целью злобного дяди, который хочет сам взойти на трон.",
  "poster": "https://fakeimg.pl/220x310/0000ff",
  "trailer": "https://example.com/the_lion_king_trailer.mp4",
  "runtime": 88,
  "awards": "Выиграл 2 Оскара",
  "country": "США",
  "language": "Английский",
  "boxOffice": "$968.5 миллионов",
  "production": "Walt Disney Pictures",
  "website": "https://movies.disney.com/the-lion-king",
  "reviews": [
  {"review": "Невероятно трогательный!"},
  {"review": "Классика Диснея."}
  ],
  "createdAt": "2024-07-17T08:47:56.000Z",
  "updatedAt": "2024-07-17T08:47:56.000Z"
}
]
```