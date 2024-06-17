/**
 * @title AILanguage
 * @description If changing the language from the default, all three parameters are required for a valid entry.
 */
export type AILanguage = {
    /**
     * @property  name
     * @description The name of the language.
     */
    name: string;
    /**
     * @property  code
     * @description The code of the language.
     */
    code: string;
    /**
     * @property  voice
     * @description Optional. The voice to use for the language.
     */
    voice?: string;
};
