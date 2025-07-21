import { apiURL } from "./helpers/apiEndpoints"

function DownloadTemplate() {
    const downloadUrl = `${apiURL}/projects/template`
    return (
        <>
            <div>
                <form method="GET" action={downloadUrl} target="_blank">
                    <button type="submit" className='download-template-button'>Download a setup worksheet template</button>
                </form>
            </div>
        </>
    )
}

export default DownloadTemplate