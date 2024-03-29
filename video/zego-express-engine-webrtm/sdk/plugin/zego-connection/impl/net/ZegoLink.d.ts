import { AccessHubMessageType, ConnectEvent, DestroyType } from '../../entity/AccessHubDefine';
export declare abstract class ZegoLink {
    txid: number;
    linkRetryTime: number;
    updatedMsgTime: number;
    connectServer: string;
    constructor();
    createSocket(servers: string[]): void;
    setState(state: number): void;
    abstract connectSocket(isNext?: boolean, success?: Function, fail?: Function): boolean;
    abstract isConnect(): boolean;
    abstract isDisConnect(): boolean;
    abstract isConnecting(): boolean;
    initEvent(onConnectedEvent: (servers: string[], connectEvents: ConnectEvent[]) => void, onDisConnectedEvent: (isReconnect: boolean) => void, onConnectingEvent: (isReconnect: boolean) => void, onPushEvent: (streamID: number, msgType: number, msg: any) => void): void;
    sendMessage(type: AccessHubMessageType, streamID: number, body: any, isFirst?: boolean, success?: Function | null, error?: Function | null, ackFunc?: Function | null, option?: {
        timeout?: number;
        isInSendMap?: boolean;
        extras?: any;
        isMsgCache?: boolean;
    }): void;
    abstract destroySocket(type: DestroyType): void;
    abstract resetConnect(): void;
}
