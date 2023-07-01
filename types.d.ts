export type NewsCardData = {
    author: string
    id: number
    image: string
    language: string
    sentiment: number
    source_country: string
    text: string
    tags: Tags[]
    title: string
    url: string
    publish_date: string
    news_sources: string?
}

export type TagsType = {
    keyword: string
    count: number
}
