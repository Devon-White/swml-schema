type ConnectDevice = {
    to: string;
    from?: string;
    headers?: object[];
    codecs?: string;
    webrtc_media?: boolean;
    timeout?: number;
    session_timeout?: number;
    fsvars?: object;
    call_state_url?: string;
    call_state_events?: string[];
    confirm?: object;
    confirm_timeout?: number;
    username?: string;
    password?: string;
    encryption?: 'mandatory' | 'optional' | 'forbidden';
}

/**
 * @title Connect
 * @description Dial a SIP URI or phone number.
 */
export type Connect = {
    /**
     * @property connect
     * @description Defines the connect structure
     */
    connect: {
        /**
         * @property  from
         * @description Optional. The caller ID to use when dialing the number.
         */
        from?: string;
        /**
         * @property  headers
         * @description Optional. Custom SIP headers to add to INVITE.
         * It Has no effect on calls to phone numbers.
         */
        headers?: { [key: string]: any };
        /**
         * @property  codecs
         * @description Optional. Comma-separated string of codecs to offer.
         * It has no effect on calls to phone numbers.
         * Based on SignalWire settings.
         */
        codecs?: string;
        /**
         * @property  webrtc_media
         * @description Optional. If true, WebRTC media is offered to the SIP endpoint.
         * It has no effect on calls to phone numbers.
         * Default is false.
         */
        webrtc_media?: boolean;
        /**
         * @property  session_timeout
         * @description Optional. Time, in seconds, to set the SIP `Session-Expires` header in INVITE.
         * Must be a positive, non-zero number.
         * It has no effect on calls to phone numbers.
         * Based on SignalWire settings.
         */
        session_timeout?: number;
        /**
         * @property  ringback
         * @description Optional. Array of URIs to play as ringback tone.
         */
        ringback?: string[];
        /**
         * @property  timeout
         * @description Optional. Time, in seconds, to wait for the call to be answered.
         * Default is 60 seconds.
         */
        timeout?: number;
        /**
         * @property  max_duration
         * @description Optional. Maximum duration, in seconds, allowed for the call.
         * Default is 14400 seconds.
         */
        max_duration?: number;
        /**
         * @property  answer_on_bridge
         * @description Optional. Delay answer until the B-leg answers.
         * Default is false.
         */
        answer_on_bridge?: boolean;
        /**
         * @property  call_state_url
         * @description Optional. Webhook url to send call state change notifications to for all legs.
         * It can be overwritten on each destination.
         */
        call_state_url?: string;
        /**
         * @property  call_state_events
         * @description Optional. An array of call state event names to be notified about.
         * Allowed event names are `created`, `ringing`, `answered`, and `ended`.
         * It can be overwritten on each destination.
         */
        call_state_events?: string[];
        fsvars?: { [key: string]: any };
        serial_parallel?: ConnectDevice[][];
        serial?: ConnectDevice[];
        parallel?: ConnectDevice[];
        to?: string;
        confirm?: { [key: string]: any };
        confirm_timeout?: number;
        username?: string;
        password?: string;
        encryption?: "mandatory" | "optional" | "forbidden"
    };
};