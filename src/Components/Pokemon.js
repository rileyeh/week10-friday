import React, { Component } from 'react'
import axios from 'axios'

const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9VVVUwMDDt7e2xsbFqamrh4eEAAACnp6ebm5u+vr6Li4v8/Pw1NTWTk5N8fHyFhYWhoaFaWlr09PRBQUFkZGTY2NjR0dHn5+dHR0dNTU3FxcUuLi60tLRubm6Ojo4SEhIcHBxCQkLFQ9IRAAACBElEQVR4nO3Y63KaQBiAYZBTOCOIYKDS9P4vsqCxLKdYmGbqx7zPDzKyuzP7joIGTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsEG/zvPa9hnOrDanUqqNFzt6zK7X+9j++zrdCi8IXcCn+YK3SrxBU65tvfMp3uJiOvcMWCkMJXQ+GE7MKzVzz9sSK68Jq78aV8skByodu0h0IfzyiHzZILf96O6XDzpqNfHE85Ibnw43aMC3XYv7aH7HLsz0gufO+2HZwyZdSP73/1PlFyYVkXRpm/KYOPQDVRcqFWXtO0Usb6QCVRdOFIEquvHok7KhwGtpfpPXE/hePAR+JuCqeBn4l7KfRnAu/XovTC7Hw2tKXAW6LwwuMvywqbxcA20TyJLkzidvtBEibL83PRz2niz7Llt7CbK7gw/vPWfZUo+DqMlc/mF4lyC+PBxbeQGARBLbUwGd1dholBZntRcn0/HFKp1+E4sE80bDO56hfL9Qq7+9dR6Kc0mvl+aJLA9uI8zY+FrTyBE1roTwfKytGtqJg8ehNaOD5bRCfLtbOZ+bsoPPuhX83P1sQWulHvwwldt2n8eZHMe2nlKapq8HKiWyWucDUKX4l3fD5nSlKhXesbhLNfJC8qMzaQFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL7fb9+XHzHtcCnjAAAAAElFTkSuQmCC'

class Pokemon extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            pokemon: {}
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    goBack = () => {
        this.setState({
            pokemon: {}
        })
        this.props.history.push('/list')
    }

    render() {
        console.log(this.props)
        const {pokemon} = this.state 
        let sprite = pokemon.sprites ? pokemon.sprites.front_default : placeholder
        return(
            <div>
                <div>{pokemon.name}</div>
                <img src={sprite} alt='pokemon' />
                <button onClick={this.goBack}>back</button>
            </div>
        )
    }
}

export default Pokemon