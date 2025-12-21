
export async function currentDate(args: object): Promise<string>{
    const { date } = args as { date: Date };
    return `Today is ${date.toString()}`;
}