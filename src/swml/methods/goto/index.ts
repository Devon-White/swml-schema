import { Label } from "../label";

/**
 * @title Goto
 * @description Jump to a specified label.
 */
export type Goto = {
    /**
     * @property goto
     * @description Defines the goto structure
     */
    goto: {
        /**
         * @property label
         * @description Specifies the label to jump to. Must be a valid SWML label.
         */
        label: Label;

        /**
         * @property when
         * @description Optional condition under which the jump is performed.
         */
        when?: string;

        /**
         * @property max
         * @description Optional maximum number of times to perform the jump. Must be a number between 1 and 100.
         */
        max?: number;
    };
};
