/**
 * @title Unset
 * @description Unset the specified variables.
 */
export type Unset = {
    /**
     * @property unset
     * @description Defines the unset structure
     */
    unset: {
        /**
         * @property  vars
         * @description Names of the variables to unset.
         */
        vars: string | string[];
    };
};
