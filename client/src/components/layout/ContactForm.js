import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    
    if (name === '' || email === '' || message === '') {
      toast.error('Please fill in all required fields');
      return;
    }

    // Here would be the API call to send the message
    // For now we'll just show a success toast
    toast.success('Your message has been sent! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="form-container contact-form-container">
      <h2>Send us a message</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
            placeholder="Message subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            placeholder="Your message"
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 