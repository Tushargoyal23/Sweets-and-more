import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="bd-footer py-1 mt-5 bg-success">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <Link className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" to="/" aria-label="Bootstrap">
                                <span className="fs-5">GoFood</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}
