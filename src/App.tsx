import { ThemeProvider } from "./context/theme-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppFloat from "./components/whatsapp-float";
import Home from "./pages/home";
import FoodDetail from "./pages/food-detail";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-primary transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:slug" element={<FoodDetail />} />
          </Routes>
          <WhatsAppFloat />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
