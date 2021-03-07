import React, { Component } from 'react';
import TableIngredient from '../components/tableIngredient'


class Produit extends Component {

    constructor(props){
        super(props);

        this.state = {
            info:null
        }
    }


    // Je lance l'appel à l'api dès le chargement de la page
    // J'appelle la fonction displayInfo a laquelle je passe data en parametre
    componentDidMount=()=>{
        fetch('https://world.openfoodfacts.org/api/v0/product/'+this.props.match.params.id+'.json')
        .then((resp) => resp.json())
        .then((data) => this.displayInfo(data)); 
    }

    // fonction qui va mettre a jour le state info avec les données reçues de l'api
    // Le tableau product est passé dans info
    displayInfo=(data)=>{
        this.setState({info:data.product});
    }

    // fonction qui affiche le nutriscore si celui ci est disponible dans  l'api
    // sinon retourne un message "information non communiquée"
    nutriScore(score){
        if(score == null){
            return "information non communiquée";
        }else{
            return score;
        }
    }


    render(){
        return (
        <>
            {
                this.state.info != null && 
                    <div className="divContainer">
                        
                        <div className="divInfo">
                            <img className="imgProduct" src={this.state.info.image_front_thumb_url} alt={this.state.info.generic_name_fr}/>
                            <div className="infoProduct">
                                <h2 className="titleProduct">{this.state.info.generic_name_fr}</h2>
                                <p className="nutriScore">Nutriscore : {this.nutriScore(this.state.info.nutriscore_grade)}</p>
                            </div>
                        </div>
                        
                        <div className="divIngredients">
                            <TableIngredient ingredients={this.state.info.ingredients}/>
                        </div>
                        
                    </div>
            }
        </>
        )
    }
}

export default Produit;