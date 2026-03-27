import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-dark py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-4">
            <div className="fw-bold fs-4 mb-3">
              <span className="text-laravel">&lt;</span>Dev<span className="text-laravel">/&gt;</span>
            </div>
            <p className="small" style={{ color: 'rgba(226, 232, 240, 0.8)', maxWidth: '20rem' }}>
              Laravel backend developer specialized in creating robust, scalable web applications and RESTful APIs.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="fs-5 fw-semibold mb-3">Quick Links</h3>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {['home', 'about', 'services', 'portfolio', 'contact'].map(key => (
                <li key={key}><a href={`#${key}`}>{t(`nav.${key}`)}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <h3 className="fs-5 fw-semibold mb-3">Contact</h3>
            <address className="small" style={{ color: 'rgba(226, 232, 240, 0.8)', fontStyle: 'normal' }}>
              <p className="mb-1">123 Developer Street</p>
              <p className="mb-1">Coding City, 12345</p>
              <p className="mb-1">contact@example.com</p>
              <p className="mb-0">+1 (123) 456-7890</p>
            </address>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(226, 232, 240, 0.1)' }} className="mt-5 mb-4" />
        <p className="text-center small mb-0" style={{ color: 'rgba(226, 232, 240, 0.6)' }}>
          &copy; {currentYear} Laravel Developer. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
