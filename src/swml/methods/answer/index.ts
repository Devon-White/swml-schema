/**
 * @title Answer
 * @description Answer incoming call and set an optional maximum duration.
 */
export type Answer = {
    answer: {
        /**
         * @property  max_duration
         * @description Maximum time in seconds to wait for an answer.
         * Cannot be less than 7 seconds.
         * Default is 14400 seconds.
         */
        max_duration?: number;
        /**
         * @property  fsvars
         * @description Optional. FreeSWITCH variables to set.
         */
        fsvars?: { [key: string]: any };
        /**
         * @property  codecs
         * @description Optional. Comma-separated string of codecs to offer.
         */
        codecs?: string[];
    };
};