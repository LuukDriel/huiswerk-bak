import express from 'express';
import chalk from 'chalk';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hallo vanaf de Node-server!');
});

app.listen(port, () => {
    console.log(chalk.green(`Server is running on http://localhost:${port}`));
});
