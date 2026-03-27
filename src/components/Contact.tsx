import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-5">
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 animate-fade-in">
            {showSuccess && (
              <div className="alert alert-success mb-4">{t('contact.success')}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-medium">{t('contact.name')}</label>
                <input type="text" className="form-control form-control-lg" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium">{t('contact.email')}</label>
                <input type="email" className="form-control form-control-lg" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-medium">{t('contact.message')}</label>
                <textarea className="form-control form-control-lg" id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-laravel w-100 py-3 d-flex justify-content-center align-items-center" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-sm me-2" role="status"></span>
                    Processing...
                  </>
                ) : t('contact.send')}
              </button>
            </form>
          </div>

          <div className="col-lg-6 animate-fade-in-right">
            <div className="glass rounded-4 p-4 p-md-5 h-100">
              <h3 className="fw-bold fs-4 mb-4">Connect With Me</h3>
              <p className="text-secondary mb-4">
                I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-5">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline-secondary rounded-pill d-inline-flex align-items-center gap-2 px-3">
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <h4 className="fw-semibold fs-5 mb-3">Working Hours</h4>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span>Monday - Friday:</span><span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="d-flex justify-content-between py-2 border-bottom">
                  <span>Saturday:</span><span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="d-flex justify-content-between py-2">
                  <span>Sunday:</span><span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
