import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            
            <div className="banner py-3">
                <div class="container px-lg-5">
                    <div class="px-0 py-4 bg-light rounded-3 text-left">
                        <div class="mx-4">
                            <p className='mb-0' style={{fontSize:"60px", fontWeight:"300"}}>A warm welcome!</p>
                            <p class="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
