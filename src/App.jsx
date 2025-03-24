import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function fetchAdmins() {
      const res = await fetch(`http://localhost:5000/designers`);
      const data = await res.json();
      setAdmins(data);
      console.log(data);
    }
    fetchAdmins();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(admins)}</pre>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="our-works" element={<OurWorks />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="our-process" element={<OurProcess />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
