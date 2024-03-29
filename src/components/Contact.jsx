import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { setActiveSection } from '../redux/navbar/navSlice';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState({ msg: '', color: 'lightgreen' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(entry.target.id));
    }
  }, [inView, ref, entry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xvonwozw', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrorMsg({ msg: 'Message sent', color: 'lightgreen' });
      } else {
        setErrorMsg({ msg: 'Failed to send message', color: 'lightpink' });
      }
    } catch (error) {
      setErrorMsg({ msg: 'Failed to send message', color: 'lightpink' });
    }
  };

  return (
    <>
      <div className="contact" id="contact" ref={ref}>
        <div className="form-container">
          <motion.h2
            className="contact-title"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact me
          </motion.h2>
          <motion.p
            className="contact-text"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it!
          </motion.p>
          <motion.form
            id="contact_form"
            onSubmit={handleSubmit}
            className="contact-text"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="name">
              <span className="hidden-text">Your Name:</span>
              <input
                className="form-field"
                type="text"
                id="name"
                name="name"
                maxLength="30"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="email">
              <span className="hidden-text">Your Email:</span>
              <input
                className="form-field"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="message">
              <span className="hidden-text">Your Message:</span>
              <textarea
                className="form-field"
                name="message"
                id="message"
                maxLength="500"
                cols="30"
                rows="10"
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <div className="btn-container">
              <button className="form-btn" type="submit">
                Get in touch
              </button>
              <span className="form-msg" style={{ color: errorMsg.color }}>
                {errorMsg.msg}
              </span>
            </div>
          </motion.form>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
