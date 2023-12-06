import React from 'react';
import {LANGUAGES} from "../constants/languages.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLanguage} from "../redux/actions.ts";
import {IAppState} from "../types/IAppState.ts";
import {useTranslation} from "react-i18next";

const LanguageSelector: React.FC = () => {

    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state: IAppState) => state.language);

    const {i18n} = useTranslation();

    const changeLanguage = (newLanguage: string) => {
        dispatch(setLanguage(newLanguage))
        i18n.changeLanguage(newLanguage).then(() => console.log("Language changes is successful"));
    };

    return (
        <div className="flex items-center space-x-4">
            {LANGUAGES.map((language) => (
                <button
                    key={language.code}
                    className={`text-sm font-medium ${
                        language.code === selectedLanguage ? 'text-blue-50' : 'text-gray-500 hover:text-white'
                    }`}
                    onClick={() => changeLanguage(language.code)}
                >
                    {language.name}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
