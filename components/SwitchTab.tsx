type SwitchTabType = {
    selectedTab: number
    handleClick: (newValue: number) => void
}

const SwitchTab = ({ selectedTab, handleClick }: SwitchTabType) => {
    return (
        <div className="flex bg-[#f9fafb] p-[3px] rounded-full border border-custom-green ">
            <div
                onClick={() => handleClick(1)}
                className={`px-5 py-2 tracking-tighter ${
                    selectedTab === 1
                        ? "bg-[#0d979c] text-[#f9fafb] rounded-full"
                        : "text-center"
                }`}
            >
                Industry & Trend
            </div>
            <div
                onClick={() => handleClick(2)}
                className={`px-5 py-2 ${
                    selectedTab === 2
                        ? "bg-[#0d979c] text-[#f9fafb] rounded-full"
                        : "text-center"
                }`}
            >
                Supplier
            </div>
            <div
                onClick={() => handleClick(3)}
                className={`px-5 py-2 ${
                    selectedTab === 3
                        ? "bg-[#0d979c] text-[#f9fafb] rounded-full"
                        : "text-center"
                }`}
            >
                Risk
            </div>
        </div>
    )
}

export default SwitchTab
