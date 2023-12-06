import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./app/pages/Home.tsx";
import LanguageSelector from "./app/components/LanguageSelector.tsx";
import Profile from "./app/pages/Profile.tsx";
import NotFound from "./app/pages/NotFound.tsx";
import {useTranslation} from "react-i18next";

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div>
                <nav>
                    <ul className={"flex bg-blue-500 text-white p-4"}>
                        <li className={"mx-2.5"}>
                            <Link to="/">{t('home')}</Link>
                        </li>
                        <li className={"mx-2.5"}>
                            <Link to="/profile">{t('profile')}</Link>
                        </li>
                        <li className={'ml-auto'}>
                            <LanguageSelector />
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
