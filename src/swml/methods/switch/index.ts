import { SWMLMethod } from '../../methods';

/**
 * @title Switch
 * @description Execute a sequence of instructions depending on which value matches a variable.
 */
export type Switch = {
    /**
     * @property switch
     * @description Defines the switch structure
     */
    switch: {
        /**
         * @property  variable
         * @description Name of the variable whose value needs to be compared
         */
        variable: string;
        /**
         * @property  case
         * @description Object of values mapped to array of instructions to execute
         */
        case?: { [key: string]: SWMLMethod[]; };
        /**
         * @property  default
         * @description Optional array of instructions to execute if no cases match
         */
        default?: SWMLMethod[];
    };
};
