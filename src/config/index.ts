import dotenv from 'dotenv';

// Загружаем переменные окружения из .env
dotenv.config();

// Определяем интерфейсы конфигурации
interface SmscConfig {
    apiKey: string;
    apiUrl: string;
}

interface SecurityConfig {
    fcfApiSecret: string | undefined;
}

interface LogsConfig {
    level: string;
}

export interface AppConfig {
    port: number;
    smsc: SmscConfig;
    security: SecurityConfig;
    logs: LogsConfig;
}

// Создаем конфигурацию
const config: AppConfig = {
    port: Number(process.env.PORT) || 3000,
    smsc: {
        apiKey: process.env.SMSC_API_KEY || '',
        apiUrl: process.env.SMSC_API_URL || 'https://smsc.kz/sys/send.php',
    },
    security: {
        fcfApiSecret: process.env.FCF_API_SECRET,
    },
    logs: {
        level: process.env.LOG_LEVEL || 'info',
    },
};

// Проверяем обязательные переменные
if (!config.smsc.apiKey) {
    console.error('FATAL ERROR: SMSC_API_KEY должны быть заданы в переменных окружения.');
    process.exit(1);
}

if (!config.security.fcfApiSecret) {
    console.warn('WARN: FCF_API_SECRET не определен. Микросервис не защищен от неавторизованных запросов.');
}

export default config;
