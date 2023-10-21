require ('dotenv').config();

const generateToken = () => {
  const xenditApiKey = process.env.XENDIT_KEY+':';
  const base64 = Buffer.from(xenditApiKey).toString('base64');
  return base64;
}

exports.xenditHeaders = {
  'Authorization' : 'Basic '+generateToken(),
  'Content-Type' : 'application/json'
}
