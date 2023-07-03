//30 days - we used it to fetch results only for the last month

let date = new Date()
date.setDate(date.getDate() - 30)
export const dateString = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
)
    .toISOString()
    .split("T")[0]
