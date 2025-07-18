export interface ProjectInfo {
    id: string;
    name: string;
    status: string;
    files: Array<FileInfo>;
    events: Array<EventInfo>;
}

export interface FileInfo {
    id: string;
    fileName: string;
    fileType: string;
    fileSize: string;
    status: string;
    events: Array<EventInfo>;
}

export interface EventInfo {
    status: string;
    timestamp: string;
}