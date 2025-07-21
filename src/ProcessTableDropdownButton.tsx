import rightCarat from '/right-carat.svg'
import downCarat from '/down-carat.svg'
import checkIcon from '/check.svg'
import minusIcon from '/minus.svg'
import type { ProcessTableDropdownButtonProps } from './helpers/types'
import "./css/ProcessTableDropdownButton.css"

function ProcessTableDropdownButton({ projectComplete, processTableDropdownOpen, toggleDropdown }: ProcessTableDropdownButtonProps) {

    const closedDropdownIndicator = <img src={rightCarat} className="right-carat" alt="Dropdown-indicator-closed" />
    const openDropdownIndicator = <img src={downCarat} className="down-carat" alt="Dropdown-indicator-open" />

    const statusComplete = (
        <div className="process-table-dropdown-button-status-complete">
            <div className='process-table-dropdown-button-status-icon-complete'>
                <img src={checkIcon} className="check-icon" alt="Check icon" />
            </div>
            <span>Complete</span>
        </div>
    )

    const statusIncomplete = (
        <div className="process-table-dropdown-button-status-incomplete">
            <div className='process-table-dropdown-button-status-icon-incomplete'>
                <img src={minusIcon} className="minus-icon" alt="Minus icon" />
            </div>
            <span>Incomplete</span>
        </div>
    )

    return (
        <>
            <button className="process-table-dropdown-button" onClick={toggleDropdown}>
                <div className="process-table-dropdown-button-carat">
                    {processTableDropdownOpen && openDropdownIndicator}
                    {!processTableDropdownOpen && closedDropdownIndicator}
                </div>
                <div className="process-table-dropdown-button-word">
                    <span>PROCESS: </span>
                </div>
                {projectComplete && statusComplete}
                {!projectComplete && statusIncomplete}
            </button>
        </>
    )
}

export default ProcessTableDropdownButton