declare class Log {
    private debug;
    generateMessage(level: 'trace' | 'info' | 'warn' | 'error', message: unknown | unknown[], source: string | null, group?: 'start' | 'end'): void;
    trace(message: unknown | unknown[], source: string | null, group?: 'start' | 'end'): void;
    info(message: unknown | unknown[], source: string | null, group?: 'start' | 'end'): void;
    warn(message: unknown | unknown[], source: string | null, group?: 'start' | 'end'): void;
    error(message: unknown | unknown[], source: string | null, group?: 'start' | 'end'): void;
}
declare const _default: Log;
export default _default;
