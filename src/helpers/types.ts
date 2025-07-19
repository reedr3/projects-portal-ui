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

// ==================================================================================
// Prop types

export interface ProjectsTableProps {
    projectRows: Array<ProjectInfo>;
    newProjectId: string;
    handleSetNewProjectId: (id: string) => void;
}

export interface ActionBarProps {
    toggleNewProjectModal: () => void;
}

export interface NewProjectModalProps {
    toggleNewProjectModal: () => void;
    handleSetNewProjectId: (id: string) => void;
}

export interface ProjectsTableRowProps {
    projectRow: ProjectInfo;
    processTableStartsOpen: boolean;
}

export interface ProcessTableDropdownButtonProps {
    projectComplete: boolean;
    processTableDropdownOpen: boolean;
    toggleDropdown: () => void;
}

export interface ProcessTableProps {
    projectRow: ProjectInfo;
}

export interface ProcessTHProps {
    isActive: boolean;
    displayText: string;
}

export interface ProcessTDProps {
    isActive: boolean;
    displayText: string
}

export interface ProcessTDGeneratedFileProps {
    isGenerated: boolean;
    displayText: string
}

export interface ProcessTDUploadProps {
    isActive: boolean;
    existingFile: FileInfo | undefined;
    acceptedFileType: string;
    inputFileRef: React.LegacyRef<HTMLInputElement> | undefined;
    inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonClickHandler: (e: any) => void;
}

export interface ProcessTDDownloadProps {
    isActive: boolean;
}

export interface BlueButtonProps {
    buttonText: string;
    onSubmit: (e: any) => void;
    isActive: boolean;
}