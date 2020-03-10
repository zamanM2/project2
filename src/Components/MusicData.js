import React, { Component } from 'react'

export default class MusicData extends Component {
    render() {
        return (
            <div className ="music">
        ArtistName={this.props.strArtist};
        SongMood={this.props.strMood};
        ArtistBio={this.props.strBiographyEN};
            </div>
        )
    }
}
