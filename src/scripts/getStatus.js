const getStatus = (status) => {
  switch (status) {
    case 400:
      console.log('Недействительный синтаксис запроса.')
      break

    case 401:
      console.log('Неправильный ключ или количество запросов на сегодня истекло.')
      break

    case 403:
      console.log('Запрос принят, но авторизован не будет.')
      break

    case 404:
      console.log('Запрошенный ресурс не найден.')
      break

    case 500:
      console.log('Неожиданное условие.')
      break

    case 501:
      console.log('Метод запроса не поддерживается сервером и не может быть обработан.')
      break

    case 502:
      console.log('Получен неверный ответ от восходящего сервера.')
      break

    case 503:
      console.log('Сервер не готов обработать данный запрос.')
      break

    case 504:
      console.log('Превышено время ожидания ответа от сервера.')
      break

    default:
      console.log('Всё ок!')
      break
  }
}
export default getStatus