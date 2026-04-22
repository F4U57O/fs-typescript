interface BmiValues {
    valueCm: number;
    valueKg: number;
}

export const parseArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            valueCm: Number(args[2]),
            valueKg: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

export const calculateBmi = (cm: number, kg: number) => {
    const meters: number = cm / 100;   
    const bmi: number = kg / (meters * meters);
    
    if (bmi < 18.5) {
        return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 25) {
        return 'Normal range';
    } 
        return 'Overweight';
    };
if (process.argv[1] === import.meta.filename) {
    try {
        const { valueCm, valueKg } = parseArguments(process.argv);
        const result = calculateBmi(valueCm, valueKg);
        console.log(result);
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
}