export const tools = [
    {
        type: 'function' as const,
        function: {
            name: 'getLang',
            description: 'Get the language for a given language code',
            parameters: {
                type: 'object',
                properties: {
                    language: {
                        type: 'string',
                        enum: ['en-US', 'es-MX'],
                        description: 'The language code',
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
    {
        type: 'function' as const,
        function: {
            name: 'getOS',
            description: 'Return the host Operating System',
        }
    },
];

export const functions = {
    getLang: async (params: any, additionalArgs: any): Promise<string> => {
        const { language } = params;
        const langs: Record<string,string> = {
            'es-MX': 'Mexican Spanish',
            'en-US': 'US English'
        };
        return langs[language] || '';
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
    getOS: async (params: any, additionalArgs: any): Promise<string> => {
        const { platform, type, release, version } = additionalArgs;
        return `Platform: ${platform}, Type: ${type}, Release: ${release}, Version: ${version}`;
    },
};
