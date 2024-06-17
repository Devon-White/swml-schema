import { AIPronounce} from "./ai_pronounce";
import { AILanguage } from "./ai_language";
import { AIParams } from "./ai_params";
import { AIPrompt} from "./ai_prompt";
import { SWAIG } from "./swaig";

/**
 * @title AI
 * @description Create an AI agent with a prompt.
 */
export type AI = {
    /**
     * @property ai  Defines the AI structure
     * @description This type defines the AI structure with 'prompt', 'post_prompt', 'post_prompt_url', 'post_prompt_auth_user', 'post_prompt_auth_password', 'params', 'SWAIG', 'hints', 'languages', and 'pronounce' parts.
     */
    ai: {
        /**
         * @property  agent
         * @description The id of the AI agent to use. This is a **required** parameter
         */
        agent?: string;
        /**
         * @property  engine
         * @description The engine to use for the AI agent. This is an **optional** parameter
         */
        engine?: string;
        /**
         * @property voice
         * @deprecated
         * @description DEPRECATED use the `languages` parameter instead. The voice to use for the AI agent. This is an **optional** parameter.
         **/
        voice?: string;
        /**
         * @property  prompt
         * @description Establishes the initial set of instructions and settings to configure the agent. This is a **required** parameter
         */
        prompt?: AIPrompt;
        /**
         * @property  post_prompt
         * @description Establishes the follow-up set of instructions and settings to configure the agent. This is an **optional** parameter
         */
        post_prompt?: AIPrompt;
        /**
         * @property  post_prompt_url
         * @description The URL to send the post-prompt to. This is an **optional** parameter
         */
        post_prompt_url?: string;
        /**
         * @property  post_prompt_auth_user
         * @description The username for the post-prompt URL. This is an **optional** parameter
         */
        post_prompt_auth_user?: string;
        /**
         * @property  post_prompt_auth_password
         * @description The password for the post-prompt URL. This is an **optional** parameter
         */
        post_prompt_auth_password?: string;
        /**
         * @property  params
         * @description The parameters to configure the AI agent. This is an **optional** parameter
         */
        params?: AIParams;
        /**
         * @property SWAIG
         * @description The SignalWire AI Gateway (SWAIG) configuration. This is an **optional** parameter
         **/
        SWAIG?: SWAIG;
        /**
         * @property  hints
         * @description Words or phrases to help the AI agent understand the context of the conversation. This is an **optional** parameter
         */
        hints?: string[];
        /**
         * @property  languages
         * @description The languages the AI agent can understand and speak. This is an **optional** parameter
         */
        languages?: AILanguage[];
        /**
         * @property  pronounce
         * @description Words or phrases to help the AI agent pronounce correctly. This is an **optional** parameter
         */
        pronounce?: AIPronounce[];
        /**
         * @property  global_data
         * @description Optional. A powerful and flexible environmental variable which can accept arbitrary data that is set initially in the SWML script or from the SWML set_global_data action.
         * This data can be referenced globally. All contained information can be accessed and expanded within the prompt - for example, by using a template string. The global_data object is a dictionary of key-value pairs.
         */
        global_data?: { [key: string]: any };
    };
};
