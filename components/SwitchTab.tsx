import { Box } from "@mui/system"

type SwitchTabType = {
    selectedTab: number
    handleClick: (newValue: number) => void
}

const SwitchTab = ({ selectedTab, handleClick }: SwitchTabType) => {
    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "#f9fafb",
                padding: "3px",
                borderRadius: "50px",
                borderColor: "#0d979c",
                borderWidth: "1px",
                borderStyle: "solid"
            }}
        >
            <Box
                onClick={() => handleClick(1)}
                sx={{
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    letterSpacing: "-0.025em",
                    backgroundColor:
                        selectedTab === 1 ? "#0d979c" : "transparent",
                    color: selectedTab === 1 ? "#f9fafb" : "black",
                    borderRadius: "50px",
                    textAlign: "center"
                }}
            >
                Industry & Trend
            </Box>
            <Box
                onClick={() => handleClick(2)}
                sx={{
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    letterSpacing: "-0.025em",
                    backgroundColor:
                        selectedTab === 2 ? "#0d979c" : "transparent",
                    color: selectedTab === 2 ? "#f9fafb" : "black",
                    borderRadius: "50px",
                    textAlign: "center"
                }}
            >
                Supplier
            </Box>
            <Box
                onClick={() => handleClick(3)}
                sx={{
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                    letterSpacing: "-0.025em",
                    backgroundColor:
                        selectedTab === 3 ? "#0d979c" : "transparent",
                    color: selectedTab === 3 ? "#f9fafb" : "black",
                    borderRadius: "50px",
                    textAlign: "center"
                }}
            >
                Risk
            </Box>
        </Box>
    )
}

export default SwitchTab
