const RegistrationModel = require("../model/registration.db");
const httpStatusCode = require("../util/httpStatusCode");
const bcrypt = require("bcrypt");
class AuthController {
  async registration(req, res) {
    try {
      const { name, email, phone, password, role } = req.body;
      if (!name || !email || !password || !phone) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

      if (!passwordRegex.test(password)) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message:
            "Password must contain at least one letter and one number and be at least 6 characters long",
        });
      }
      const existUser = await RegistrationModel.findOne({ email });
      if (existUser) {
        return res.status(httpStatusCode.BAD_REQUEST).json({
          success: false,
          message: "user already exist",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const userData = new RegistrationModel({
        name,
        email,
        phone,
        password: hashPassword,
        role,
      });
      const result = await userData.save();
      if (result) {
        return res.status(httpStatusCode.CREATED).json({
          success: true,
          message: "User Added successfully",
          data: result,
        });
      }
    } catch (error) {
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new AuthController();
