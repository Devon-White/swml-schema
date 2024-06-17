/**
 * @title SendSMS
 * @description Send an SMS message.
 */
export type SendSMS = {
    /**
     * @property send_sms
     * @description Defines the send_sms structure
     */
    send_sms: {
        /**
         * @property  to_number
         * @description The phone number to send the SMS to.
         */
        to_number: string;
        /**
         * @property  from_number
         * @description Optional. The phone number to send the SMS from. Default is the calling party's caller ID number.
         */
        from_number: string;
        /**
         * @property  body
         * @description The body of the SMS message.
         */
        body?: string;
        /**
         * @property  media
         * @description Optional. Array of media URLs to include in the message.
         */
        media?: string[];
        /**
         * @property  region
         * @description Optional. The region to use for the SMS. Default is "us".
         * Default is picked based on account preferences or device location.
         */
        region?: string;
        /**
         * @property  tags
         * @description Optional. Array of tags to associate with the message to facilitate log searches.
         */
        tags?: string[];
    };
};