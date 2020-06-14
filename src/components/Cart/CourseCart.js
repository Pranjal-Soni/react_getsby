import React, { Component } from 'react'
import Headding from '../Reuseable/Heading'
import Img from 'gatsby-image'

export default class CourseCart extends Component {

    constructor(props){
        super(props)
        this.state = {
            courses : props.courses.edges,
            mycourses : props.courses.edges,
        }
        
    }

    render() {
        return (
            <section className = 'py-5 '>
                <div className = 'container'>
                    <Headding title = 'Courses' />
                    <div className = 'row'>
                        {
                            this.state.mycourses.map(({node}) => {
                                return(
                                    <div
                                        key = {node.id}
                                        className = "col-11 col-md-6 d-flex mx-auto"
                                    >
                                        <Img fixed={node.image.fixed}/>
                                        <div className = 'flex-grow-1 px-3'>
                                            <div className = 'd-flex justify-content-between'>
                                                <h6 className='mb-0'>{node.title}</h6>
                                                <h6 className='mb-0 text-success'>${node.price}</h6>
                                            </div>
                                            <p className = 'text-muted'>
                                                <small>{node.description.description}</small>
                                            </p>
                                            <button className="snipcart-add-item btn btn-warning"
                                                data-item-id={node.id}
                                                data-item-price={node.price}
                                                data-item-url="https://web.learncodeonline.in/"
                                                data-item-image={node.image.fixed.src}
                                                data-item-name={node.title}
                                                data-item-custom1-name="Long message"
                                                data-item-custom1-type="textarea">
                                            Add to cart
                                            </button>
                                           
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
