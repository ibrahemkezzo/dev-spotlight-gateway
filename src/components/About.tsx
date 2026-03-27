import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Code2, Database, FileCode, GitBranch, Server } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    { value: '5+', label: t('about.experience') },
    { value: '30+', label: t('about.projects') },
    { value: '15+', label: t('about.clients') },
  ];

  const skills = [
    { category: t('skills.backend'), items: ['Laravel', 'PHP', 'MVC Architecture', 'OOP'], icon: <Server size={20} className="text-laravel" /> },
    { category: t('skills.database'), items: ['MySQL', 'PostgreSQL', 'Redis', 'Database Design'], icon: <Database size={20} className="text-laravel" /> },
    { category: t('skills.api'), items: ['RESTful APIs', 'API Authentication', 'JSON'], icon: <Code2 size={20} className="text-laravel" /> },
    { category: t('skills.methodologies'), items: ['Agile', 'Scrum', 'Git Flow', 'CI/CD'], icon: <GitBranch size={20} className="text-laravel" /> },
    { category: t('skills.tools'), items: ['Git', 'GitHub', 'Docker', 'Jira'], icon: <FileCode size={20} className="text-laravel" /> },
  ];

  return (
    <section id="about" className="py-5" style={{ background: 'var(--bs-tertiary-bg, #f0f2f5)' }}>
      <div className="section-container">
        <div className="text-center mb-5">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle mx-auto">{t('about.subtitle')}</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 animate-fade-in">
            <p className="fs-5 lh-lg">{t('about.bio')}</p>

            <div className="row g-3 mt-4">
              {experiences.map((item, i) => (
                <div key={i} className="col-4">
                  <div className="glass rounded-4 p-4 text-center card-hover">
                    <h3 className="fw-bold text-laravel" style={{ fontSize: '1.75rem' }}>{item.value}</h3>
                    <p className="small mb-0 mt-1">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="fw-bold fs-4 mb-4">{t('skills.title')}</h3>
            <div className="d-flex flex-column gap-3">
              {skills.map((skill, i) => (
                <div key={i} className="glass rounded-3 p-3 card-hover">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    {skill.icon}
                    <h4 className="fw-semibold mb-0 fs-6">{skill.category}</h4>
                  </div>
                  <div className="d-flex flex-wrap gap-2 ps-4">
                    {skill.items.map((item, j) => (
                      <div key={j} className="d-flex align-items-center gap-1">
                        <CheckCircle2 size={14} className="text-laravel" />
                        <span className="small">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
