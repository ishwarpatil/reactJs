import React from 'react';

class Logout extends React.Component {
    componentWillMount() {
        localStorage.clear();
        //this.props.history.push('/login')
    };

    render() {
        return (
            <div>
            </div>
        )
    }

}

export default Logout;




