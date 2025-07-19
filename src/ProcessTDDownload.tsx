import { useState } from 'react'
import downloadIconActive from "/arrow-down.svg"
import downloadIconInactive from "/arrow-down-inactive.svg"
import type { ProcessTDDownloadProps } from './helpers/types'
import './css/ProcessTDDownload.css'

function ProcessTDDownload({ isActive }: ProcessTDDownloadProps) {

    let downloadIcon = isActive ? downloadIconActive : downloadIconInactive

    let downloadDropdownClassname = isActive ? "download-dropdown" : "download-dropdown-inactive"
    let downloadButtonClassname = isActive ? "download-button" : "download-button-inactive"

    const [selectedVal, setSelectedVal] = useState("")

    function handleSelection(event: any) {
        setSelectedVal(event.target.value)
    }

    return (
        <>
            <td className="process-download-row-section">
                <div className="download-file-container">
                    <select className={downloadDropdownClassname} value={selectedVal} onChange={handleSelection}>
                        <option className='download-option' value={""}>Select a file</option>
                        <option className='download-option' value={"option1"}>Blank_BNF.xlsx</option>
                    </select>
                    <button className={downloadButtonClassname}><img src={downloadIcon} className="download-icon" alt="Download Button" /></button>
                </div>
            </td>
        </>
    )
}

export default ProcessTDDownload