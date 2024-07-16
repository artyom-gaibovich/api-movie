#!/bin/bash

# Определите массив категорий с их переводами
categories=(
  "Триллер|thriller"
  "Драма|drama"
  "Комедия|comedy"
  "Боевик|action"
  "Приключения|adventure"
  "Фантастика|sci-fi"
  "Ужасы|horror"
  "Мелодрама|melodrama"
  "Детектив|detective"
  "Фэнтези|fantasy"
  "Исторический|historical"
  "Биография|biography"
  "Анимация|animation"
  "Семейный|family"
  "Документальный|documentary"
  "Музыка|music"
  "Спорт|sports"
  "Военный|war"
)

# Определите URL эндпоинта для фильмов
movie_endpoint="http://localhost:3200/api/top-page/create"

# Проход по всем категориям и создание 10 фильмов для каждой категории
for entry in "${categories[@]}"; do
  category_ru=$(echo "$entry" | cut -d'|' -f1)
  category_en=$(echo "$entry" | cut -d'|' -f2)

  for i in {1..10}; do
    # Создание массива reviews
    reviews=()
    for j in $(seq 1 $i); do
      reviews+=("\"Отзыв ${j} для фильма ${i} в категории $category_ru\"")
    done
    reviews_json=$(printf ",%s" "${reviews[@]}")
    reviews_json="[${reviews_json:1}]"

    movie_json=$(cat <<EOF
{
  "image": "https://example.com/image${category_en}_${i}.jpg",
  "title": "Фильм ${i} в категории $category_ru",
  "link": "https://example.com/image${category_en}_${i}.jpg",
  "initialRating": 4.5,
  "description": "Описание фильма ${i} в категории $category_ru.",
  "categories": ["$category_ru", "$category_en"],
  "tags": ["тег1", "тег${i}"],
  "characteristics": [
    {
      "name": "Год выпуска",
      "value": "201${i}"
    },
    {
      "name": "Режиссер",
      "value": "Имя Фамилия ${i}"
    },
    {
      "name": "Длительность",
      "value": "${i}0 мин"
    }
  ],
  "reviews": $reviews_json
}
EOF
)
    echo "Отправка запроса для фильма ${i} в категории: $category_ru"
    curl -X POST -H "Content-Type: application/json" -d "$movie_json" "$movie_endpoint"
    echo
  done
done
