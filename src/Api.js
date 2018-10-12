import React, { Component } from 'react';
import { string } from 'postcss-selector-parser';

class Api extends Component {

    state = {
        data: []
    }

    // code is invoked after the component is mounted/inserted in DOM tree
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Michael+Jordan&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                });
            });
    }

    render() {
        const { data } = this.state;
        const result = data.map((entry, index) => {
            if (typeof entry === 'object') {
                return (
                    <div>
                        <h4>info {index}</h4>
                        <ul>
                            {
                                entry.map((item, i) => <li key={i}>{item}</li>)
                            }
                        </ul>
                    </div>
                )
            }
        })

        return (
            <div>
                <h1>{data[0]}</h1>
                <ul>{result}</ul>
            </div>
        );
    }
}

export default Api;