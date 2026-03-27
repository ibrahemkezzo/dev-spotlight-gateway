import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Code, Database, ShoppingCart, Layers } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: <Layers size={16} className="me-1" /> },
    { id: 'web', label: 'Web Apps', icon: <Code size={16} className="me-1" /> },
    { id: 'api', label: 'APIs', icon: <Database size={16} className="me-1" /> },
    { id: 'ecommerce', label: 'E-Commerce', icon: <ShoppingCart size={16} className="me-1" /> },
  ];

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'ecommerce', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=2670&q=80', technologies: ['Laravel', 'MySQL', 'Redis', 'API'], link: '#' },
    { id: 2, title: 'Hotel Booking System', category: 'web', image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=2574&q=80', technologies: ['Laravel', 'PostgreSQL', 'TDD'], link: '#' },
    { id: 3, title: 'RESTful API Service', category: 'api', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2574&q=80', technologies: ['Laravel', 'API', 'OAuth', 'Docker'], link: '#' },
    { id: 4, title: 'Inventory Management', category: 'web', image: 'https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?auto=format&fit=crop&w=2670&q=80', technologies: ['Laravel', 'Livewire', 'MySQL'], link: '#' },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-5" style={{ background: 'var(--bs-tertiary-bg, #f0f2f5)' }}>
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle mx-auto">{t('portfolio.subtitle')}</p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`btn btn-sm rounded-pill d-inline-flex align-items-center px-3 py-2 fw-medium ${
                activeFilter === filter.id
                  ? 'btn-laravel'
                  : 'btn-outline-secondary'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project, i) => (
            <div key={project.id} className="col-md-6">
              <div
                className="portfolio-item animate-fade-in"
                style={{ height: 400, animationDelay: `${i * 100}ms` }}
              >
                <img src={project.image} alt={project.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                <div className="portfolio-overlay">
                  <div>
                    <h3 className="fw-bold text-white fs-5 mb-2">{project.title}</h3>
                    <p className="text-white small mb-3">{t('portfolio.technologies')} {project.technologies.join(', ')}</p>
                    <a href={project.link} className="btn btn-laravel btn-sm d-inline-flex align-items-center rounded-pill">
                      {t('portfolio.viewproject')}
                      <ArrowUpRight size={16} className="ms-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
