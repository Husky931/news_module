import NewsCard from "./NewsCard"
import { NewsCardData } from "@/types"

type SupplierNewsProp = {
    supplier: NewsCardData[] | undefined
}

const SupplierNews = ({ supplier }: SupplierNewsProp) => {
    if (!supplier)
        return <h1 className="text-center mt-10">No posts to display</h1>

    return (
        <>
            {supplier?.map((m, i) => (
                <NewsCard key={m.id} data={m} />
            ))}
            <div className="text-center">No more articles</div>
        </>
    )
}

export default SupplierNews
