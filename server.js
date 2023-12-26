const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 정적 파일 제공 (이미지 등을 저장하기 위한 디렉토리)
app.use(express.static('public'));

// POST 요청의 본문을 해석하기 위한 미들웨어 추가
app.use(bodyParser.json());

// 기본 경로('/')에 대한 응답
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 클라이언트로부터 데이터를 받아 처리하는 엔드포인트
app.post('/updateOrder', (req, res) => {
  const orderData = req.body;
  console.log('Received order data:', orderData);

  // 여기에서 데이터 처리 또는 저장 로직을 추가하세요.

  res.json({ message: 'Order data received successfully' });
});

// 서버를 시작합니다.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
