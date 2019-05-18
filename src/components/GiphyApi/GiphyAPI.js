import React, {useState} from 'react'
import {connect} from 'react-redux';
import {getGif, moreGifs} from './../../actions';
import GiphyList from './GiphyList';
import InfiniteScroll from 'react-infinite-scroller';

// <InfiniteScroll
//     pageStart={0}
//     loadMore={loadFunc}
//     hasMore={true || false}
//     loader={<div key={0}>Loading ...</div>}
//     >

const GiphyAPI = ({dispatch, gif}) => {

  const [information, setInformation] = useState(false)
  const [alertMessage, setAlert] = useState(null)
  const [loading, setLoad] = useState(null)
  const [hasMoreStuff, setMore] = useState(false)

  function loadFunc(){
    let input = _input.value;
    dispatch(moreGifs(input, num));
  }

  let _input = null;
  let display = null;
  let num = 10;

  function searchGiphy(event){
    event.preventDefault();
    setInformation(false);
    setMore(false);
    if (_input.value === ''){
      return setAlert('You have to type something in!')
    }
    setLoad("Loading...")
    setAlert(null);
    dispatch(getGif(_input.value, num));
    _input = _input.value;
    setTimeout(() => {
      setInformation(true)
      setLoad(null);
    }, 1000)
  }
  /* eslint-disable */
  if(information === true){
    setTimeout(() => {
      setMore(true || false);
    }, 1000)
    display = <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMoreStuff}
        loader={<div key={0}><img className="loading" src={require('../../assets/circle-loading-gif.gif')}></img></div>}
        useWindow={false}
        >
        {Object.keys(gif).map(gifInfo => {
          let currentGif = gif[gifInfo];
          if (currentGif.url != null){
            return <GiphyList
              title={currentGif.title}
              url={currentGif.images.original.url}
              key={currentGif.id}/>
          }
        })}
        {/* eslint-enable */}
        </InfiniteScroll>
  } else {
    display = null;
  }


  return(
    <div>
      <h1>GiphyAPI</h1>
      <div className="giphyExample">
        <h1>Example</h1>
        <form onSubmit={searchGiphy}>
          <input
          ref={value => {_input = value}}/>
          <button type='submit'>Search</button>
        </form>
        {alertMessage}
        {loading}
        {display}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    gif: state.giphyState
  }
}
export default connect(mapStateToProps)(GiphyAPI);
