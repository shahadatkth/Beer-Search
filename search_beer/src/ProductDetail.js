import React from "react";
import { Link } from 'react-router-dom';

    class ProductDetail extends React.Component {
        constructor(props) {
            super(props);
            console.log(props);
            this.state = {
                data: this.props.location.state
            };


        }
        

    render() {



            return (
                <div className = "container">
                    <h2>Beer Details</h2>

                    <div className="card">
                        <img src ={this.state.data.data.picture} alt={this.state.data.data.name} />
                        <h1>Name: {this.state.data.data.name}</h1>
                        <p className="price"> Brewer name: {this.state.data.data.Brewer.frist} {this.state.data.data.Brewer.last}</p>
                        <p className="price"> Brewery: {this.state.data.data.Brewery}</p>
                        <p className="price"> Style: {this.state.data.data.Style}</p>
                        <p className="price"> EBC: {this.state.data.data.EBC}</p>
                        <p className="price"> IBU: {this.state.data.data.IBU}</p>
                        <p className="price"> ABV: {this.state.data.data.ABV}</p>
                        <p className="price"> Beer id: {this.state.data.data._id}</p>

                            <p>{this.state.data.data.Description}</p>
                            <p>
                                <button><Link to={"/"}>Back to Search Page</Link></button>
                            </p>
                    </div>



                </div>

            );

     
     
    }


}

export default ProductDetail;

