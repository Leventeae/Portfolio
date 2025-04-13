// src/App.tsx
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
    return <div><h1>Home Page</h1></div>;
}

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
                    <a href="/">Home</a> | <a href="/about">About</a>
                </nav>
                <Routes>
                    <Route path="/Portfolio" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;