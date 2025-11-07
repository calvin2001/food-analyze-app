const express = require('express');
const cors = require('cors');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: './google-credentials.json'
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/', (req, res) => {
    res.send('health check');
})

app.post('/analyze', async (req, res) => {
    try {
        const { image } = req.body;
        const [result] = await client.labelDetection({
            image: { content: image }
        });

        const labels = result.labelAnnotations;

        res.json({
            success: true,
            labels: labels
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});


app.listen(PORT, () => {
    console.log(`server is running ${PORT}!`)
})