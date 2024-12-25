const nodemailer = require('nodemailer');

const sendEmail = async (firstname, lastname, email, phone) => {
  // สร้างการเชื่อมต่อกับ SMTP server (ในที่นี้ใช้ Gmail)
  const transporter = nodemailer.createTransport({

    service: 'gmail',
    secure: false,
    auth: {
      user: 'erpgfromuser1@gmail.com',  // ใส่อีเมลของคุณ
      pass: 'mhdu dkjy nswk vowm'    // ใส่รหัสผ่านอีเมลของคุณ
    },
  });

  // กำหนดข้อมูลของอีเมล
  const mailOptions = {
    from: `"ส่งคำขอนัดหมายสาธิตการใช้งานระบบ ERP" <${email}>`, // อีเมลผู้ส่ง
    to: 'ss_bkk@softsquaregroup.com',     // อีเมลผู้รับ
    subject: `จากคุณ ${firstname} ${lastname} เรื่อง ขอนัดสาธิตการใช้งานระบบ ERP`,   // หัวข้ออีเมล
    text: `จากคุณ ${firstname} ${lastname} เรื่อง ขอนัดสาธิตการใช้งานระบบ ERP
--- ช่องทางติดต่อกลับ ---
Email: ${email}
Phone number: ${phone}
    `,   // เนื้อหาของอีเมล
  };

  try {
    // ส่งอีเมล
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    // หากเกิดข้อผิดพลาด
    console.error('Error sending email: ', error);
  }
};

module.exports = sendEmail;
