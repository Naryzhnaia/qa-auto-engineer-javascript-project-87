Вычислитель отличий

"Вычислитель отличий" сравнивает два файла формата json или yaml(yml) и выводит в консоль разницу файлов.
Разницу можно получить в формате строки, в описательном формате или в виде json.

Установка проекта "Игры разума"
Для установки и запуска проекта используйте операционную систему на основе Linux, либо WSL (Ubuntu на Windows).
Также необходим интерпретатор NodeJS от 20 версии.
Установите зависимости с помощью команды 'npm ci'.
Установите пакет в систему с помощью 'npm link'.

Команды
Все возможности по команде 'gendiff -h'
Чтобы получить результат сравнения в строковом формате, укажите путь до файлов в команде 'gendiff myfiles/file.json myfiles/file2.json'.
Чтобы получить результат сравнения в описательном формате, укажите путь до файлов и формат -f plain 'gendiff -f plain myfiles/file.json myfiles/file2.json'.
Чтобы получить результат сравнения в виде json, укажите путь до файлов и формат -f json 'gendiff -f json myfiles/file.json myfiles/file2.json'.

[Asciinema for comparing json-files](https://asciinema.org/a/ZIErssZbRsfa5pCtCFqdtAZbY)
[Asciinema for comparing yaml-files](https://asciinema.org/a/QetD3YLp8JaNDJjUyO77kyskV)
[Asciinema for plain format](https://asciinema.org/a/DBSzyUU1kJrW6xGgYEtf7Cwq6)
[Asciinema for json format](https://asciinema.org/a/4mWzlLEd5619w4DgSpmik0Uyu)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Naryzhnaia/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Naryzhnaia/qa-auto-engineer-javascript-project-87/actions)

[![main-check](https://github.com/Naryzhnaia/qa-auto-engineer-javascript-project-87/actions/workflows/main.yml/badge.svg)](https://github.com/Naryzhnaia/qa-auto-engineer-javascript-project-87/actions/workflows/main.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Naryzhnaia_qa-auto-engineer-javascript-project-87&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Naryzhnaia_qa-auto-engineer-javascript-project-87)