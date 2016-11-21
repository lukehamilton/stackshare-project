import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router';
import { fetchTags } from '../actions'

class Tags extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTags())
  }

  render() {
    const { tags } = this.props
    return (
      <div className="container">
        <div className="row">
          <ul className="list-inline" style={{'text-align': 'center'}}>
            {tags.items.map(function(tag, index){
              var link = "/tags/" + tag.id + '/tools';
              return (
                <li className="list-inline-item" key={ index }>
                  <Link to={link} className="btn btn-outline-primary" style={{margin: '5px'}}>{ tag.name }</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { tags } = state
  return { tags }
}

export default connect(mapStateToProps)(Tags)
