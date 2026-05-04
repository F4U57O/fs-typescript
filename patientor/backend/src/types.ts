import { z } from 'zod';

export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}
/*
export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;

}
*/
export const Gender = {
    Male: 'male',
    Female: 'female',
    Other: 'other'
} as const;

export const NewEntrySchema = z.object({
    name: z.string(),
    dateOfBirth: z.iso.date(),
    ssn: z.string(),
    gender: z.enum(Gender),
    occupation: z.string()
});

export type Gender = typeof Gender[keyof typeof Gender];

export type NewPatientEntry = z.infer<typeof NewEntrySchema>;

export interface PatientEntry extends NewPatientEntry {
    id: string;
}

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;