import React ,{Component}from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                <h1>This is the footer using Stateful Class Component {this.props.name}</h1>
            </div>
        )
    }
}

export default Footer;
