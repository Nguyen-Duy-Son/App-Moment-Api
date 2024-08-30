const TIMEZONE = 'Asia/Ho_Chi_Minh';

const CRON_JOB_TIME = {
  SEND_BIRTHDAY_EMAIL: '0 7 * * *',
  DELETE_EXPIRED_MOMENTS: '0 0 * * *',
  DELETE_TEMPORARY_MOMENTS: '0 0 * * *',
  // SEND_LOG_MESSAGES_TO_DISCORD: '*/5 * * * *',
  CHANGE_MOMENT_UPLOAD_LOCATION: '0 */2 * * *',
  CHANGE_AVATAR_UPLOAD_LOCATION: '0 0 * * *',
};

module.exports = {
  TIMEZONE,
  CRON_JOB_TIME,
};
