import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Symptoms from "./pages/symptoms";
import Countries from "./pages/countries";
import Home from "./pages/home";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="">
      <Navbar />
      <div>
        <Sidebar />
        <main className="sm:ml-[200px] bg-white sm:pt-12 sm:px-10">
          <div className="w-full">
          <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/countries" element={ <Countries/> } />
          <Route path="/symptoms" element={ <Symptoms/> } />

            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
