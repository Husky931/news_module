import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { useWindowWidth } from "@react-hook/window-size"
import { NewsCardData } from "@/types"

type NewsCardProps = {
    data: NewsCardData | undefined
}

const NewsCard = ({ data }: NewsCardProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [])
    return (
        <Box className="bg-[#ffffff] p-4 rounded-xl w-full my-4">
            <div className="w-full flex justify-between text-[13px]">
                <div className="flex">
                    <div className="text-[#9fa6b2] tracking-tighter">
                        {data?.publish_date}
                    </div>
                    <div className="text-[#445b66] mx-2">
                        {data?.source_country}
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

            <Box className="text-[#1a1a1a] text-[18px] sm:text-[24px] font-[500] truncate">
                {data?.title}
            </Box>
            <Box className="inline-flex text-[13px] bg-[#e6f5f5] gap-x-1 w-auto">
                <div className="flex text-[#816CFF] px-1">
                    <div>ALUMINIUM</div>
                </div>
                <div className="flex text-[#78B53B] px-1">
                    <div>CHASIS</div>
                </div>
            </Box>
        </Box>
    )
}

export default NewsCard
