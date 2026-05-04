/*import { NewEntrySchema ,type NewPatientEntry } from "./types.ts";
import { Gender } from "./types.ts";
import { z } from 'zod';


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDateOfBirth = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (gender: string): gender is Gender => {
    return Object.values(Gender).includes(gender as Gender);
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const parseDateOfBirth = (date: unknown): string => {
    if (!date ||!isString(date) ||!isDateOfBirth(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date; 
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) ||!isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseSsn = (ssn: unknown): string => {
    if (!ssn ||!isString(ssn)) {
        throw new Error('Incorrect or missing ssn');
    }
    return ssn;
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation ||!isString(occupation)) {
        throw new Error('Incorrect or missing occupation');
    }
    return occupation;
};

const parseNewPatientEntry = (object: unknown): NewPatientEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    if (
        'name' in object && 
        'dateOfBirth' in object &&
        'ssn' in object &&
        'gender' in object && 
        'occupation' in object
     ) {

    const newEntry: NewPatientEntry = {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation)
    };
    return newEntry;
}

throw new Error('Incorrect data: some fileds are missing');
};


const parseNewPatientEntry = (object: unknown): NewPatientEntry => {
    return NewEntrySchema.parse(object);
}; 

export default parseNewPatientEntry;
*/