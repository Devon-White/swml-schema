import { WebhookConfig} from "./webhook_config";
import { Expression } from "./expression";

/**
 * @title DataMap
 * @description An object containing properties to process or validate the input, perform actions based on the input, or connect to external APIs or services in a serverless fashion.
 */
export type DataMap = {
    /**
     * @property  expressions
     * @description An array of objects that define patterns and corresponding actions.
     */
    expressions: Expression[];
    /**
     * @property  webhooks
     * @description An array of objects that define external API calls.
     */
    webhooks: WebhookConfig;
};

