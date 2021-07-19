import express from 'express';
import apiRoutes from './router.js';

const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();

app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);

})