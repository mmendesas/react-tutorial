import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: '',
            color: '',
            gender: 'male',
            age: 18
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        let { name, value, type } = event.target;

        if (type === 'checkbox') {
            value = name;
            name = 'gender';
        }

        this.setState(() => ({
            [name]: value
        }),
            () => {
                console.log(this.state)
            })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job, color, gender, age } = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="type your name here..."
                    onChange={this.handleChange}
                />

                <label>Job</label>
                <input
                    id="job"
                    type="text"
                    name="job"
                    value={job}
                    placeholder="your job title..."
                    onChange={this.handleChange}
                />
                <div className="flex-row">
                    <div className="flex-small">
                        <label>Age</label>
                        <input
                            name="age"
                            type="number"
                            value={age}
                            onChange={this.handleChange} />
                    </div>

                    <div className="flex-small">
                        <label>Gender</label>
                        <input
                            style={{ marginRight: '10px' }}
                            name="female"
                            type="checkbox"
                            checked={gender === 'female'}
                            onChange={this.handleChange} />
                        <span>Female</span>
                        <span style={{ margin: '20px' }}></span>
                        <input
                            style={{ marginRight: '10px' }}
                            name="male"
                            type="checkbox"
                            checked={gender === 'male'}
                            onChange={this.handleChange} />
                        <span>Male</span>
                    </div>

                    <div className="flex-small">
                        <label>Favorite Color</label>
                        <select
                            id="color"
                            name="color"
                            value={color}
                            onChange={this.handleChange}
                        >
                            <option value="black">Black</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                </div>

                <hr style={{ marginTop: '30px' }} />

                <input
                    id="save"
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                    style={{ marginTop: "20px", width: '150px' }}
                />
            </form>
        );
    }
}

export default Form;