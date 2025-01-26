import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
// import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [user_name, setName] = useState<string>('');
  const [user_email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [user_nameError, setNameError] = useState<boolean>(false);
  const [user_emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(user_name === '');
    setEmailError(user_email === '');
    setMessageError(message === '');

    if (user_name !== '' && user_email !== '' && message !== '') {
      var templateParams = {
        user_name: user_name,
        user_email: user_email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_nkfr5tq', 'template_0i2dg7md', templateParams, 'EMzbe1V59LIwCCCR0').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    } 
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Name"
                placeholder="What's your name?"
                value={user_name}
                onChange={(e) => {setName(e.target.value);}}
                error={user_nameError}
                helperText={user_nameError ? "Please enter your name" : ""}
                sx={{
                  textarea: {
                    color: 'black', // Pastikan teks terlihat
                  },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white', // Pastikan background sesuai
                  },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={user_email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={user_emailError}
                helperText={user_emailError ? "Please enter your email or phone number" : ""}
                sx={{
                  textarea: {
                    color: 'black', // Pastikan teks terlihat
                  },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white', // Pastikan background sesuai
                  },
                }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={{
                textarea: {
                  color: 'black', // Pastikan teks terlihat
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white', // Pastikan background sesuai
                },
              }}
            />
            <div className="button-container">
              <button className="contact-button" onClick={sendEmail}>
                SEND
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;