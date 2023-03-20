import React from 'react'

const Footer = () => {
  let footerstyle = {
    position: "absolute",
    top: 'auto',
    width: "90%"
  }
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 " style={footerstyle}> {/* add style of footer from footerstyle obj*/ }
        <p className="col-md-4 mb-0 text-light">© 2023 Todo-List, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
        </a>

        <ul className="nav col-md-4 justify-content-end " >
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
