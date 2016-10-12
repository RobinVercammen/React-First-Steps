import React from 'react';

export default class HomeComponent extends React.Component {
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
        return (<h1>{this.state.name}</h1>);
    }
}
