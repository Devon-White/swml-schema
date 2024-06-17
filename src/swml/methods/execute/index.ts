import { SWMLMethod } from "../../methods";

/**
 * @title Execute
 * @description Execute a section or URL as a subroutine and return back to current document.
 */
export type Execute = {
    /**
     * @property execute
     * @description Defines the execute structure
     */
    execute: {
        /**
         * @property  dest
         * @description Specifies what to execute. The value can be one of:
         * "<label>" - section in the current document to execute.
         * "https://<URL>" - URL pointing to the document to execute. Sends HTTP POST.
         */
        dest: string;
        /**
         * @property  params
         * @description Named parameters to send to section or URL
         */
        params?: { [key: string]: any };
        /**
         * @property  meta
         * @description User-defined metadata, ignored by SignalWire
         */
        meta?: { [key: string]: any };
        /**
         * @property  on_return
         * @description The list of SWML instructions to be executed when the executed section or URL returns
         */
        on_return?: SWMLMethod[];
    };
};