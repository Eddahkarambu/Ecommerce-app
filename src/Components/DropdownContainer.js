import React, { Component } from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import Dropdown from './Dropdown';

const GET_ALL_CURRRENCIES = gql`
query {
  currencies
  {
    label,
    symbol
  }
}
`

class DropdownContainer extends Component {
    render() {
      return (
        <>
          <Query query={GET_ALL_CURRRENCIES}>
          {({loading, error, data}) =>{
            if(loading) return <p> Loading...</p>
            if(error) return <p> {error}</p>
            return <Dropdown currencies={data.currencies} />
                
            }}
          </Query>
        </>
      )
      
    }
  }
  
  export default DropdownContainer;


  

