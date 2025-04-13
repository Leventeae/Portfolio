// src/App.tsx
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";

function About() {
    return <div><h1>About Page</h1></div>;
}

function NotFound() {
    return <div><h1>404 - Page Not Found</h1></div>;
}

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Navbar />
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;