import React from "react";
import Head from "next/head";
import { getAuthorRouter } from "../../lib/provider/mapper";
import Layout from "../../components/PageStructure/Container/Layout";
import Image from "next/image";
import Title from "../../components/Elements/Title";
import Link from "next/link";
import Styles from "./Blog.module.scss"
import Description from "../../components/Elements/Description";
import { Container } from "react-bootstrap";
import SocialShare from "../../components/Composits/Cards/Card/SocialShare/SocialShare";


function AuthorDetails(props: any) {
    const { pagetemplate, author, params, provider } = props;
    const drupalData = author.ourTeams[0];
    const address = (drupalData?.field_address1 ? drupalData.field_address1 + ", " : "") +
        (drupalData?.field_state ? drupalData.field_state + ", " : "") +
        (drupalData?.field_country ? drupalData.field_country + ".  " : "")
    console.log(drupalData.field_skill)
    return (
        <Layout header={pagetemplate} provider={provider}>
            <Head>
                <title>{drupalData.title}</title>
            </Head>
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">{drupalData.title}</span>
                        <span className="d-none d-lg-block"><Image className="img-fluid img-profile rounded-circle mx-auto mb-2" src={drupalData.field_bio_image} height={400} width={400} alt="..." /></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid p-0 main-section">
                    {/* <!-- About--> */}
                    <section className="resume-section" id="about">
                        <div className="resume-section-content">
                            <h1 className="mb-0">
                                <span className=" text-uppercase">{drupalData.title}</span>
                            </h1>
                            <div className="subheading mb-5">
                                {address}
                                <a href={"mailto:" + drupalData.field_email}>{drupalData.field_email}</a>
                            </div>
                            <Description className={"lead mb-5"}>{drupalData.body}</Description>
                            <div className="social-icons">
                                <SocialShare content={drupalData.field_social_links} provider={'drupal'} />
                            </div>
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Experience--> */}
                    <section className="resume-section" id="experience">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Experience</h2>
                            {drupalData?.field_experience?.items ? drupalData.field_experience.items.map((experience: any, index: any) => (
                                <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-0">{experience.field_profile}</h3>
                                        <div className="subheading mb-3">{experience.field_organization}</div>
                                        <Description>{experience.field_objective}</Description>
                                    </div>
                                    <div className="flex-shrink-0"><span className="text-primary fw-bolder">{experience.field_start_date + " - " + experience.field_end_date}</span></div>
                                </div>
                            )) : ""}
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Education--> */}
                    <section className="resume-section" id="education">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Education</h2>
                            {drupalData?.field_education?.items ? drupalData.field_education.items.map((education: any, index: any) => (
                                <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="flex-grow-1">
                                        <h3 className="mb-0">{education.field_institute}</h3>
                                        <div className="subheading mb-3">COURSE : {education.field_course}</div>
                                        <div><strong>BRANCH/STREAM : </strong>{education.field_stream}</div>
                                        <p><strong>CGPA/GRADE : </strong>{education.field_result}</p>
                                    </div>
                                    <div className="flex-shrink-0"><span className="text-primary fw-bolder">{education.field_start_date + " - " + education.field_end_date}</span></div>
                                </div>
                            )) : ""}
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Skills--> */}
                    <section className="resume-section" id="skills">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Skills</h2>
                            <div className="subheading mb-3">Programming Languages & Tools</div>
                            <ul className="list-inline dev-icons">
                                <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                                <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                                <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                                <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                                <li className="list-inline-item"><i className="fab fa-react"></i></li>
                                <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                                <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                                <li className="list-inline-item"><i className="fab fa-less"></i></li>
                                <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                                <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                                <li className="list-inline-item"><i className="fab fa-grunt"></i></li>
                                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                            </ul>
                            <div className="subheading mb-3">Workflow</div>
                            <ul className="fa-ul mb-0">
                                {drupalData?.field_skill?.items ? drupalData.field_skill.items.map((skill: any, index: any) => (
                                    <li key={index}>
                                        <span className="fa-li"><i className="fas fa-check"></i></span>
                                        {skill.field_skill_title}
                                    </li>
                                )) : ""}

                            </ul>
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Interests--> */}
                    <section className="resume-section" id="interests">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Interests</h2>
                            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                        </div>
                    </section>
                    <hr className="m-0" />
                    {/* <!-- Awards--> */}
                    <section className="resume-section" id="awards">
                        <div className="resume-section-content">
                            <h2 className="mb-5">Awards and Certifications</h2>
                            <ul className="fa-ul mb-0">
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    Google Analytics Certified Developer
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    Mobile Web Specialist - Google Certification
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    1
                                    <sup>st</sup>
                                    Place - University of Colorado Boulder - Emerging Tech Competition 2009
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    1
                                    <sup>st</sup>
                                    Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    2
                                    <sup>nd</sup>
                                    Place - University of Colorado Boulder - Emerging Tech Competition 2008
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    1
                                    <sup>st</sup>
                                    Place - James Buchanan High School - Hackathon 2006
                                </li>
                                <li>
                                    <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                    3
                                    <sup>rd</sup>
                                    Place - James Buchanan High School - Hackathon 2005
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </>
        </Layout>
    );
}

export default AuthorDetails;

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    let data: any = null
    data = await getAuthorRouter(slug)
    // 404 if we does not found the data in API response
    if (null === data.data) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            author: data.data,
            pagetemplate: data.pagetemplate
        }
    }
}

