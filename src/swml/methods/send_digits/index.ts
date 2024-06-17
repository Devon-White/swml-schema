/**
 * @title SendDigits
 * @description Send DTMF digits.
 */
export type SendDigits = {
    /**
     * @property send_digits
     * @description Defines the send_digits structure
     */
    send_digits: {
        /**
         * @property  digits
         * @description The DTMF digits to send.
         */
        digits: string;
    };
};