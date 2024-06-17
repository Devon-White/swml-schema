/**
 * @title Hangup
 * @description Hangup the call.
 */
export type Hangup = {
    hangup: {
        /**
         * @property  reason
         * @description The reason for hanging up the call.
         */
        reason?: "hangup" | "busy" | "decline";
    };
};