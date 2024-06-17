/**
 * @title AIParams
 * @description Parameters for AI that can be passed in `ai.params` at the top level of the `ai` Method.
 */
export type AIParams = {
    /**
     * @property  direction
     * @description The direction of the AI agent. Can be "inbound" or "outbound".
     */
    direction?: "inbound" | "outbound";
    /**
     * @property  wait_for_user
     * @description Optional. If true, the AI agent will wait for the user to speak before responding. Default is false.
     */
    wait_for_user?: boolean;
    /**
     * @property  end_of_speech_timeout
     * @description Optional. The time in milliseconds to wait for the user to stop speaking. Default is 2000 milliseconds.
     * Valid range is 250 to 10000 milliseconds.
     */
    end_of_speech_timeout?: number;
    /**
     * @property attention_timeout
     * @description Optional. Amount of time, in ms, to wait before prompting the user to respond.
     * Default is 10000 milliseconds.
     * Valid range is 10000 to 600000 milliseconds.
     * Set to 0 to disable.
     **/
    attention_timeout?: number;
    /**
     * @property  inactivity_timeout
     * @description Optional. Amount of time, in ms, to wait before exiting the app due to inactivity.
     * Default is 600000 milliseconds.
     * Valid range is 10000 to 3600000 milliseconds.
     */
    inactivity_timeout?: number;
    /**
     * @property  background_file
     * @description Optional. URL of audio file to play in the background while AI plays in the foreground.
     */
    background_file?: string;
    /**
     * @property  background_file_loops
     * @description Optional. Maximum number of times to loop playing the background file.
     * Default is undefined. (Loop indefinitely)
     */
    background_file_loops?: number;
    /**
     * @property  background_file_volume
     * @description Optional. Volume level for the background file.
     * Default is 0.
     * Valid range is -40 to 40.
     */
    background_file_volume?: number;
    /**
     * @property  ai_volume
     * @description Optional. Volume level for the AI agent.
     * Default is 0.
     * Valid range is -50 to 50.
     */
    ai_volume?: number;
    /**
     * @property  local_tz
     * @description Optional. Timezone to use for the AI agent. Values are IANA time zone ID's.
     * Default is "GMT".
     */
    local_tz?: string;
    /**
     * @property  conscience
     * @description Optional. Send a summary of the conversation after the call ends.
     * This requires a `post_url` to be set in the ai parameters and the `conversation_id` defined below.
     * This eliminates the need for a `post_prompt` in the ai parameters.
     * Default is false.
     */
    conscience?: boolean;
    /**
     * @property  save_conversation
     * @description Optional. Save the conversation.
     * Default is false.
     */
    save_conversation?: boolean;
    /**
     * @property  conversation_id
     * @description Optional. Unique identifier for this conversation to be used to retain info from call to call.
     */
    conversation_id?: string;
    /**
     * @property digit_timeout
     * @description Optional. Time, in ms, at the end of digit input to detect the end of input.
     * Default is 3000 milliseconds.
     * Valid range is 250 to 10000 milliseconds.
     */
    digit_timeout?: number;
    /**
     * @property digit_terminators
     * @description Optional. DTMF digit, as a string, to signal the end of input (ex: "#").
     */
    digit_terminators?: string;
    /**
     * @property energy_level
     * @description Optional. Amount of energy necessary for bot to hear you (in dB).
     * Default is 52.
     * The Valid range is 0.0 to -100.0.
     */
    energy_level?: number;
    /**
     * @property  swaig_allow_swml
     * @description Optional. Allow SWAIG functions to return SWML to be executed by the call?
     * Default is true.
     */
    swaig_allow_swml?: boolean;
};