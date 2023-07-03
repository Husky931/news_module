import NewsCard from "./NewsCard"
import { NewsCardData } from "@/types"
import { Box } from "@mui/system"

type TrendingProp = {
    trending: NewsCardData[] | undefined
}

const TrendingNews = ({ trending }: TrendingProp) => {
    if (!trending)
        return <h1 className="text-center mt-10">No posts to display</h1>

    return (
        <>
            {trending?.map((m, i) => (
                <NewsCard key={m.id} data={m} />
            ))}
            <div className="text-center">No more articles</div>
        </>
    )
}

export default TrendingNews
