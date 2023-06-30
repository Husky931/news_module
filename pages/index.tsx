import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import SwitchTab from "@/components/SwitchTab"
import RiskNews from "@/components/RiskyNews"
import TrendingNews from "@/components/TrendingNews"
import SupplierNews from "@/components/SupplierNews"
import { dateString } from "@/utils/date"
import { NewsCardData } from "@/types"
import { ColorRing } from "react-loader-spinner"

export default function Home() {
    const [trending, setTrending] = useState<Array<NewsCardData> | undefined>(
        undefined
    )
    const [supplier, setSupplier] = useState<Array<NewsCardData> | undefined>(
        undefined
    )
    const [risky, setRisky] = useState<Array<NewsCardData> | undefined>(
        undefined
    )

    const [selectedTab, setSelectedTab] = useState<number>(1)

    const handleClick = (newValue: number) => {
        setSelectedTab(newValue)
    }
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getTrendingNews = async () => {
            setLoading(true)
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=trending%20vehicle%20industry&text=supply%20chain%20trending&language=en&sort=publish-time&sort-direction=DESC&number=100`
            )
            const result = await res.json()
            setTrending(result.news)
            setLoading(false)
        }
        getTrendingNews()
    }, [])
    useEffect(() => {
        // chaining multiple entities=ORG:BMW doesn't give results
        const getSupplierNews = async () => {
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=tesla&text=bmw&text=Toyota&text=mercedes%20benz&text=ford&&language=en&sort=publish-time&sort-direction=DESC&number=100`
            )
            const result = await res.json()
            setSupplier(result.news)
        }
        getSupplierNews()
    }, [])

    useEffect(() => {
        const getRiskyNews = async () => {
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=automobile%20industry&min-sentiment=-1.0&max-sentiment=0.2&earliest-publish-date=${dateString}&language=en&sort=publish-time&sort-direction=DESC&number=100`
            )
            const result = await res.json()
            setRisky(result.news)
        }
        getRiskyNews()
    }, [])

    if (loading)
        return (
            <main className="flex min-h-screen flex-col items-center justify-start p-24 px-8 sm:px-24">
                <SwitchTab
                    selectedTab={selectedTab}
                    handleClick={handleClick}
                />
                <ColorRing
                    visible={true}
                    height="160"
                    width="160"
                    ariaLabel="blocks-loading"
                    colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87"
                    ]}
                />
            </main>
        )

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24 px-8 sm:px-24">
            <SwitchTab selectedTab={selectedTab} handleClick={handleClick} />
            <Box className="mt-10 w-full ">
                {selectedTab === 1 && <TrendingNews trending={trending} />}
                {selectedTab === 2 && <SupplierNews supplier={supplier} />}
                {selectedTab === 3 && <RiskNews risky={risky} />}
            </Box>
        </main>
    )
}
