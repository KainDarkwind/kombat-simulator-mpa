import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Hero from "./components/pages/Hero";
import Arena from "./components/pages/Arena";
import Combat from "./components/pages/Combat";
import NotFound from "./components/pages/NotFound";

export default function Home() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/combat" element={<Combat />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}
