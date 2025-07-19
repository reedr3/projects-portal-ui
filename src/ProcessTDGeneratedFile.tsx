import type { ProcessTDGeneratedFileProps } from "./helpers/types"
import "./css/ProcessTDGeneratedFile.css"

function ProcessTDGeneratedFile({ isGenerated, displayText }: ProcessTDGeneratedFileProps) {

    let tdClassname = isGenerated ? "generated-process-row-section" : "ungenerated-process-row-section"

    return (
        <>
            <td className={tdClassname}>{displayText}</td>
        </>
    )
}

export default ProcessTDGeneratedFile