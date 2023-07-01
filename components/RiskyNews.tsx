import NewsCard from "./NewsCard"
import { NewsCardData } from "@/types"

type RiskyNewsProp = {
    risky: NewsCardData[] | undefined
}

const RiskyNews = ({ risky }: RiskyNewsProp) => {
    if (!risky)
        return <h1 className="text-center mt-10">No posts to display</h1>

    return (
        <>
            {risky?.map((m, i) => (
                <NewsCard key={m.id} data={m} />
            ))}
        </>
    )
}

export default RiskyNews
