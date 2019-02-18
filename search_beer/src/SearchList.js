import React from "react";
import { Link } from 'react-router-dom';

class RenderCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };

    }

    onClickF = (event) => {
        console.log("rr :" +event);
        this.setState({
            data:this.props.SearchBeer.find(e=>e.index === event.index)
        });
        console.log(this.props.SearchBeer.find(e=>e.index === event.index));
    }

    render() {
        console.log(this.props.SearchBeer);
        if (Object.keys(this.props.SearchBeer).length) {
            return this.props.SearchBeer.map((objectss, ind) => {
                    const name = objectss.name;
                    const brewer = objectss.Brewery;
                    const brewer_name = `${objectss.Brewer.first} ${objectss.Brewer.last}`;
                    const style = objectss.Style;
                    const ibu = objectss.IBU;
                    const ebc = objectss.EBC;
                    const abv = objectss.ABV;
                    const editLink = `/product/${ind}`;


                    return (

                        <tr key={ind} onClick={e => this.onClickF(objectss)}>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{name}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{brewer}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{brewer_name}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{style}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{ibu}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{ebc}</Link></td>
                            <td><Link to ={{
                                pathname: editLink,
                                state: {
                                    data:objectss
                                }
                            }} >{abv}</Link></td>
                        </tr>
                    );
                }
            );
        } else {
            return null;
        }


    }
}

class SearchList extends React.Component {

    render() {


      //  <ProductDetail onDetailBeer={this.props.onSearchBeer}/>
        if(Object.keys(this.props.onSearchBeer).length){
            return (
                <div className = "header-top">
                    <h2>Beer List</h2>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brewer</th>
                            <th>Brewer Name</th>
                            <th>Style</th>
                            <th>IBU</th>
                            <th>EBC</th>
                            <th>ABV</th>
                        </tr>
                        </thead>
                        <tbody>
                        <RenderCity SearchBeer={this.props.onSearchBeer}></RenderCity>
                        </tbody>
                    </table>


                </div>

            );
        }else{
            return null;
        }
    }


}

export default SearchList;



