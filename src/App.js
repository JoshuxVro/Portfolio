import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme, offWhiteTheme } from './utils/Themes.js'; // Import the new theme
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [theme, setTheme] = useState(offWhiteTheme); // Set the initial theme to offWhiteTheme
  const [darkMode, setDarkMode] = useState(false); // Adjust darkMode accordingly
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Example function to toggle between themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? lightTheme : offWhiteTheme); // Toggle between light and offWhite themes
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} /> {/* Pass toggle function to Navbar if needed */}
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && 
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
