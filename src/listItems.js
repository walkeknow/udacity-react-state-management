import React, {Component} from 'react'

class ListItems extends Component {
  render() {
    return (
      <ol className="userList">
      {this.props.profiles.map(profile => {
        const movies = this.props.movies
      	const users = this.props.users
        const userID = profile.userID
        const username = users[userID].name
    	const movieID = profile.favoriteMovieID
    	const movie = movies[movieID].name
      	return <li key={profile.id}>{username}'s favorite movie is {movie}</li> 
      })}
      </ol>
    )
  }
}

export default ListItems
      