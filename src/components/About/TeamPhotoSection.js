import React from 'react'

export default function TeamPhotoSection() {
    return (
        <div className="row">
            <div className='col-10 col-sm-10 mx-auto'>
            <div class="card-group row">
              <div className="card col-4">
                <img className="card-img" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=adult-attractive-beautiful-beauty-415829.jpg&fm=jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Member Name</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card c0l-4">
                <img className="card-img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title" align="center">Member Name</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card col-4">
                <img className="card-img" src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Member Name</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}
