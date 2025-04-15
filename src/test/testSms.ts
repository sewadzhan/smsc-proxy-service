import smsService from '../services/sms.service';

async function testSendSms() {
    // Задаем тестовые параметры
    const testPhone = '+77086053541';
    const testMessage = 'Ваш тестовый код: 123456';

    // Вызываем функцию отправки смс
    const result = await smsService.sendSms(testPhone, testMessage);

    // Выводим результат в консоль
    console.log('Результат отправки СМС:', result);
}

testSendSms()
    .then(() => console.log('Тест завершен'))
    .catch(error => console.error('Ошибка теста:', error));
