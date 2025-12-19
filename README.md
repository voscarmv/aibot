# aibot

Demo for [@voscarmv/aichatbot](https://www.npmjs.com/package/@voscarmv/aichatbot) and [@voscarmv/aimessagestore](https://www.npmjs.com/package/@voscarmv/aimessagestore)

## Usage

Create an empty `postgres` database for the `server.ts`, add that DB URL to your `.env` (you may use `install.sh` for that).

Generate your Telegram bot key with the [Botfather](https://telegram.me/BotFather) and your Deekseep API key, and add them to `.env` too.

Finally add your `server.ts` host to `.env` and then just run the server with:

```bash
npx tsc --build && node dist/server.js
```

Finally run the bot on a different terminal:

```bash
node dist/index.js
```

The bot should reply on Telegram when messaged.
