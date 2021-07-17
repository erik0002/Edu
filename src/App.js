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
        pageTitle: 'Hello to our shop',
        showCars: false
    }

    toggleCarsHandler = () => {

        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index){
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars: cars
        })
    }

    deleteHandler(index){
        const cars = this.state.cars.concat()
        cars.splice(index, 1)
        this.setState({
            cars: cars
        })
    }


    render() {
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null;

        if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                        onDelete={this.deleteHandler.bind(this, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toggleCarsHandler}>
                    Toggle Cars
                </button>

                { cars }
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
