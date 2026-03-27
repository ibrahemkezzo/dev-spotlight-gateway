import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Code, Database, GitBranch } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center" style={{ paddingTop: '5rem' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 animate-fade-in">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-laravel-soft mb-4" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--laravel)' }}>
              <span className="position-relative d-inline-flex" style={{ width: 8, height: 8 }}>
                <span className="animate-ping position-absolute w-100 h-100 rounded-circle" style={{ background: 'var(--laravel)', opacity: 0.75 }}></span>
                <span className="position-relative d-inline-flex rounded-circle w-100 h-100" style={{ background: 'var(--laravel)' }}></span>
              </span>
              <span>Laravel Expert</span>
            </div>

            <h2 className="fw-bold mb-1" style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}>
              IBRAHEM KEZZO
            </h2>
            <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              {t('hero.title')}
              <span className="text-laravel">.</span>
            </h1>

            <p className="lead text-secondary mb-4" style={{ maxWidth: '32rem' }}>
              {t('hero.subtitle')}
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-laravel d-inline-flex align-items-center">
                {t('hero.cta')}
                <ArrowRight className="ms-2" size={16} />
              </a>
              <a href="#portfolio" className="btn btn-outline-dark-custom">
                {t('hero.secondary')}
              </a>
            </div>
          </div>

          <div className="col-lg-6 animate-fade-in-right">
            <div className="position-relative mx-auto" style={{ maxWidth: '28rem', aspectRatio: '1' }}>
              {/* Glow */}
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" style={{
                background: 'linear-gradient(135deg, rgba(var(--laravel-rgb), 0.2), rgba(100, 100, 255, 0.05))',
                filter: 'blur(60px)',
                opacity: 0.5,
              }}></div>

              {/* Profile Image */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="rounded-circle overflow-hidden shadow-lg" style={{
                  width: 320, height: 320,
                  border: '4px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.1)',
                }}>
                  <img
                    src="/lovable-uploads/fdfdb052-714e-4179-9c14-376a7b6efdf4.png"
                    alt="Ibrahem Kezzo - Laravel Developer"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="position-absolute glass rounded-4 p-3 shadow animate-logo-float"
                style={{ bottom: '5%', left: '5%' }}>
                <GitBranch size={40} className="text-laravel" />
              </div>

              <div className="position-absolute glass rounded-4 p-3 shadow animate-logo-float"
                style={{ top: '10%', right: '10%', animationDelay: '0.5s' }}>
                <Code size={40} style={{ color: 'var(--bs-body-color)' }} />
              </div>

              <div className="position-absolute glass rounded-4 p-3 shadow animate-logo-float"
                style={{ bottom: '25%', left: '-5%', animationDelay: '1s' }}>
                <Database size={40} className="text-laravel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
