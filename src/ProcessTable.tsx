import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { apiURL } from "./helpers/apiEndpoints"
import type { FileInfo, ProcessTableProps, ProjectInfo } from "./helpers/types"
import ProcessTH from "./ProcessTH"
import ProcessTD from "./ProcessTD"
import ProcessTDGeneratedFile from "./ProcessTDGeneratedFile"
import ProcessTDUpload from "./ProcessTDUpload"
import ProcessTDDownload from "./ProcessTDDownload"
import BlueButton from "./BlueButton"
import './css/ProcessTable.css'

function ProcessTable({ projectRow }: ProcessTableProps) {

    const [projectInfo, setProjectInfo] = useState<ProjectInfo>(projectRow)

    // function refreshProjectInfo() {
    //     return axios.get(`${apiURL}/projects/${projectRow.id}`)
    //         .then(response => {
    //             setProjectInfo(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         console.log("polling")
    //         refreshProjectInfo()
    //     }, 5000)

    //     return () => clearInterval(intervalId)
    // }, [])

    const [tarFile, setTarFile] = useState<File>()
    const tarFileId = useRef(null)
    const tarFileUploadUrl = useRef("")
    const inputTarFileRef = useRef<HTMLInputElement>(null)
    const [xlsxFile, setXlsxFile] = useState<File>()
    const xlsxFileId = useRef(null)
    const xlsxFileUploadUrl = useRef("")
    const inputXlsxFileRef = useRef<HTMLInputElement>(null)
    const [badNozzleFile, setBadNozzleFile] = useState<File>()
    const badNozzleFileId = useRef(null)
    const badNozzleFileUploadUrl = useRef("")
    const inputBadNozzleFileRef = useRef<HTMLInputElement>(null)

    const step2Active = useRef(false)

    function handleTarFileSeclect(e: React.ChangeEvent<HTMLInputElement>) {
        setTarFile(e.target.files ? e.target.files[0] : undefined)
    }

    function handleXlsxFileSeclect(e: React.ChangeEvent<HTMLInputElement>) {
        setXlsxFile(e.target.files ? e.target.files[0] : undefined)
    }

    function handleBadNozzleFileSeclect(e: React.ChangeEvent<HTMLInputElement>) {
        setBadNozzleFile(e.target.files ? e.target.files[0] : undefined)
    }

    function returnFileFromProject(fileType: string) {
        let file: FileInfo | undefined = projectInfo.files.find((file) => file.fileType == fileType)
        return file
    }

    function getFileReceivedDate(file: FileInfo) {
        return new Date(file.events[0].timestamp).valueOf()
    }

    function returnLatestFileOfTypeFromProject(fileType: string) {
        let listOfMatchingFileTypes = projectInfo.files.filter((file) => file.fileType == fileType)
        let sortedByDateMatchingFiles = listOfMatchingFileTypes.sort((a, b) => getFileReceivedDate(b) - getFileReceivedDate(a))
        let latestFileOfType = sortedByDateMatchingFiles[0]
        return latestFileOfType
    }

    let existingTarFile = returnLatestFileOfTypeFromProject("application/x-tar")
    let existingXlsxFile = returnLatestFileOfTypeFromProject("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")

    if (existingTarFile && existingXlsxFile) {
        step2Active.current = true
    }

    function handleSubmitXlsxFile(e: any) {
        e.preventDefault()
        alert("FAKE xlsx form submitted")
    }

    function handleSubmitTarFile(e: any) {
        e.preventDefault()
        alert("FAKE tar form submitted")
    }

    function handleSubmitComputeConfig(e: any) {
        e.preventDefault()
        alert("FAKE compute triggered")
    }

    // async function handleSubmitXlsxFile(e: any) {
    //     e.preventDefault()

    //     try {
    //         await addXlsxFileToProject()
    //         await getXlsxFileUploadUrl()
    //         await uploadXlsxFile()
    //         await updateXlsxFileStatus()
    //         await refreshProjectInfo()
    //         alert("Form submitted successfully")
    //     }
    //     catch (err) {
    //         alert("Error during Excel upload");
    //         console.error(err)
    //     }
    // }

    // async function handleSubmitTarFile(e: any) {
    //     e.preventDefault()

    //     try {
    //         await addTarFileToProject()
    //         await getTarFileUploadUrl()
    //         await uploadTarFile()
    //         await updateTarFileStatus()
    //         await refreshProjectInfo()
    //         alert("Form submitted successfully")
    //     }
    //     catch (err) {
    //         alert("Error during Tar upload");
    //         console.error(err)
    //     }
    // }

    // function handleSubmitComputeConfig(e: any) {
    //     e.preventDefault()
    //     startEncoding()
    // }

    return (
        <>
            <div className="process-table-container">
                <table className="process-table">
                    <thead className="process-table-header">
                        <tr>
                            <ProcessTH isActive={true} displayText="STEP 1: Add input files" />
                            <ProcessTH isActive={step2Active.current} displayText="STEP 2: Compute Print Configurations" />
                            <ProcessTH isActive={false} displayText="STEP 3: Operator generates the Bad Nozzle File" />
                            <ProcessTH isActive={false} displayText="STEP 4: Compute Print Instructions and generate Final Print File" />
                        </tr>
                    </thead>
                    <tbody className="process-table-body">
                        <tr className="process-row">
                            <ProcessTD isActive={true} displayText="Dataset to encode" />
                            <ProcessTD isActive={step2Active.current} displayText="Run Compute Configurations" />
                            <ProcessTD isActive={false} displayText="Initial Bad Nozzle File (to use in Shannon)" />
                            <ProcessTD isActive={false} displayText="Compute the Print Instructions" />
                        </tr>
                        <tr className="process-row">
                            <ProcessTDUpload isActive={true} existingFile={existingTarFile} acceptedFileType=".tar" inputFileRef={inputTarFileRef} inputChangeHandler={handleTarFileSeclect} buttonClickHandler={handleSubmitTarFile} />
                            <td className="process-row-section bigger-row"><BlueButton buttonText={"COMPUTE PRINT CONFIGURATION"} onSubmit={handleSubmitComputeConfig} isActive={step2Active.current} /></td>
                            <ProcessTDDownload isActive={false} />
                            <td className="process-row-section bigger-row"><BlueButton buttonText={"COMPUTE PRINT INSTRUCTIONS"} onSubmit={() => { }} isActive={false} /></td>
                        </tr>
                        <tr className="process-row">
                            <ProcessTD isActive={true} displayText="" />
                            <ProcessTD isActive={step2Active.current} displayText={`Current progress: ${projectInfo.status}`} />
                            <ProcessTD isActive={false} displayText="" />
                            <ProcessTD isActive={false} displayText="Current progress: unstarted" />
                        </tr>
                        <tr className="process-row">
                            <ProcessTD isActive={true} displayText="Print Setup Worksheet" />
                            <ProcessTD isActive={step2Active.current} displayText="Files auto-generated:" />
                            <ProcessTD isActive={false} displayText="Final Bad Nozzle File (after Shannon)" />
                            <ProcessTD isActive={false} displayText="Final Print File auto-generated:" />
                        </tr>
                        <tr className="process-row">
                            <ProcessTDUpload isActive={true} existingFile={existingXlsxFile} acceptedFileType=".xlsx" inputFileRef={inputXlsxFileRef} inputChangeHandler={handleXlsxFileSeclect} buttonClickHandler={handleSubmitXlsxFile} />
                            <ProcessTDGeneratedFile isGenerated={false} displayText="Run “Compute Print Configuration” to generate these files" />
                            <ProcessTDUpload isActive={false} existingFile={undefined} acceptedFileType=".xlsx" inputFileRef={inputBadNozzleFileRef} inputChangeHandler={handleBadNozzleFileSeclect} buttonClickHandler={() => { }} />
                            <ProcessTDGeneratedFile isGenerated={false} displayText="Run “Compute Print Instructions” to generate these files" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProcessTable