module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c176dc57e144f7a6a24178b76433f46'),
  },
});
