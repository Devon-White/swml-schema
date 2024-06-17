/**
 * @title Expression
 * @description An object that defines patterns and corresponding actions.
 */
export type Expression = {
    /**
     * @property  string
     * @description The actual input or value from the user or system.
     */
    string: string;
    /**
     * @property  pattern
     * @description A regular expression pattern to validate or match the string.
     */
    pattern: string;
    /**
     * @property  output
     * @description Defines the response or action to be taken when the pattern matches.
     */
    output: ExpressionOutput;
};

/**
 * @title ExpressionOutput
 * @description The response or action to be taken when the pattern matches.
 */
type ExpressionOutput = {
    /**
     * @property  response
     * @description A static response text or message.
     */
    response: string;
    /**
     * @property  action
     * @description A list of actions to be performed upon matching.
     */
    action: { [key: string]: any }[];
};