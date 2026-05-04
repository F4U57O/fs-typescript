import express from 'express';
import diagnoseService from '../services/diagnoseService.ts';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = diagnoseService.getEntries();
    res.send(data);
});

export default router;