import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className = 'my-4 py-4 bg-theme'>
            <div className = "container">
                <Heading  title={heading}/>
                <div className="row">
                <div className = "col-8 mx-auto ">
                <p className = "lead text-white mb-5">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className = "col-4">
                <div className="card bg-dark">
                <img className="card-img-top" src="https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg?cs=srgb&dl=mask-face-mask-quarantine-2020-4443538.jpg&fm=jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-white">Just Click Photos</h5>
                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning btn-block">{heading}</a>
                </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}
