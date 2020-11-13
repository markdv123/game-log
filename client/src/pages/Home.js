import React, { Component } from 'react'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import Axios from 'axios'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: [],
            searched: false
        }
    }

    getSearchResults = async (e) => {
        e.preventDefault()
        console.log('searched')
        try {
            const response = await Axios.get(`https://api.rawg.io/api/games?search=${this.state.searchQuery}`)
            this.setState({
                searchResults: response.data.results,
                searched: true,
                searchQuery: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    render() {
        console.log(this.state.searchResults)
        return (
            <div>
                <div>
                    <form>
                        <Search name="search" type="search" placeholder="Search for Games" onClick={() => {this.getSearchResults()}}/>
                    </form>
                </div>
                {this.state.searched ? (
                    <div className="search">
                        <h2>Search Results</h2>
                        <section className="search-results container-grid">
                            {this.state.searchResults.map((result) => (
                                <GameCard
                                    onClick={() =>
                                        this.props.history.push(`/games/details/${result.id}`)
                                    }
                                    key={result.id}
                                    name={result.name}
                                    rating={result.rating}
                                    image={result.background_image}
                                />
                            ))}
                        </section>
                    </div>
                ) : null}
            </div>
        )
    }
}
