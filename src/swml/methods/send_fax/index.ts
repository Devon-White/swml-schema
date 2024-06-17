/**
 * @title SendFax
 * @description Send a fax.
 */
export type SendFax = {
    /**
     * @property send_fax
     * @description Defines the send_fax structure
     */
    send_fax: {
        /**
         * @property  document
         * @description URL to the PDF document to fax.
         */
        document: string;
        /**
         * @property  header_info
         * @description Optional. Header text to include on the fax.
         */
        header_info?: string;
        /**
         * @property  identity
         * @description Optional. Station identity to report. Default is the calling party's caller ID number.
         */
        identity?: string;
    };
};