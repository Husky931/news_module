import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { useWindowWidth } from "@react-hook/window-size"

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

const NewsCard = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [])
    return (
        <Box className="bg-[#ffffff] p-4 rounded-xl w-full">
            <div className="w-full flex justify-between text-[13px]">
                <div className="flex">
                    <div className="text-[#9fa6b2] tracking-tighter">
                        16 hours ago
                    </div>
                    <div className="text-[#445b66] mx-2">Shanghai</div>
                </div>
                {windowWidth! > 639 && (
                    <div className="flex">
                        <div className="text-[#445b66]">BBC News</div>
                    </div>
                )}
            </div>

            <Box className="text-[#1a1a1a] text-[18px] sm:text-[24px] font-[500] truncate">
                News Title way too long to fit somethinng
            </Box>
            <Box className="flex text-[13px]">
                <div className="flex text-[#816CFF]">
                    <div>ALUMINIUM</div>
                    <div>COOPER</div>
                </div>
                <div className="flex text-[#78B53B]">
                    <div>CHASIS</div>
                    <div>STEEL</div>
                </div>
            </Box>
        </Box>
    )
}

export default NewsCard
