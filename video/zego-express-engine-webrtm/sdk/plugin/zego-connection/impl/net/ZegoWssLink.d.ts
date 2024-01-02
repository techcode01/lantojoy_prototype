/// <reference types="node" />
import { LinkedList, ListNode } from '../../entity/linkNode';
import { AccessHubMessageType, ConnectEvent, DestroyType } from '../../entity/AccessHubDefine';
import { AccessHubProtoBuf } from '../../protocol/AccessHubProtoBuf';
import { ZegoLink } from './ZegoLink';
import { NetSocketService } from './NetSocketService';
import { StateCenter } from '../stateCenter';
import { ZegoLogger } from '../../util/logger';
type MessageItem = {
    data: any;
    txid: number;
    sendTime: number;
    timeOut: number;
    ack: boolean;
    type: AccessHubMessageType;
    streamID: number;
    success: Function | null;
    error: Function | null;
    ackFunc: Function | null;
    isSend: boolean;
    isCheck: boolean;
};
export declare class ZegoWssLink extends ZegoLink {
    private _appID;
    private _env;
    private _protobuf;
    private _logger;
    protected _stateCenter: StateCenter;
    private proxyCtrl?;
    socketService: NetSocketService;
    urlIndex: number;
    servers: string[];
    updatedMsgTime: number;
    unUpdateMsgTimeTypes: AccessHubMessageType[];
    netLinkState: number;
    sendCommandList: LinkedList<MessageItem>;
    unSendCommandList: LinkedList<MessageItem>;
    sendCommandMap: {
        [index: number]: ListNode<MessageItem>;
    };
    unSendCommandMap: {
        [index: number]: ListNode<MessageItem>;
    };
    private _sendDataCheckOnceCount;
    private _sendDataDropTimeout;
    private _sendDataCheckTimer;
    private _sendDataCheckInterval;
    private _timeout;
    private _onConnectedEvent;
    private _onConnectingEvent;
    private _onDisConnectedEvent;
    private _onPushEvent;
    connectInterval: number;
    connectTimer: NodeJS.Timeout | null | number;
    connectRsp: {
        suc?: Function;
        fail?: Function;
    };
    unlogTypes: number[];
    tryServers: string[];
    tryConnectEvents: ConnectEvent[];
    connectStartTime: number;
    constructor(_appID: number, _env: number, _protobuf: AccessHubProtoBuf, _logger: ZegoLogger, _stateCenter: StateCenter, proxyCtrl?: any);
    initEvent(onConnectedEvent: (servers: string[], connectEvents: ConnectEvent[]) => void, onDisConnectedEvent: (isReconnect: boolean) => void, onConnectingEvent: (isReconnect: boolean) => void, onPushEvent: (streamID: number, msgType: number, msg: any, extras?: any) => void): void;
    createSocket(servers: string[]): void;
    destroySocket(type: DestroyType): void;
    refreshServers(servers: string[]): void;
    connectSocket(isNext?: boolean, success?: Function, failCB?: Function): boolean;
    bindSocketEvent(): void;
    closeSocket(): void;
    private _connectEvent;
    resetConnect(): void;
    isConnect(): boolean;
    isDisConnect(): boolean;
    isConnecting(): boolean;
    setState(state: number): void;
    closeHandler(handler: (evt: any) => void): void;
    openHandler(handler: () => void): void;
    errorHandler(handler: (evt: Event) => void): void;
    sendMessage(type: AccessHubMessageType, streamID: number, body: any, isFirst?: boolean, success?: Function | null, error?: Function | null, ackFunc?: Function | null, option?: {
        timeout?: number;
        isInSendMap?: boolean;
        extras?: any;
        isMsgCache?: boolean;
    }): void;
    checkUnSendMsgs(messageList: LinkedList<MessageItem>): void;
    private _Uint8ToArrayBuffer;
    sendUint8Data(type: AccessHubMessageType, reqBody: any, streamID: number, extras?: any): void;
    onMessage(): void;
    isRspMsg(txid: number): boolean;
    startCheck(): void;
    stopCheck(): void;
    private _checkMessageListTimeout;
    private _checkSendMessageList;
    protected handleSendCommandMsgRsp(streamID: number, msgType: number, txid: number, body: any, extras?: any): void;
}
export {};