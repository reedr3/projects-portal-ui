import playIcon from '/play.svg'
import playIconInactive from '/play-inactive.svg'
import playCircle from '/play-circle.svg'
import playCircleInactive from '/play-circle-inactive.svg'
import type { BlueButtonProps } from './helpers/types'
import "./css/BlueButton.css"

function BlueButton({ buttonText, onSubmit, isActive }: BlueButtonProps) {

    let activeButton = (
        <button className="blue-button" onClick={onSubmit}>
            <div className='blue-button-icon'>
                <img src={playCircle} className="play-circle" alt="Play circle" />
                <img src={playIcon} className="play-icon" alt="Play icon" />
                <span>{buttonText}</span>
            </div>
        </button>
    )

    let inactiveButton = (
        <button className="blue-button-inactive" onClick={onSubmit}>
            <div className='blue-button-icon'>
                <img src={playCircleInactive} className="play-circle" alt="Play circle inactive" />
                <img src={playIconInactive} className="play-icon" alt="Play icon inactive" />
                <span>{buttonText}</span>
            </div>
        </button>
    )

    return (
        <>
            {isActive && activeButton}
            {!isActive && inactiveButton}
        </>
    )
}

export default BlueButton