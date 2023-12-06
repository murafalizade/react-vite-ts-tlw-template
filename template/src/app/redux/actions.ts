export const SET_LANGUAGE:string = 'SET_LANGUAGE';

export const setLanguage = (language: string) => ({
    type: SET_LANGUAGE,
    payload: language,
});
