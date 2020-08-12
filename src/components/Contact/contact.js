import React from 'react'
import Heading from '../Reuseable/Heading'


export default function Contact() {
    return (
        <section className = "py-3">
            <Heading title="Contact Us" />
             <div className="col-10 col-sm-8 mx-auto">
                 <form action="https://formspree.io/xbjzbyqj" method="post">
                     <div className="form-gorup">
                        <input type="text" name="name" id="name"
                        placeholder="Your name" className="form-control"/>
                     </div>
                     <div className="form-gorup">
                        <input type="email" 
                            name="email" 
                            id="email"
                            placeholder="Your Email"
                            className="form-control"/>
                     </div>
                     <div className="form-gorup">
                        <input type="text" 
                            name="number" 
                            id="number"
                            placeholder="Your Phone Number"
                            className="form-control"/>
                     </div>
                     <div className="form-gorup">
                        <textarea type="text" 
                            name="description" 
                            id="description"
                            placeholder="Your Message"
                            className="form-control"/>
                     </div>
                     <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                 </form>
             </div>
        </section>
    )
}
