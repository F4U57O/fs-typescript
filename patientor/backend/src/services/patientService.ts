import patientData from '../../data/patients.ts';
import type { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from '../types.ts';
import { v1 as uuid } from 'uuid';

let patients: PatientEntry[] = patientData;

const getEntries = (): PatientEntry[] => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const findById = (id: string): PatientEntry | undefined => {
    const entry = patients.find(d => d.id === id);
    return entry;
};

const addPatient = ( entry: NewPatientEntry ): PatientEntry => {
    const newPatientEntry = {
        id: uuid(),
        ...entry
    };
    patients = [...patients, newPatientEntry];
    return newPatientEntry;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addPatient,
    findById
};