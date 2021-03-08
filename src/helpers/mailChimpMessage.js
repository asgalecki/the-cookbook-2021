/* eslint-disable no-unused-vars */
const mailChimpMessage = (status) => {
  let message;
  if (status === 'error') {
    return message = 'Your request has failed. Please try again.';
  } else if (status === 'sending') {
    return message = 'sending...';
  } else {
    return message = 'You have been successfully subscribed!';
  }
}

export default mailChimpMessage;