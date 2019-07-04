import express from 'express';
const app = express();

import route from './routes';

const PORT = process.env.PORT || 3000;

app.use('/api/v1', route);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`)
});

export default app;