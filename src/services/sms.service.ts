import axios from 'axios';
import config from '../config';

interface SmsSendResult {
    success: boolean;
    data?: any;
    error?: string;
}

const smsService = {
    sendSms: async (phone: string, message: string): Promise<SmsSendResult> => {
        const url = config.smsc.apiUrl;

        const params = {
            apikey: config.smsc.apiKey,
            phones: phone,
            mes: message,
        };

        try {
            const response = await axios.get(url, { params });
            if (response.data) {
                return { success: true, data: response.data };
            } else {
                return { success: false, error: 'Пустой ответ от SMSC' };
            }
        } catch (error: any) {
            console.error('Ошибка при отправке СМС:', error);
            return { success: false, error: error.message };
        }
    }
};

export default smsService;
