export const tools = [
    {
        type: 'function' as const,
        function: {
            name: 'getDate',
            description: 'Get the current date and time',
            parameters: {
                type: 'object',
                properties: {
                    language: {
                        type: 'string',
                        enum: ['en-US', 'es-MX'],
                        description: 'The language of the date and time',
                    }
                },
                required: ['language']
            }
        }
    },
    {
        type: 'function' as const,
        function: {
            name: 'throwDice',
            description: 'Throw N dice and get the results',
            parameters: {
                type: 'object',
                properties: {
                    nDice: {
                        type: 'integer',
                        description: 'Number N of dice to throw'
                    }
                },
                required: ['nDice']
            }
        }
    },
];

export const functions = {
    getDate: async (params: any, additionalArgs: any): Promise<string> => {
        const { language } = params;
        const myDate = new Date();
        return myDate.toLocaleString(language);
    },
    throwDice: async (params: any, additionalArgs: any): Promise<string> => {
        const { nDice } = params;
        let result = [];
        function sleep(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        await sleep(5000);
        for (let i = 0; i < nDice; i++) {
            result.push(Math.floor(Math.random() * 6) + 1);
        }
        return JSON.stringify(result);
    },
};
