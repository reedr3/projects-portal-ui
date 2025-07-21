import { useState } from "react"
import type { ProjectsTableProps } from "./helpers/types"
import ActionBar from "./ActionBar"
import NewProjectModal from "./NewProjectModal"
import ProjectsTableRow from "./ProjectsTableRow"
import './css/ProjectsTable.css'

function ProjectsTable({ projectRows, newProjectId, handleSetNewProjectId }: ProjectsTableProps) {

    const [newProjectModalOpen, setNewProjectModalOpen] = useState(false)

    function toggleNewProjectModal() {
        if (newProjectModalOpen) {
            setNewProjectModalOpen(false)
        }
        else {
            setNewProjectModalOpen(true)
        }
    }

    return (
        <>
            <div className="projects-table-container">
                <ActionBar toggleNewProjectModal={toggleNewProjectModal} />
                {newProjectModalOpen && <NewProjectModal toggleNewProjectModal={toggleNewProjectModal} handleSetNewProjectId={handleSetNewProjectId} />}
                <div className="projects-table-div">
                    <table className="projects-table">
                        <thead className="projects-table-thead">
                            <tr>
                                <th className="col-label project-name-col">Name</th>
                                <th className="col-label">Date</th>
                                <th className="col-label wider-col">Author</th>
                                <th className="col-label">Type</th>
                                <th className="col-label">Size</th>
                                <th className="col-label wider-col">Details</th>
                                <th className="col-label wider-col">Progress</th>
                            </tr>
                        </thead>
                        <tbody className="projects-table-tbody">
                            {projectRows.map((projectRow) => {
                                if (projectRow.id == newProjectId) {
                                    return (
                                        <ProjectsTableRow key={projectRow.id} projectRow={projectRow} processTableStartsOpen={true} />
                                    )
                                }
                                else {
                                    return (
                                        <ProjectsTableRow key={projectRow.id} projectRow={projectRow} processTableStartsOpen={false} />
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProjectsTable