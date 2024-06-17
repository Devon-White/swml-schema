/**
 * @title WebHookDefaults
 * @description WebHookDefaults defines the default settings for all SWAIG functions.
 */
export type WebHookDefaults = {
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
    web_hook_auth_password?: string;
};