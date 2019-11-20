import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Post (props) {

  // method to call voteUp on props.index
  function handleUpVoteClick() {
    props.voteUp(props.index);
  }

  // method to call voteDown on props.index
  function handleDownVoteClick() {
    props.voteDown(props.index);
  }

  
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.postText}</span>
            <p><button onClick = {handleUpVoteClick} className='material-icons'>thumb_up</button> <button onClick = {handleDownVoteClick} className='material-icons'>thumb_down</button> | <span >{props.votes}</span></p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  postText: PropTypes.string,
  votes: PropTypes.number,
  voteUp: PropTypes.func,
  voteDown: PropTypes.func,
  index: PropTypes.number
};

export default Post;
