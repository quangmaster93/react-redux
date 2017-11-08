import React, { PropTypes } from 'react'
export class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes={
    children:PropTypes.object.isRequired
};