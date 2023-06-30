import NewsCard from "./NewsCard"
import { NewsCardData } from "@/types"

type TrendingProp = {
    trending: NewsCardData[] | undefined
}

const TrendingNews = ({ trending }: TrendingProp) => {
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
