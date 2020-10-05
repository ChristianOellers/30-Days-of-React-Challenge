import React, { Component } from 'react';


type componentProps = {url: string};
type componentState = {[value: string]: string};


// Todo - Implement proper 404 error
// (Currently even 404 requests have status 200)
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

