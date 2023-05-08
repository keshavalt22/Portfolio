

function Skills() {
    return (
        <section className="section-3 padding" id="skills">
            <div className="container">
                <h2 className="head">Skills</h2>
                <div className=" grid grid-cols-4 wrap">
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-html5"></i></small>
                        </div>
                        <h3 className="sub-heading"> HTML</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-css3-alt"></i></small>
                        </div>
                        <h3 className="sub-heading"> CSS</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-css3-alt"></i></small>
                        </div>
                        <h3 className="sub-heading">SCSS</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-css3-alt"></i></small>
                        </div>
                        <h3 className="sub-heading">Tailwind CSS</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-js"></i></small>
                        </div>
                        <h3 className="sub-heading">JavaScript</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-node"></i></small>
                        </div>
                        <h3 className="sub-heading">Node.js</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-node-js"></i></small>
                        </div>
                        <h3 className="sub-heading">Express.js</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-react"></i></small>
                        </div>
                        <h3 className="sub-heading">React.js</h3>
                    </div>
                    <div>
                        <div className="circle-p-2">
                            <small><i className="fas fa-regular fa-database"></i></small>
                        </div>
                        <h3 className="sub-heading">Mongodb</h3>
                    </div>
                    {/* <div>
                        <div className="circle-p-2">
                            <small><i className="fas fa-regular fa-database"></i></small>
                        </div>
                        <h3 className="sub-heading">Mongoose.js</h3>
                    </div> */}
                    <div className="">
                        <div className="circle-p-2">
                            <small><i className="fab fa-brands fa-git"></i></small>
                        </div>
                        <h3 className="sub-heading">git</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;