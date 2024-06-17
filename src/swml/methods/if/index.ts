import { SWMLMethod } from "../index";

/**
 * @title If
 * @description Conditional execution of a sequence of instructions based on a condition.
 */
export type If = {
    /**
     * @property if
     * @description Defines the if structure
     */
    if: {
        /**
         * @property condition
         * @description The condition to be evaluated and act on.
         */
        condition: string;

        /**
         * @property then
         * @description The list of SWML instructions to be executed if the condition is true.
         */
        then?: SWMLMethod[];

        /**
         * @property else
         * @description The list of SWML instructions to be executed if the condition is false.
         */
        else?: SWMLMethod[];
    };
};
