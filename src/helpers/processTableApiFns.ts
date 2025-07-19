import axios from "axios"
import { apiURL } from "./apiEndpoints"
import type { ProjectInfo } from "./types"

// export function addXlsxFileToProject(xlsxFile: File | undefined, projectInfo: ProjectInfo, xlsxFileId: React.Ref<string>) {
//     // 2. Register Excel file in project
//     if (xlsxFile != undefined && xlsxFile.name != "" && projectInfo.id != "") {
//         const url = `${apiURL}/projects/${projectInfo.id}`
//         const formData = new FormData()
//         formData.append('file', xlsxFile)
//         formData.append('fileName', xlsxFile.name)
//         formData.append('fileType', "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }
//         return axios.post(url, formData, config)
//             .then((response) => {
//                 const responseData = response.data
//                 if (responseData.this_file_id) {
//                     xlsxFileId.current = responseData.this_file_id
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         // console.log(xlsxFile)
//         // console.log(xlsxFile.name)
//         // console.log(projectInfo.id)
//         throw new Error("Excel file or filename or projectId are missing")
//     }
// }

// export function addTarFileToProject() {
//     // 2. Register Tar file in project
//     if (tarFile != undefined && tarFile.name != "" && projectInfo.id != "") {
//         const url = `${apiURL}/projects/${projectInfo.id}`
//         const formData = new FormData()
//         formData.append('file', tarFile)
//         formData.append('fileName', tarFile.name)
//         formData.append('fileType', "application/x-tar")
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }
//         return axios.post(url, formData, config)
//             .then((response) => {
//                 const responseData = response.data
//                 if (responseData.this_file_id) {
//                     tarFileId.current = responseData.this_file_id
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         // console.log(tarFile)
//         // console.log(tarFile.name)
//         // console.log(projectInfo.id)
//         throw new Error("Tar file or filename or projectId are missing")
//     }
// }

// export function getXlsxFileUploadUrl() {
//     // 3. Get SAS URL for Excel file
//     if (xlsxFile != undefined && xlsxFile.name != "" && projectInfo.id != "") {
//         const url = `${apiURL}/projects/${projectInfo.id}/upload`
//         const blobName = `uploads/${xlsxFile.name}`
//         const blobNameJsonString = JSON.stringify({ blobName })
//         const config = {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }
//         return axios.post(url, blobNameJsonString, config)
//             .then((response) => {
//                 const responseData = response.data
//                 if (responseData.upload_url) {
//                     // console.log("upload url resp data")
//                     // console.log(responseData.upload_url)
//                     xlsxFileUploadUrl.current = responseData.upload_url
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         throw new Error("Excel file or filename or projectId are missing")
//     }
// }

// export function getTarFileUploadUrl() {
//     // 3. Get SAS URL for Tar file
//     if (tarFile != undefined && tarFile.name != "" && projectInfo.id != "") {
//         const url = `${apiURL}/projects/${projectInfo.id}/upload`
//         const blobName = `uploads/source/${tarFile.name}`
//         const blobNameJsonString = JSON.stringify({ blobName })
//         const config = {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }
//         return axios.post(url, blobNameJsonString, config)
//             .then((response) => {
//                 const responseData = response.data
//                 if (responseData.upload_url) {
//                     // console.log("upload url resp data")
//                     // console.log(responseData.upload_url)
//                     tarFileUploadUrl.current = responseData.upload_url
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         throw new Error("Tar file or filename or projectId are missing")
//     }
// }

// export function uploadXlsxFile() {
//     // 4. Upload Excel file to Azure
//     // console.log(xlsxFile)
//     console.log(xlsxFileUploadUrl.current)
//     if (xlsxFile != undefined && xlsxFileUploadUrl.current != "") {
//         const url = `${xlsxFileUploadUrl.current}`
//         const config = {
//             headers: {
//                 'x-ms-blob-type': 'BlockBlob'
//             }
//         }
//         return axios.put(url, xlsxFile, config)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((error) => {
//                 console.log(error)
//                 throw new Error("Excel upload failed")
//             })
//     }
//     else {
//         throw new Error("Excel file or file upload url are missing")
//     }
// }

// export function uploadTarFile() {
//     // 4. Upload Tar file to Azure
//     // console.log(tarFile)
//     console.log(tarFileUploadUrl.current)
//     if (tarFile != undefined && tarFileUploadUrl.current != "") {
//         const url = `${tarFileUploadUrl.current}`
//         const config = {
//             headers: {
//                 'x-ms-blob-type': 'BlockBlob'
//             }
//         }
//         return axios.put(url, tarFile, config)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((error) => {
//                 console.log(error)
//                 throw new Error("Tar upload failed")
//             })
//     }
//     else {
//         throw new Error("Tar file or file upload url are missing")
//     }
// }

// export function updateXlsxFileStatus() {
//     // 5. Update Excel file status
//     if (projectInfo.id != "" && xlsxFileId.current != null) {
//         const url = `${apiURL}/projects/${projectInfo.id}/${xlsxFileId.current}/events`
//         const eventData = JSON.stringify({
//             events: {
//                 timestamp: new Date().toISOString(),
//                 status: "uploaded"
//             }
//         })
//         const config = {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }
//         return axios.patch(url, eventData, config)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         throw new Error("ProjectId or fileId are missing")
//     }
// }

// export function updateTarFileStatus() {
//     // 5. Update Tar file status
//     if (projectInfo.id != "" && tarFileId.current != null) {
//         const url = `${apiURL}/projects/${projectInfo.id}/${tarFileId.current}/events`
//         const eventData = JSON.stringify({
//             events: {
//                 timestamp: new Date().toISOString(),
//                 status: "uploaded"
//             }
//         })
//         const config = {
//             headers: {
//                 'content-type': 'application/json'
//             }
//         }
//         return axios.patch(url, eventData, config)
//             .then((response) => {
//                 console.log(response)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
//     else {
//         throw new Error("ProjectId or fileId are missing")
//     }
// }

// export function startEncoding(projectInfo: ProjectInfo) {
//     fetch(`${apiURL}/projects/${projectInfo.id}/encoding`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" }
//     })
//         .then(resp => resp.json())
//         .then(data => {
//             if (data.message) {
//                 alert("Encoding DAG triggered successfully.");
//             } else {
//                 alert("Failed to start encoding.");
//                 console.error(data);
//             }
//         })
//         .catch(err => {
//             alert("Error triggering encoding DAG: " + err.message);
//             console.error(err);
//         });
// }