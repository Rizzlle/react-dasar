import React, {Component} from 'react'

export default class HelloClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        console.log('hello class component dibuat')
    }

    componentDidUpdate() {
        console.log('nilai count berubah')
    }

    render() {
        return (
            <div>
                <p>Hello Class Component {this.props.name}</p>
                <p>count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Tambah Nilai</button>
            </div>
        )
    }
}