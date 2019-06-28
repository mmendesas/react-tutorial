import React, { Component } from 'react';

import Table from './components/Table';
import Form from './components/Form';
class App extends Component {

    state = {
        totalAge: 36,
        characters: [
            { name: 'Steven', age: 16, job: 'gooseberry producer', gender: 'male', color: 'green' },
            { name: 'Anna', age: 20, job: 'chief officer', gender: 'female', color: 'red' }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        const { characters, totalAge } = this.state;

        this.setState(() => ({
            characters: [...characters, character],
            totalAge: totalAge + parseInt(character.age)
        }));
    }

    render() {
        const { totalAge, characters } = this.state;

        return (
            <main className="container" style={{ width: '70%' }}>
                <h1 style={{ textAlign: 'center' }}>Form - Interactions</h1>
                <h3>Registration</h3>
                <Form handleSubmit={this.handleSubmit} />
                <h3>Overview</h3>
                <blockquote style={{ fontSize: '16px' }}>
                    <strong>{characters.length}</strong> users with a total age: <strong id="total">{totalAge}</strong>
                </blockquote>
                <h3>List of users</h3>
                <Table
                    id="myTable"
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
            </main>
        );
    }
}

export default App;