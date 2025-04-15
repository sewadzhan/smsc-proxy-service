import { Request, Response, NextFunction } from 'express';
import config from '../config';

/**
 * Middleware проверяет наличие заголовка x-request-token,
 * который должен совпадать с FCF_API_SECRET.
 */
export function verifyRequestOrigin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-request-token'] as string | undefined;

    if (!token) {
        res.status(401).json({ error: 'Отсутствует токен авторизации' });
    }
    if (token !== config.security.fcfApiSecret) {
        res.status(401).json({ error: 'Неверный токен авторизации' });
    }
    next();
}
