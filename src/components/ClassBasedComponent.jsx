import { Component } from "react";

 class ClassBasedComp extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            userName: "",
        };
        this.increament = this.increament.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increament() {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <p className="text-center mb-5 text-4xl font-bold">
                    {this.state.count}
                </p>
                <div className="flex gap-4">
                    <button
                    onClick={this.decrement}
                    className="px-4 py-1.5 rounded bg-blue-200" 
                    >
                        decrement
                    </button>
                    <button
                    onClick={this.increament}
                    className="px-4 py-1.5 rounded bg-green-200"
                    >
                        Increment
                    </button>
                </div>
            </div>
        );
        
    }
}
export default ClassBasedComp;