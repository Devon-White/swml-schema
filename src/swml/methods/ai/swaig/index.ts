import { WebHookDefaults } from './webhook_defaults';
import { FunctionConfig } from './function_config';

/**
 * @title SWAIG
 * @description This type defines the SignalWire AI Gateway (SWAIG) configuration.
 */
export type SWAIG = {
    /**
     * @property  defaults
     * @description Default settings for all SWAIG functions.
     * If defaults are not set, settings may be set in each function object.
     * Optional. Default is not set.
     */
    defaults?: WebHookDefaults;
    /**
     * @property  includes
     * @description An array of objects to include remote function signatures.
     * The object fields are url to specify where the remote functions are defined and functions, which is an array of the function names as strings.
     */
    includes?: { [key: string]: any }[];
    /**
     * @property  functions
     * @description An array of JSON objects to define functions that can be executed during the interaction with the AI.
     * Optional. Default is not set.
     */
    functions?: FunctionConfig[];
};
