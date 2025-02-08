## Задание 1.

### Уровень 1.

Для разбивки данного монолитного frontend части приложения я бы остановил свой выбор на Webpack Module Federation,
так как по описанию, мне показалось, что этот инструмент более легок в осноении чем Single SPA.  
Также, одним из преимуществ Single SPA, является "Framework agnostic", но в данном проекте, я не вижу мест, где это можно было бы применить.

### Уровень 2. 

В рамках декомпозиции были выделены 3 микрофронтенда(remote):
- микрофронтенд аутентификации([auth-microfrontend](https://github.com/EvgenyMaklakov/architecture-sprint-1/tree/sprint_1/frontend/auth-microfrontend/src));
- микрофронтенд редактирования профиля([profile-editing-microfrontend](https://github.com/EvgenyMaklakov/architecture-sprint-1/tree/sprint_1/frontend/profile-editing-microfrontend/src));
- микрофронтенд профиля ([profile-microfrontend](https://github.com/EvgenyMaklakov/architecture-sprint-1/tree/sprint_1/frontend/profile-microfrontend/src)).

Важно отметить, что также в структуру был добавлено основное приложение([host-microfrontend](https://github.com/EvgenyMaklakov/architecture-sprint-1/tree/sprint_1/frontend/host-microfrontend/src)) для динамической загрузки удаленных модулей.

Такой вариант разбивки был сделан после анализа зависимостей и функционала приложения. Были выделены максимально не связанные между собой домены. Примерная структура каждого из микрофронтендов отражена в директории _frontend/{название микрофронтенда}_.

### Уровень 3.
Не выполнено. 

## Задание 2.

