/**
 * @title Play
 * @description Play file(s), ringtones, speech or silence.
 */
export type Play = {
    /**
     * @property play
     * @description Defines the play structure
     */
    play: {
        /**
         * @property  auto_answer
         */
        auto_answer?: boolean;
        /**
         * @property  url
         * @description Optional. URL or array of URLs to play.
         * Allowed URLs are:
         * http:// or https:// - audio file to GET
         * ring:[duration:]<country code> - ring tone to play. For example: ring:us to play single ring or ring:20.0:us to play ring for 20 seconds.
         * say:<text to speak> - Sentence to say
         * silence: <duration> - seconds of silence to play
         */
        url?: string;
        /**
         * @property urls
         * @description Optional. URL or array of URLs to play.
         * Allowed URLs are:
         * http:// or https:// - audio file to GET
         * ring:[duration:]<country code> - ring tone to play. For example: ring:us to play single ring or ring:20.0:us to play ring for 20 seconds.
         * say:<text to speak> - Sentence to say
         * silence: <duration> - seconds of silence to play
         */
        urls?: string[];
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
         * @description Optional. Gender to use for the text to speech.
         */
        say_gender?: string;
    };
};
