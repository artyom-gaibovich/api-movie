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
  "price": 1,
  "oldPrice": 1,
  "credit": 1,
  "description": "string",
  "advantages": "string",
  "disAdvantages": "string",
  "categories": ["string"],
  "tags": ["string"],
  "characteristics": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
