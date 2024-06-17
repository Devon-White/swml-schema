/**
 * @title Prompt
 * @description Play a prompt and wait for digit or speech input.
 * Speech detection is not enabled unless at least one speech parameter is set.
 * If only speech parameters are set (and no digit parameters), digit detection is not enabled.
 * To enable both digit and speech detection, set at least one parameter for each.
 */
export type Prompt = {
    /**
     * @property prompt
     * @description Defines the prompt structure
     */
    prompt: {
        /**
         * @property  play
         * @description URL or array of URLs to play.
         * Allowed URLs are:
         * http:// or https:// - audio file to GET
         * ring:[duration:]<country code> - ring tone to play. For example: ring:us to play single ring or ring:20.0:us to play ring for 20 seconds.
         * say:<text to speak> - Sentence to say
         * silence: <duration> - seconds of silence to play
         */
        play?: string | string[];
        /**
         * @property  volume
         * @description Optional. Volume level for the audio file.
         * Default is 0.
         * Valid range is -40 to 40.
         */
        volume?: number;
        /**
         * @property  say_voice
         * @description Optional. The voice to use for the text to speech.
         */
        say_voice?: string;
        /**
         * @property  say_language
         * @description Optional. The language to use for the text to speech.
         */
        say_language?: string;
        /**
         * @property say_gender
         * @description Optional. The gender to use for the text to speech.
         */
        say_gender?: string;
        /**
         * @property  max_digits
         * @description Optional. Number of digits to collect. Default is 1.
         */
        max_digits?: number;
        /**
         * @property terminators
         * @description Optional. Digits that terminate digit collection.
         */
        terminators?: string;
        /**
         * @property  digit_timeout
         * @description Optional. Time in seconds to wait for next digit.
         * Default is 5.0 seconds.
         */
        digit_timeout?: number;
        /**
         * @property initial_timeout
         * @description Optional. Time in seconds to wait for start of input.
         * Default is 5.0 seconds.
         */
        initial_timeout?: number;
        /**
         * @property  speech_timeout
         * @description Optional. Max time in seconds to wait for speech result.
         */
        speech_timeout?: number;
        /**
         * @property  speech_end_timeout
         * @description Optional. Time in seconds to wait for end of speech utterance.
         */
        speech_end_timeout?: number;
        /**
         * @property  speech_language
         * @description Optional. Language to detect speech in.
         */
        speech_language?: string;
        /**
         * @property  speech_hints
         * @description Optional. Words or phrases to help the speech recognition.
         */
        speech_hints?: string[];
        /**
         * @property  speech_engine
         * @description Optional. Speech recognition engine to use.
         **/
        speech_engine?: string;
    };
};
