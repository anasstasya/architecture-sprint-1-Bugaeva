Микрофронтенды
==============

## Шаг 1. Проектирование

Для проекта используется входной файл `frontend/src/index.js`, который подключает `frontend/src/components/App.js`.

Приложение построено с помощью CRA.

В файле `frontend/src/components/App.js` реализуется маршрутизация между компонентами и подключаюся все компоненты, которые становятся активными при определенных маршрутах.

Файлы стилей находятся по пути `frontend/src/blocks` и используют методологию БЭМ. Сами сили привязаны к компонентам.

Основные блоки:
- регистрация пользователя и вход в систему, за которые отвечают компоненты: `frontend/src/components/Login.js`, `frontend/src/components/Register.js`, `frontend/src/components/InfoTooltip.js` и утилиты `frontend/src/utils/auth.js`;
- изменение и отображение данных о пользователе, за которые отвечают компоненты: `frontend/src/components/EditAvatarPopup.js`, `frontend/src/components/EditProfilePopup.js`, часть `frontend/src/components/Main.js` и часть утилит из `frontend/src/utils/api.js`;
- приложение по работе с местами, за которые отвечают компоненты: `frontend/src/components/AddPlacePopup.js`, `frontend/src/components/Card.js`, `frontend/src/components/ImagePopup.js`, часть `frontend/src/components/Main.js` и часть утилит из `frontend/src/utils/api.js`;
- общие компоненты: `frontend/src/components/Footer.js`, `frontend/src/components/Header.js`, `frontend/src/components/PopupWithForm.js`.

Основные маршруты:
- `/signup` для регистрации;
- `/signin` для логина;
- `/` для просмотра, добавления, и оценки мест;

## Шаг 2. Разделение на микрофронтенды

Для разбития на микрофронтенды был использован подход Webpack Module Federation из-за того, что компоненты в большенстве своем связаны и важно поддерживать последовательный пользовательский опыт при использовании компонентов.

Для того чтобы адаптировать CRA к микрофронтендам был использован пакет `craco`.

Разбитие на микрофронтенжы происходило по DDD.

Структура монрофронтендов:
- `auth` - отвечает за регистрацию пользователя и вход в систему;
- `profile` - отвечает за изменение данных о пользователе;
- `places` - отвечает за приложение по работе с местами.

Общие компоненты передаются в микрофронтенды посредством DI.

Базовая структура микрофронтендов:
- у каждого микрофронтенда есть своя песочница для запуска, которая доступна при выполнении `npm run start`.

## Шаг 3. Запуск

Общие команды для микрофронтендов:
- `npm run start` - запускает песочницу и релизит микрофронтенд;
- `npm run build` - собирает микрофронтенд.

Для запуска приложения:
1. Для каждого микрофронтенда выполнить `npm run start`;
2. Для приложения выполнить `npm run start`.

Микросервисы
============

