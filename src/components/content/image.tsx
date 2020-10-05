// @flow

/**
 * @todo Test 404 error handling after app-wide implementation of proper status code
 */

import React, { Component } from 'react';


type componentProps = {url: string};
type componentState = {[value: string]: string};


class Image extends Component<componentProps, componentState> {
  #url: string
  state: componentState

  constructor(props: any) {
    super(props)
    
    this.#url = props.url
    this.state = {url: ''}
  }
  
  componentDidMount() {
    fetch(this.#url)
      .then(obj => this.setState({url: obj.url}) )
      .catch(err => { throw new Error ('Could not fetch image') })
  }

  render() {
    const url:string = this.state.url;
    
    return (url) ? <img src={this.state.url} alt='' /> : <></>
  }
}


export default Image

