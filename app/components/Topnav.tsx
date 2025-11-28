

const Topnav = () => {
    return (
        <div className="w-full h-20 flex justify-between items-center px-14 bg-white z-50 fixed">
            <img src="/Frame 14 1.svg"></img>
            <div className="flex justify-center items-center gap-4">
                <button className="bg-gray-100 text-black px-4 py-2 rounded-md">Get started</button>
                <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-medium shadow">
                    Menu
                    <img
                        src="/Background.svg"
                        className="h-8 w-8"
                    >
                    </img>
                </button>

            </div>
        </div>
    );
}

export default Topnav;