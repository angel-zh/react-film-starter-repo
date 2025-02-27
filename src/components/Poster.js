import React, { Component } from 'react'

class Poster extends Component {
    render () {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return (
            <img src={posterUrl} alt={this.props.film.title} />
        )
    }
}

export default Poster