/**
 * @title Set
 * @description Set script variables to the specified values.
 */
export type Set = {
    /**
     * @property set
     * @description Defines the set structure
     */
    set: {
        /**
         * @property  key
         * @description Accepts an object mapping variable names to values.
         */
        [key: string]: any;
    };
};