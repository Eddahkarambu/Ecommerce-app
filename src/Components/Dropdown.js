import React, { Component } from 'react';
import { Money} from './Dropdown.style'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currency: [],
        };
    }
    
    componentDidMount() {
        this.setState({                                            
          currency: [
            {id: '$', name: 'USD'},
            {id: '$', name: 'EUR'},
            {id: '$', name: 'JPY'}
          ]
        });
      }
    render() {
        const { currency } = this.state;

        let currencyList = currency.length > 0
            && currency.map((item, i) => {
          return (
              <option key={i} value={item.id}>{item.id} {item.name}</option>
          )
        }, this);
        return (
            <Money>
            <select>
            {currencyList}
          </select>
          </Money>
      );
    }
  }
  
  export default Dropdown;


  

