import "./App.css";
import "./styles/animations.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Companies from "./components/sections/Companies";
import ScrollToTop from "./components/common/ScrollToTop";
import PageLoader from "./components/common/PageLoader";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <Header />

      <main className="main-content">
        <About />
        <ScrollToTop />
      </main>

      <Companies />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
