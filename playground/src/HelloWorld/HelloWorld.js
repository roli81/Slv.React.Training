import React from 'react';
import { connect } from 'react-redux';




class HelloWorld extends React.Component {

    render() {
        debugger;
        return <> 
        <h1>Hallo {this.props.name}</h1>
        <ul>
            {
                this.props.posts.map(post => {
                    return <li key={post.id}>{post.title}</li>;
                })
            }
        </ul>
        </>
    }

}

const mapStateToProps = state => {
    return { posts: state.posts }
  }


export default connect(mapStateToProps)(HelloWorld)