import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="container pb-3 px-lg-5 item">
                <div class="card-deck row">
                    <div class=" card col-3 p-0">

                        <div style={{fontSize:"30px", color:"gray", height: "150px", width: "100%", backgroundColor: "rgb(204,204,204)" }} className="d-flex justify-content-center align-items-center  card-img-top">500 x 325</div>

                        <div class="text-center card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="text-center card-footer" >
                            <a class="btn btn-primary btn-lg" href="#!" style={{fontSize:"15px"}}>Find Out More!</a>
                        </div>
                    </div>
                    <div class=" card col-3 p-0">
                        <div style={{fontSize:"30px", color:"gray", height: "150px", width: "100%", backgroundColor: "rgb(204,204,204)" }} className="d-flex justify-content-center align-items-center  card-img-top">500 x 325</div>
                        <div class="text-center card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="text-center card-footer" >
                            <a class="btn btn-primary btn-lg" href="#!" style={{fontSize:"15px"}}>Find Out More!</a>
                        </div>
                    </div>
                    <div class=" card col-3 p-0">
                        <div style={{fontSize:"30px", color:"gray", height: "150px", width: "100%", backgroundColor: "rgb(204,204,204)" }} className="d-flex justify-content-center align-items-center  card-img-top">500 x 325</div>
                        <div class="text-center card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="text-center card-footer" >
                            <a class="btn btn-primary btn-lg" href="#!" style={{fontSize:"15px"}}>Find Out More!</a>
                        </div>
                    </div>
                    <div class=" card col-3 p-0">
                        <div style={{fontSize:"30px", color:"gray", height: "150px", width: "100%", backgroundColor: "rgb(204,204,204)" }} className="d-flex justify-content-center align-items-center  card-img-top">500 x 325</div>
                        <div class="text-center card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer.</p>
                        </div>
                        <div class="text-center card-footer" >
                            <a class="btn btn-primary btn-lg" href="#!" style={{fontSize:"15px"}}>Find Out More!</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
