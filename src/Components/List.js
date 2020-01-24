import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/type/2`).then(res => {
            this.setState({
                pokemon: res.data.pokemon.slice(0, 6)
            })
        })
    }

    render() {
        console.log(this.state.pokemon)
    const mappedPoke = this.state.pokemon.map(poke => {
        const url = poke.pokemon.url
        const length = url.length
        const id = url.slice(length - 3, length)
        return (
            <div key={id}>
            <Link to={`/pokemon/${id}`}>{poke.pokemon.name}</Link>
            </div>
        )
    })
        return (
            <div>
                {mappedPoke}
            </div>
        )
    }
}

export default List