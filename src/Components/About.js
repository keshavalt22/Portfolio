

function About() {
    return (
        <section className="section-2 padding" id="about">
            <div className="container">
                <h2 className="head">About</h2>
                <article className=" article flex wrap">
                    <div className="flex-50 center border">
                        <div className="  flex-100 my-2">
                            <span className="block"><i className="fas fa-envelope-open mr-2"></i> <strong>Email:</strong> <a href="mailto: keshavkhatri35@gmail.com">keshavkhatri35@gmail.com</a></span>
                            {/* <h3 className="sub-heading">Email:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi blanditiis deleniti explicabo consequatur nihil sunt id nobis quod ipsa.</p> */}
                        </div>
                        <div className="  flex-100 my-2">
                            <span className="block"><i className="fas fa-phone mr-2"></i><strong>Phone:</strong> +91 8627075285</span>
                            {/* <h3 className="sub-heading">Email:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi blanditiis deleniti explicabo consequatur nihil sunt id nobis quod ipsa.</p> */}
                        </div>
                        <div className="  flex-100 my-2">
                            <span className="block"><i className="fab fa-brands fa-github"></i><strong> GitHub:</strong> <a href="https://github.com/keshavalt22">https://github.com/keshavalt22</a></span>
                            {/* <h3 className="sub-heading">Email:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi blanditiis deleniti explicabo consequatur nihil sunt id nobis quod ipsa.</p> */}
                        </div>
                        <div className="flex-50  flex-100">
                            <span className="block"><i className="fas fa-school mr-2"></i><strong>Education:</strong>
                                <span className="block px-20"><strong className="font-semibold">Schooling:</strong> Army Public School Yol Cantt</span>
                                <span className="block px-20"><strong className="font-semibold">Graduation:</strong> BA From Himachal Pradesh University</span>
                                <span className="block px-20"><strong className="font-semibold">Post Graduation:</strong> MA(English) From Himachal Pradesh University</span>
                                <span className="block px-20"><strong className="font-semibold">Full-Stack Web Development:</strong> AltCampus</span>
                            </span>
                            {/* <h3 className="sub-heading">Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi blanditiis deleniti explicabo consequatur nihil sunt id nobis quod ipsa.</p> */}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}



export default About;