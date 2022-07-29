import React, { Component } from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost'
import CategoryDropdownContainer from './CategoryDropdownContainer';

const GET_ALL_CATEGORIES = gql`
query {
    categories {
      name
    }
  }
`

class CategoryDropdownContainer extends Component {
    render() {
      return (
        <>
          <Query query={GET_ALL_CATEGORIES}>
          {({loading, error, data}) =>{
            if(loading) return <p> Loading...</p>
            if(error) return <p> {error}</p>
            return <Dropdown categories={data.categories} />
                
            }}
          </Query>
        </>
      )
      
    }
  }
  
  export default CategoryDropdownContainer;
