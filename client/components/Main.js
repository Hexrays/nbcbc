import React from 'react';

import Header from './Header';

const Main = React.createClass({
    render() {
        return (
            <div >
                <Header title="NBCBC" />
                {React.cloneElement(this.props.children, { ...this.props, children: this.props.children.props.children })}
            </div>
        );
    }
});

export default Main;