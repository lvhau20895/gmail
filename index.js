const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 9999;

app.use(express.json());

app.post("/get-password", async (req, res) => {
	let transporter = nodemailer.createTransport({
		// host: "smtp.gmail.com",
		// port: 465,
		// secure: true, // true for 465, false for other ports
		service: "gmail",
		auth: {
			user: "levanhau.20081995@gmail.com", // generated ethereal user
			pass: "otielanqemtyprft"
			// generated ethereal password
		}
	});

	let info = await transporter.sendMail({
		from: "'LVH' <levanhau.20081995@gmail.com>", // sender address
		to: "levanhau12321@gmail.com", // list of receivers
		subject: "Reset", // Subject line
		html: `
            <p>mật khẩu tạm thời của bạn là: abc</p>
            <a style="padding: 10px 20px; background: red; color: white;" href="http://localhost:9999/get-password">Quay lại trang chủ</a>
        ` // html body
	});

	res.status(201).json({
		message: "forward password success"
	});
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
