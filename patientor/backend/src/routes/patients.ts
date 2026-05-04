import express, { type Request, type Response } from 'express';
import patientService from '../services/patientService.ts';
//import parseNewPatientEntry from '../utils.ts';
//import { NewEntrySchema, NewPatientEntry, PatientEntry } from '../types.ts';
//import { z } from 'zod';
import { errorMiddleware, newPatientParser } from '../middleware.ts';
import { type PatientEntry, type NewPatientEntry, type NonSensitivePatientEntry } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientEntry[]>) => {
    const data = patientService.getNonSensitiveEntries();
    res.send(data);
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(String(req.params.id));

    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>, res: Response<PatientEntry>) => {
    const addedEntry = patientService.addPatient(req.body);
    res.json(addedEntry);
});

router.use(errorMiddleware);

export default router;