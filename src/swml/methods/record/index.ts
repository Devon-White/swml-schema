/**
 * @title Record
 * @description Record the call audio in the foreground. Use this, for example, to record voicemails.
 */
export type Record = {
    record: {
        /**
         * @property stereo
         * @description Optional. If true, record in stereo. Default is false.
         */
        stereo?: boolean;
        /**
         * @property format
         * @description Optional. The format to record in. Can be "wav" or "mp3". Default is "wav".
         */
        format?: "wav" | "mp3";
        /**
         * @property direction
         * @description Optional. Direction of the audio to record: "speak" for what party says, "listen" for what party hears.
         * Default is "speak".
         */
        direction?: "speak" | "listen";
        /**
         * @property terminators
         * @description Optional. String of digits that will stop the recording when pressed.
         */
        terminators?: string;
        /**
         * @property beep
         * @description Optional. Play a beep before recording. Default is false.
         */
        beep?: boolean;
        /**
         * @property input_sensitivity
         * @description Optional. Input sensitivity for the recording. Default is 44.0.
         */
        input_sensitivity?: number;
        /**
         * @property initial_timeout
         * @description Optional. Time in seconds to wait for the start of speech. Default is 4.0 seconds.
         */
        initial_timeout?: number;
        /**
         * @property end_silence_timeout
         * @description Optional. Time in seconds to wait in silence before ending the recording.
         * Default is 5.0 seconds.
         */
        end_silence_timeout?: number;
        /**
         * @property max_length
         * @description Optional. Maximum length of the recording in seconds.
         */
        max_length?: number;
        /**
         * @property status_url
         * @description Optional. URL to send recording status events to.
         */
        status_url?: string;
    };
};
