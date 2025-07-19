import type { ProcessTDProps } from "./helpers/types"
import "./css/ProcessTD.css"

function ProcessTD({ isActive, displayText }: ProcessTDProps) {

    let tdClassname = isActive ? "process-row-section" : "inactive-process-row-section"

    return (
        <>
            <td className={tdClassname}>{displayText}</td>
        </>
    )
}

export default ProcessTD