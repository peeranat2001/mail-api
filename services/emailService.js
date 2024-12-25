const nodemailer = require('nodemailer');

const sendEmail = async (firstname, lastname, email, phone, company, employees, details) => {
  // สร้างการเชื่อมต่อกับ SMTP server (ในที่นี้ใช้ Gmail)
  const transporter = nodemailer.createTransport({

    service: 'gmail',
    secure: false,
    auth: {
      user: 'erpgfromuser1@gmail.com',  // ใส่อีเมลของคุณ
      pass: 'mhdu dkjy nswk vowm'    // ใส่รหัสผ่านอีเมลของคุณ
    },
  });
  const detailsValue = details ? details : ' - ';
  // กำหนดข้อมูลของอีเมล
  const mailOptions = {
    from: `"ส่งคำขอนัดหมายสาธิตการใช้งานระบบ ERP" <${email}>`, // อีเมลผู้ส่ง
    to: 'ss_bkk@softsquaregroup.com',     // อีเมลผู้รับ
    subject: `จากคุณ ${firstname} ${lastname} เรื่อง ขอนัดสาธิตการใช้งานระบบ ERP`,
    html: `
    <h2>จากคุณ ${firstname} ${lastname}</h2>
<p>เรื่อง: <strong>ขอนัดสาธิตการใช้งานระบบ ERP</strong></p>
<p><strong>ชื่อองค์กร:</strong> ${company}</p>
<p><strong>จำนวนผู้ใช้งานในองค์กร:</strong> ${employees}</p>
<p><strong>รายละเอียดเพิ่มเติม:</strong> ${detailsValue}</p>
<hr>
<h3>--- ช่องทางติดต่อกลับ ---</h3>
<p><strong>อีเมล์:</strong> ${email}</p>
<p><strong>เบอร์โทรศัพท์:</strong> ${phone}</p>
<hr>
<p style="color: gray; font-size: 0.9em;">This is an auto-generated email by erpgfromuser1@gmail.com</p>
    `,
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
