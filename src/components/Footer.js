import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  const linkStyle = {
    textDecoration: 'none',
    color: '#6c757d', // Change this color to #6c757d
  };


  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              {/* No content inside the anchor tag */}
            </a>
            <span className="text-muted">©<i> {year}, Made by <a href="https://github.com/Shikha954" target="_blank" rel="noreferrer" style={linkStyle}>Shikha Raj</a></i></span>
            <p></p>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
