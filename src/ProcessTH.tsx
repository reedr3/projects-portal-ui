import type { ProcessTHProps } from "./helpers/types"
import "./css/ProcessTH.css"

function ProcessTH({ isActive, displayText }: ProcessTHProps) {

    let activeTH = (
        <th className='process-col-label'>{displayText}</th>
    )

    let inactiveTH = (
        <th className='inactive-process-col-label'>{displayText}</th>
    )

    return (
        <>
            {isActive && activeTH}
            {!isActive && inactiveTH}
        </>
    )
}

export default ProcessTH