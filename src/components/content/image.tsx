// @flow

/**
 * Load external images and render as <img> element.
 *
 * Concept
 * - Use the Promise-based fetch API; simply return empty content on broken URLs
 *   - A more advanced version could introduce logging these errors somewhere
 * - Use custom types for properties, as it's required by TypeScript here
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
  
  /**
   * @todo Test 404 error handling after app-wide implementation of proper status code
   */
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

