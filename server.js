require('dotenv').config();
const express = require('express');
const cors = require('cors');
const vision = require('@google-cloud/vision');

const base64String = process.env.GCP_CREDENTIALS_BASE64;
const jsonString = Buffer.from(base64String, 'base64').toString('utf8');

const credentials = JSON.parse(jsonString);
const client = new vision.ImageAnnotatorClient({
    credentials: credentials
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.get('/', (req, res) => {
    res.send('health check');
})

app.post('/analyze', async (req, res) => {
    try {
        const { image } = req.body;
        const [result] = await client.webDetection({
            image: { content: image }
        });

        const webDetection = result.webDetection;

        let bestGuess = '정보 없음';
        let webEntities = [];

        // 3. 가장 구체적인 추측 라벨(bestGuessLabels) 확인 (최종 결과로 가장 유용함)
        if (webDetection.bestGuessLabels && webDetection.bestGuessLabels.length > 0) {
            bestGuess = webDetection.bestGuessLabels[0].label;
        }

        // 4. 웹 엔티티 (검색된 관련 웹 항목) 목록 추출
        if (webDetection.webEntities) {
            // 상위 10개 엔티티만 가져와서 객체 이름과 점수를 저장
            webEntities = webDetection.webEntities
                .slice(0, 10)
                .map(entity => ({
                    description: entity.description,
                    score: entity.score
                }));
        }

        res.json({
            success: true,
            // 💡 웹 감지 결과 데이터 반환
            bestGuess: bestGuess,
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