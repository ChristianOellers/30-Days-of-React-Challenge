import React from 'react'
import axios from 'axios'

/** 
 * https://github.com/axios/axios
 */
class FetchAxios extends React.Component {  

  constructor (props) {
    super(props);
    
    this.state = {
      data: []
    };
  }
  
  
  fetchCountryData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  componentDidMount() {
    this.fetchCountryData();
    
    /* Alternative * /
    axios
      .get(url)
      .then((response) => {
        console.log(response);

        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });
    /* */
  }


  /**
   * &nbsp; trick - Prevent height issue on rendering either state.
   */
  render () {
    return (
      <div className='FetchAxios'>
        <p>Fetch with axios ...</p>
        <p>
          {this.state.data.length ?
          `There are ${this.state.data.length} countries in the API`
        : '' }
        &nbsp;
        </p> 
      </div>
    );
  }
}


export default FetchAxios;

