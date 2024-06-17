/**
 * @title Return
 * @description Return from `execute` or exit script.
 */
export type Return = {
    /**
     * @property return
     * @description Defines the return structure
     */
    return: {
        /**
         * @property  key
         * @description The user-defined key to be used to store the value.
         */
        [key: string]: any;
    };
};