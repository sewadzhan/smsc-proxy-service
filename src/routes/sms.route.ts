import { Router } from 'express';
import { sendSms } from '../controllers/sms.controller';
import { verifyRequestOrigin } from '../middleware/auth.middleware';

const router = Router();

router.post('/send', verifyRequestOrigin, sendSms);

export default router;
