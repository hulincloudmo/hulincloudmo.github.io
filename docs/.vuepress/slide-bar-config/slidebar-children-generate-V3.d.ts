declare const fs: any;
declare const path: any;
declare const os: any;
declare const osType: any;
declare let workFolder: string;
declare namespace generate {
    interface articleModule {
        title: string;
        collapsable: boolean;
        children: string[];
    }
    export function start(basePath: string): articleModule[];
    export {};
}
