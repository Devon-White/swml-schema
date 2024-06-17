import { DataMap } from './data_map';

/**
 * @title FunctionConfig
 * @description This type defines the configuration for a SignalWire Function.
 */
export type FunctionConfig = {
    /**
     * @property  active
     * @description Whether the function is active. Optional. Default is true.
     */
    active?: boolean;
    /**
     * @property  function
     * @description The unique name of the function.
     */
    function: string;
    /**
     * @property  meta_data
     * @description A JSON object containing any metadata, as a key-value map. Optional.
     * Default is not set.
     */
    meta_data?: { [key: string]: any }[];
    /**
     * @property  meta_data_token
     * @description Scoping token for meta_data.
     * If not supplied, metadata will be scoped to function's `web_hook_url`.
     * Optional. Default is set by SignalWire.
     */
    meta_data_token?: string;
    /**
     * @property  data_map
     * @description An object containing properties to process or validate the input,
     * perform actions based on the input, or connect to external APIs or services in a serverless fashion.
     */
    data_map: DataMap[];
    /**
     * @property  web_hook_url
     * @description The URL to send the webhook to.
     */
    web_hook_url?: string;
    /**
     * @property  web_hook_auth_user
     * @description The username for the webhook URL.
     */
    web_hook_auth_user?: string;
    /**
     * @property  web_hook_auth_password
     * @description The password for the webhook URL.
     */
    web_hook_auth_pass?: string;
    /**
     * @property  purpose
     * @description A description of the context and purpose of the function, to explain to the agent when to use it.
     */
    purpose: string;
    /**
     * @property  argument
     * @description A JSON object defining the input that should be passed to the function.
     * The fields of this object are the following two parameters.
     */
    argument: FunctionArgument;
};

/**
 * @title FunctionArgument
 * @description A JSON object defining the input that should be passed to the function.
 * The fields of this object are the following two parameters.
 */
type FunctionArgument = {
    /**
     * @property  type
     * @description The type of argument the AI is passing to the function. Possible values are "string" and "object".
     */
    type: string | { [key: string]: any };
    /**
     * @property  properties
     * @description A JSON object describing the argument.
     * The value is set by the user.
     * For example, "location" for a location-based search or "company" if searching a database of companies.
     * This object has sub-parameters description and type to help define the property.
     */
    properties: { [key: string]: any };
};