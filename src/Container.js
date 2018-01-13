import React,  {Component} from 'react'
import { add, sub, reset, addValue, fetchFromServer} from './logic'
import { CounterAwesomeButton } from './CounterAwesomeButton'



import { connect } from 'react-redux';//aby Store komponent odświeżył się pobierając info o zmianach ze Stora
//i definiujemy funkcje które są argumentami connecta: odczyt i zapis
const mapStateToProps = state => {
    return {
        value: state.counter.counter //nazwa value jest wybrana przeze mnie...
    }
};
const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub()),
        reset: () => dispatch(reset()),
        addValue: (newValue) => dispatch(addValue(newValue)),
        fetchFromServer: () => dispatch(fetchFromServer())
    }
};





class Container extends Component {


    componentDidMount() {
        this.props.fetchFromServer();
    }

    handleInc = () => {
        this.props.add();
    };

    handleDec = () => {
        this.props.sub();
    };

    handleReset = () => {
        this.props.reset();
    };

    minusHundred = () => {
        this.props.addValue(-100);
    };

    render(){
        return(
            <div>
                <h1>Counter {this.props.value}</h1>
                <div><button onClick={this.handleInc}>ADD</button></div>
                <div><button onClick={this.handleDec}>SUB</button></div>
                <div><button onClick={this.handleReset}>RESET</button></div>
                <br />
                <CounterAwesomeButton handleSub={this.minusHundred} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
