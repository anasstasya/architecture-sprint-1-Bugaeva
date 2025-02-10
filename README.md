## Задание 1

Привет, хочу сразу попросить не судить решение очень строго c терминологической точки зрения, т.к. я не являюсь экспертом с глубокими знаниями фронт технологий.

На мой взгляд на данном этапе развития нет острой необходимости делить проект на микрофронтенды, т.к. сейчас он не имеет большого количества бизнес сущностей, которые тормозили бы его развитие и замедляли внедрение нового функционала, в свою очередь микрофронты приведут скорее к увеличению сложности проекта и удорожанию разработки, т.к. потребуется расширение команды для его поддержки и усложнение ИТ инфраструктуры компании.

На текущем этапе проекту скорее требуется хорошая монолитная структура и соблюдение [GOF](https://en.m.wikipedia.org/wiki/Design_Patterns) паттернов, где каждая бизнес сущность будет располагаться в выделенной ей структуре (не структура данных) и иметь свою внутреннюю приватную и публичную логику.

Подоббная компоновка могла бы выглядеть следующим образом:
- `/frontend`
    - `/public`
        - `...`
    - `/src`
        - `/auth`
            - `/blocks`
            - `/components`
            - `/images`
            - `/utils`
            - `/vendor`
            - ...
            - `index.js` - Отсюда идет экспорт всех публичных компонентов
        - `/profile`
            - `...` - Аналогично `/auth`
        - `/card`
            - `...` - Аналогично `/auth`
        - `/profile-card-bridge` - Модуль инкапсулирующий взаимозависимую логику между модулями `profile` и `card`
            - `...` - Тут живут исключительно сущности общие для profile и card все остальное должно помещаться в профильные модули
        - `/base` - Базовые компоненты, в которых идет сборка всех модулей
            - `...`
            - `App.js` - Тут точка сборки приложения
        - `index.js` - Типа main файл для фронта как я понимаю

> [!IMPORTANT]
> `/profile-card-bridge` Гипотетический модуль, который добавлен исключительно для примера того, как можно избежать взаимных неконтролируемых зависимостей между модулями

Плюсы приведенной структуры:
- В дальнейшем подобная структура при должном ее соблюдении позволит более точно определить доменные области и грамотно переехать на микрофронты
- Распил на микрофронты пройдет проще, т.к. основные доменные области уже выделены и все взаимные зависимости известны, особенно если использовать паттерн Мост.
- Экономит деньги компании на инфраструктуре и время разработчиков на более простом развертывании
- Скорость разработки будет замедлять только дополнительный рефакторинг нужный для поддержания структуры и снижения энтропии

Если же мы принимаем, что данный ~~сферический конь в вакууме~~ проект мы обязаны разбить на микрофронты, то их структура будет фактически соответствовать вышеописанной с поправкой на особенности технической реализации.

Если выбирать между `Webpack` и `Signle-Spa`, то я скорее склоняюсь ко второму, т.к. по мере развития проекта это позволит сменить технологии для любого из микрофронтов и проверить бизнес гепотезы без особой головной боли.

Компановка микрофронтов при подобном подходе может выглядеть следующим образом:
- `/microfrontend`
    - `/auth-microfrontend`
        - `/public`
        - `/src`
            - `/blocks`
            - `/components`
            - `/images`
            - `/utils`
            - `/vendor`
            - `...`
            - `App.js`
        - `index.js`
    - `/card-microfrontend`
        - `...` - Аналогично `/auth-microfrontend`
    - /profile-microfrontend
        - `...` - Аналогично `/auth-microfrontend`
    - `/main-page-microfrontend`
        - `...` - Компоненты глвной страницы и подгрузка других микрофронтов (в нашем случае карточек)


> [!TIP]
> В случае если в микрофронте окажется несколько доменных сущностей, то стоит их разбить как в примере с монолитом (про GOF тоже не забываем) 

> [!IMPORTANT]
> Главная страница будет отдельным доменом, т.к. у нее свои стейкхолдеры и изменяться она будет по отличным от других микрофронтов причинам (к примеру маркетинговая компания во время которой на главной странице разместят баннер с новой услугой)

Я так понимаю, что у нас появится дублирующийся кусок кода, который будет перехватывать 401 ошибку авторизации приходящую с бэка и будет перенаправлять пользователя на страницу авторизации, но я не эксперт в фронт технологиях и мб можно повесить глобальный try-catch, который решит эту проблему.

## Задание 2

[Файл со схемой лежит в корне репы - arch_template_task2.drawio](arch_template_task2.drawio)
