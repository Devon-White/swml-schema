/**
 * @title Transfer
 * @description Transfer the execution of the script to a new URL.
 */
export type Transfer = {
    /**
     * @property transfer
     * @description Defines the transfer structure
     */
    transfer: {
        /**
         * @property  dest
         * @description Specifies where to transfer the call. The value can be one of:
         * "<label>" - section in the current document to transfer to.
         * "https://<URL>" - URL pointing to the document to transfer to. Sends HTTP POST.
         * "relay:<relay application>" - relay application to notify (currently not implemented)
         **/
        dest: string;
        /**
         * @property  params
         * @description Named parameters to send to a section, URL, or application. Optional. Default is not set.
         */
        params?: { [key: string]: any };
        /**
         * @property  meta
         * @description User data, ignored by SignalWire. Optional. Default is not set.
         */
        meta?: { [key: string]: any };
    };
};