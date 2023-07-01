import { useState, useEffect } from "react"
import { Box } from "@mui/system"
import SwitchTab from "@/components/SwitchTab"
import RiskNews from "@/components/RiskyNews"
import TrendingNews from "@/components/TrendingNews"
import SupplierNews from "@/components/SupplierNews"
import { dateString } from "@/utils/date"
import { NewsCardData } from "@/types"
import { TagsType } from "@/types"
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

    const trendingKeywords = [
        "Automotive",
        "Supply Chain",
        "Automobile",
        "Supplier",
        "Tier 1",
        "Tier 2",
        "Car Component",
        "Vehicle",
        "Vehicle component"
    ]
    const supplierKeywords = [
        "Tesla",
        "Porsche",
        "Aston Martin",
        "BMW",
        "Audi",
        "Daimler"
    ]

    const riskyKeywords = [
        "landslide",
        "mud-rock flow",
        "avalanche",
        "rainstorm",
        "flood",
        "drought",
        "earthquake",
        "typhoon",
        "tornado",
        "tsunami",
        "seismic sea wave"
    ]

    const analyzeKeywords = (newsData: NewsCardData[], keywords: string[]) => {
        return newsData.map((newsItem: NewsCardData) => {
            const tags: TagsType[] = []
            keywords.forEach((keyword) => {
                const regex = new RegExp(`\\b${keyword}\\b`, "gi")
                const matches = newsItem.text.match(regex)
                if (matches && matches.length > 0) {
                    tags.push({ keyword, count: matches.length })
                }
            })
            return { ...newsItem, tags }
        })
    }

    useEffect(() => {
        const getTrendingNews = async () => {
            setLoading(true)
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=automotive&language=en&sort=publish-time&sort-direction=DESC&number=100`
            )
            const result = await res.json()
            if (result.news) {
                const analyzedNews = analyzeKeywords(
                    result.news.reverse(),
                    trendingKeywords
                )
                console.log(analyzedNews)
                setTrending(analyzedNews)
            } else {
                setTrending(undefined)
            }
            setLoading(false)
        }
        getTrendingNews()
    }, [])

    useEffect(() => {
        // chaining multiple entities=ORG:BMW doesn't give results
        const getSupplierNews = async () => {
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=mitsubishi&language=en&sort=publish-time&sort-direction=DESC&number=40`
            )
            const result = await res.json()
            if (result.news) {
                const analyzedNews = analyzeKeywords(
                    result.news.reverse(),
                    supplierKeywords
                )
                console.log(analyzedNews)
                setSupplier(analyzedNews)
            } else {
                setSupplier(undefined)
            }
        }
        getSupplierNews()
    }, [])

    useEffect(() => {
        const getRiskyNews = async () => {
            const res = await fetch(
                `https://api.worldnewsapi.com/search-news?api-key=${process.env.NEXT_PUBLIC_WORLD_NEWS_API}&text=landslide&min-sentiment=-1.0&max-sentiment=0&earliest-publish-date=${dateString}&language=en&sort=publish-time&sort-direction=DESC&number=30`
            )
            const result = await res.json()
            if (result.news) {
                const analyzedNews = analyzeKeywords(
                    result.news.reverse(),
                    riskyKeywords
                )
                console.log(analyzedNews)
                setRisky(analyzedNews)
            } else {
                setRisky(undefined)
            }
        }
        getRiskyNews()
    }, [])

    if (loading)
        return (
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    p: 3,
                    px: { xs: 1, sm: 3 }
                }}
            >
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
            </Box>
        )

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                p: 3,
                px: { xs: 1, sm: 3 },
                mt: 2.5,
                width: "100%"
            }}
        >
            <SwitchTab selectedTab={selectedTab} handleClick={handleClick} />
            <Box sx={{ width: "100%" }}>
                {selectedTab === 1 && <TrendingNews trending={trending} />}
                {selectedTab === 2 && <SupplierNews supplier={supplier} />}
                {selectedTab === 3 && <RiskNews risky={risky} />}
            </Box>
        </Box>
    )
}
