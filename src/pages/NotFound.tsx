import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center px-4" style={{ maxWidth: '30rem' }}>
        <div className="mb-4">
          <div className="d-inline-block p-4 rounded-circle bg-laravel-soft mb-3">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="display-4 fw-bold mb-3">404</h1>
          <p className="fs-5 text-secondary mb-4">Oops! The page you're looking for doesn't exist.</p>
        </div>
        <a href="/" className="btn btn-laravel d-inline-flex align-items-center">
          <ArrowLeft size={16} className="me-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
