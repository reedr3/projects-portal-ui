import { useState } from 'react'
import type { FileInfo, ProjectsTableRowProps } from './helpers/types'
import { formatDate } from './helpers/helperFunctions'
import ProcessTableDropdownButton from './ProcessTableDropdownButton'
import ProcessTable from './ProcessTable'
import './css/ProjectsTableRow.css'

function ProjectsTableRow({ projectRow, processTableStartsOpen }: ProjectsTableRowProps) {

    const [processTableDropdownOpen, setProcessTableDropdownOpen] = useState(processTableStartsOpen)

    function toggleDropdown() {
        if (processTableDropdownOpen) {
            setProcessTableDropdownOpen(false)
        }
        else {
            setProcessTableDropdownOpen(true)
        }
    }

    let startDate = "tbd"
    let fileTypeDisplayVal = "tbd"
    let fileSize = "tbd"

    let projectComplete = projectRow.status == "completed"

    if (projectRow.files.length != 0) {
        let fileToEncode: FileInfo | undefined = projectRow.files.find((file) => file.fileType == "application/x-tar")

        if (fileToEncode) {
            if (fileToEncode.events.length != 0) {
                startDate = formatDate(fileToEncode.events[0].timestamp)
            }
            if (fileToEncode.fileType) {
                switch (fileToEncode.fileType) {
                    case "image/png":
                        fileTypeDisplayVal = "image"
                        break
                    case "image/jpeg":
                        fileTypeDisplayVal = "jpeg"
                        break
                    case "image/svg+xml":
                        fileTypeDisplayVal = "svg"
                        break
                    case "plain/text":
                        fileTypeDisplayVal = "text"
                        break
                    case "application/json":
                        fileTypeDisplayVal = "json"
                        break
                    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                        fileTypeDisplayVal = "excel"
                        break
                    case "application/x-tar":
                        fileTypeDisplayVal = "tar"
                        break
                    default:
                        fileTypeDisplayVal = "unknown"
                }
            }
            if (fileToEncode.fileSize) {
                fileSize = fileToEncode.fileSize + "B"
            }
        }
    }

    return (
        <>
            <tr className="projects-table-row">
                <td className="row-section project-name">{projectRow.name}</td>
                <td className="row-section">{startDate}</td>
                <td className="row-section">author here</td>
                <td className="row-section">{fileTypeDisplayVal}</td>
                <td className="row-section">{fileSize}</td>
                <td className="row-section">details here</td>
                <td className="row-section">files used here</td>
                <td className="row-section">logs here</td>
                <td className="row-section">progress here</td>
            </tr>
            <tr className='process-table-dropdown-button-row'>
                <th colSpan={9}><ProcessTableDropdownButton projectComplete={projectComplete} processTableDropdownOpen={processTableDropdownOpen} toggleDropdown={toggleDropdown} /></th>
            </tr>
            <tr className='process-table-row'>
                <th colSpan={9}>
                    {processTableDropdownOpen && <ProcessTable projectRow={projectRow} />}
                </th>
            </tr>
        </>
    )
}

export default ProjectsTableRow