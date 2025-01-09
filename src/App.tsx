import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Research from './pages/Research';
import Products from './pages/Products/Products';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Chatbot from './components/Chatbot';
import Company from './pages/Company';
import Downloads from './pages/community/Downloads';
import Support from './pages/community/Support';
import News from './pages/community/News';
import GetStarted from './pages/GetStarted';
import DiscoverMore from './pages/DiscoverMore';
import AITools from './pages/AITools';
import Forums from './pages/community/Forums';
import RemoteLearning from './pages/RemoteLearning';
import GenomeSequencing from './pages/GenomeSequencing';
import AIGenetics from './pages/AIGenetics';
import IntroductionToGenetics from './pages/courses/IntroductionToGenetics';
import MolecularBiology from './pages/courses/MolecularBiology';
import GeneticEngineering from './pages/courses/GeneticEngineering';
import Cart from './components/Cart';
import CompanyLayout from "./pages/company/CompanyLayout";
import CompanyHome from "./pages/company/CompanyHome";
import CompanyProducts from "./pages/company/CompanyProducts";
import CompanyServices from "./pages/company/CompanyServices";
import CompanyTracker from "./pages/company/CompanyTracker";
import CompanyDevelopment from "./pages/company/CompanyDevelopment";
import CompanyCommunity from "./pages/company/CompanyCommunity";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/research" element={<Research />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/company/*" element={<Company />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/support" element={<Support />} />
            <Route path="/news" element={<News />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/ai-genetics" element={<AIGenetics />} />
            <Route path="/discover-more" element={<DiscoverMore />} />
            <Route path="/remote-learning" element={<RemoteLearning />} />
            <Route path="/genome-sequencing" element={<GenomeSequencing />} />
            <Route path="/courses/introduction-to-genetics" element={<IntroductionToGenetics />} />
            <Route path="/courses/molecular-biology" element={<MolecularBiology />} />
            <Route path="/courses/genetic-engineering" element={<GeneticEngineering />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/company/*" element={<CompanyLayout />}></Route>
            <Route path="home" element={<CompanyHome />} />
            <Route path="products" element={<CompanyProducts />} />
            <Route path="services" element={<CompanyServices />} />
            <Route path="tracker" element={<CompanyTracker />} />
            <Route path="development" element={<CompanyDevelopment />} />
            <Route path="community" element={<CompanyCommunity />} />
          </Routes>
        </div>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

if (import.meta.env.MODE === 'development') {
  console.warn = (message) => {
    if (!message.includes('React Router Future Flag Warning')) {
      console.warn(message);
    }
  };
}

export default App;
