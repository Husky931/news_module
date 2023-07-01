import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { useWindowWidth } from "@react-hook/window-size"
import { NewsCardData } from "@/types"
import { getName } from "country-list"
import Link from "next/link"

type NewsCardProps = {
    data: NewsCardData | undefined
}

const NewsCard = ({ data }: NewsCardProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    function formatDate(dateString: string) {
        const date = new Date(dateString)
        const now = new Date()
        const diffInSeconds = Math.abs((now.getTime() - date.getTime()) / 1000)
        const diffInHours = diffInSeconds / 3600

        if (diffInHours < 24) {
            if (diffInSeconds < 60)
                return `${Math.round(diffInSeconds)} seconds ago`
            else if (diffInSeconds < 3600)
                return `${Math.round(diffInSeconds / 60)} minutes ago`
            else return `${Math.round(diffInHours)} hours ago`
        } else {
            return `${date.getMonth() + 1}/${date.getDate()}/${date
                .getFullYear()
                .toString()
                .substr(-2)}`
        }
    }

    useEffect(() => {
        setWindowWidth(width)
    }, [])
    return (
        <Box className="bg-[#ffffff] p-4 rounded-xl w-full my-4 cursor-pointer max-w-[853px] mx-auto">
            <Link href={data!.url} target="_blank">
                <div className="w-full flex justify-between text-[13px]">
                    <div className="flex">
                        <div className="text-[#9fa6b2] tracking-tighter">
                            {data && formatDate(data.publish_date)}
                        </div>
                        <div className="text-[#445b66] mx-2">
                            {getName(data!.source_country!)}
                        </div>
                    </div>
                    {windowWidth! > 639 && (
                        <div className="flex">
                            <div className="text-[#445b66]">
                                {data?.news_sources}
                            </div>
                        </div>
                    )}
                </div>

                <Box className="text-[#1a1a1a] text-[18px] sm:text-[24px] font-[500]">
                    {data?.title}
                </Box>
                <Box className="inline-flex text-[13px] bg-[#e6f5f5] gap-x-1 w-auto flex-wrap">
                    {data?.tags
                        .sort((a, b) => b.count - a.count)
                        .slice(0, 5)
                        .map((tag) => (
                            <div
                                className="flex text-[#816CFF] px-1"
                                key={tag.keyword}
                            >
                                {tag.keyword}
                                {/* : {tag.count} */}
                            </div>
                        ))}
                    <div className="flex text-[#78B53B] px-1">
                        <div>{data?.author}</div>
                    </div>
                </Box>
            </Link>
        </Box>
    )
}

export default NewsCard
