/**
 * @title RecordCall
 * @description Record the call audio in the background.
 */
export type RecordCall = {
    /**
     * @property record_call
     * @description Defines the record_call structure
     */
    record_call: {
        /**
         * @property control_id
         * @description Optional. Identifier for this recording, to use with `stop_call_record`.
         */
        control_id?: string;
        /**
         * @property stereo
         * @description Optional. If true, record in stereo. Default is false.
         */
        stereo?: boolean;
        /**
         * @property format
         * @description Optional. The format to record in. It can be "wav" or "mp3". Default is "wav".
         */
        format?: "wav" | "mp3";
        /**
         * @property direction
         * @description Optional. Direction of the audio to record: "speak" for what party says, "listen" for what party hears, "both" for what the party hears and says.
         * Default is "both".
         */
        direction?: "speak" | "listen" | "both";
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
         * @description Optional. Time in seconds to wait for the start of speech. Default is 0.0 seconds.
         */
        initial_timeout?: number;
        /**
         * @property end_silence_timeout
         * @description Optional. Time in seconds to wait in silence before ending the recording.
         * Default is 0.0 seconds.
         */
        end_silence_timeout?: number;
        /**
         * @property max_length
         * @description Optional. Maximum length of the recording in seconds.
         */
        max_length?: number;
    };
};
