/**
 * @title AIPrompt
 * @description The Prompt object that is used to configure the AI agent.
 */
export type AIPrompt = {
    /**
     * @property  text
     * @description The instructions to send to the AI agent.
     */
    text?: string;
    /**
     * @property  temperature
     * @description Randomness setting. Float value between 0.0 and 1.5.
     * Closer to 0 will make the output less random.
     * Default is 1.0.
     */
    temperature?: number;
    /**
     * @property  top_p
     * @description Randomness setting. Alternative to `temperature`.
     * Float value between 0.0 and 1.0.
     * Closer to 0 will make the output less random. Default is 1.0.
     */
    top_p?: number;
    /**
     * @property  confidence
     * @description Threshold to fire a speech-detect event at the end of the utterance.
     * Float value between 0.0 and 1.0.
     * Decreasing this value will reduce the pause after the user speaks, but may introduce false positives.
     * Default is 0.6.
     */
    confidence?: number;
    /**
     * @property  presence_penalty
     * @description Aversion to staying on topic. Float value between -2.0 and 2.0. Positive values increase the model's likelihood to talk about new topics. Default is 0.0.
     */
    presence_penalty?: number;
    /**
     * @property  frequency_penalty
     * @description Aversion to repeating lines.
     * Float value between -2.0 and 2.0.
     * Positive values decrease the model's likelihood to repeat the same line verbatim.
     * Default is 0.0.
     */
    frequency_penalty?: number;
};