import React from "react";
import {Image} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Style/Pizza.scss";

export default function ProductSalad() {

    let products = [
        {id: 1, img: "/img/gallery/02.jpg", h4: "Fusce dictum finibus", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$45 / $55"},
        {id: 2, img: "/img/gallery/01.jpg", h4: "Aliquam sagittis", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$65 / $70"},
        {id: 3, img: "/img/gallery/08.jpg", h4: "Sed varius turpis", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$30.50"},
        {id: 4, img: "/img/gallery/05.jpg", h4: "Aliquam sagittis", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$25.50"},
        {id: 5, img: "/img/gallery/04.jpg", h4: "Maecenas eget justo", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$80.25"},
        {id: 6, img: "/img/gallery/07.jpg", h4: "Quisque et felis eros", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$20 / $40 / $60"},
        {id: 7, img: "/img/gallery/06.jpg", h4: "Sed ultricies dui", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$94"},
        {id: 8, img: "/img/gallery/03.jpg", h4: "Donec porta consequat", details: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan", price: "$15"}
    ]

    return(
        <div className="product-pizza-container">
            <div className="container">
                <div className="row">
                    {products.map((product) => <div className="col-lg-3 col-md-4 col-12" key={product.id}>
                        <div className="item">
                            <Image src={product.img} />
                            <div className="item-details">
                                <h4>{product.h4}</h4>
                                <p>{product.details}</p>
                                <p className="price">{product.price}</p>
                            </div>
                        </div>
                    </div>)}
                    <div className="col-md-6 col-12">
                        <Image src="/img/img-01.jpg" />
                    </div>
                    <div className="col-md-6 col-12">
                        <h4>Maecenas nulla neque</h4>
                        <p className="paragraph">
                            Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited.
                            You will need to <a href="/">talk to us</a> for additional permissions about our templates. Thank you.
                        </p>
                        <Link to="/about" className="read">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}