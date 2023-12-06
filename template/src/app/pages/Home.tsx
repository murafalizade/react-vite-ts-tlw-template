import '../styles/tailwind.css';
import {useTranslation} from "react-i18next";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
                <p className="text-gray-600">{t('description')}</p>
                <a
                    className="text-blue-500 hover:underline mt-4 block"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('link')}
                </a>
            </div>
        </div>
    );
}

export default Home;
