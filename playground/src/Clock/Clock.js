import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // occures after component rendering
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    // occure before DOM element destroys
    componentWillUnmount() {

    }


    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hallo Welt!</h1>
                <h2>Es ist {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}


