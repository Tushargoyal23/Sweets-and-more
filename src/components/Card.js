import React from 'react'

export default function card() {
    return (
        <div>
            <div className="card mt-3 " style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src="https://source.unsplash.com/random/300×300/?burger" className="card-img-top" alt="..." style={{maxHeight : "200px"}} />
                <div className="card-body">
                    <h5 className="card-title">Burger</h5>
                    <p className="card-text">Try once enjoy ever</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="large">large</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
