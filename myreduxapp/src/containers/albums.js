import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchAlbums} from '../actions';
class Todos extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('user')===null){
            this.props.history.push('/login');
        }
        if(this.props.albums.length<=0)
            this.props.fetchAlbums();
    }

    render(){
        const {albums}=this.props;
        console.log(albums);
        return(
            <div>
                {
                albums.map((album) => {
                    return <div>{album.title}</div>
                })
            }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        albums:state.albums
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAlbums
    },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Todos);