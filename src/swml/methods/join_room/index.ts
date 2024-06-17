/**
 * @title JoinRoom
 * @description Join a RELAY room.
 */
export type JoinRoom = {
    /**
     * @property join_room
     * @description Defines the join_room structure
     */
    join_room: {
        /**
         * @property  name
         * @description The name of the room to join.
         */
        name: string;
    };
};