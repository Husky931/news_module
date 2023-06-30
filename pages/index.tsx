import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { styled } from "@mui/system"
import NewsCard from "@/components/NewsCard"
import SwitchTab from "@/components/SwitchTab"

export default function Home() {
    const [trending, setTrending] = useState<Array<NewsData>>()

    useEffect(() => {
        const getNews = async () => {
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API_2}&text=trending%20vehicle%20industry&text=supply%20chain&language=en&sort=publish-time&sort-direction=DESC&number=100`
            )
            const result = await res.json()
            setTrending(result)
            console.log(result, "i am result")
        }
        getNews()
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24 px-8 sm:px-24">
            <SwitchTab />
            <Box className="mt-10 w-full ">
                <NewsCard />
            </Box>
        </main>
    )
}
