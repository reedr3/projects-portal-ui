import { useState } from "react"
import uploadIconActive from "/upload.svg"
import uploadIconInactive from "/upload-inactive1.svg"
import type { ProcessTDUploadProps } from "./helpers/types"
import './css/ProcessTDUpload.css'

function ProcessTDUpload({ isActive, existingFile, acceptedFileType, inputFileRef, inputChangeHandler, buttonClickHandler }: ProcessTDUploadProps) {

    const [isEditing, setIsEditing] = useState(false)

    function handleToggleEditing(e: any) {
        if (isEditing) {
            setIsEditing(false)
        }
        else {
            setIsEditing(true)
        }
    }

    function handleEditingUploadClick(e: any) {
        handleToggleEditing(e)
        buttonClickHandler(e)
    }

    let tdClassname = isActive ? "process-upload-row-section" : "inactive-process-upload-row-section"
    let inputClassname = isActive ? "choose-file-input" : "choose-file-input-inactive"
    let buttonClassname = isActive ? "upload-button" : "upload-button-inactive"

    let spanClassname = acceptedFileType == ".tar" ? "file-to-encode-filename" : "other-filename"

    let uploadIcon = isActive ? uploadIconActive : uploadIconInactive

    if (existingFile) {
        if (!isEditing) {
            return (
                <td className={tdClassname}>
                    <span className={spanClassname}>{existingFile.fileName}</span>
                    <button className="edit-button" onClick={handleToggleEditing}>Edit</button>
                </td>
            )
        }
        else {
            return (
                <td className={tdClassname}>
                    <div className="editing-container">
                        <span>Current File: </span>
                        <div>
                            <span className={spanClassname}>{existingFile.fileName}</span>
                            <button className="edit-button" onClick={handleToggleEditing}>Cancel Editing</button>
                        </div>
                        <span>Replace with:</span>
                        <div className="upload-file-container">
                            <input required accept={acceptedFileType} ref={inputFileRef} type="file" className={inputClassname} onChange={inputChangeHandler} />
                            <button className={buttonClassname} onClick={handleEditingUploadClick}><img src={uploadIcon} className="upload-icon" alt="Upload Button" /><span className="upload-button-word">Upload</span></button>
                        </div>
                    </div>
                </td>
            )
        }
    }
    else {
        return (
            <>
                <td className={tdClassname}>
                    <div className="upload-file-container">
                        <input required accept={acceptedFileType} ref={inputFileRef} type="file" className={inputClassname} onChange={inputChangeHandler} />
                        <button className={buttonClassname} onClick={buttonClickHandler}><img src={uploadIcon} className="upload-icon" alt="Upload Button" /><span className="upload-button-word">Upload</span></button>
                    </div>
                </td>
            </>
        )
    }
}

export default ProcessTDUpload