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

endpoint="http://localhost:3200/api/top-page/create"

# Проход по всем категориям и отправка запросов
for entry in "${categories[@]}"; do
  category_ru=$(echo "$entry" | cut -d'|' -f1)
  category_en=$(echo "$entry" | cut -d'|' -f2)

  json=$(cat <<EOF
{
  "firstCategory": 0,
  "alias": "$category_ru",
  "title": "$category_ru",
  "metaTitle": "$category_en",
  "metaDescription": "$category_ru",
  "category": "$category_en",
  "seoText": "$category_ru",
  "tagsTitle": "$category_en",
  "tags": ["$category_ru"]
}
EOF
)

  echo "Отправка запроса для категории: $category_ru ($category_en)"
  curl -X POST -H "Content-Type: application/json" -d "$json" "$endpoint"
  echo
done
