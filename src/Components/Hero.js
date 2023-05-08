import { Typewriter } from "react-simple-typewriter";

function Hero() {
    return (
        <section className="hero padding" id="hero">
            <article className="container flex reverse wrap">
                <div className="flex-45 cente flex-100 center pl-12">
                    <div className="wrapper">
                        <h1 className="head">Hi <br /> I Am <strong className="pink">Keshav Khatri</strong></h1>
                        {/* <h2 className="font-bold">I Am</h2> */}
                        <h2 className="font-3xl inline font-bold">I Am, A {" "}
                            <span className="text-3xl">
                                <Typewriter
                                    words={["Full Stack Developer", "Web Developer"]}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Hero;