import React from "react";
import data from "../data";


function Projects() {
    return (
        <section className="section-6 padding" id="projects">
            <h2 className="head">Projects</h2>
            <div className="container grid grid-cols-3 gap-4 ">
                {data.map((d) => {
                    return (
                        <article className="flex-30 center flex-100 shadow-2xl p-5 rounded-md">
                            <img className="adaptive-img-50" src={d.img} alt="news-01" />
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                            <div className="py-2 drop-shadow-md">
                                <a
                                    href={d.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl"
                                >
                                    <i className="fab fa-github-square text-black px-2"></i>
                                </a>
                                {d.liveLink && (
                                    <a
                                        href={d.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl"
                                    >
                                        <i className="fas fa-eye brightness-200 text-black px-2"></i>
                                    </a>
                                )}
                            </div>
                            {/* <div className="box shadow-2xl"></div> */}
                        </article>
                    )

                })}
            </div>
        </section>
    )
}


export default Projects;