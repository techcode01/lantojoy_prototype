import { ZegoDataReport, ZegoLogger } from '../zego.entity';
import { StateCenter } from '../stateCenter';
import { ZegoExpressWebRTM } from '..';
import { LiveRoomModules } from '.';
import { LiveRoomHandler } from './liveroomHandler';
import { NetConnection } from '../netConnection';
export declare class ZegoRoomServicer {
    private _zgp_logger;
    private _zgp_stateCenter;
    private ua;
    private _dataReport;
    private rtm;
    roomServicer: LiveRoomHandler;
    get logger(): ZegoLogger;
    get stateCenter(): StateCenter;
    constructor(_zgp_logger: ZegoLogger, _zgp_stateCenter: StateCenter, ua: NetConnection, _dataReport: ZegoDataReport, rtm: ZegoExpressWebRTM);
    listenCallBack(): void;
    isDisConnect(): boolean;
    isUaConnect(): boolean;
    sendMessage(cmd: string, body: Uint8Array, success?: Function, error?: Function, params?: {
        roomID?: string;
    }, option?: {
        timeout: number;
    }, isInSendMap?: boolean): number;
    handlePushTokenExpire(msg: any): void;
    handlePushKickout(msg: any, isSwitch: boolean): void;
    handlePushStreamMsg(msg: any): void;
    handlePushSignalMsg(msg: any): void;
    handlePushMergeMsg(msg: any): void;
    handlePushCustomMsg(pushReq: {
        header: any;
        body: any;
    }): void;
    handlePushRoomMsg(msg: any): void;
    handlePushTransMsg(pushReq: {
        header: any;
        body: any;
    }): void;
    onSwitchMessage(header: any, decryptBody: Uint8Array): void;
    handlePushUserStateUpdateMsg(msg: any): void;
    login(room: LiveRoomModules, suc?: Function, err?: Function): void;
    logout(room: LiveRoomModules, suc: Function, err: Function): number;
    startCheck(): void;
    stopCheck(): void;
    getReqHead(room: LiveRoomModules): any;
    heartBeat(suc: Function, err: Function, room: LiveRoomModules): void;
    fetchUserList(body: {
        user_index: number;
        sort_type: number;
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendRoomMsg(body: {
        msg_category: number;
        msg_type: number;
        msg_priority: number;
        msg_content: string;
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendReliableMessage(body: {
        trans_type: string;
        trans_data: string;
        trans_local_seq: number;
        trans_channel: string;
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    fetchReliableMessage(body: {
        fetch_array: {
            trans_type: string;
            trans_seq: number;
        }[];
        trans_channel: string;
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendCustomCommand(body: {
        dest_id_name: string[];
        custom_msg: string;
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendBigRoomMessage(body: {
        msgs: {
            msg_category: number;
            msg_type: number;
            msg_content: string;
            bigmsg_client_id: string;
        }[];
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendSignalCmd(body: {
        sub_cmd: number;
        signal_msg: string;
        dest_id_name: string[];
    }, suc: Function, err: Function, room: LiveRoomModules): number;
    sendStreamUpdate(body: {
        sub_cmd: number;
        stream_msg: string;
        third_token?: string;
    }, suc: Function, err: Function, room: {
        sessionID: any;
        roomID: any;
        roomSessionID: any;
    }): number;
    getStreamList(body: {}, suc: Function, err: Function, room: {
        sessionID: any;
        roomID: any;
        roomSessionID: any;
    }): void;
    renewToken(body: {
        token: string;
    }, sucCallBack: (msg: any, seq: number) => void, failCallBack: (error: any) => void, room: LiveRoomModules): void;
    reset(): void;
    closeRequest(): void;
}
