import React from 'react'
import './App.css';
import Car from './Car/Car'

class App extends React.Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2010},
            {name: 'Volga', year: 1991}
        ],
        pageTitle: 'Hello to our shop'
    }

    changeTitleHandler = (newTitle) => {

        this.setState({pageTitle: newTitle})
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        const divStyle = {
            textAlign: 'center'
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <input type="text" onChange={this.handleInput}/>
                <button
                    onClick={this.changeTitleHandler.bind(this, 'Changed')}>
                    Change Title
                </button>

                { this.state.cars.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={() => this.changeTitleHandler(car.name)}
                        />
                    )
                })}
            </div>
        );
        // return React.createElement(
        //     'div',
        //     {
        //         className: 'App'
        //     },
        //     React.createElement(
        //         'h1',
        //         null,
        //         'Hello world'
        //     ),
        //   React.createElement(
        //       'p',
        //       null,
        //       'Vasya Pupkin'
        //   )
        // )
    }
}

export default App;
