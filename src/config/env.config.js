require('dotenv').config();

const env = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/hit-moments',
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  adminFullname: process.env.ADMIN_FULLNAME || 'Admin',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin',
  adminEmail: process.env.ADMIN_EMAIL || 'nguyenduyson28072003@gmail.com',
  jwtSecret: process.env.JWT_SECRET || 'SECRET_KEY',
  jwtExpire: process.env.JWT_EXPIRE || '1h',
  jwtSecretRefresh: process.env.JWT_SECRET_REFRESH || 'SECRET_KEY_REFRESH',
  jwtExpireRefresh: process.env.JWT_EXPIRE_REFRESH || '1h',
  apiUrl: process.env.API_URL || `http://localhost:${process.env.PORT || 3000}`,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  jwtVerifyEmailSecret: process.env.JWT_VERIFY_EMAIL_SECRET,
  jwtVerifyEmailExpire: process.env.JWT_VERIFY_EMAIL_EXPIRE || '1h',
  emailResendTime: (+process.env.EMAIL_RESEND_TIME || 1) * 60 * 1000,
  otpExpireTime: (+process.env.OTP_EXPIRE_TIME || 3) * 60 * 1000,
  jwtOtpSecret: process.env.JWT_OTP_SECRET || 'otp-hitmoments.com',
  jwtOtpExpire: process.env.JWT_OTP_EXPIRE || '5m',
  tiktok: {
    url: process.env.TIKTOK_URL,
    token: process.env.TIKTOK_TOKEN,
    cookie: process.env.TIKTOK_COOKIE,
    imageUrl: process.env.TIKTOK_IMAGE_URL,
  },

  // discordToken: process.env.DISCORD_TOKEN,
  // discordChannelId: process.env.DISCORD_CHANNEL_ID,
};

module.exports = env;
