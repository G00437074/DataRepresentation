// Import the components used in the app
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap navigation components
import { Nav, Navbar, Container } from 'react-bootstrap'

// Import React Router components for page navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Main App component
function App() {
  return (
    <div>
      {/* BrowserRouter allows us to use different routes/pages */}
      <BrowserRouter>

        {/* Create the navigation bar */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>

            {/* Name/logo shown in the navigation bar */}
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>

            {/* Navigation links */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Container>
        </Navbar>

        {/* Define which component should appear for each URL */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Content />} />

          {/* Read page */}
          <Route path="/read" element={<Header />} />

          {/* Create page */}
          <Route path="/create" element={<Content />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

// Export the App component so it can be used in other files
export default App
