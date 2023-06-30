import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import SwitchTab from "@/components/SwitchTab"
import RiskNews from "@/components/RiskNews"
import TrendingNews from "@/components/TrendingNews"
import SupplierNews from "@/components/SupplierNews"

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

export default function Home() {
    const [trending, setTrending] = useState<Array<NewsCardData> | undefined>(
        undefined
    )
    const [selectedTab, setSelectedTab] = useState<number>(1)

    const handleClick = (newValue: number) => {
        setSelectedTab(newValue)
    }

    useEffect(() => {
        // const getNews = async () => {
        //     const res = await fetch(
        //         `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=trending%20vehicle%20industry&text=supply%20chain&language=en&sort=publish-time&sort-direction=DESC&number=100`
        //     )
        //     const result = await res.json()
        //     setTrending(result.news)
        //     console.log(result, "i am result")
        // }
        const dummyNews = [
            {
                author: "EIN Presswire",
                id: 2,
                image: "https://i0.wp.com/www.headlinesoftoday.com/image",
                language: "en",
                sentiment: -0.324,
                source_country: "in",
                text: "The demand for automobile regenerative braking s",
                title: "The demand for automobile regenerative braking s",
                url: "https://www.headlinesoftoday.com/topic/press-rele"
            },
            {
                author: "EIN Presswire",
                id: 1,
                image: "https://i0.wp.com/www.headlinesoftoday.com/image",
                language: "en",
                sentiment: -0.324,
                source_country: "in",
                text: "The demand for automobile regenerative braking s",
                title: "The demand for automobile regenerative braking s",
                url: "https://www.headlinesoftoday.com/topic/press-rele"
            },
            {
                author: "EIN Presswire",
                id: 3,
                image: "https://i0.wp.com/www.headlinesoftoday.com/image",
                language: "en",
                sentiment: -0.324,
                source_country: "in",
                text: "The demand for automobile regenerative braking s",
                title: "The demand for automobile regenerative braking s",
                url: "https://www.headlinesoftoday.com/topic/press-rele"
            }
        ]
        setTrending(dummyNews)
        // getNews()
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24 px-8 sm:px-24">
            <SwitchTab selectedTab={selectedTab} handleClick={handleClick} />
            <Box className="mt-10 w-full ">
                {selectedTab === 1 && <TrendingNews trending={trending} />}
                {selectedTab === 2 && <SupplierNews />}
                {selectedTab === 3 && <RiskNews />}
            </Box>
        </main>
    )
}
