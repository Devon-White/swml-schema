import { Cond } from "./cond";
import { Execute } from "./execute";
import { Request } from "./request";
import { Return } from "./return";
import { Set } from "./set";
import { Switch } from "./switch";
import { Transfer } from "./transfer";
import { Unset } from "./unset";
import { AI } from "./ai";
import { Answer } from "./answer";
import { Connect } from "./connect";
import { Goto } from "./goto";
import { Label } from "./label";
import { Denoise } from "./denoise";
import { Hangup } from "./hangup";
import { JoinRoom } from "./join_room";
import { Play } from "./play";
import { Prompt } from "./prompt";
import { ReceiveFax } from "./receive_fax";
import { Record } from "./record";
import { RecordCall } from "./record_call";
import { SendDigits } from "./send_digits";
import { SendFax } from "./send_fax";
import { SendSMS } from "./send_sms";
import { SIPRefer } from "./sip_refer";
import { StopDenoise } from "./stop_denoise";
import { StopRecordCall } from "./stop_record_call";
import { StopTap } from "./stop_tap";
import { Tap } from "./tap";
import { If } from "./if";



/**
 * @title Instruction
 * @description This type defines the SignalWireML instructions.
 */
type Methods =
    | Cond
    | Execute
    | Request
    | Return
    | Set
    | Switch
    | Transfer
    | Unset
    | AI
    | Answer
    | Connect
    | Goto
    | Label
    | Denoise
    | Hangup
    | JoinRoom
    | Play
    | Prompt
    | ReceiveFax
    | Record
    | RecordCall
    | SendDigits
    | SendFax
    | SendSMS
    | SIPRefer
    | StopDenoise
    | StopRecordCall
    | StopTap
    | Tap
    | If;

/**
 * @title NoArgMethod
 * @description Methods that do not require any arguments.
 */
type NoArgMethods =
    "answer" |
    "hangup" |
    "record" |
    "stop_record_call" |
    "denoise" |
    "stop_denoise" |
    "receive_fax" |
    "return" |
    "stop_tap";

export type SWMLMethod = NoArgMethods | Methods

