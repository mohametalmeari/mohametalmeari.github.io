import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../redux/navbar/navSlice';

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
        setFormData(
          {
            name: '',
            email: '',
            message: '',
          },
        );
        setErrorMsg({ msg: 'Form submitted', color: 'lightgreen' });
      } else {
        setErrorMsg({ msg: 'Form submission failed', color: 'lightpink' });
      }
    } catch (error) {
      setErrorMsg({ msg: 'Form submission failed', color: 'lightpink' });
    }
  };

  return (
    <>
      <footer id="contact" ref={ref}>
        <h2 className="footer-title">
          Contact me
        </h2>
        <p className="footer-text">
          If you have an application you are interested in developing,
          a feature that you need built or a project that needs coding.
          I’d love to help with it!
        </p>
        <form id="contact_form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span className="hidden-text">
              Your Name:
            </span>
            <input
              className="form_field"
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
            <span className="hidden-text">
              Your Email:
            </span>
            <input
              className="form_field"
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
            <span className="hidden-text">
              Your Message:
            </span>
            <textarea
              className="form_field"
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
          <div className="btn_container">
            <button className="main-btn form-btn" type="submit">Get in touch</button>
            <span className="form-msg" style={{ color: errorMsg.color }}>{errorMsg.msg}</span>
          </div>
        </form>
      </footer>
    </>
  );
};
export default Contact;
