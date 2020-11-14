import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import Axios from 'axios'

class Home extends Component {
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
        try {
            const response = await Axios.get(`https://api.rawg.io/api/games?search=${this.state.searchQuery}`)
            this.setState({
                searchResults: response.data.results,
                searched: true,
                searchQuery: ''
            })
            console.log(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    render() {
        console.log(this.state.searchResults)
        return (
            <div>
                <div>
                    <Search 
                        onChange={this.handleChange}
                        value={this.state.searchQuery}
                        onSubmit={this.getSearchResults}
                    />
                </div>
                {this.state.searched ? (
                    <div className="search">
                        <h2>Search Results</h2>
                        <section className="search-results container-grid">
                            {this.state.searchResults.map((result) => (
                                <GameCard
                                    onClick={() =>
                                        this.props.history.push(`/GamePage/${result.id}`)
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

export default withRouter(Home)