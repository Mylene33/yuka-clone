import React from "react";

class SearchBar extends React.Component {

    // Creation du state qui va gerer la mise a jour du texte rentré dans l'input
    constructor(props){
        super(props);

        this.state = {
            inputText:""
        }
    }

    // recupere le texte rentré dans l'input et l'assigne au state inputText
    handleChange = (event) => {
        this.setState({inputText:event.target.value})
    }


    render(){
        return(
            <div className="SearchBar">
                <input
                    id="inputBar"
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Entrez le nom d'un produit"
                    value={this.state.inputText}>
                </input>
                <button
                id="inputButton"
                    onClick={() => this.props.handleSearch(this.state.inputText)}
                    >Rechercher</button>
                <br></br>
            </div>
        )
    }
}
export default SearchBar;