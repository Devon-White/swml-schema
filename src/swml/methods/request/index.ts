/**
 * @title Request
 * @description Send a GET, POST, PUT, or DELETE request to a remote URL.
 */
export type Request = {
    /**
     * @property request
     * @description Defines the request structure
     */
    request: {
        /**
         * @property url
         * @description The URL to which the request is to be sent.
         */
        url: string;

        /**
         * @property method
         * @description The HTTP method to be used for the request. Can be "GET", "POST", "PUT", or "DELETE".
         */
        method: "GET" | "POST" | "PUT" | "DELETE";

        /**
         * @property headers
         * @description Optional. An object representing the headers to be included in the request.
         */
        headers?: { [key: string]: any };

        /**
         * @property body
         * @description Optional. The body of the request. Can be a string or an object.
         */
        body?: string | { [key: string]: any };

        /**
         * @property timeout
         * @description Optional. Maximum time in seconds to wait for a response. Default is 5.0 seconds.
         */
        timeout?: number;

        /**
         * @property connect_timeout
         * @description Optional. Maximum time in seconds to wait for a connection. Default is 5.0 seconds.
         */
        connect_timeout?: number;

        /**
         * @property save_variables
         * @description Optional. Store parsed JSON response as variables. Default is false.
         */
        save_variables?: boolean;
    };
};
