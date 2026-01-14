import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Community from './pages/Community';
import CommunityDetail from './pages/CommunityDetail';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import GetInvolvedDetail from './pages/GetInvolvedDetail';
import Partners from './pages/Partners';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global Navigation - Consistent across all pages */}
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:programId" element={<ProgramDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/:communityId" element={<CommunityDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/get-involved/:optionId" element={<GetInvolvedDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        {/* Global Footer - Consistent across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
