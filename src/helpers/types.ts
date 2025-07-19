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