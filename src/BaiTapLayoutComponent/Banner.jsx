import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (

            <div classname="banner py-3">
                <div className="container px-lg-5">
                    <div className="px-0 py-4 bg-light rounded-3 text-left">
                        <div className="mx-4">
                            <p classname="mb-0" style={{ fontsize: "60px", fontweight:"300"}}>A warm welcome!</p>
                        <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>
</div >

           
        )
    }
}
