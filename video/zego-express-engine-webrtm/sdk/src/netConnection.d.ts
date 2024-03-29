import ZegoConnectionAgent from '../plugin/zegoConnection';
export declare class NetConnection {
    connection: ZegoConnectionAgent | null;
    isLoad: boolean;
    callBackList: Array<Function>;
    constructor();
    get clientIP(): string;
    get timeOffset(): number | undefined;
    /**
     * 初始化
     */
    init(): void;
    /**
     *
     */
    unInit(): void;
    /**
     * 设置 app 信息
     * @param info
     */
    setAppInfo(appInfo: any): void;
    /**
     * 设置 user 信息
     * @param userId
     */
    setUserInfo(userId: string): void;
    /**
     * 设置统一接入默认连接地址
     * @param servers 默认域名地址
     */
    setNetAgentDefaultServers(servers: string[]): void;
    /**
     * 设置主域名、备份域名
     * @param primaryDomains
     */
    setBackupDomains(primaryDomains: string[]): void;
    /**
     * 设置调度连接 servers
     * @param servers 调度域名地址
     */
    setDispatchConnectServers(servers: string[]): void;
    /**
     * 设置隔离郁闷 servers
     * @param servers 域名地址
     */
    setNetAgentSpecifiedServers(servers: string[]): void;
    /**
     * 发起http请求，短连接代理
     * @param params 请求参数
     * @param sucFunc 成功回调
     * @param errFunc 失败回调
     * @param ackFunc 接入服务收到回调
     */
    startHttpRequest(req: any, sucFunc?: Function | null, errFunc?: Function | null, ackFunc?: Function | null, option?: {
        timeout?: number;
    }): void;
    /**
     * 发起http请求，短连接代理
     * @param params 请求参数
     * @param sucFunc 成功回调
     * @param errFunc 失败回调
     * @param ackFunc 接入服务收到回调
     */
    startHttpRequest2(req: any, sucFunc?: Function | null, errFunc?: Function | null, ackFunc?: Function | null, option?: {
        timeout?: number;
        extras?: any;
    }): void;
    /**
     * 获取柔性配置
     * @param type 柔性配置类型
     * @param token 鉴权 token
     * @param timeout 超时时间
     * @returns
     */
    getAppConfigByAgent(type: string, token: string, timeout?: number, etag?: number): Promise<any>;
    /**
     * 获取长连接代理请求
     * @param service 后端服务
     * @param option 附加参数
     * @returns
     */
    getPCRequest(service: any, option?: any): any;
    connectUa(): void;
    destroyConnect(): void;
    destroy(): void;
    /**
     * 是否连接状态
     * @returns
     */
    isConnect(): boolean;
    /**
     * 注册回调监听
     * @param event 事件
     * @param callBack 方法
     * @returns
     */
    on(event: string, callBack: Function): boolean;
    /**
     * 移除事件监听
     * @param event 事件
     * @param callBack 方法
     */
    off(event: string, callBack?: Function): void;
    setLogger(logger: any): void;
    setAccess(isAccess: boolean): void;
    getNTP(): {
        timestamp: number;
        maxDeviation: number;
    };
}
export declare enum ConnectedType {
    AUTO = 0,
    MANUAL = 1
}
export declare enum BrokenType {
    EMPTY = 0,
    CLOSE = 1
}
export declare enum Mode {
    Mode_UNSET = 0,
    MODE_ONLINE = 1,
    MODE_TEST = 2,
    MODE_ALPHA = 3
}
export declare enum DisconnectedType {
    CLOSE = 0,
    TEMP = 1,
    TIMEOUT = 2
}
export declare enum BusinessService {
    SERVICE_UNSET = 0,
    SERVICE_MEDIAGW = 1,
    SERVICE_LIVEROOM = 2,
    SERVICE_MIX = 3,
    SERVICE_ZEUS = 4,
    SERVICE_ZPUSH = 5,
    SERVICE_L3 = 6,
    SERVICE_TALKLINE = 7,
    SERVICE_EDUSUITE = 8,
    SERVICE_ZIM = 9,
    SERVICE_ClOUD_SETTING = 10,
    SERVICE_ZEUSHB = 11,
    SERVICE_USER_LOGIC = 12,
    SERVICE_UNIFYDISPATCH = 13,
    SERVICE_QUALITY = 14,
    SERVICE_SECURITY = 15,
    SERVICE_KTVCPR = 16,
    SERVICE_SWITCH4LIVEROOM = 17,
    SERVICE_WEBRTC_SIGNAL = 18,
    SERVICE_L3_WEBRTC_SIGNAL = 19,
    SERVICE_VIDEOCPR = 20,
    SERVICE_CDN = 21,
    SERVICE_CLOUDRECORD = 22,
    SERVICE_INNER_ECHO = 23,
    SERVICE_OUTER_ECHO = 24,
    SERVICE_LOCALHOST_ECHO = 25,
    SERVICE_ECHO = 26,
    SERVICE_DOCSERVICE = 27,
    SERVICE_AUTHSVR = 28
}
