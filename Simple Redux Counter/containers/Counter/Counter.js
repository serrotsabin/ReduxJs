import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';
import c from '../../Constants'

const mapStateToProps = (state) =>{
    return {
        counter:state.counter.count,
        results:state.results.results
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        increment: ()=> dispatch({
            type: c.INCREMENT,
            payload: 1 
        }),
        decrement: ()=> dispatch({
            type:c.DECREMENT,
            payload: 1 
        }),
        add: ()=> dispatch({
            type: c.ADD,
            payload: 5
        }),
        sub: (a)=> dispatch({
            type: c.SUBSTRACT,
            payload: a
        }),
        str: (a)=>dispatch({
            type: c.STORE,
            payload:a        
        }),
        rmv: (a)=>dispatch({
            type: c.REMOVE,
            payload:a        
        }),
    }
}

class Counter extends Component {

    render () {
        let liItems = this.props.results.map((arr,key)=>{
            return(
                <li 
                onClick={()=>this.props.rmv(key)}
                key={key}>{arr}</li>
            )
        })
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.add }/>
                <CounterControl label="Subtract 5" clicked={()=>this.props.sub(10)} />
                <hr/>
                <button
                    onClick={()=>this.props.str(this.props.counter)}
                >Store Result</button>
                <ul>
                    {liItems}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);