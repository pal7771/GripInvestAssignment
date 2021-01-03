import React, { Component } from 'react'
import Select from 'react-select';


export class Header extends Component {
    state = {
        selectedOption: null,
        options: []
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    componentDidMount() {
        
        //fetch assets
        fetch("http://localhost:3001/assets")
        .then(res => res.json())
        .then(
            
            (result) => {
                this.state.options.push( { value: 'assets', label: 'Select Assets', color: '#0052CC', isDisabled: true } );
                for(let entry in result) {
                    let obj =   { value: result[entry]['Name'], label: result[entry]['Name'] };
                    this.state.options.push( obj );
                }
            },

            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )

        //fetch clients
        fetch("http://localhost:3001/clients")
        .then(res => res.json())
        .then(
            
            (result) => {
                this.state.options.push( { value: 'clients', label: 'Select Clients', color: '#0052CC', isDisabled: true } );
                for(let entry in result) {
                    let obj =   { value: result[entry]['Name'], label: result[entry]['Name'] };
                    this.state.options.push( obj );
                }
            },

            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )

        //fetch orders
        fetch("http://localhost:3001/orders")
        .then(res => res.json())
        .then(
            
            (result) => {
                this.state.options.push( { value: 'orders', label: 'Select Orders', color: '#0052CC', isDisabled: true } );
                for(let entry in result) {
                    let obj =   { value: result[entry]['Name'], label: result[entry]['Name'] };
                    this.state.options.push( obj );
                }
            },

            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
                isMulti={true}
            />
        )
    }
}
        
export default Header
