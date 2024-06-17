/**
 * @title Tap
 * @description Start background call tap. Media is streamed over Websocket or RTP to customer controlled URI.
 */
export type Tap = {
    /**
     * @property tap
     * @description Defines the tap structure
     */
    tap: {
        /**
         * @property  uri
         * @description Destination of the tap media stream.
         */
        uri: string;
        /**
         * @property  control_id
         * @description Optional. Identifier for this tap to use with stop_tap.
         */
        control_id?: string;
        /**
         * @property  direction
         * @description Optional. Direction of the audio to tap: `speak` for what party says,
         * `listen` for what party hears,
         * `both` for what party hears and says.
         * Default is `both`.
         */
        direction?: string;
        /**
         * @property  codec
         * @description Optional. Codec to use for the tap media stream. Options are "PCMU" and "PCMA".
         * Default is "PCMU".
         */
        codec?: string;
        /**
         * @property  rtp_ptime
         * @description Optional. Set the packetization time of the media in milliseconds.
         * Default is 20 milliseconds.
         */
        rtp_ptime?: number;
    };
};