interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number; 
}

interface ExerciseValues {
    targetValue: number;
    hoursValue: number[];
}

export const parseArguments = (args: string[]): ExerciseValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    const target = Number(args[2]);
    const hours = args.slice(3).map(hours => Number(hours));

    if (isNaN(target) || hours.some(hours => isNaN(hours))) {
        throw new Error('Provided values were not numbers!');
    }
    return {
        targetValue: target,
        hoursValue: hours
    };
};

export const calculateExercises = (target: number, dailyHours: number[]): Result => {
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(hours => hours > 0).length;
    const totalHours = dailyHours.reduce((a, b) => a + b, 0);
    const average = totalHours / periodLength;
    const success = average >=target;

    let rating = 1;
    let ratingDescription = 'too lazy, work harder!';

    if (average >= target) {
        rating = 3;
        ratingDescription = 'good job!';
    } else if (average >= target * 0.7) {
        rating = 2;
        ratingDescription = 'you can do better!';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

if (process.argv[1] === import.meta.filename) {
    try {
        const { targetValue, hoursValue } = parseArguments(process.argv);
        const result = calculateExercises(targetValue, hoursValue);
        console.log(result);
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.';
        if (error instanceof Error) {
            errorMessage += ' Error ' + error.message;
        }
        console.log(errorMessage);
    }
}
//console.log(calculateExercises(2.5, [1, 0, 2, 0, 3, 0, 2.5]));