/**
 * @title StopTap
 * @description Stop an active tap stream.
 */
export type StopTap = {
    /**
     * @property stop_tap
     * @description Defines the stop_tap structure
     */
    stop_tap: {
        /**
         * @property control_id
         * @description ID of the tap to stop.
         */
        control_id?: string;
    };
};