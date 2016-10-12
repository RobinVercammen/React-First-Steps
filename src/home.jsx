import React from 'react';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.updatePokemon = this.updatePokemon.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    updatePokemon(number) {
        fetch(`http://pokeapi.co/api/v2/pokemon/${number}`).then(data => {
            data.json().then(
                pokemon => {
                    const name = pokemon.name;
                    this.setState({ name });
                }
            );
        });
    }
    updateState(event) {
        const number = event.target.value;
        this.updatePokemon(number);
    }
    componentWillMount() {
        this.setState({ name: 'loading' });
        fetch('http://pokeapi.co/api/v2/pokemon/1').then(data => {
            data.json().then(
                pokemon => {
                    const name = pokemon.name;
                    this.setState({ name });
                }
            );
        });
    }
    render() {
        return (
            <div>
                <input type="number" min="1" max="750" onBlur={this.updateState} />
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}
