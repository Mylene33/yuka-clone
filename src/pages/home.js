import React, { Component } from 'react';
import SearchBar from '../components/searchBar';
import {Link} from "react-router-dom";

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            item:null
        }
    }

    // Lorsque je clique sur le bouton Rechercher, je lance le fetch
    // Le fetch contacte le serveur de l'api
    // J'appelle la fonction displayItem a laquelle je passe data en parametre
    handleSearch = (inputText) => {
        fetch('https://world.openfoodfacts.org/cgi/search.pl?search_terms='+inputText+'&search_simple=1&action=process&json=1')
        .then((resp) => resp.json())
        .then((data) => this.displayItem(data)); 
    };

    // fonction qui va mettre a jour le state item avec les données reçues de l'api
    // Le tableau products est passé dans item
    displayItem = (data) => {
        this.setState({item:data.products}); 
    }


    render(){

        return (
            <>
                <SearchBar handleSearch={this.handleSearch}/>

                <div className="divContainer">
                {
                    this.state.item != null && 
                        this.state.item
                        .map((m) =>
                            <Link to={'/produit/'+m.id}>
                                <div className="divContainerCard">
                                        <div>
                                            <img height={150}  src={m.image_front_thumb_url} />
                                        </div>
                                        <div>
                                            <h2>{m.generic_name_fr}</h2>
                                        </div>
                                </div>
                            </Link>
                        )
                }
                </div>
            </>
        )
    }
}

export default Home;