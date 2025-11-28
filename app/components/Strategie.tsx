const Strategie = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="h-[80%] w-full p-4 flex justify-center items-center">
                <div className="w-[20%] ">
                    <img src="/Frame 4 4.svg"></img>
                </div>
                <div className="w-[80%]  h-full flex flex-col justify-center bg-cover bg-center bg-no-repeat rounded-2xl" style={{ backgroundImage: "url('/Frame 76.svg')" }}>
                    <div className="w-[450px] space-y-6">
                        <h1 className="text-black text-2xl font-bold ">Facing challenges with outdated<br /> technology, limited visibility, or unclear<br /> growth strategies?</h1>
                        <p className="text-black ">BeelochChain, we blend innovative digital solutions with proven<br /> market strategies to eliminate obstacles and accelerate your <br />path to success. We don’t just offer services; we partner with<br /> you to understand your unique challenges, create customized<br /> solutions, and support you throughout your digital<br /> transformation journey.</p>
                        <button className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-medium shadow">
                            Realize your vision
                            <img src="/Background (1).svg" className="h-8 w-8" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Strategie;