[Ссылка](https://app.diagrams.net/?title=arch_template_task2.drawio&page-id=Mm1bHULKEmKQKKcOhmX9#R%3Cmxfile%3E%3Cdiagram%20name%3D%22DF%22%20id%3D%22BleSmaJVXqo2yb7Co1eL%22%3E7V1td%2BI20%2F41Oaf9QI7ld38kAfq6vdvutt0%2BX3occBK6BLJA9qW%2F%2FrGxJWRpZGRjyzJRtycJtjFGGs01M5q55sq5ffry3TZ%2BfnyzWSSrK9tafLlyJle2jSxkpb%2ByI1%2BLI0Fk50cetstFfsw6Hni7%2FC%2FBby2OviwXya504X6zWe2Xz%2BWD8816ncz3xZvzY%2FF2u%2Fm8Kx2636wWpQPP8UNSulF24O08XiXcZX8tF%2FvH%2FGhoB8fj3yfLh0f8yciP8jNPMb64uPHuMV5sPlOHnOmVc7vdbPb5X09fbpNVNnrlcZkJzpIH2ybrvcwb5j%2FdPSxvvY%2BP%2F%2Fzwfn3zP5T84f40ioqn%2FRSvXopvXDzt%2Fisegu3mZb1IsrtYV87N58flPnn7HM%2Bzs5%2FTWU%2BPPe6fVukrlP55v1ytbjerzfbwXmcRJ%2BH9PD2%2B2283HxLqjD8Pk7v79Az%2FPYqv9inZ7pMv1KHie32XbJ6S%2FfZreklxNvKLMS6kbGRbxYHPxzmz3ag4%2BFiaMKc4GheS8kBufxzM9I9iPOGx%2FfDbX7OJi%2B5%2FnH1Zvf%2Fpt8d33m42sk8P7UM6ts%2FyA0DEPL5bJawkQQOTfrmgNDJByI0L8hA%2FLI5%2F%2FqDAAoeAUfFX6cfePJfGxv%2F4kq2Mm6d4%2B7BcXznj9Kz1%2FIX5iZz0VyZDVjpS%2B9EyFdRsELOLR8dz95v1fvQp3i7j9Pf65SnZLuf5RevN9ileAVcl8W4%2Finfp3ycujFf7ZLuO95mSAi%2F8kJ5erh%2Fys%2FHLfkOd2zzvl6muGe2W%2F4kuuU%2Fi%2Fcs2Ge2S%2FT69RvQph8fZLzdrqQvT38%2Bb3TK7XnBZul6T%2FfxRdPagp7NTyMWDvFqukxGWIfZd83zhZ4e3D3ffIPfKvj28G%2F%2F%2BlprFeLV8KJ5rt4%2B3%2B8MpLA%2FZzVbxblcSkmdEX%2BA%2FFL8PYnW3ZY%2Bkgvt8PCbUdqi2tpvNguBmxmm79Wadvv0m3s4LfHMcUO9VapHTyrBY4p7kCkddrXBI7%2BUDn8kOuMhZoQoLoRLN6RIfmPwbrx826XP%2B%2BnX%2FmArzcYaXwKznny%2BY%2BEz0yrNbyOFkns5Qkk7kTTYJ2XodFyeelotF9nZQTMqCRNDfKr5uIQq2g18XTwLg%2BplyUZx1eEgMo240P%2FjAkOJXDYc%2Bhp%2BjoeAAy8Xjh8WNOlouyPcNIhpENIgojYjy7gF2OiXXuON2tsY9hZj4exKnjrA9%2B%2F7dm5%2FTX7dv374iWKztO9qRFCx2pv%2Bj8DQunuOBJ2jhJQHkgUd%2B4MR%2BBiibTwWCZu%2FfJqnQ0a83%2B3hPvV4kq4R%2BnSyW9MvVZv6BPGoZn1FH3r4v7e27VgvO%2Fg9vP%2F%2F7%2B%2B7n9xP36%2BZ%2F8zfvf327%2FHskMYtdWzd2EDAD44X8wHgOoPlIkOqccXn3nx9P%2F3DfxOs3X%2BO5vX0ef1yPkCURBqmFMEfQ8Hhpv7%2B%2Ft%2BdgvGnh3%2FmeD0pg5YRKiyUK%2BLFGodqxdrixfveyvdv8Gn8dkF4%2FczpolA%2BCbjQ5%2BIgSodTOVUBosyrABlQALJYtWD8CsbSGqQIiwbRUypzyweX96lnqqb1JLezBL3r5CcDyz8k6coHYV2cqAElIevc6wGN0gOtDOsAFxNTtTkzdYeoAMqM1lYDi0QX8y3QVjmfZz5vJ4ad7%2BOkdfo6v0jEM0fUFGAbNJgh5kHfQglqYoNt363%2BfPvz9h%2FXmozuO3vqL%2Bcjm7bK2hN9qy6cqB0ajwOVVKbIBaHNc5%2FxRi3959GfTl8fP0Wr3LtxOne%2B9H0fI7s5ucBS7vax%2B8rJ%2FkH5Ct15wOyFncM4BXh3Ulfl%2F7Ux%2FOrNuaf6RxYdFkAvtIwVBCxtJgvkHtgwyrYYOOizMddjhp03pttvDz1R0rMMp5%2FBydvjbKk5lP%2FO33FBvnFC3neG355dNqbc7%2BEh%2Bk%2FT4DfW54eGN%2BSeS%2B%2Bdvj6hPd7EaJkfI2wejjutLmeOzUsZrGQ9r4bY1MyhjvoSKKa9EuzwZ6QA%2BZ9c9fXnIMqCu71ebz%2FPHeLu%2FXmTqI97JzcPAQnC2Y5VnMgUQbiYdfIyeSc9rQV2ARlAAzKTZRjPbaNQstruNVuzc3OfL%2Bnjdu%2BVTOme29UvyOf35%2B%2BYpXgM3SRdnFGD9f0CcIyqNKQgjwERe0riWG%2FI%2BRi4CTJPrHybCHZ6O9%2Fzu0GJxb4HGjRU4UdKWCmJCXS4Q7AYzX%2BwWNBC4leOKd%2FmMChqCCtJc05zeI3a5PWLF6olYyR5lKzOWOm2I08or%2FXt68TqrnI7rIecaytcDghPdaS2Tf2S0ln72UXGT3XN2tpHqy2%2F041%2FvKO2R3%2B5EBsyF6BqnbB95Lm8fQb52d4oG2iA1imY4iuYVemgzyqe6OZgoeZwuKAcBiTFDByKL668PMUsLuNEr0z9%2BBNo6Kj00Dwr3GRVkVNCFq6DLDwaxyiYK%2Blc2xrEyyuYVKpvDjUK8qZlvpl608nHDcvKEGwJV1kilq%2BWZzTCjel6p6hm7QFbFMRcjfBUqibWHfNvt3R4Ccy2MUjJK6RUopYikfdE7ZIddsVemiDxgl95Rud%2FlQ6V6Rg0ZNfQa1JDLXXT%2Bvn2etnrRWoz18AT79pFKH88322lGj71SPTZGJQ12VFDOqzCq3JBJI%2FLD6wDQRw6QgN2ZPgqMe2f00WvVRxMqwkSXWNJm05TKlpxQN81rjUjJUF4sFJRNtItWZ45DglOYptTxIYVmWyoNLFzYZhSaUWivTaFFE%2BoNt1S8iriLzDvJBS6n6y5dfXHWWAQqLwQRUnWnvCC%2BBaO8jPLSV3mNT9Zai0wmqSrr15AEhRg7yg94UjLkEmtLjSYyVXFGExlNRGsiysKyqCg6sbOI6cR8nkWRVByuvHR95pS9QssDvUKQbKkzdWZSq4w6G5Y6azuLYUxdFFJvxprrwrVSWNZKUF0dcgHi0c5UUmh8PaOShqWSxnij7qhiHMrOehXOGtOZy3cg4yZUqkiMq2YUyYUpEs7XCl61T%2BViDs9qtYOQymB1aCrljN65NL2Tx4WiKRUdCqn3vD7V4%2BGCWKx6MCl%2BmWNYpd4xsRyjdwamd0homonZvAKXyfPLLpPv8KSzuMGxGv1hSkmM%2FrgY%2FWE8JUbb2GVtE0HmisoC2tBUfBh1c1nqxnhHR3VT9o58rH5odWOpjAZHcFOhiM5ooPkVJuVZBIsGy4kV7DThZgovT6vxfL%2Bhe1v8HN8lq1%2FJupvcbfb7zdMV3%2Fxiv2Gmc%2FOyz5bXbd4H4SrvilAWiBbmD1m4y10xfw5AR%2B4DeVekQVn78wdF1ZgRT9aL8XZ76ABy0AyZbqcHrzxOi3j3SF6kY7X9%2Bj4bz%2Buse1Bx4O%2FDAevQP%2BRwYPKlGPL81Vf61a8pmKTfNWtiMqlsZLTbvGwLFVQtq6nKe0j2FRcir0DxZPGQVE4s3ZMECIbiY9tklWLHp6T0vNBcFp%2Fw62Z50KlYbhCz7j22S1j%2B3Yu3HUUCulPZYIkCpmtKPjjcnVIByNqAkcueswt2nPiRoWkukVAnyL%2FGv3BSeUE9b6SaFYeAXuis4TTUMfLnVzYJdv%2BTINESrp5ynr9sP5GuP0Q5o2vLYpRz1iazTeVM69zqRm6a6FwHsV1ybbzdVVfpOlbE3Ap5ZypdyWe2C%2FviKIX5LVtW2O2mFtlI7HIezxmXsz2Xs2PPMj%2BVa%2FjsTKHrz3c5TxP%2B28%2Bne518n6w%2BJdmcSSRGupSDQvIZifviU06PBzmnfBY4n0vpF8fP8GQzFXrwhZpCM91bLlPrheJJb%2B7dXHkTCd%2FoBKCd3cDYukaRUzaKUSt6f2RjzhTsozHwvrm%2FT5djN5YvlFp1Ft4nX5b7EsKnr3OAd2yveH3E9%2BzFV%2BoFi%2B6w9WBd%2ByFtPJSsidY9u2rjgTYzqntMa2Jm2BETEnBxnkttK8O2OAO2GyuD%2FSDHV2JliPN%2FzoCDsp5nGK5cKhDFkMkQ%2FR9SQazbq6Lu%2BSTzTBtAMBilj7WazkrfKit9l1mEXSp9KL%2BkCyev7OB5zmt38BzO4W%2Fq4NmBW76V15XqZZ8Zf1DHqlecwtCa6m3XxJ5SN2EqJg%2B9uG0%2Ffsp8kPXd7rlsVUPG9mL5qUUP5Pi92%2FIESs83GFjAek9nWGCi5SN2H6ZLXIA28ttxBkqOAEJBa45AVmXLeAKB8QQkPQEfMcE7q6EnYEdemeFhhM7e5RF9ks8%2Bswo8wgMF4JGwFeTpGFQHCj7iN73LjLgs8RvvMtxWOgvoKkIFVpxEiXJby8HABFaDGsME6dtS3BanjCtACUxr0Ilp5pH0HDpDgwh0QB1hesxnpBdZrrE3kXVfu91JpDYPUbZ5uMpE%2FSaef3g4XIfzddabdVJcTaXw3ITZvypYqpHCEzJ7QTbEdW8BMONYYrk8b5vRFqvT3mXo8OZT4RQjZayURYGElPlqpUzMlNmWlLXVBvEi5Ck1vb3Aa0meAsbOQxrIk929PDHa6Zj0bqQElBIm%2FQAF%2FUsJlEKjTEoo9HKoWNRtcZGRIE6CIv0kyFjYw7J9Asb2Id2lerSwu9vYv6Jjea4dXbUVywsdErrDsTzvqqtYHjxseFdleLE8dkPIbZqw7dj4q%2BGSj6429UP2iVVE8ir6E7UTgKM16KwcbiN1RGYL%2F1QQzm5tC3%2BUKinXKpdoj9rarXHL0b2Ro263xhazRBgrYQhWgov6txK63GY3cbhe4nBMZ1M3UujPgBukPp9Gh7jpSe%2BzfN6JBpuetd1zXi95v%2FySDT87EeUq2dksCFLE7CjYAAwt9v5LpbBOV%2BvX4dcvYObrP7QOYnaiRzbgQikeW95QdFSN7f19ENzddyS2DhBJVTu0LhSYN85pk0STajdWG%2BfUKaeHYFevgXMasori3MK21g1z%2FN0o6XaHqJQ5xeH2rpNdPrbuDXFoHaKD9cE7V4KXIeca%2Bat4RLs8nJgm4%2BnLQzrUj9f3q83n%2BWO83V8v4tRbj4VTUh72p82nwrVHTHwhV%2Fv7eE%2B9XiSrhH6dLJb0y9Vm%2FoFo83LgoCWGDQcxBvfIBaq4bRvQriio0KTnTabH6yDDyXQxBbIdUCpVZzFSn0W8ZUgYLFEsoG5QweVu1JTtqdNIliDTMT98t61VQnsOGRSJIHBkULPZJEod8HYMAo9BLbDHCN49UEIGhTxxjo9RdEbRGUWnKtz62lShy7QG9wEaTltlQ0vk2UYVDloVNuPhVKkjRXs%2F3EM0U57KVdir0FUOYmNmDrTziCtKFCkrcZakUVZGWV2%2BsmIdy1eqimyAj1a1KgLSbbOZ5XlZwD6j8vWUFpWWzYgEeTsRCbrCPksro3lgbqi3ufWfI6BOzaiLx8XzyZX5q02oaEH4kMWEL1xoI9QFgu7dJeB4QBJXYcWQVD%2BPExVGCqjcwVKO4JQSEJe6Fc1rMS5uwkX6L4jz2gfMHbWc1yThpiPSa%2BGoabIBjCwm980PrGvXOf5ryDuACD3u8b7lO%2FW%2FHYwJPQBLl9XxIaWeGQ6ZM5OGK1R%2BvvxhlQ8%2B5g1uxtJE2bwqgPGBWiLFAONLEDrXshvj7bwYNoe3Iu%2B97B9kRaJbL7idkDN4C9mpNavZnM3ip%2BUqG98jiWp5Mu0rLsEy%2F%2B%2BK301uY9J9RrUdlX0JbgDlyrF%2FtTjtsE17LFfOVybDL3iDtcqEMjC8stHLmJkT6md%2BJLoCChXyT4yoz3IrzY8LYnlHgcMWH3ghJyCkL0fbPO8TdPtu%2Fe%2FTh7%2F%2FsN58dMfRW38xH7VLn22CL8MIvgy5Y1PRkik3d8aAYrJptWKVddOBgC%2F7eeHdmpATopKqQTbuBFfaoe%2BoOxyoavADnFNiwm%2BSUq28Dq7y%2BBBVyZmpsoZ4cjUhJp0NECHGnEnlk29nihyg4xfLQdWeCJ0yZqzG3CvpXb%2Bhgn2le33Ly8uAgyJR4DDzih0RFVEReF7F%2FNrGDBmCGaLNVs%2FQc3eaGzi0aUOTxE%2BoEAxPCeldHcNHTKSG3tdAJUVqMn8K6CtTLyIbpwLRUZ6usiBhRdotoTtvJgnHUZd4MxuUQWSnpXaIOQxP3aolQgzxQ7fFiAELj6Fab4wAhmr9hELSmEIXF%2BWRpKguui7Bo9MlBY1hXeiBdQH5zD4kIvQsKmgXQCkDOXbb23IeolHgs5ab1dwocE%2FcSuXGMzz%2F4sBb7ZS5k7jeNPxy9DLGFNIzW0g03k%2BLi4dDMi9SJrWhEAWBdR1FHgqL%2F21GBNksChkQLGOg2wWNPMifJwjpjSmbKaTkZYKd4EuKyHkOM%2Fo%2BjxmdReQErIadYgZFpxHYJToN69pyGnVwZHf%2BhRND02tUSaQuYBUxFsXIZTt8SYNVFPrXtm%2BR%2F5hFjzz%2F2g2tCP8X9Ihk%2F04%2FvF%2Ff7778NvrnB3%2B72vxkrf8BdMUg%2BaNS%2Fz5kNLbP7851RfoAjqzYEZE2EcIT0dRlyWagE0WI635wVE4iPusuLwFfudIW0CSnxGpFlEIuCMnnlCAsXm3nlCyc7T%2FBn3883P%2F8z2iy%2BO%2Fu47M9HokLeh4RKEn5bs7oAL90XJ7LbvBOiFi2WXRqI8H0hNd%2BN0k07a0ktZzYUuLFZ3dKfA6P%2B5l6qoz3xQiFyi3G%2FImLhNDsJAn9Vu6%2BlS6pp3LQdUV0Gdz%2FkgJRoYab9NXR7a7GFxEvAjklLhpP7hmERskdifmNKH2wXKciJ9ATGW9INizH399KytTfb9OD7zJbgpWkw41G8fPzKl0%2FX3f75Ck%2FdJMK8Yc38fzt4djsEC%2FNjo%2B32dMd%2FjwmMx9e7uL1Ll1Z2%2BU9PJh%2BCX%2Bg8eeGeWpnUlLKjYLktcUhtvLvgn99K3hiakGflI0iCNDZN5AfzqOVmq8sR7AAZ9DSq86GJraw5MInNYUeVARWsdiJWqDN7Rm3cWBTH0puTvILyLdGRWZBabOPvPEWpyrQG3kVyZrFZd%2F8MOE8g8bhxln%2BlY%2B3FLbRwfPAlNlAHXXkbvXtFcnOkJwddjQi6lGsipSN6xPLo5x%2BYQzo4dlKFXB7Saa1EYpLNKDtHgxoGtLocv4ppdrpMihan3bbo8VYvk0t3wr7Fk9Bv4YuaDFCcK%2FhYza3PqgFQC4IqbvhhQFYTVCvpJKxaUE3p%2B0%2Bem1Xp4%2BJ7a8wF%2Bau5qQy9Xl8WD%2FzzfoQCF6Mdod4cx2PubOn5dLaZNL5aPufTDkd1Kcr3adlyePVMxPHqCsBIl%2BsQj3TEj8tI0CAbXUKDWza%2BhdvYZdcC0q4jwMyoR4sgMYwhL4muXn%2BZenBH3PfFLuuJUfshhqlvAiY2YQhWqBBdtnhJ3l%2Bm%2FitIALT20Q2NwKncdg4QZdu7xonyAjFYJ0gpx8nSBK2JbPwjY%2FTr4%2FTcSi8sfPQaVScBGF5e49OKsGWzFG0O4%2B7Hr0LmBap8YILrwC%2FxSsbYLyhVSu2T4armJoiQt7c0DP216VDrbG%2FjFAM1v5ye7C%2FdGsLTptf4FAYc8yYYxJJCrXsC94ck4wAKzPf%2BEiYBaUeOFRwThRoZJbgmHpjRB3HkyK53NnBt3DmBT3siBpDhuizlQDejDzzDxNj6106rBtbzwjFYG097xJibScZL%2Brta31DaXm6Epd%2Fvgl3r5D6JiKgJbDhcTehN7Cib0140KRAtGO6nRkYZFwwxC2e2%2BIjGMOL3ce0ygE6OoOXYUeuWNJW%2FSg7uDMun%2BvEBgDrOJ6VuqmYXBFLtNoIY3osK0WTLg%2BEiv42n5JtxgSaHnlcLlIL84ouBGQrkj3yQed1G0RMR4tjiwuq3C%2BCOMdQ2EK933Zjfzd7%2BDj50%2FptNfb%2FfBqtfvtzdD6vqy1k4psQPrxZeVUyQsLApM1JTkiJJZ2U7hVCyMo5jXERJTf5V1JeWGq1JD8sqWsEFB6TpnBts9PY4%2B9m6z9%2FD766v0z%2Fb%2F%2Bz8y5ZrkDpYYY1Q6Bn%2BW9fn0%2FDjph6bGhULKAXFUsV1WRUbv7v5sff1t6N9yZY%2BW%2B24ze7fzYjCR4%2FwahUDnLzoVIxEvEvj%2F5s%2BvL4OVrt3oXbqfO99%2BMI4a%2FeWuOKh228WCZHCijMClUu%2BGf6VDAX90vmXCkyp5VBj3Mp0YRk9yF3Jw%2BjATKwECoR66oxywunmGk60Q3fRORYtA8wRxwYL5Lt9FOSUwJBrOHx5517%2FZDE2yuOMAASMFoaF8l9%2FLLadyEKGBc4akueQwAg%2BkYtEH2DghIBcjJhOvE5kJku2guvDuI2qB9TSilBCyRmkShxk2T%2FXaSqwu0iS9LpXvM8uyiwuzFawC%2Bgg9Hisx00EeAKqLVawF6%2BcuNSOcx6my1w46XAa9lsqWWfSA4wmTA9jAbBSELdAWobDSKdKWcNVqvYCzNI2hee%2Fs0MgWjBXVcjukuivM0hx8BxfC%2BxSMA%2BijKb756mhkhnElQmu4IMARvTmCsxBCR8U%2FWGANDNWLEdALWVO8MOsM8eqx7RC2LV184OcAUjrNVIQiSFxg7o3w6QFx5d7QD8PFXxBpqjZkwFBurybjGZbeXa2OLiQYN6bXEoB99B794HdrQ6A%2FXmXmwHoN4fiEs4sHVAXGTrDQHEQ4mAT%2F8g7glGWKuRlLCYDYj3AOLywqMtiFduGtBZ5jThNOKgnIFsMaHbsGG69oTj7qvFfPNNQxE0352hdHMfszWUti1Lvxi8RLS0DmyLrLlBwLaEjPQP275ghLUaSQlj0MB2D7AtLzzawjagsM6FbSYTl5Rq5SH8PH930OBde9rLnRNBH9uxFaJ3c%2BeyQ%2FTuP3DePO%2BvcpQHCd4SY9E%2FeOuVdScYSYktCAPePYD3kPL0BKIF7MlM8saxJBwelMPnvIdNV%2B3wFR7TYot82IBde6pReaZBxO4qUR%2F8Cs39yg4Quz%2BEltCldRBaZMgNAaEjiSaR%2FSN0KBhhrUZSYn%2FBIHQPCC0vPLoidGSDCM2Wpouwmc6Em1G725jEBM5gew2IXls0ZBDdVxlBbw5l3ZXekVFSoYzh9r%2FAgtEO1fQCNXgcW6n1YlZp%2Bm%2BWPYMMph3LpgyiNRCc%2FgENFitBw3g66ktXbMkT4jPFYlqCkxqdgaf%2BNF4hlXlZEvmf6vHK40dFsZ4dQqFRJJgAnfCqizIjg1dn4pW84OiKV4ISI6YxEtmrpNusiIjAmHzjG%2Bri6AKBq7YMlMuFAdjCS1tNsbBEmEw9buHXvelbXLCtNW6RudMYuALjaGkIXDUkR1PkCgSeFt2UrYFfRQcMpxzk0STIr4%2BrozPZOk2gYdsqQ49IYsNDOSY6bu%2B%2B3BCKRZFoBjTCRLeLWlGDiediYn3CQs0w0QNs%2BQwTaSZVuuOnW4mDBLCmJU4HYEMNUado7JtR96cZVnmW1%2FAScbC2PEngIKinOsNBCSdIPQ5GFjAwahW4LxGN6x8JbcEcaISEvkQarUFC5UgoLzkECW2tkNAHTNUs89PhyBJuKNyrW6RhvMA2ZUiCRjFUin46MC2w6Oc6fUdGfQnnpX%2Fs04s6EI5gSUTeDfYpx74GvIF6YV8ARK9qY58tAC%2BGBtCg3tnSI4F6KjkDkQbMBTzq4TLc%2FpT1EPJYkF5EefBAmkQWHVGvAUueZqgHZ7JU1fqB2StWFadOEfW8PNiqPf3eadhSWv%2BHNCjZ52DLc9y%2BYWsQW3Z6UcPBA2m27HSErQa8cHrBVkfcrgbamouIRBzSU1lYgDSobeehDa%2Bj3jTyIFhPkV70afBA2gbaNIS2BtxpmkGbgPGUeGQpeNHdkmnYqmgy%2FgohrLYolLlQeScEYcY1NQDWnDesOwDzHYVdVOH1MQT%2BT6QXhRg8kF3QfxoAOxfAGvCHoetyXKl3CIPZP1l6EqYvNw1qPuXBGVA7SzwYUAP9MlslrOnIUOLjQFV%2F2ngIzJhoABQlnRBjGlg7F9YacJRoB2tAMHtyktQ6MiB2vjBIBBcdkt%2BuBsYkdjaUw1hg953mOAj6SDJ3GsNYJ%2ByRBsbOhbHatBX6wZiIPHLKZTAiLswYCFIfcyeOpP3LYFt68c0lYlttCZHZOFPpoNk6UpsEQe%2FIJlHX0DuykbnTGdkkArgG2VQjWw3J0XTjLALi2S3gmkv5clBF%2BKv14upLTNkOgpiSVRaq2RIWtnKcC4EWjIrV8xCKtIUzoBPOmSJtHXGuAV2JZjgHF2m3Q%2BGFAdK2qHcxQc2KdJMcDokfyDOWTKmmAxPoAV4hjtaWyNN9%2F2xXJfEXVmy9IqnPONLI67v4DVmDgFJbMAUaQSmy%2BsZS00vnXOEhaFrWXn2jKbIEcEq4uIirSJcVkIps0G0kADgrwyAPsDTj1w0FzvbFBkjri0xwEu4QpstVA3c6MJywcGdbfRfNeUNIzLQHwHDi9Z2YacDuXNnRFOw8QWKmWw6OEqerohX7SaYT%2B%2BpIeULX2zEe6U052mr4UdqRPIYIhBM727dVIqYO7CgcYnp9lzLIdIbvHzEHwI4i08DXIGYPiNmAH4VBTL5zpFrEhHM%2BmyCmJC%2Bmwc0WcbO%2B%2FJWkDwisqvU0daBnYXHTUdmvHebSHEKSqT0Aeha%2F7yRTg5vnyo6mniZ2L1jcrN5QNJyaLWJfbRkqx1n5PBQUqSywsHXgb%2BGwz%2B07DdUfRBrqAPhb%2FL7TUA32nSs7umKfIBG1AfaZXgpqtJB8rbxaDNSBAobDwIgfFsXpIM4QaKXtAXDAIKdvXmmDgucKj6YoiJz61NJ89YVFgd64nLZKbjK5ROyqPf8SZYRIaexSB54XFrtc1%2B69Cx5yBxG%2BHADVC3JN%2FFJP9GrA9qIZerlwAPNchmmDcM1lRALh8M6QGoTTgQKGQ7io79055A4iRDkADhjkmhilnvjWgAZGN3wTV8tbUIU8XdBXgWaTMuiREOb0iq3vI2WANgV9Tvk%2BZIvv1YJkB2wyNraalYCkI%2BHsKAdJr%2Fd2sMgdQm0gmTytQdLUBmoJkjWER1uQrKwNRBDiWbiOT8T4yRTE02mj0wLfaoFegZMXB331xUdi905pJ3RHIjqlHvp67wmLXAm%2FuX%2FoGwDDDPL67oVuoO9c4dEV%2BjxAeU1aYZkhPiHtCtKQOAFuZSCxkVhJeINIZZt0B4iq9w6Jvsp%2Bs%2FOf7h6Wt97Hx39%2BeL%2B%2B%2BR9K%2FnB%2FGg2hJx%2BZOj0AERxHCekycNgDHMqLTv9wCAoW3JOv1NAopFI1x1cnaxfo4xeIVLVn%2FDRSRUp9Nx05XvyQL8pQq2CHQPHi6EXxAo6jYXjRE6iGxPACCpZE5z0QqMSFBhcITrVn%2BVRj2FDpjpqOZCqByr6woOQPgUvF0YtLBRxHQ6WiJzSdT6XSMzTBTCpjiNTkmFhiVYYSLQHjtMWFJ%2FlkTDqyyFB8BhQAMo%2FElNBdsAdXW97K3R3gzBOlsUYdyVOU9jGCY41DqD5w9CJPgQfSFB%2FoiZRDIk%2BBJcvmJWtCKuccLr2E7pxeq%2FZgSh08gF6E9%2BGYwnKYkowpgfCpv28vERJrC5ZEowZ8jRpI1JFTRWnLI3i9DaFgwdGLUwUeSFOvoCckDolTBZasDpr78ZmYjNOIykf4KoXqZkUX7BzWlif%2FWsI9tGyVWKgDt0rkBszA9I%2BGMgPTPxrqRa4CD6QJpeqJhg24VSyt0BCLbLd1CQQu6c1Bk4pZV4b0QTwdGFl4xAuCoGfEQ4MoSNCLkAXOvzT1CHoiXgM%2BFr0QD2rW3T7imUq8M6VHH6yTUOl9YF3vaTJoEHXn8rQH%2FQ2kKTvXE%2BtqU2bohnUIrjrvYfsPpDYj96RLAcuh0nZoqcnf0SWCam0xLSMJX8VtI5XU1DIklj0ArB8qpPeESySGkF9DHlJjgDXknnoCbA3Z0RRgBdyeSsOnFTxoOYReHOLVl5tTTWxRoDJ5RkYf9YF4eFz72%2BcaQlWgK5oDjRBPJmPZIF4PiNeAzkUvxIMS%2FyYMm7UDZb7IlGCchDKe0pN29tK%2FPc5ddKmftH%2Frl9NwLg8ka4vaadYz24WUWGcwCRhXGsCkF%2FVN8iJDB9c%2FTNqCOdAJJiUkzMBkDzApLzu6wiTM81KvZVEDhmsDh%2BeLVBUAYrBTA4A6UMcAAOj17SfKdITqHwAHwB4j03jEAGAPANiAPkYzAAQ2L05HRuVLK6hoaHPnkWxMzrj9QtzMlvVVp5eIjbWlTYIN1FOKlDow2QBIafW9h2hLBAL7R8oBkNnYpr2tnkjZgM1GL6SEWnP3GVE1oNhQsNBpULQBweoOFHWgreFB0fX6Jq7B46A3KA6AuMaWCFAYUOwBFBsQ12gGioBBryJ%2B2gz8%2FPgpE5T13e6ZTNJlgWFtgZLYTFRaxiHTJa8PMAQWmuLWPzJ9FftHQ704awQjafJM9YTDBqQ1vcGhQLQAk3WS03EzlKMuRsiKosRzwqzTMjyKnNBLTT2VF6VK6FPqB%2BrJT%2BP4vUMfFHrRD%2Fr0IqgRjKRhqNET%2BobEUCMQLWCPOoO%2BoOyt0cWKpEjCAJ0CrQPuCfJVhShQmjyqJ0WNgxTuCArW0yCKLPTiqBGMpKmy0BP0hkRSIxAtQfulkIpYhgAQlWDQkqvZtzKS7aMDOaGio%2FxGI%2Fl0hrH0NUBifbEqCRVfNkBAUw0kSiT79QCJtq9wP1Cw2gZRUCHP89DjSAJxKgOJGkBibZIQ%2FSBR3Dq3xRAocfno5oYMiRvdKapdTzK6RNiUF72qkKmvEio9iT0xBVBpsVCJH4NW8AiiLuhMwUOUUtpBJZk%2BaW2nkDhWMK6mEkNL4KwvSnYYaAacglIMAocEw6YUOIVcCg2YYDqjMmQoCIxy4PQph3GKEc6EV2uJVWU9vlJQ1JO2BqlshChQ3kOosvBEk6CT%2FyhDKmtgsAcYHBJxjUC0BHUWjpi11IBb15pGuuMvCpRCnUQYq3uow%2BOIV5CjsKETvIYsCS%2Blf6CzBVMgHOqRA0icauQzHS%2F0RL7a0qQf8glaXrS4mSiJlCQ2ShoBSyLlhRYZ1hCuPtzAH95%2B%2Fvf33c%2FvJ%2B7Xzf%2Fmb97%2F%2Bnb590gDL9AO3fISG7lYfZZCxhAFQVe1cCiQsBnOwcb7%2B8SfzzmBS88sgujOskCpq5xB%2BcpWYHBBfofuBleDSsPD5ULj5OLRsR1RInpJk0JDFMCVhirBsV9ca32mK724jlhhwEfWwInjkcrxe0cqGdYvPZCqtu3dP1LJlFMapFKPVPXdON2QCiovLRJgCAq51G6ezTlVriD15VIwqhVvSi1GaUDxaYcei1EaqNHBeFONaD5Vj6Zxn7QEpfo0n7ZuoCRwn9QXpoMIRj7dL44PAsfkxaKyyFwljmlAwMn7Wnb%2FvpZMJx49cKw%2B313%2FRoIG2SIG1loQJf18LThZpB1fS6by7rIATV4gqgANqQQ0DcgzbZex9qDYIcJZIvSouF2p3AhyJPxVJnHPpcHxP75ssqNP8fZhmQpZVjxjPX9hfiIn%2FZVJkZWJ7WiZSlo2itnFo%2BO5TOhGn%2BLtMk5%2Fr1%2Beku1ynl%2B03myf4hVwVRLv9qN4l%2F594sJ4la6JdbxPdoILP6Snl%2BuH%2FGz8st9Q5zbPh3U02i3%2FE11yn8T7l20y2iX7fXqN6FMOj5PBgdSF6e9nAh%2FgZSkY5bAHnz2s4OwUcvEgZ7g4wjLEvmueo1p2ePtw9w1K1%2FPt4d3497fULBb6ZnyQh3i7P5zC8pDdbBXvdiUheUb0Bf5D8fsgVndb9kgquM%2FHYy3aUrNZENwIt%2FTj7bzQfF4Nq0qeOLFY45HcCsceffsrHLLk84HPZAdc5KxQhYVQieZ0iQ%2BkRtD%2BYZu8%2Fe1nanKXwITnHy2Y824hL7WOFpvPlK1YSIGNk0KwvYVaFwnMrMJbQyGQm9aG0oe3%2FjRI%2BUhtfaasxrL4dEgbjN22MC4TdPtu%2Fe%2FTh7%2F%2FsN58dMfRW38xl8mEqaWOQLUjypCUFDYkmoHq8KTScZQI9db24kh6lsl8bOrF1RAd4saVG20jmwezjtw4ULDExur5UJaVDrg4DkkyRRgmlLxSTgcUk81m7E427JJo8O4dLuNSk8QooXM6hzQ%2FLHOmIQsIqSEPWDF4%2BNqHNGhcjH9n%2FLvX5N85ddLibIE6EFvz5TUPLHjA3cPkUe0veDFG7p7T1dWqu3cATbp%2FEQZN%2BxDrjKYUhloUtvrlICnJwvROeI35N7gMr7GGoJ1CjzbsLfgZNchmSf1Cln%2FB48lIHQcomUBuV7DadsIlFYvi1dz9%2Fb0t2BL07%2Fx0MOSVW7MWtmrHFiyck9Fgn2EwhCz9yKZ0T77LE3LaKMJqbEZt2dAbNxOqxpgmnBqXb0KfoneU6BQJdKlarn5GzAk4dZyO9kfg59cgDyLVgOXuO1EIMGRAw4LcFqLK4CJtOwuiWgF62T9IATL1xX8V41HH3mvWq1TtaENpEfXiHrZTFfdAJU3E7kzf4p3pGXWxjCLTKDzSvjSATSJ5w8S2IDq3%2BmGQ9OV2k80cOfddFhV8s1kk2RX%2FDw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22Mm1bHULKEmKQKKcOhmX9%22%20name%3D%22%D0%9F%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%22%3E7V1rc9o6E%2F41mXnPBzK2fP8IAdL2pGna5rRNv3RIIAm5QArk%2ButfG7BZSytbEMuWQefMpIkxRmhX%2B%2Bx996yD%2B5fDSe%2Fh%2BvO4P7jbI0b%2FZc9q7xFikcAM%2F4muvC6ukMCzFleuJsP%2B4pq5uvB9%2BDZYXjSWVx%2BH%2FcE0deNsPL6bDR%2FSFy%2FGo9HgYpa61ptMxs%2Fp2y7Hd%2BlPfehdDZgL3y96d%2BzVn8P%2B7Hpx1Sfe6vqHwfDqOv5k0w0Wr9z34puX32R63euPn8Elq7NnHUzG49nit%2FuXg8FdtHvxvize1%2BW8mixsMhjNRN4wcQbd7tvU8c7Pj6e3x49n1vl1Y%2FmUp97d4%2FILLxc7e413YDJ%2BHPUH0UOMPav1fD2cDb4%2F9C6iV59DoofXrmf3d%2BFfZvjr5fDu7mB8N57M32v1ewP%2F8iK8Pp1NxrcD8Ip74Q%2FOL8NXlgsYTGaDF%2B43M5P9CjltML4fzCav4S0xm8XMsmSyhmssLzyvSOaY3vLiNaAXce3l1d6SUa6Sx6%2F2MvxluZ341h53yc3guXf24e%2BfqdO9PPOPrt5kb%2B3A7DsDD9vawPWsnhu%2Bcj9%2B6p3PPyt6%2F2QwHb7Bv8ez3gz8HR7dAfx70B%2FCP%2B%2FGF7fJUpenDbxcABkDV4CMxA4QMtqGLCqSfCpehWR84H7%2F9FatxIH4vhDPozbG8RH%2BthyEvYmsfbHW4W4zn7t7k4ul8HdYXr%2B8vCQXqBjpu%2Beu44ryH5%2FC3M03PUSS%2BGXutM3s9Onj5Hx80ntldjz87jNqW%2B%2BGV6Pw94twDwbhnrWiHRqG8NZcvnA%2F7Pejt6P0SVMwAbBIAlyOR7MlwYgV%2F71ciVk4McDum56HnP9A0uY7Chx%2Fn9DHn9j7po1IAAvhy%2Fhi4Vvjbo0EcHKZjnPkbUlb6zFb2%2B1NZ5%2FHo8E2nnnO9sfsz%2FC5aZtyJMBFo%2F1ldO8%2BB7Mfza%2F351eDIDxs8eEDxGAZPXxOaJDwthTSZvqwsFIuhy%2FRJlPbTXF9t%2Bt5ra4M3n6J%2BTotWsyYz6HGhUoVWbvNop2zNbtt%2B35qtxMjt4TdRpfrsyI8POjNbvSz1Z7%2FtOc%2FnfnP5l64bb65X3vVIw9wHQpwbZcllOlgdogsPcRErMlwM4LmnDCt%2BU8fkKo9JxUrqMKNfIh%2Bfby%2Fa17MxpAsR73zwd3JeDqcDccRec7Hs9n4HqHbbEwds%2FHj7G44CkE5dsEYDAELIIsZOBZNFlY5dxErKAGM4smignno2zS7YnLFRdjVksauRZuHjDo4cDnqoBecG8a7hLiZYxEim4vJAnmby2Ike85vB7OL6%2BVRRM9nJDXBvoX%2Fd6M1tK4mvf5wsHptFGqdLAHmt7cZAixv7vem14mvaEP5wsAH5IYVAoTESiOAgeH%2Bw3gYPaXzFD5susKUuSi8f7mKfNf7veepvX816E02E16bsBKxaPWLhRnE2o2vFc9ZiLkboYwPFAJ%2FjiwuQJzFFWP%2Be2f%2Bc%2F6ulrHEoOhnuJ7FDV0AWOCGwJxfcUvWKyAjWVIovaSsve8gpMWkhjR3tIC9Xj5UWYhmVTJUscZ2jaDKVRyqEAtDQ5WaUJXNSspBVYBDVRfAkB3jSwJJDoAqG4DXroAUh8bKgBTibKsApGjz36pcjhLE%2FK8NSIFsB55%2FveTdFLDaNSopgUo83onPKlELlQji91iiUoI7DkCfzsKjCnDKAGjFYhN7c3KDtXw1C8KST3eX1%2BsKZDy2yAAyYkgCMjSvSgG%2FoOnGyXcxjhHDYo%2BHgzhMi3Bjo9uCuQXdu4jlHlKb4%2F59jNLiWve9ydUw5LJm%2BKrx8EL9NK3wn4iNjIhvG8OQ1aKtiW5urF6LuK7x1JsMe%2BG%2Fo8f7wWR4sbhpNJ7c9%2B6Quwa96azRm4a%2F59zYuwsPxag3izIU0Rtvw5eHo6vFq73H2Ri8Nn6YH6TGdPjGu%2BVy0Js9TgaN6WA2C%2B%2Fhfcp8OREqCN0Y%2FvuQoAh6W4hJC%2FTDX50f4egl0443OYLHRsxC9LsuFuAWXZ5cnf8v8l8ezN8d%2F%2FsPoOJS4DTn%2FNCbzOYvxfwQPeyuN52mmOTBhDe4V8t%2F52x1PqGvhHz7sLpWoA6VhA9RRF9lN1jCoo8vWbiSzxQ84VYBqQvo8jDf9GLjI95BDznNVP6SqXg0HcYXvg16oZJCuh9OPx%2BF%2Fxx8%2Fw6IPEQIv1gCh%2Fa1imCuwxqxrhQwrOEHkmT%2FxeOHy%2Bnb4fdvjfb902Hr883NU5wPC%2BP4%2FatB%2FLXHk9n1%2BGo86t11Vldb6QTZ1T1H40jFnW%2FsTSjxXpebuZSegIThhk1ef0Xv33fiP8%2BWj5v%2F0X5J%2FfW6%2FGux1miBXBLE32f8OLkYZFBlefpCWXY1iPf4%2Burn%2BKfj%2Ffz%2B42xy9HJ7dGc%2B8qg3GdyFov0pvY7Cj61AntuGyVwWYm060f%2BYtWkeON7ByiqKM%2B6ttQ5jdJq6vfvhXUTMD4O7p0F0H8fqAR%2B%2B%2BG%2BPzZQWOpF5yhidw2sinm8XM4MTL27hREciAikX2sJkoUyTVmyItIGFAfNDCBMOaoOfiysBZqYsPjEAn2XHj50bQ7UW2Dns4VkexR4Om4ll%2BQh7SNPVBeIi8k0Ynz41SEmAZSAwVoTzCN0WgYjG%2B7eFT5BMN1q5O4F44IvUpyksoPTpzbUkX7FtjMV7od7I7vw%2FYW9kcrv2Rm7AOkngoDJnJM5YnJxBDzgFoUvSAk5Hk4FysSyP1Xu7McS3Y1%2FjuojPJv6W657kHSlZ%2FBOkuAf1YWJlCNJ8mCokN7IagFO1AiCS2yhJA%2BAlGVW3FwKpiCrqAAsaqrSRAga4VgKUUAJ4vKOqFoBb%2BU02GGmkjfgNMjvhzeHvSYbNAvAXN28ZpOdwQ7rgB02wce0yMV0pq746cVudFW%2BqZsZjmXS1wHDVDHmR5DWN4WpgeL0seSz9b4Xhi58Lq%2F4ApLmaDJJTiO2lYR88autQOpvesRmzJDcSQ8fILS95SAHDmxiGcq53LLuuJNQmqlneSKF8LVCbqGZ5E2151wW1ebyjKmpnWt6boTZI9F1Z1Vbsvp%2F%2Fvm3YnUN1N0Vz1MK2SJngrYCFzYJ35V5zUp3FTVSzuONIT%2B2wWzWL29IWd22wu14Wt8WxuE3gC%2FfSvnPWvjYAOjeZtglxbtzW4XWOrZ0mNArY8T2lAHasHagB2NXJ0uqMa0s149qqqXFtqWZcW9q4rgtA83hHVYDOS17PhmaYA9cFke1mbESjuWu7Ceg5nCEC6K4k9zlaSCPQK2Ew6jej4RARDaJ6wqgiFBIovcWJjKAqijzi7cGaon3DSu7g1BXN%2FzoZTIbhV40oT1cXzGXEYrn5xUeZgh4rJYmvCdcULT%2FhJJJJgOKBn%2Fa6hAjuph%2ByqIpavm9FT%2FRR%2B8Q1kv9I%2BsGm4%2B7bvhHE%2F3mUPFlUVTGfExI36lGa3DYXqlOGs5KdE5NDWFUbwlvbVtXGr1ZLV7Vdfj55vDrzg2n77GXSu%2F7980PHb3AYtfCqtqxFiqlxdr4at2FVW7frhv%2FtbWNVWzztJtEKzH3Cyn%2B0rs10%2FX3PkUT5UoyZ3JK%2F9Oa46N5Ia8CA7gu%2FPFs3YNANGHQDhvQB54sW9tRX0IABXR5mcS82fvoQHqdCGzAcj%2FuDT3lNFxYfuw1NF9Zhh%2FKbLqCrY63kVmgN1poKucnF6UpqkyCeVbSQ2kjg%2BT1kuLy1Tgx%2FfHj9tfVyMpl2Dnsfv683C05ee4XtVURNqrGw61qIH8LDZsdZXgGOCJTqAuaHdCXUpJpZuia2MdKUUHRfdBcwrYRqJVRU8vFFixJKKLo8vpk5XEsDNc57F7dXc3o0KP4h0ReKGAf%2B8g%2Bqt7ZveqOrcfhFTl5n1%2BMRrq%2FWWSVah0WWT7HSs3QcBBRkKaroavHJE8t8C5%2FJjHRA3uQiPJMEZmAdIuymCjsVtUHYxtlLdSbopMoVV7EitP4xeWALRJIOdqBfUdKeKFPfsl0ih4XunV%2BNjtM8bj58fBse3dunt59eRNSttN5L0tSgo6yXd%2BPni%2BsQfPb70aDkHnfiXJoQNZu6bDoWiUm3JKZnEISYlu%2FtYxhShPcepaf2VWo1cdfVREe49X7eKQ%2FSIVvPQgP1DjJatYgJwugB57sqi%2B8VezKezq4mg%2B9fj3amR2yeo4ykHWUecUtUAs%2Fd41fn6Mq%2Ff%2Fw2%2BPX25l%2B%2FfemLuMnkO0yoRp0e6jCRlkaH7kspjiQ%2BRapJKETXU%2FRcSbEUwux8TeUUPj4PKUTJQoZYbln2JspekBf7g8ve491MBiNUn%2BeJrpbjFxDvW2ik8zRhZ8IiDP5yNQTRZM%2Ftk1Ox2yrFnPjAMsTnUESuKbpaBYZqshqLi5rvpUp3yUM1Cyig4JNTIZCsenzmCm908cQGfKMopiLlx1HpBGwvQNLOcqojAWzs1%2BSjbH2gURrl8%2BHKlNT%2BDzfnFJivyeCVb3iV4xXWK7sOgGXmz9YseSMFfBUashSALB7nKIpZWNftNjVZMzEBE7utkxnzpXrbwgBxsBvolcMEVI4AywHx4S4HvARcRuWDl2NUD15FT%2B8qC7xs1cBLwJzX4KUCeHE4R1XwQtwhEXglI9E2s69gjXqHQT1r%2BftuOjul8Va%2BB5IQSdXu%2BHJLaay2LioGCph06ndZyyCoQqgopa%2B5RkUJqKhsjzWcrzjzydLTRldIaGciYQJZHQCb0PJLuriY4CWIfl3wfDMNrUxf1t1Awmx%2BEkBCVE4VgISn7RP34eTXw9Wv%2F66tz8HP1gf%2FDc0e0vmi9ckXVTUtdJmMeNm7SPPP6fA%2BJA0xjgfP4c9v4%2Ft5nTPnIcLF1zYno%2FHTz1NuUTUneVFyDuu52e9fGozYiVQjw7MCYdmTl7nq0B6XACs1QCRNEZnpqKTBfNxa0tRH0tQuM%2F19IqhN9cXbzPw%2F2AeZV%2BkH7ZgAinOi8xLnpckfXUCt5c8Oyp%2BP7R2TNEFse1cmaXQNnpY0Oyhp5g%2Fy42ruhY9ppyQPnpNlmmVaWfzyQC17tOzZatnThBO5434SKX%2F4Dsgkz6VkkoW1tSlTG8LSQ7RE0hJpByRSYMQxuCRrMp5XuN1SiLHJbB%2BdMYh0FpQmh7DqKi2HtBzaBTlkMzcl%2Fb82LgpehPS3XIyZ%2BcpUUKZ5h%2BWtaSGmhdgOCLGmmRJfK%2Blk7YRK5RnpzkO%2B76OTMeIZX6WIIyxbVIsjLY52QRy1gW%2FJidMnKZUpnm4HEyrxbirhRS%2Btnm21NHP9dCtU3EBEUyGlCTO0zltLMy3NdkCaBbAg6gB4qhI7kXpncoPNCLptl120JhaYLqqJYXMz5AkvncithdeuCi8jrX4l%2Fql0Q57tlkqukS4twTO%2BTRspVipCKI0%2F26O%2B%2F%2Ffw6PR0Ojnt%2Fjq5PWrqCU6SJzgRg4r2mraBDaVARzi5cYli4WTHMv0psssuriUGVVxrWg62M9JmOKEbo1OQNUbvenN%2B8RlOfNnCHvsKZjihy9MznErt1r8Oi1Q%2FwwldrQIznDzwlib4HV7fgflMoc6QdkpytClpA5pQ%2FhDprqQHNDG0tB16QJNp21i5vcwJTShBdcxMK4G7rgQWNaGJOKZLHXIfadAia0ATer75eYZLj5ke0CQRwx2bmmRuu1hksVQVTwcWtcjfRd%2F8tpceh5YA5WR0XFsMfYrQLg8O3to3v8bu%2BMffr%2FbNSWd8eTZUYRocMeieaaEyzurdstrxodsi4JKuuK0hn5rVdDVE1yMwSU43NdwrtanhOnyT9DQk6fNZXk9DdLWI03TlAusA2IEFnht5ssrVfCG7yOlAuAHx004RfLoKEi0sogEhulqBNuzlA5ZjGBUDloDbT0XAchQDLIGRahqwFAAsDt8oClhIFVabmq9pp5GI6lVvYFaUBrWNGURgwqUjaWQYulqBLuoVgJrtVwxqIpPUVES1QDFUExm8pmFNAVjjMI6isIaNoUsZYiFyOUySQfu96QU7gV%2FZnGCn8YtlA4JUdUpDL2xsnALwFbB9HUsWuwKz1FSErwU9VcIvAaNf45cC%2BMXjnATATDrJpmoIQ%2FwmdDjLBuZYErZKQM0F5psGtXexB4VqqFVGysQ1AW9Q%2Bbjm2iUO%2FcL3RWAampK45qmGawJ2v8Y1FXCNwznK4ho2Tm7lcoTQA4u3A41i72cGAd%2BiZaApxLJwDJsBpwCOBazdWnKSB%2BK%2FqAOO8ba6uo3UeR71wLG8Q6oejuG5HgEc57yw0kzG0eiBABqJhyglhU7J%2FEkRcAtvLjsNuiJwy%2BEQkcBZmSYaUTIdxLMrh7aa5oMQ1RJCiM4IqQm01SslhOA5Ie8FNhtYc9iIZ23HCXNMWhFCgM7F5JA0oFMyRcRDpjSWnGFe0xQRolqOiKVzRGoCdPVKErEQJ0sbNpCkUh1t4HdMoAnOEYDtcGOEXP7pY37NjJSTBR4mlmCH6Z7RWX5c6o1wARpI8zkyXXGN2YwE6zInDUotFdJVbINytCgApVVnWeSyqMaAFAtnYADV5aBqDFA%2FEWpdzdePca2648pJXXmPBUnBn8Ggs5m%2BkhQrWGKAGFcwbBss5nKPS%2FvVfctFG9hLcp7%2Bd%2FrzoD%2Fu3waTv99unpvG0bP%2FpNutym63GthMu1W2ThBttmr5soiOqOO6t4juLbJT7aTEe4rmHXBqbqVpuSV2FEXPN79nsO4oWn57qcC3KAZB20rLai%2BFckhm%2B4QSOohS2ilUNeGjdqGDaOAwHURZBUFa%2F1CUO0ScALp%2FKNsl2GL7h1qIR0di91CUnHqaulb3dl3dK6p7qGUFdPdQDx8SIal%2FKHrCdf%2FQChHcsgnTP5S1AGSpd6PfH9zecBoyxYfvw%2BHktXnZwb06WuJriS9N4uvmoWU0D7Us2tfguEQUfIpQLz8dBdO35%2F6JcXfrfftwM5hcXjaUaB8aMEOtbMy3Li06g24M5mZVK%2BLFp2c1WUnoeqouLNEh6XdyTvURaXS1nLISOJzWZNxaaLyU78pKak1Ws7thKzcq16kFHmuAQd8bQ2K3ZL1bfpR1A75Lu9fYqgyC%2BdaKCLiia1WhWIVFy6B6tFS%2FWoVPT4XQsupaFY2W7%2BQcRdGSU6uSnW67GVpq3CuEg9JOKSQmHUhqQICuVYXaFQb3HAWsxBo0OOUTVCHgq7zBqUa%2Bd7KOosjHaXGa8lgmKRPzlFehDIdtzYPdgOL5HQUCSXWWx59%2Fjy6mz95H421M3MfO5OPDFx090dGTmkVPmlxRs4sxkQCLicRzmosOiaASBPP8awmiJUgtJchc2WkzdTwZM0h2S964DqKgxkprKeKGn%2B%2BtxY0WN3UUNx3gCIS2lRY3phv7NaC4MRCDWJq4KbqSV9cMUjQPCB2fMzxMpUWrBlfab%2BGEx2KXGmc0zkjDGQUTyYuqG7QCizrklmeguXySKgfRE84vFdGVg%2BUnlgcuXTlYYmI5yh9IdkHZdYMWUAdb4IHWbtUNhvKDqRvElARplYMofwhMBdGVg%2BzQG8tkKwfx0LTE2kGUoFjYXqt8WuXbJZWvqNpB2%2FLo2kEfaxUhqXIQj3Vi2Se6dLAkELdtgy4dRI2AUnU8NJFGy3wt86XJfF09WIYr2bZoj4PjmWVWD7p%2Fvk9%2BfiYvd29k9Ll3fnVzc%2Faqk220sKmZsGnmeCB2UJC4BtlHxiP4kqJSqCDROTdakGyZINGZN5TYMSmx46IRExMJi0oTOzr3RoudbRM7izo8nYSTofBYZN%2FDRA8SbClC9DQHF6Nv7ccf%2FfuP%2FU%2Fe8cNLeD5VaLxise2t3VJL6tCNwVTBApmugIo6Pj2rqahD16MbryhYULcO5%2FAK6tj%2BsrIK6tDVFtd4JQPJ4EAKsqfbrxRT3LcJ96V4D5l34VmITCugtg9dqwLtV1jMdMzqMVP99it8eiqEmbr9Sl0wU9n2K%2Bhqi2u%2FIoiZGv0K4SM7xUVYabu0NizoahVow4LgnwI2Yw3asPAJqhAA6jYstUFAZduw4IyFeHXo1A%2B0DQsf8HYCn7KpTOETQ2IfS0aUBU6mgMdJVxa%2Bx5HtUpWFuEqCFha6pjTIwApKdQxNx9AAFbc%2BybyoukLbpWNVPlYWJK2sED%2Fh%2FMphXVdYfta5S9cV%2BmxEQFbKOc4f%2BBzr8uoKEzeGtdQdo99dcFsHvLGz%2FPStZhGquhBXFKQVF%2BJcIuJc1dWFNC0dg6kuJK5VcnEhTlCsXFQrflrx2yXFr6jqQsegqgstZI6stOJC%2FHzzq4d1caF0DHdMqriQoJZAqYoewbzsWuJriS9N4uvawjIyZB2D8jpYvl9maeHxW%2BN2ejxrH9nH1tvlyZfvd0%2BuCvmxoalNOVw9VPOWFaJD9wUJpBTJcQVEOvnkrCbSia5Hp8cqGOhch3OqD3Siq8XTY5e%2BsA6AHjsNOjB3VcyZVa7yKz%2F%2BuQHx80dPmKak%2FFR0tQrkpzKYlTiAKhO16ien8ompEGLp5NS6IJayyanoavHk1KYBDKEEqxJAgmUdBt%2BU0qi2AYMIoJqLpHhIQzUFsk5ZVHMxC7VcgVyDpFM%2BPRUCNp10WhtkUzbpFGcsxFfSTkrjTSbXIDHSEoBDgaydxrskSbUT3%2BCB93YBLDbTRRpxbxCNj%2BuxWT4%2BEltS4ivOZgK%2BpNIB0i63KhHfmKJnjZTlq7RUQ0gBx4JGSCUQksc7qkIknrsXwEL%2BNmPf5bb5N9MYmryxA4o71sraM3YD%2BHK4R6AeEUsIkId8Aj6p8pHPxTamZIEtMEpBSeTzVEM%2BAeeDRj41kI%2FDO4oiH5bM1E46NnYYLyfsNdME6OWCe7p7qapFaAdCRGwjj9KIuBFXCdiCsSwuBRGJgC%2BrdER08ITxctNWEF9MHRCRt9fVbaTOXKkLIuacU%2BKnj2nliMhp7VasLZj4U2Flv8a%2FdXkoC%2FEMUibiqZj04pgKIF5N816IaokvRGe%2B1Abx8lJfFEM8TmM27f2sBus43FMF1j0%2Ff3w4Ov1iDYe%2FWl43uL866fhK5nfiYxSkSWh0X9RHOj45qwE6dD0a5xTEuXU4p3qYQ1crkOFpAS%2BmCYw0iFSspzM712V%2BMzfXxYi7lDoAVOPeo%2FTHdbYOADdgq%2FT8HBQNCcJW0tBQxbxQt1zDD92XGuSF8umpEBzqvNDa4GFeXqhaeMjJC12vSG%2FjJM91gc%2Ft3Ud8MjqfPuwh5eVbCYTZ%2FJSfBiPNLHwc9%2B1v5Ny%2FMR%2FbX8n18Po%2F8keFUnW2LbdbbgIoujHIOVMMCPn0rAYI0fVUHfHrDy57j%2FNGFxoFN%2BCbBAVJVSiIrpZTqW6lgS9BKD2Ooljc24CDBAoDZaV%2FTv68Pv93M%2FtkjOzT%2B48BOTts3aqAeyRwadwzzDJxD90Y9XGPT89qcA9dj8Y95XBvHb6pHvfQ1RaBe4QDXImdpxGvGN4RQDxJ6Z1Pnx7%2F%2FrRebn%2F8ue8O%2FX7%2F38%2BtOxUQj3F5euW6PNF9UR%2Fw%2BOSsBvDQ9VQNeNrh%2BU7Oqd7hia52o8ROFPjykjl1VLA0KSVeAeFI6hYzOR5%2F%2FHdKWu6b0T3978%2FjiPz6qAJEmqaXPn%2BBXSpEovuiPkTyyVmRTYitR0OkghC5DudUD5HoajP7dlpMxqcDsmPW6oLWARe96GcQQ2oKBKkua8kzYXWimbqnGMMz%2BT3YOmzdgEnTc1dcFlnjxhxFI2v7%2BM%2Fw8OnX2Ltvj0Op8fvwy8G1CLLq%2BYrvGZtkUPMVG47jiA5YtFe3Fk54THXQYxf02AVAxa0ftFPYhEV61kHDCQg67EDSiEX0hGNarZ6wWNX4PIOasNhwkWFMsibvoPyRqZ2WM2GxA9TLFqNAdipRGktmC2qqIkc9kDZWEeUMkc5weqoiQ0ubmarYcPCEOYljFVGCYrVUWtnTyt4uKXtFTVW0bWqqYsNGhiVLG6uInm%2BsyE9PVSwLwx1qqmLDRrX%2FUpU7PUdXS3w9VXHrpiraNu1psAIsNVXaWMXr76cHv9y%2FxPv19bzz%2B%2Fbx%2FGvrUoXwbGhfUxuTzDMpI6yIbov60Vk%2BNbkb7VW8qTpWq2CsdgM%2BqrB1K7razHQm6OCC06tgiJOX2gTjp8mVOEsq3w8W%2Fty%2B%2BszN5U5W1q4naSwjuloV2vYYq67kMeqRuA65MgGtft8ePj2ryUlC16P79tQF55Tt24OultOdjodwbFYQDPC8J50XYp6TDiBRXev83cC%2FTRrVSWrNg65PhdY8GOLFobHKRHUNevPwCaoQ5OnePLXBPGV78%2BCMhXhiItDzAKBBAISWmoY4%2BRIHrTphM2NNT1IjApxpVJjAiOCdZfhV4536IxgzKKoS4OkRjHUBvNwRjIohHmcEo5%2FOxWNQaJOikyQrMEn0S9r0sC1fk0%2BH2Ms2Kt8RPMzjqhRP2QxLJZBZDiCqMJgRA0SnxDJMfGfUn8yYQVGVAFHAx6ABUQ1AzJvMqBYg8iYzFuv3TKw9H1yhJnT40ozI7SuvXIvzshylbplAqcS8RsPxaKC0DfYQWrGmWE5GDOKIqQNQ5mx21TkxenxjbWAzd3xjOs%2BhctjkpMUkYAiLtWDzAiPdrwcd88HJdwkWsOkCYzGpBNN%2B1bW4KgsS7VIhUdF0Gduu2naswUTHDIoqZDvqiY71AcF6pcxwJjo2LX7DHQ1tsuUM2k2n%2BrRQokaWDFVUbsfdZapL269pjgzJDlk3Su0BiO%2BszpqpDe7VK23GQrw1BQcRBXEy8Yp21sTJrWzouhZvVWEC%2FvlxQJpe%2B%2Bd%2Frz%2Ff%2Fv5%2B%2B33xdOehRYK6IllXJAMqqlaRnN1xOmkxzXacNnNHsG99pbJD90SzCaYrSStUPu6Sm8Fz7%2BzD3z9Tp3t55h9dvaEp7FoGbbsMkiBbpg%2BR0BBoq0JSLAIWkagaGPsYvGYszlwwNTdIqopE2P78zXlxZwdKpsUXray5T8uP%2FsdkVbfbDuYdYwuQVUhXBSdgRZWJmHXSRBVaVKJllZZVuyKrQgVJS6JQEpESJVHwrz16vD4f3155zlW3cfEz%2BPpLhe4uxKBdI348AK4Mvxu6LYhzRDGHJp%2Ba1YTt0PXo1BUFvZfrcE71%2FVzQ1XK6G9vAFE%2BajLFlCryUFZi8CZNe4FwN1PsJXQZUwqkH%2FAXUkqCGDh64bQ7NDdgtP%2B5HbElDHNHVKpDfgowtdtDuw6XKd%2FXTW%2Fj0VAgmdXJLXWAyL7dFLZjkpLZomKwLTL43PaZcmFQgO8YKbBomvephsgY9ZPgEVQgndQ%2BZ2gBlXjKMWkDJ6SGjkbI2SJnNb6ohpUiTFemJpC5lUXpeqfmO%2BMYImNoqIuWCoCpBpYBprqFSCajk8Y6qWIl4KzRW1gkrcxiuQrB8dmfe0B88%2F3aHN72D%2FuFh69jVU4xlTzH26OEacQQ6b4Sx5cmiOaKPl64f%2BfS2uEiwHhv6WsTcJ3RX%2BENfddbQ9mYN6Ul%2Fm4115gsWbiFF3Ba0jLHO6PIwu1CPdZY2%2B28dFok9zOlGttg8X1mzANHVIgZzu%2BRBz3C2mw1%2BwtItF%2BjqVFX0O0fDJb%2BX3SGr3DmUPlX1iylp0gZJo5wn4mHQg6RpQvouM0camTArc4g0Skw9UlSrlruuWhY1RDqw2FZEbBc5aUOk0fOth0hXCN6BQ82Qdtj5B6UqjbpUUkv7mpVr6wHSArol5bJ0WMVSWkn244fh89sXz7k1TvrNr6fB6PDgUIXqoqQ7UhzPQNrkyorMonsi4NquOMLNJ2U1AW50Pbq0SMH49jqcU31fJHS1maOiTeAEg5CT7SITaAe%2FcscZ6d66bGeS7WsNuAHXpJ1h7PAU08M6nxcQrUTXqkB9EA1zDXZPypXP6pcG8UmpEMzp0qC6wJyybW%2FR1XJKg2D2lIWFkERSuXLxi%2B2sBQ228Hdn%2FbjSHEx3AhmzGc1OIyOavYUJMFnYqEBREIONiF1crlSvQUEQn5gKoaMuCKoNPOYVBKkFj7yCIDj0ywOQhPa%2FzcBBMx6iqXGwaI7KQr4Y5YpGPtL6c91yx80PXw5m%2FeNz57dl3GDOzxULwebGsIOoAfwJadVrw2Qb1l0Qn%2FbH%2B7vmxWw82VwwAX5CBesGsiMbyU2PCqQRVk64SN6EaRfg4UaJLODNHYz6zclkHmycB02isBfcuvQuJYCx2rJB%2F2qw7oaBDXEQpo%2BvTQZ3vdnwKf14bJOWn3ASoQcQ23aaHlawb1ur%2F13bTT9xOn6cXAyWD1ntPPPcJJEpeW76ObPe5GowY54TbnPvFdw2x7opQ%2BNkmzYnOz8Tuz98SsWt4LgsapJycsTZWZOZzkJRMyuJacE14cuk2xxvADn4p1UKRAVInGT%2BH8WJZXRa%2F2EO7n3r6fzH9%2Ba5%2F%2Fe2%2BdT6bHJQZTmzzQZsxjby5xnx6RlvWwQXDl3iartYias0xEAJqAZihJ83l8X5nLaQtYv7moOL0bf244%2F%2B%2Fcf%2BJ%2B%2F44WU2mHLnnJcDQbbL1EcaSe7k%2BrgTd56MH%2BbYhH5YmeCDEgYBH9p3l1gliYTOLqJE7RehXvc83INzlVvgbfb668i1oxSEnlVWYUFJhY5NdbbBxj4RV5KBczPs31%2B7h0effzuPX7s3d9a%2F3yYqZHewvWMDCyvJkOaWQjdGQMRX7N3j07Ma7x66Hp3ioaBzbx3Oqb6DAbpaTvdYE0S9oI0GbZ61cKsDLmYMkuyAP6mHQxh3we8HFaNb8R6%2BDdgqzVSov49IygJ5dYbe5UOvf3j2czT79611%2FNG5UwIOAyedGWN6ZqlwiG6M%2BnDIp2c1cIiuR8OhgnC4DudUD4foajUcqgeHG7CVanAokABYfjdYzyoxLxLdFoGEPhXB0FUMDLF6ZQ2GKoIhh3MUBUMkXU2DoYpgmM1WFYLh5eeTx6szP5i2z14mvevfPz90%2FPV62Nn5Ul%2F3sKMSQ1yqiZ3lY23fXSwQZVoWHeIpjO4Cpq9sJch0KRe5ZWFbI62THbovupMdeE0XoO9kuxHxTnZ80cJNfyyzkx26PH4nO%2BGRpcINR45D2fCS02skPWG0VA2p4F4j63BD4hdmuEFWvxF0dWyB5LdB%2BC2ng%2FDiyWT88lpviuQCcNopbwXOPkGc8j6inNiONN1EpAhFvnLiBam9MV0D3RtZzgV8Z0oJ5WQQpRpHC74gARVWgsMKGiubS0WzwhgOviAZQZzExNZ%2Bq838VmvxTvUVS%2FhyOY0r4CR2yomUpARH6vQyo47ETqRVxl4Texfl%2B4LZhWYNnFHS2CKNZqjjyZQ0PAFfrnBvio0ksAQNgMSIU52QLiV0lUEulQBL%2FXhVBg1V2kgZESuN%2FFKQPy9kpRjy4zGrZUmQxUxFskBUKrt%2FB09lAAEurTgUxFUVKg7nPz9PX%2F4d%2Fu1%2F%2F%2FbU7X46vfn94ZOeuiQ7YmXSuSlmYCJUxwcv%2BbLIjln7OjCjAzOAijowI3zEHfqIO5hglxaYQU84P%2FSqRwyVHxswfYtiEWRUgKxYDcofGwTuCuEEkGclb2xRouYyZe8rzTjJ3Zp7xqBSm0rNaoG3B%2BDT7Vj3Bbrs8u1bGIzMlYBUPQqu5DgOKZHDBVxienARS0vHoicXmaH5gVUXSRxehBIU89dppVUrrbuktBY1vMh0Aiojm7glDi9Cz7ceXlRp%2BgrVAskkqBVTqpKKuDyLj9Dk6TZUc6EQDX0WC2UFGXCnXTV9ZddO1uDTtJqIDb6ZurmsghGbdVin%2BhojnLEQJ2sqVQMN2PB6uImXHQnavIuIEaw8ErF2t7Lv7AbMljeZhGAzeguJ4vSPzp%2F%2B3Nx9vZ6M3H%2BNh%2BHV7y9oFEdbRtoykmYZvXvQXzNXRBmrXnDrO%2BS2fgag6cSmWVIJYntYSrVp25iXphAnDSaKdGRRiyItiqAomit9bfCyD8IFMHBBfZ7BDJnbcoHG%2BJ0tjx2gTOIM6KKl2eTi8cPl9O3w%2B7dG%2B%2F7psPX55uYpwyWlpZmWZipKs1QlAAxPekrqROs5lHJqNWzaVecErE%2FbQ9LrpMkPLBtYyw8tP2opP%2BYvd4D%2Bw%2BbzKq6wyJU2buzfgeYXQfI6pYkbrDqM3ll06sCc8wSHEUQ7G%2B7R5PUX%2FOMs%2BmPfif9sv8AX26%2FxXy%2FD2a%2FlE6PfwbvCv1Zviv6I37P4BuvOOnh2Z97QHzz%2Fdoc3vYP%2B4WHr2MVmHfD7%2BGTGKCSOOjBdg%2Brk4lF%2BQ9E5B6ZLZSZahHrS2kMOOB9kU8USrpu9MPp%2B27Eo5l8sYXUU1huogJ8OgYygYk7HksuNfdcOUpxuzD3YfF6P%2FjgJATv8qpHbnDprq%2BN1Fp%2BhjLO22bm5vLVODH98eP219XIymXYOex%2B%2F1%2BTcBCbNVJuem4AeKGNIOjeuk84LdZYfzF9Z4GS9QdLBEaiULPTgpOGBZONDuecjq4pG7fMRKp50JoO74QEhhJq169OVKkUdEJrfTeJ7650Q3yvjhAjUzxaseK3H7CtI8hx4uCRoXuPP9qjv%2Fz08Oj2dTk67v05uj5o1OSEWpXmZBi34hU%2BIRaleAQ1GBZ0Q4sZJ1fEHkTUhhHqDpAMiUBdd9AHxUifE2OyEmBJOSFbvUHhC%2Fjv9edAf92%2BDyd9vN89N4%2BjZf6r4hCQ27vtPCN2wUtoJoasTYvuKtzLLob4k9QZJJ0Qg2VGNE2IqcjyOP%2F8eXUyfvY%2FG25i4j53Jx4cvi7qmqo6HZVMAEmxquls2jR%2BSTHfbobRCpww4iL9MZY4qoo6nSpTdFZzKWUN%2Bt2yqhXT8wfyVMT2nyzggAlnJShgUqfNR4eloH%2F8ZHj79Gnv37fF4Ovx9%2BOXgulpdySK0H3fTs0Gos9GQdTYsk2b1bGM7eQN30q69dLrKPSwk%2F7Co1f3MtrHaGmmFD%2FiuCTSpfH91TQbBMg9myXshEDiruP9ZBg1V2kiRqmvd%2F6zkapq1eKf6%2Fmf4cpEgRJSQEHeLWGZvhj998LuVnopupMeMo33RYGKmG%2BdzLupejLXbmy2u0ydAjYIZaaxTYZOzi0b7y%2BjefQ5mP5pf78%2BvBkGoLm2qS6NKc%2FTXxePkCdOgDSNRmxf2ouXKsDPnT6DDxHsbqdfofsU4rrh%2B7dFqsWMTuo2%2BsI5tuS71MOZZa2vZKaZdT8%2FF6YLw8ebZhMTkZxOuXtPZhMVlE0pOGly8tICE6JUlOLw%2FmzC%2F7wJh%2Bi6wKYirjox44mE8Cm%2BFuASAK4TbBJXZzk%2BLvEO2SAPWxUJoN96TpBgJ27nmuCmWw25ARqwKzsnjtPactriyJ2KJ8aGRC%2BTGvhlYVFV1IbK7kTTDi9uBU33wxpeX4WGUIUQFrN73KANxFFG62xhHiGoRmQbRuEx6fTSmuqY2LJvqOlM5GPMb6L1DaqbFIdUgwAblZrBrHmuDUO0AqJuTG6zlq4XIy%2B2TjdlGjjzZaKVzAhse5ayRJxs3TZDdwFAiaUNpmSibZSi9z%2BhR3JaxCEV0y6AE3hqWDJUyt5qRWni8gF41KTgdFeVSfh%2FAwiRvsYpoBzyEKvtdjOVxe%2FeRpj46nz6kdU9MJe0PnwrU01ffuyh9ObW%2B7UMFzugW%2BRozSR%2FrJKVOPixsmtzKhQVcS87J8%2BZhSRDYlNNt3tlbIpbkquFxLlcqW6lLbgbPvbMPf%2F9Mne7lmX909cYbb16auk6zFDsjWxh2nIDxxr0fd4rmZH49Lrfrdb5TRYIsDvw0msBYhbFOMzCeWDf3AnMp1nMFemYb6y2Q6F5FEt2jD4xblkDHUk2L4l4naapC9Wtvp8NvRtxPLhWEi5oUOG01%2Bq%2FScbS7iM1bSRN8OgidjrK1%2FOj%2FLH4VTx9hEpIbNiGhybS4BgOyBoIW8sJqWBKnImw0f3Oe30MzGs1orinIaG6pjMbvb1gUo6WMvtYSQFeMhoJsYhot798a2WUYnjMvDZAiuxwDaTSO8RNdnVgcPxH5%2FJTZhkdzCcMltPVge0gvw3KlDn%2BEUglcAgDMAo6jONtJcxDDQUQ9DpIZI9J6tgT1h5ZCVhx7qU7JLjwmg2ec2STuVCLemQT3yFEpcIGTuOcq8sbFQQrVvXGUP8A0zY2dcXR%2FnYZlqOaKQ5uKFOlCE5lvrMPlBaYSZUdGGqGMsY30jJlGUbGRIKCeS3G7PFca2vlDY7y6GM9kDVvIPJ%2BSMZ4flqich7QjbTMuoxPYSMD2si7XGkFKitlRLuFzhg%2FcyZaQbHQZE0UJavL7peedXxazt7ZBo4jlIBUmFru1xJK1tayrwC5ra5PJgXK21kRasJe6tdLsn4KSD5K8tWXyge%2BXZ%2B7wE9nS1k5GkkJV5o5tMP4am6QfIm7t2D79KOWsHTbkGtOz5hLCjgfRVCYh9JAG8FoNy6J0k3Vxv%2F%2ButVR3HaR6WFpT9ZMPHevmmny6v766%2BmTf%2FHgbfelmDNe7NjPkS2PeKiCWMSijOzybDYivPM7UZZ%2B1k29OkfKNxzvLfEaWfaZ57DNf7jNYVdTkSzNFmbXAixX37od3r4sXkxKBTKRJ3bKeyDH3M6oQ0gmgi8vnfN4RkXCV5bier%2FFF%2BIdATIjz9pNZAzf5%2BDzxXTWAPBiOQpbjyIlIG4%2B2ZfXvP4I8dfY9vHga%2BedoTpo%2FqNF7eLgLz8%2FrdDa4X1xqhUx8%2B7l38X1%2BrTtXSKLrzUm0uvmvoOg7%2BnPaG03DkzUZXuKb6abwB9t%2FZps7JOKSwM7h1wK32Fh8l%2FiffzgrBgc6lzcWHCvvG4hv5ypCVvwoxPgtggc%2FUYGdeH8ED3siFmDhVZdxgMOuQMnD2yCGt%2FjWC2UcXrHBGw%2BWNVyLdxH4reED29Rt%2F4uGscGv857Mw%2B7iK68eyTUvYjpQsU7U0hB61D%2FxfcLUoXcjAEsxMtoq7eccj7TtoxXo%2BulKGXC7Taq1ZoptVKBJBQq0ui0itOa7qeabod%2FGJKhW0UU1RgzuFVzm5toHOADJDT54WnwwEK0Jyz1LKZsG9nCo98Gznd1mgK9%2F%2BQtmlkWTTF96c35%2BLsajuXe435jO3c7rWMzSVsu0PxBp%2BwD1%2F4TkBLzdA5p0J815rHim%2FBjrcgDPFssQz5DjO2kE8GJdHaABgdp%2FK8V5qwOQ3HxAM%2FdqQ9pgYR62hz72NZOHL74s3Pwm801j0zVliLXALoW%2FtNP3QymwQZbU%2FGeyfgLbzrII3AYfSpgdyMdhbQRtu76rjSDNFLU1gqxqjCBB2C64bai2ceTYOJJd4RsbD1K94okTltX3OkCZjDWZFWtL97uurAvEX%2F2eA%2BfvIXaLk1bAWEVrLd9%2Bsl1L0iw95Jsrelr%2F2nao1fqXZora6l92BfqXamWWUP1Ct0KrY1odE0hSWEu%2FYNUxQQ9waeob6wkzsNQDCzjneI5G6gg2wRsDcD0miuBxpzffiDMv4LabYA8JoJq%2F9z69jt6QSFXUut62w7rW9TRT1FbXc7bB15bbGX29uNb%2FgJRPUung3cn62syzfPBNeECbwIbDPAQGsIJ%2FtHtQp0AUo7q90zFImWAmc3gOlh9BKV50HNNIO%2BhgBi8MoWYfaWN9LzsaGRfPdaIdgOsYnpmyaUncNmcfyvUwhteiUjThlhtY7d%2F4aTC5vJvX0F8P%2B6GGuUdPio%2BOa9xco6CmfabhW3TBn8GU%2BwWGzZb7mX4BI4zRej%2FCrfe7HIs1YyFGFohCdzc7MhaFScJwjg%2FYEialO0smpPkcYlwA%2BGbxlUpv1mIUxD%2BWQ%2FNP%2FBA4ATtualx0mxWUfd7fNbRw9mkycAEVOVjxwKbGkK1hFptqRGy6josUF5fLLfwOoWsWFxdcQ8y1c7WrokZW6Tv9DkuBtWGfgzxlXLgmLcp6M1rdSH9rxCLNZxRTtIDKpEvIVriYOEEpzyhtuEENzmKUUAtokahHUSQ8kkjaWFwvfzkAD2xy3is2hj6Vn2gwMXwDuNAZ%2BU8jSJDeOIg7iZVjRgVzWTmYdvrrGHQaaa43Q6gDhhaBWgRuhQiMqouMb4NQ%2F5kOwt9OJuOX13LEIfQhEOBk8NICBRrIie8POhaKk2Xx5zbSj07ccAv3RPK7xfj4PHA%2FJbO1yNEiR4ucJJd3fr6auQ5Eg8lizAiYG%2FzAMqqY2IxocPkqyTtr6Y2VA6VE4QrVrSRonqTJeMw9JgiOzBUt3NHIJt1AgZ0dYYcuzBa2a%2FCZUJ52GaUR1TnfS5vlzXQ2ghn3aViLjRKYQl3dECEMsBj2PNAAtRFDaxDSIKRBKH6SXTkIbdqRJS0KGqLCeuXwp7Rip6DFUWJUMD6Y%2BEEgflDBBSeGq%2BSrcVLiVi4VSj1ft%2BQTdqrvMCuEO5kuDl09DTUFFk9L4K0ZbxTrHIfBUxErxkQirSl%2BMEFi4nwZXE0izSFrLCAhZeG6CGQ8CJMGqJimnD48rYL6lGaKPQjUVByG%2BbvgmTBKy0aKNdZqrNVYGz9p7YQyzvHIXkkhOXJFd7wrT7tAsYhKX09sLtSUEEtix9QPQ74py1NvMpQt2EXFZrYG%2BvbQ%2BEpnzW1lVansDY0BqHjtq6zkco0xGmPqJpTddbGoZt%2BvFNBJLAMjvyNoRXjBeh6hyZO4OM2NvoYWsFrAVi9gRcVGccUjIgLIK0zAqvn9yhWwlLsCKoAGJplUFLCqwS2%2FQm%2BT%2Fn7rUkhjh8aO6rFDzdPka%2BwoFjtglVULPNDCJNP2Yoeq3LAuhTR2aOyoHjvUPE2BduwU69iBD2HLSWGFVxyyVhJBNv4yWthqYVu9sFVTGJmGlrbFStuMEQvJq6XmDq8rYQn4bmwrB1hV7q%2Feu7oZTSpCbJS8zVqsbXcaHbC1x77NVB47DmErj23Lk1R67Oix6bUGOloj2aWx6SZWaWDsR%2F2d10jdq92AdN9Pi5H4TyBEPL%2FE0eiuFiFahGyXCJnftFaPlV0SOKZpMRLHJEjDlCJEzr%2Fu6Xj4Z%2FTz4EPz6%2Bn0udm%2BeDhumIzIOWoel9iMJnrW9LrXnyuQlLZIrPjv5UrMAkhAq46NeTc6iga%2Bg2iOBTTIuni8ubltd8dnHz9%2Fm45Prx8OOgFCgp%2FbTYLApUjgyiNB%2BOdkHImt5LXD8Ptffx73B9Ed%2Fwc%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
