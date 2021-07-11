import React, { useState } from "react";
import ProductPizza from "./Block/ProductPizza";
import ProductSalad from "./Block/ProductSalad";
import ProductNoddle from "./Block/ProductNoddle";

import "./Style/Home.scss";

export default function Home() {

    const [checked, setChecked] = useState("pizza");

    return(
       <div className="home-container">
           <div className="container">
               <div className="row">
                   <div className="col-12 text-center">
                       <h2>Welcome to Simple House</h2>
                       <p>
                           Total 3 HTML pages are included in this template. Header image has a parallax effect.
                           You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.
                       </p>
                   </div>
                   <div className="col-12 buttons text-center">
                       <button className={checked === "pizza" ? "active" : ""} onClick={() => setChecked("pizza")}>Pizza</button>
                       <button className={checked === "salad" ? "active" : ""} onClick={() => setChecked("salad")}>Salad</button>
                       <button className={checked === "noddle" ? "active" : ""} onClick={() => setChecked("noddle")}>Noodle</button>
                   </div>
                   <div className="col-12">
                       {checked === "pizza" ? <ProductPizza/> : null}
                       {checked === "salad" ? <ProductSalad/> : null}
                       {checked === "noddle" ? <ProductNoddle/> : null}
                   </div>
               </div>
           </div>
       </div>
    )
}