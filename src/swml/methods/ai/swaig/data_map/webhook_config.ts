import { SWMLMethod } from "../../../index";


/**
 * @title WebhookConfig
 * @description An type that defines the configuration for a webhook.
 */
export type WebhookConfig = {
    /**
     * @property  url
     * @description The endpoint for the external service or API.
     */
    url: string;
    /**
     * @property  headers
     * @description A map of headers to send to the webhook.
     */
    headers: { [key: string]: any };
    /**
     * @property  method
     * @description The HTTP method to use for the webhook.
     */
    method: "GET" | "POST" | "PUT" | "DELETE";
    /**
     * @property  output
     * @description Defines the format or structure of the response from the API.
     */
    output: WebhookOutput;
};

/**
 * @title WebhookOutput
 * @description Defines the format or structure of the response from the API.
 */
type WebhookOutput = {
    /**
     * @property  action
     * @description A list of actions to be performed upon matching.
     */
    action: SWMLMethod[];
    /**
     * @property  response
     * @description A static response text or message based on the outcome of the API call.
     */
    response: string;
};