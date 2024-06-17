import { SWMLMethod } from "../../methods";

/**
 * @title Cond
 * @description Execute a sequence of instructions depending on the value of a JavaScript condition.
 */
export type Cond = {
    /**
     * @property cond
     * @description Defines the cond structure
     */
    cond: {
        /**
         * @property  when
         * @description The condition to be evaluated and act on.
         */
        when: string;
        /**
         * @property  then
         * @description The list of SWML instructions to be executed if the condition is true
         */
        then: SWMLMethod[];
        /**
         * @property  else
         * @description The list of SWML instructions to be executed if the condition is false
         */
        else?: SWMLMethod[];
    };
};