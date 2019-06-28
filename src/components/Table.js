import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                <th>Color</th>
                <th>Options</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
                <td>{row.color}</td>
                <td>
                    <button
                        className="round-button"
                        onClick={() => props.removeCharacter(index)}
                        style={{ margin: '5px' }}>
                        Del
                    </button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { id, characterData, removeCharacter } = this.props;

        return (
            <table id={id} className="striped-table">
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;