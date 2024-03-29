export declare const PROTO_VERSION: string;
export declare const ROOMVERSION: "V1" | "V2";
export declare enum LIVEROOM_VER {
    SWITCH_ONE = 1,
    SWITCH_TWO = 2
}
export declare enum ENUM_LOG_LEVEL {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3,
    report = 99,
    disable = 100
}
export declare enum SDKProjectType {
    SDKProject_Other = 0,
    SDKProject_ZegoExpressVideo = 1,
    SDKProject_ZegoExpressAudio = 2,
    SDKProject_ZegoLiveRoom = 3,
    SDKProject_ZegoAudioRoom = 4,
    SDKProject_ZegoAVKit = 5,
    SDKProject_ZegoWebRTC = 6,
    SDKProject_ZegoMiniProgram = 7
}
/**
 * 地理围栏类型。
 */
export declare enum ZegoGeoFenceType {
    /**
     * 不使用地理围栏。
     */
    ZegoGeoFenceTypeNone = 0,
    /**
     * 包括指定的地理围栏信息。
     */
    ZegoGeoFenceTypeInclude = 1,
    /**
     * 排除指定的地理围栏信息。
     */
    ZegoGeoFenceTypeExclude = 2
}
export declare const LOG_LEVEL: {
    debug: number;
    info: number;
    warn: number;
    error: number;
    report: number;
    disable: number;
};
export declare enum ENUM_REMOTE_TYPE {
    disable = 0,
    websocket = 1,
    https = 2
}
export interface DeviceInfo {
    deviceID: string;
    deviceType: string;
}
export interface LogConfig {
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'report' | 'disable';
    logURL?: string;
    remoteLogLevel?: 'debug' | 'info' | 'warn' | 'error' | 'report' | 'disable';
}
export interface WebConfig {
    nickName?: string;
    logLevel?: ENUM_LOG_LEVEL;
    logUrl?: string;
    remoteLogLevel?: ENUM_LOG_LEVEL;
    debug?: boolean;
    qualityInterval?: number;
    userUpdate?: boolean;
}
export interface WxConfig {
    nickName?: string;
    logLevel?: ENUM_LOG_LEVEL;
    logUrl?: string;
    remoteLogLevel?: ENUM_LOG_LEVEL;
    debug?: boolean;
    userUpdate?: boolean;
}
export declare const ERROR_CODES: {
    ROOM_SESSION_ID_ERR: number;
};
export interface DataStatisticsItemEvent {
    event: string;
    event_time: number;
    time_consumed?: number;
    msg_ext?: {
        [index: string]: string | number;
    };
}
export declare enum TermType {
    TT_NONE = 0,
    TT_PC = 1,
    TT_IOS = 2,
    TT_ANDROID = 3,
    TT_MAC = 4,
    TT_LINUX = 5,
    TT_WEB = 6,
    TT_MINIPROGRAM = 7,
    TT_UNKNOWN = 32
}
export interface DataStatisticsItem {
    event_time: number;
    time_consumed: number;
    error: number;
    message: string;
    events: DataStatisticsItemEvent[];
    seq?: number;
    event_id?: string;
    msg_ext?: any;
    itemtype?: string;
    event?: string;
    client_type?: E_CLIENT_TYPE;
}
export interface DataStatistics {
    [index: string]: DataStatisticsItem;
}
export declare enum ENUM_SIGNAL_STATE {
    disconnected = 0,
    connecting = 1,
    connected = 2
}
export declare const ENUM_RESOLUTION_TYPE: {
    LOW: {
        width: number;
        height: number;
        frameRate: number;
        bitRate: number;
    };
    MEDIUM: {
        width: number;
        height: number;
        frameRate: number;
        bitRate: number;
    };
    HIGH: {
        width: number;
        height: number;
        frameRate: number;
        bitRate: number;
    };
};
export declare const ENUM_SCREEM_RESOLUTION_TYPE: {
    LOW: {
        frameRate: number;
        bitRate: number;
    };
    MEDIUM: {
        frameRate: number;
        bitRate: number;
    };
    HIGH: {
        frameRate: number;
        bitRate: number;
    };
};
export declare const ENUM_CONNECT_STATE: {
    disconnect: number;
    connecting: number;
    connected: number;
};
export declare const MAX_TRY_CONNECT_COUNT = 1;
export declare const SEND_MSG_RESET = 2;
export declare const SEND_MSG_TIMEOUT = 1;
export declare const MAX_TRY_HEARTBEAT_COUNT = 5;
export declare const MAX_STREAM_ID_LENGTH = 256;
export declare const MAX_USER_ID_LENGTH = 64;
export declare const MAX_USER_NAME_LENGTH = 256;
export declare const MAX_ROOM_ID_LENGTH = 128;
export declare const MAX_MIX_TASK_ID_LENGTH = 256;
export declare enum ENUM_RUN_STATE {
    logout = 0,
    trylogin = 1,
    login = 2
}
export declare enum TRACER_LEVEL {
    I = 0,
    H = 10,
    M = 100,
    L = 1000
}
export declare enum ENUM_NETWORK_STATE {
    offline = 0,
    online = 1
}
export declare enum NetType {
    NT_NONE = 0,
    NT_LINE = 1,
    NT_WIFI = 2,
    NT_2G = 3,
    NT_3G = 4,
    NT_4G = 5,
    NT_UNKNOWN = 32
}
export declare const MINIUM_HEARTBEAT_INTERVAL = 3000;
export declare const ENUM_STREAM_UPDATE_CMD: {
    added: number;
    deleted: number;
    updated: number;
};
export declare const SERVER_ERROR_CODE = 10000;
export interface ChatInfo {
    id_name: string;
    nick_name: string;
    role: number;
    msg_id: string;
    msg_category: number;
    msg_type: number;
    msg_content: string;
    send_time: number;
}
export interface UserInfo {
    userID: string;
    userName: string;
}
export declare enum E_CLIENT_TYPE {
    ClientType_None = 0,
    ClientType_H5 = 1,
    ClientType_SmallProgram = 2,
    ClientType_Webrtc = 3
}
export declare const REPORT_ACTION: {
    eventStart: string;
    eventEndWithMsgInfo: string;
    addEventMsg: string;
    addEvent: string;
    eventEnd: string;
    addMsgInfo: string;
};
export declare const getSeq: Function;
export declare const getReportSeq: Function;
export declare class ListNode<K> {
    _id: number | null;
    _data: K | null;
    next: ListNode<K> | null;
    prev: ListNode<K> | null;
    constructor(id?: number | null, data?: K | null);
    set id(id: number | null);
    get id(): null | number;
    set data(data: K | null);
    get data(): K | null;
    hasNext(): null | number;
    hasPrev(): null | number;
}
export declare class LinkedList<T> {
    start: ListNode<T>;
    end: ListNode<T>;
    _idCounter: number;
    _numNodes: number;
    constructor();
    /**
     *   Inserts a node before another node in the linked list
     *   @param {Node} toInsertBefore
     *   @param {Node} node
     */
    insertBefore(toInsertBefore: ListNode<T>, data: T): ListNode<T>;
    /**
     *   Adds data wrapped in a Node object to the end of the linked list
     *   @param {object} data
     */
    addLast(data: T): ListNode<T>;
    /**
     *   Alias for addLast
     *   @param {object} data
     */
    add(data: T): ListNode<T>;
    /**
     *   Gets and returns the first node in the linked list or null
     *   @return {Node/null}
     */
    getFirst(): ListNode<T> | null;
    /**
     *   Gets and returns the last node in the linked list or null
     *   @return {Node/null}
     */
    getLast(): ListNode<T> | null;
    /**
     *   Gets and returns the size of the linked list
     *   @return {number}
     */
    size(): number;
    /**
     *   (Internal) Gets and returns the node at the specified index starting from the first in the linked list
     *   Use getAt instead of this function
     *   @param {number} index
     */
    getFromFirst(index: number): null | ListNode<T>;
    /**
     *   Gets and returns the Node at the specified index in the linked list
     *   @param {number} index
     */
    get(index: number): ListNode<T> | null;
    /**
     *   Removes and returns node from the linked list by rearranging pointers
     *   @param {Node} node
     *   @return {Node}
     */
    remove(node: ListNode<T>): ListNode<T>;
    /**
     *   Removes and returns the first node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    removeFirst(): ListNode<T> | null;
    /**
     *   Removes and returns the last node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    removeLast(): ListNode<T> | null;
    /**
     *   Removes all nodes from the list
     */
    removeAll(): void;
    /**
     *    Iterates the list calling the given fn for each node
     *    @param {function} fn
     */
    each(iterator: Function): void;
    find(iterator: Function): ListNode<T> | null;
    map(iterator: Function): ListNode<T>[];
    /**
     *    Alias for addLast
     *    @param {object} data
     */
    push(data: T): ListNode<T>;
    /**
     *    Performs insertBefore on the first node
     *    @param {object} data
     */
    unshift(data: T): void;
    /**
     *    Alias for removeLast
     */
    pop(): ListNode<T> | null;
    /**
     *    Alias for removeFirst()
     */
    shift(): ListNode<T> | null;
}
export interface LiveRoomHeader {
    Protocol: string;
    cmd: string;
    appid: number;
    seq: number;
    user_id: string;
    session_id: string;
    room_id: string;
    room_session_id: string;
    biz_version: string;
}
type RoomStateUpdateCallBack = (roomID: string, state: 'DISCONNECTED' | 'CONNECTING' | 'CONNECTED', errorCode: number, extendedData: string) => void;
export interface ZegoInnerEvent {
    /**
     * 房间和服务期之间的连接状态发生变化时触发
     */
    _roomStateUpdate: RoomStateUpdateCallBack;
    roomLoginResponse: (msg: any) => void;
    _roomLogin: (roomID: string, token: string) => void;
    _appConfigRsp: () => void;
    _netAppConfigRsp: (appConfig: any) => void;
    _connectChanged: (state: string, options: any) => void;
    HBResponse: (msg: any, roomID: string) => void;
    _getAnchorInfo: (anchorID: string, anchorName: string) => void;
    _tokenRenewed: (token: string, roomID: string) => void;
    _protobufResponse: (result: ArrayBuffer) => {};
    _tokenExpired: (msg: any) => void;
    _cloudSettingNotify: (file: string, setting: any) => void;
    _settingCanFetch: (msg: any) => void;
}
export declare const MODULE_TIPS: {
    MESSAGE: string;
};
export interface ZegoError {
    code: number;
    msg: string;
}
export interface ZegoProxyInfo {
    ip?: string;
    port?: number;
    hostName: string;
    userName?: string;
    password?: string;
}
export { ZegoLogger, ZegoDataReport, ZegoWebSocket, LoggerStateCenter, createZegoWebSocket } from 'zego-express-logger';
export { NetConnection, Mode, BrokenType, BusinessService, ConnectedType, DisconnectedType } from './netConnection';
