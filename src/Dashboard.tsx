import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from './helpers/apiEndpoints'
import type { ProjectInfo } from './helpers/types'
import { fakeProjects } from './spec/fixtures'
import ProjectsTable from './ProjectsTable'
import "./css/Dashboard.css"

function Dashboard() {

    const [projectRows, setProjectRows] = useState<Array<ProjectInfo>>([])
    const [newProjectId, setNewProjectId] = useState("")

    useEffect(() => {
        fakeApiCall()
    }, [newProjectId])

    function fakeApiCall() {
        handleSetProjects(fakeProjects)
    }

    function realApiCall() {
        axios.get(`${apiURL}/projects`)
            .then(response => {
                handleSetProjects(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    function getProjectStartDate(project: ProjectInfo) {
        if (project.files.length > 0) {
            return new Date(project.files[0].events[0].timestamp).valueOf()
        }
        else {
            return new Date().valueOf()
        }
    }

    function setProjectsOrderingByDate(apiResponse: Array<ProjectInfo>) {
        let sortedProjects = apiResponse.sort((a, b) => getProjectStartDate(b) - getProjectStartDate(a))
        return sortedProjects
    }

    function handleSetProjects(apiResponse: Array<ProjectInfo>) {
        let orderedProjects = setProjectsOrderingByDate(apiResponse)
        setProjectRows(orderedProjects)
    }

    function handleSetNewProjectId(id: string) {
        setNewProjectId(id)
    }

    return (
        <>
            <div className='dashboard'>
                <div className='dashboard-header-group'>
                    <div className='dashboard-header'>Project Portal</div>
                    <div className='dashboard-sub-header'>View and manage your projects</div>
                </div>
                <ProjectsTable projectRows={projectRows} newProjectId={newProjectId} handleSetNewProjectId={handleSetNewProjectId} />
            </div>
        </>
    )
}

export default Dashboard