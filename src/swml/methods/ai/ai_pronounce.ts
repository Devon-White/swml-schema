/**
 * @title AIPronounce
 * @description Use this object to clarify AI's pronunciation of certain words or expressions.
 */
export type AIPronounce = {
    /**
     * @property  replace
     * @description The word or phrase to replace.
     */
    replace: string;
    /**
     * @property  with
     * @description The word or phrase to replace with.
     */
    with: string;
    /**
     * @property  ignore_case
     * @description Optional. If true, the AI agent will ignore the case when replacing the word or phrase. Default is false.
     */
    ignore_case?: boolean;
};