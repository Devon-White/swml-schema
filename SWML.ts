
interface MethodBase {
    name: string;
}

interface Transfer extends MethodBase {
    dest: string;
    meta?: object;
    params?: object;
}

interface Execute extends MethodBase {
    dest: string;
    meta?: object;
    params?: object;
    on_return?: object;
    result?: object;
}

interface Return extends MethodBase {}

interface Label extends MethodBase {
    label: string;
}

interface Goto extends MethodBase {
    label: string;
    when?: string;
    max?: number;
}

interface Request extends MethodBase {
    url: string;
    method: 'get' | 'GET' | 'put' | 'PUT' | 'post' | 'POST' | 'delete' | 'DELETE';
    body?: any;
    headers?: object;
    timeout?: number;
    connect_timeout?: number;
    save_variables?: boolean;
}

interface Switch extends MethodBase {
    variable: string;
    case?: object;
    default?: object;
}

interface If extends MethodBase {
    condition: string;
    then?: object;
    else?: object;
}

interface Cond extends MethodBase {
    items: object[];
}

interface Answer extends MethodBase {
    max_duration?: number;
    fsvars?: object;
    codecs?: string;
}

interface Hangup extends MethodBase {
    reason?: string;
}

interface Play extends MethodBase {
    urls?: string[];
    url?: string;
    volume?: number;
    auto_answer?: boolean;
    say_voice?: string;
    say_language?: string;
    say_gender?: string;
}

interface Prompt extends MethodBase {
    play?: object;
    volume?: number;
    max_digits?: number;
    terminators?: string;
    digit_timeout?: number;
    initial_timeout?: number;
    speech_timeout?: number;
    speech_end_timeout?: number;
    speech_language?: string;
    speech_hints?: string[];
    speech_engine?: 'Google' | 'Google.V2' | 'Deepgram';
}

interface Record extends MethodBase {
    stereo?: boolean;
    format?: 'wav' | 'mp3';
    direction?: 'listen' | 'speak' | 'both';
    terminators?: string;
    beep?: boolean;
    input_sensitivity?: number;
    initial_timeout?: number;
    end_silence_timeout?: number;
    max_length?: number;
    status_url?: string;
}

interface RecordCall extends MethodBase {
    control_id?: string;
    stereo?: boolean;
    format?: 'wav' | 'mp3';
    direction?: 'listen' | 'speak' | 'both';
    terminators?: string;
    beep?: boolean;
    input_sensitivity?: number;
    initial_timeout?: number;
    end_silence_timeout?: number;
    max_length?: number;
}

interface StopRecordCall extends MethodBase {
    control_id?: string;
}

interface ConnectSipHeader extends MethodBase {
    name: string;
    value: string;
}

interface ConnectDevice extends MethodBase {
    to: string;
    from?: string;
    headers?: object[];
    codecs?: string;
    webrtc_media?: boolean;
    timeout?: number;
    session_timeout?: number;
    fsvars?: object;
    call_state_url?: string;
    call_state_events?: string[];
    confirm?: object;
    confirm_timeout?: number;
    username?: string;
    password?: string;
    encryption?: 'mandatory' | 'optional' | 'forbidden';
}

interface ConnectSerialParallel extends MethodBase {
    devices: ConnectDevice[];
}

interface Connect extends MethodBase {
    from?: string;
    codecs?: string;
    webrtc_media?: boolean;
    fsvars?: object;
    timeout?: number;
    session_timeout?: number;
    serial_parallel?: ConnectSerialParallel[];
    to?: string;
    answer_on_bridge?: boolean;
    max_duration?: number;
    call_state_url?: string;
    call_state_events?: string[];
    confirm?: object;
    confirm_timeout?: number;
    username?: string;
    password?: string;
    encryption?: 'mandatory' | 'optional' | 'forbidden';
}

interface JoinRoom extends MethodBase {
    name: string;
}

interface Denoise extends MethodBase {}

interface StopDenoise extends MethodBase {}

interface ReceiveFax extends MethodBase {}

interface SendFax extends MethodBase {
    document: string;
    header_info?: string;
    identity?: string;
}

interface SipRefer extends MethodBase {
    to_uri?: string;
    to?: string;
}

interface Set extends MethodBase {
    params: object;
}

interface Eval extends MethodBase {
    params: object;
}

interface Unset extends MethodBase {
    vars: string[];
}

interface Tap extends MethodBase {
    uri: string;
    direction?: 'listen' | 'speak' | 'both';
    control_id?: string;
    codec?: 'PCMA' | 'PCMU' | 'pcma' | 'pcmu';
    rtp_ptime?: number;
}

interface StopTap extends MethodBase {
    control_id?: string;
}

interface SendDigits extends MethodBase {
    digits: string;
}

interface SendSMS extends MethodBase {
    body?: string;
    from_number: string;
    to_number: string;
    region?: string;
    media?: string[];
    tags?: string[];
}

interface AI extends MethodBase {
    agent?: string;
    prompt?: object;
    post_prompt?: object;
    engine?: string;
    voice?: string;
    post_prompt_url?: string;
    post_prompt_auth_user?: string;
    post_prompt_auth_password?: string;
    languages?: object[];
    pronounce?: object[];
    global_data?: object;
    SWAIG?: object;
    params?: object;
    hints?: string[];
}

// Union type for all methods
type MethodMap = {
    "transfer": Transfer;
    "execute": Execute;
    "return": Return;
    "label": Label;
    "goto": Goto;
    "request": Request;
    "switch": Switch;
    "if": If;
    "cond": Cond;
    "answer": Answer;
    "hangup": Hangup;
    "play": Play;
    "prompt": Prompt;
    "record": Record;
    "record_call": RecordCall;
    "stop_record_call": StopRecordCall;
    "connect": Connect;
    "join_room": JoinRoom;
    "denoise": Denoise;
    "stop_denoise": StopDenoise;
    "receive_fax": ReceiveFax;
    "send_fax": SendFax;
    "sip_refer": SipRefer;
    "set": Set;
    "eval": Eval;
    "unset": Unset;
    "tap": Tap;
    "stop_tap": StopTap;
    "send_digits": SendDigits;
    "send_sms": SendSMS;
    "ai": AI;
};

type NoArgMethod =
    "answer" |
    "hangup" |
    "record" |
    "stop_record_call" |
    "denoise" |
    "stop_denoise" |
    "receive_fax" |
    "return" |
    "stop_tap";


type MethodUnion = NoArgMethod | { [K in keyof MethodMap]?: MethodMap[K] };

// Type for  object
export type SWMLObject = {
    version: string;
    sections: {
        main: MethodUnion[];
        [key: string]: MethodUnion[];
    };
};