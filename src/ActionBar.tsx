import type { ActionBarProps } from './helpers/types'
import DownloadTemplate from './DownloadTemplate'
import './css/ActionBar.css'

function ActionBar({ toggleNewProjectModal }: ActionBarProps) {

    return (
        <>
            <div className="action-bar">
                <div className="projects-table-search-bar-container">
                    <input type="search" placeholder="Search projects" className="projects-table-search-bar"></input>
                </div>
                <button className="create-new-project-button" onClick={toggleNewProjectModal}>+ New Project</button>
                <DownloadTemplate />
            </div>
        </>
    )
}

export default ActionBar