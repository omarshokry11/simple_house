import React from "react";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./Style/About.scss";

export default function About() {

    let Employees = [
        {id: 1, img: "/img/about-01.jpg", h4: "Jennifer Soft", job: "Founder and CEO", p: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.", facebook: "fab fa-facebook", twitter: "fab fa-twitter", instagram: "fab fa-instagram"},
        {id: 2, img: "/img/about-02.jpg", h4: "Daisy Walker", job: "Executive Chef", p: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.", facebook: "fab fa-facebook", twitter: "fab fa-twitter"},
        {id: 3, img: "/img/about-03.jpg", h4: "Florence Nelson", job: "Kitchen Manager", p: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.", facebook: "fab fa-facebook", instagram: "fab fa-instagram"},
        {id: 4, img: "/img/about-04.jpg", h4: "Valentina Martin", job: "Culinary Director", p: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.", facebook: "fab fa-facebook", twitter: "fab fa-twitter", instagram: "fab fa-instagram", youtube: "fab fa-youtube"}
    ]

    return(
        <div className="about-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>About Simple House</h2>
                        <p>
                            This is about page of simple house template. You can modify and use this HTML template for your website.
                            Total 3 HTML pages included in this template. Header image has a parallax effect.
                        </p>
                    </div>
                    {Employees.map((employee) => <div className="col-md-6 col-12 items" key={employee.id}>
                        <div className="item-employee">
                            <div>
                                <Image src={employee.img} />
                            </div>
                            <div className="details">
                                <h4>{employee.h4}</h4>
                                <p className="job">{employee.job}</p>
                                <p>{employee.p}</p>
                                <div className="social">
                                    <a href="https://www.facebook.com/"><i className={employee.facebook}> </i></a>
                                    {employee.twitter ? <a href="https://twitter.com/"><i className={employee.twitter}> </i></a> : null}
                                    {employee.instagram ? <a href="https://www.instagram.com/"><i className={employee.instagram}> </i></a> : null}
                                    {employee.youtube ? <a href="https://www.instagram.com/"><i className={employee.youtube}> </i></a> : null}
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <div className="col-12">
                        <div className="item-cover"> </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="item text-center">
                            <i className="fas fa-pepper-hot"> </i>
                            <p>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                            <Link className="link link-1" to="/">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="item text-center">
                            <i className="fas fa-seedling"> </i>
                            <p>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                            <Link className="link link-2" to="/">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="item text-center">
                            <i className="fas fa-cocktail"> </i>
                            <p>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                            <Link className="link link-3" to="/">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <Image src="/img/about-06.jpg" />
                    </div>
                    <div className="col-md-6 col-12 item-bottom">
                        <h4>History of our restaurant</h4>
                        <p>
                            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula.
                            Praesent sed leo eget libero ultricies congue.
                        </p>
                        <p>
                            Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited.
                            You will need to <Link className="page" to="/">contact TemplateMo</Link> for additional permissions about our templates. Thank you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}