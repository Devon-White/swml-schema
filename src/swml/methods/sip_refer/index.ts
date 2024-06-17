/**
 * @title SipRefer
 * @description Send SIP REFER to a SIP call.
 */
export type SIPRefer = {
    /**
     * @property sip_refer
     * @description Defines the sip_refer structure
     */
    sip_refer: {
        /**
         * @property  to_uri
         * @description The SIP URI to send the REFER to.
         */
        to_uri?: string;
        /**
         * @property  to
         * @description Optional. The target destination for the SIP REFER.
         */
        to?: string;
    };
};