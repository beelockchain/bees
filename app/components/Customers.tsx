const Customers = () => {
    return (
        <div className="w-full h-80 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-[34px] leading-10 text-black text-center mb-6">
                Chosen by<span className="text-[34px] leading-10 font-bold"style={{
                    background: "linear-gradient(90deg, #AF7211, #F6E000, #D7B007)",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                }}> 350+</span> prosperous<br />business magnates
            </h1>

            <div className="relative w-full overflow-hidden">
                <div
                    className="flex items-center gap-4"
                    style={{
                        width: "max-content",
                        animation: "scroll 12s linear infinite",
                    }}
                >
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                    <div className="w-60 h-32 rounded-lg bg-gray-100"></div>
                </div>
            </div>

        </div>
    );
};

export default Customers;
