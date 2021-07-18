import React from 'react'
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";


class App extends React.Component {

    constructor(props) {
        console.log('App constructor')
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                // {name: 'Audi', year: 2010},
                // {name: 'Volga', year: 1991}
            ],
            pageTitle: 'Hello to our shop',
            showCars: false
        }
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

    // componentWillUpdate(nextProps, nextState){
    //     console.log('Car componentWillUpdate', nextProps, nextState)
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)
    //
    //     return prevState
    // }

    componentDidUpdate(){
        console.log('Car componentUpdate')
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('Car getSnapshotBeforeUpdate')
    // }

    // componentWillMount() {
    //     console.log('App componentWillMount')
    // }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    // componentWillUnmount() {
    //     console.log('Car componentWillUnmount')
    // }

    componentWillUnmount(){
        console.log('Car componentWillUnmount')
    }


    render() {
        console.log('Car render')
        const divStyle = {
            textAlign: 'center'
        }

        let cars = null;

        if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <Counter/>
                <hr/>
                <button
                    style={{marginTop: '20px'}}
                    className={'AppButton'}
                    onClick={this.toggleCarsHandler}>
                    Toggle Cars
                </button>
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    { cars }
                </div>
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
