import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Database, LayoutGrid, Server } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Server size={40} className="text-laravel" />, title: t('services.laravel.title'), description: t('services.laravel.description') },
    { icon: <Code size={40} className="text-laravel" />, title: t('services.api.title'), description: t('services.api.description') },
    { icon: <Database size={40} className="text-laravel" />, title: t('services.db.title'), description: t('services.db.description') },
    { icon: <LayoutGrid size={40} className="text-laravel" />, title: t('services.architecture.title'), description: t('services.architecture.description') },
  ];

  return (
    <section id="services" className="py-5">
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="row g-4">
          {services.map((service, i) => (
            <div key={i} className="col-sm-6 col-lg-3">
              <div
                className="glass rounded-4 p-4 text-center card-hover d-flex flex-column align-items-center animate-fade-in h-100"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="rounded-circle bg-laravel-soft d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 72, height: 72 }}>
                  {service.icon}
                </div>
                <h3 className="fw-semibold fs-5 mb-2">{service.title}</h3>
                <p className="text-secondary mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
