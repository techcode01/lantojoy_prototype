import { TryHandler } from './retryHandler';
import { ZegoLogger, ZegoError } from '../zego.entity';
import { RoomHandler } from './roomHandler';
import { StateCenter } from '../stateCenter';
import { ZegoRoomConfig, ZegoUser } from '../../code/zh/ZegoExpressEntity';
import { LiveRoomModules } from '.';
export declare class RetryRoomHandler extends TryHandler {
    protected _zgp_logger: ZegoLogger;
    protected _zgp_stateCenter: StateCenter;
    private _room;
    roomHandler: RoomHandler;
    roomID: string;
    token: string;
    user: ZegoUser;
    server: string;
    serverBak: string;
    config?: ZegoRoomConfig;
    /**用于检测网络进行重试 */
    private _retryNetCount;
    /**用于检测网络重试最大次数 */
    private _retryNetMaxTimes;
    subLoginSpan: any;
    spanKey: string;
    private get _zgp_reporter();
    constructor(_zgp_logger: ZegoLogger, _zgp_stateCenter: StateCenter, _room: LiveRoomModules);
    renewLocalToken(token: string, remainTime?: number): void;
    initRoom(roomHandler: RoomHandler, roomID: string, token: string, user: ZegoUser, server: string, serverBak: string, config?: ZegoRoomConfig): void;
    active(isFirst?: boolean): void;
    startMaxTime(): void;
    stopMaxTime(): void;
    onactive(success: boolean, error?: ZegoError): void;
    handleError(error: ZegoError, isServerError?: boolean): boolean;
    loginRoomCallback: {
        success?: Function;
        fail?: Function;
    };
    setLoginRoomCallback(success?: Function, fail?: Function): void;
    loginFail(err: ZegoError): void;
    handleLoginFinish(success: boolean, error?: ZegoError, isServerError?: boolean): void;
    invalid(): void;
    resetCallBack(): void;
}
