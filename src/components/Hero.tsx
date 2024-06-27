
function Hero({first , second}) {
    return (
        <>
        <section className="h-[200px] bg-[url('../hero_bg.png')] bg-cover bg-top-center flex justify-center">
            <article className="w-[1080px] flex flex-col items-start justify-center pl-[20px]">
                <span className="text-[20px] text-white font-[700]">{first}</span>
                <span className="text-[50px] leading-[30px] text-white font-[700]">{second}</span>
            </article>
        </section>
        </>
    )
}

export default Hero;