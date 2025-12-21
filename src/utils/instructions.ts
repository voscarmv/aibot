export function currentDate(args: object): string{
    const { date } = args as { date: Date };
    return `Today is ${date.toString()}`;
}