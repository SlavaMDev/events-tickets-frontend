import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/not-found";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
);

export default AppRouter;
