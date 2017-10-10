import React from 'react';
import ReactDOM from 'react';

class App extends React.Component{
    componentDidMount(){
        console.log('hi')
    }
    render(){
        return (
            <div>Hello world from react</div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))