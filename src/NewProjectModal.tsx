import { useState } from 'react'
import axios from 'axios'
import closeX from "/close-x.svg"
import { apiURL } from './helpers/apiEndpoints'
import type { NewProjectModalProps } from './helpers/types'
import "./css/NewProjectModal.css"

function NewProjectModal({ toggleNewProjectModal, handleSetNewProjectId }: NewProjectModalProps) {

    const [newProjectName, setNewProjectName] = useState("")

    function createProject() {
        // 1. Create project (DB + Azure container)
        if (newProjectName != "") {
            const url = `${apiURL}/projects`
            const formData = new FormData()
            formData.append('name', newProjectName)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            axios.post(url, formData, config)
                .then((response) => {
                    const responseData = response.data
                    if (responseData.id) {
                        handleSetNewProjectId(responseData.id)
                        console.log(responseData.id)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    throw new Error("Project creation failed.")
                })
        }
        else {
            throw new Error("Project name missing")
        }
    }

    function clearForm(e: any) {
        e.preventDefault()
        setNewProjectName("")
    }

    function handleSubmitProjectName(e: any) {
        e.preventDefault()
        createProject()
        clearForm(e)
        toggleNewProjectModal()
    }

    return (
        <>
            <div className="modal-container">
                <div className="new-project-modal">
                    <button className="cancel-button" onClick={toggleNewProjectModal}><img src={closeX} className="close-x" alt="Close Modal Button" /></button>
                    <form className="new-project-form" onSubmit={handleSubmitProjectName}>
                        <input required id="project-name-input" type="text" className="project-name-input" placeholder="Enter project name" value={newProjectName} onChange={e => setNewProjectName(e.target.value)} />
                        <div className="form-buttons-container">
                            <button className="clear-form-button" onClick={clearForm}>Clear</button>
                            <button type="submit" className="submit-project-name">Submit Project Name</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewProjectModal