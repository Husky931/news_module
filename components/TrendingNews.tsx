import NewsCard from "./NewsCard"

type NewsCardData = {
    author: string
    id: number
    image: string
    language: string
    sentiment: number
    source_country: string
    text: string
    title: string
    url: string
}

type TrendingProp = {
    trending: NewsCardData[] | undefined
}

const TrendingNews = ({ trending }: TrendingProp) => {
    console.log(trending)

    if (!trending) return <h1>No posts to display</h1>

    return (
        <>
            {trending?.map((m, i) => (
                <NewsCard key={m.id} data={m} />
            ))}
        </>
    )
}

export default TrendingNews
