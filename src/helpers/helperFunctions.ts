export function formatDate(timeInput: string): string {
    // convert 2025-01-01T01:01:01Z to 01/01/2025
    let year = timeInput.slice(0, 4)
    let month = timeInput.slice(5, 7)
    let day = timeInput.slice(8, 10)

    let formattedDate = month + "/" + day + "/" + year

    return formattedDate
}