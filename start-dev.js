const concurrently = require('concurrently');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const clientPort = process.env.CLIENT_PORT || 5173;
const serverPort = process.env.SERVER_PORT || 8000;

// Configuration for processes
const commands = [
    {
        command: `npx vite --port ${clientPort}`,
        name: 'client',
        prefixColor: 'blue',
    },
    {
        // Using php artisan serve, injecting the port and DB config
        // Note: Laravel will prioritize process.env over its own .env
        command: `php artisan serve --port=${serverPort}`,
        name: 'server',
        prefixColor: 'magenta',
        cwd: path.resolve(__dirname, 'server'),
        env: {
            FORCE_COLOR: 'true',
            ...process.env
        }
    }
];

const { result } = concurrently(commands, {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
});

result.then(
    () => console.log('All processes stopped'),
    (err) => console.error('Error occurred:', err)
);
