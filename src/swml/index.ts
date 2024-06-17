import { SWMLMethod } from './methods'


/**
 * @title SWMLObject
 * @description The main object that includes the version and sections containing instructions.
 */
export type SWMLObject = {
    version: "1.0.0";
    sections: {
        main: SWMLMethod[];
        [key: string]: SWMLMethod[];
    };
};
