```
npm i bcryptjs
npm i body-parser
npm i jsonwebtoken
npm i express-validator
npm i -D nodemon
npm i cors
```

Название БД "tapki". Файлы с коллекциями в папке "json"

<h2>Для запуска</h2>

```
npm run start
```

<h2>Запросы на /vacancies</h2>
<h3>GET</h3>
<ul>  
  <li>/vacancies - Получение всех вакансий</li>
  <li>/vacancies/:id - Получение вакансии по id</li>
</ul>
<h3>POST</h3>
<ul>  
  <li>/vacancies - Добавление новой вакансии (параметры: title, description, location, salary, datePosted, requirements, img)</li>
</ul>
<h3>DELETE</h3>
<ul>  
  <li>/vacancies/:id - Удаление вакансии по id</li>
</ul>
<h3>PUT</h3>
<ul>  
  <li>/vacancies/:id - Изменение вакансии по id (параметры: title, description, location, salary, datePosted, requirements, img)</li>
</ul>

<h2>Запросы на /auth</h2>
<h3>POST</h3>
<ul>  
  <li>/auth/registration - Регистрация пользователей (параметры: username, password, email)</li>
  <li>/auth/login - Аутентификация (параметры: username, password) - В ответ приходит token (jwt)
</ul>

<h2>Запросы на /users</h2>
<h3>GET</h3>
<ul>  
  <li>/users - Получение всех пользователей</li>
  <li>/users/:id - Вывод пользователя по id</li>
</ul>
<h3>POST</h3>
<ul>  
  <li>/users - Добавление нового юзера (параметры: username, password, email)</li>
</ul>
<h3>DELETE</h3>
<ul>  
  <li>/users/:id - Удаление юзера по id (у нас не используется)</li>
</ul>
<h3>PUT</h3>
<ul>  
  <li>/users/:id - Изменение юзера по id. <b>Используется для добавления новой вакансии в избранное</b> (на вход принимает измененный массив favorites)</li>
</ul>