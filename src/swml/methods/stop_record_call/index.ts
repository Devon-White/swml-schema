/**
 * @title StopRecordCall
 * @description Stop an active background recording.
 */
export type StopRecordCall = {
    /**
     * @property stop_record_call
     * @description Defines the stop_record_call structure
     */
    stop_record_call: {
        /**
         * @property control_id
         * @description Identifier for the recording to stop.
         */
        control_id?: string;
    };
};