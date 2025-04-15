// src/controllers/sms.controller.ts

import { Request, Response } from 'express';
import smsService from '../services/sms.service';

export async function sendSms(req: Request, res: Response): Promise<void> {
    try {
        const { phone, message } = req.body;
        if (!phone || !message) {
            res.status(400).json({ error: 'Поля "phone" и "message" обязательны' });
            return;
        }

        const result = await smsService.sendSms(phone, message);
        if (result.success) {
            res.status(200).json({ success: true, data: result.data });
        } else {
            res.status(500).json({ success: false, error: result.error });
        }
    } catch (error) {
        console.error('Ошибка в контроллере sendSms:', error);
        res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера' });
    }
}
