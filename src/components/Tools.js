import React from 'react';
import { connect } from 'react-redux';
import { fetchTools } from '../actions'
import Tags from './Tags';


class Tools extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const tagID = this.props.params.tagID
    dispatch(fetchTools(tagID))
  }

  componentWillReceiveProps(nextProps)  {
    var currentTag = this.props.params.tagID;
    var nextTag = nextProps.params.tagID
    if (currentTag !== nextTag) {
      const { dispatch } = this.props
      dispatch(fetchTools(nextTag))
    }
  }

  render()  {
    const { tools } = this.props
    return(
      <div>
        <Tags />
        <style>
          {"\
            .card {\
              transition: background 0.2s, color 0.2s;\
            }\
            .card:hover {\
              background-color: #1476d5;\
              color: #FFFFFF;\
            }\
          "}
        </style>
        <div className="container" style={{'margin-top': '20px'}}>
          <div className="row">
            {tools.items.map(function(tool, index){
              return (
                <div key={index} className="col-md-4 com-sm-6 col-xs-12">
                  <a href={tool.canonical_url} target="_blank" style={{'text-decoration': 'none', cursor: 'pointer'}}>
                    <div className="card" key={ index } style={{height: '220px', display: 'flex', 'align-items': 'center', 'justify-content': 'center'}}>
                      <div>
                        <img className="card-img-top" src={tool.image_url} alt="Card image cap" style={{height: '100px', display: 'block', margin: '0 auto'}}/>
                        <div className="card-block">
                          <h4 className="card-title" style={{'text-align': 'center'}}>{tool.name}</h4>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { tools } = state
  return { tools }
}

export default connect(mapStateToProps)(Tools)
