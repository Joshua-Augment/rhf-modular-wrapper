declare class Log {
    private debug;
    generateMessage(level: "trace" | "info" | "warn" | "error", message: unknown | unknown[], source: string | null, group?: "start" | "end"): void;
    trace(debug: boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end"): void;
    info(debug: boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end"): void;
    warn(debug: boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end"): void;
    error(debug: boolean, message: unknown | unknown[], source: string | null, group?: "start" | "end"): void;
    nullifyCircular(obj: Record<any, any>): Record<any, any> | null;
}
declare const _default: Log;
export default _default;
