import type { EventInfo, FileInfo } from "./types"

export function createFakeEvent(status: string, timestamp: string) {
    return {
        status: status,
        timestamp: timestamp
    }
}

export function createFakeFile(id: string, fileName: string, fileType: string, fileSize: string, status: string, events: Array<EventInfo>) {
    return {
        id: id,
        fileName: fileName,
        fileType: fileType,
        fileSize: fileSize,
        status: status,
        events: events
    }
}

export function createFakeProject(id: string, name: string, status: string, files: Array<FileInfo>, events: Array<EventInfo>) {
    return {
        id: id,
        name: name,
        status: status,
        files: files,
        events: events
    }
}