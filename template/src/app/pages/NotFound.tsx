import React from 'react';
import {useTranslation} from "react-i18next";

const NotFound: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">{t('notFoundTitle')}</h1>
                <p className="text-gray-600 mt-2">{t('notFoundDescription')}</p>
                {/* You can add more content or styling as needed */}
            </div>
        </div>
    );
};

export default NotFound;
