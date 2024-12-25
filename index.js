const express = require('express');
const sendEmail = require('./services/emailService');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
// ตั้งค่า middleware
app.use(express.json());

// API สำหรับส่งอีเมล
app.post('/send-email', async (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  if (!firstname || !lastname|| !email || !phone) {
    return res.status(400).json({ message: 'กรุณาระบุที่อยู่, หัวข้อ, และเนื้อหาของอีเมล' });
  }

  try {
    await sendEmail(firstname, lastname, email, phone);
    res.status(200).json({ message: 'อีเมลถูกส่งแล้ว' });
  } catch (error) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการส่งอีเมล' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

