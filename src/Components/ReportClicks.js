import React, { Component } from 'react';

class ReportClicks extends Component {
    render() {
        return (
            <div>
                {(!this.props.timerActive) ? "You average clicks per second was " + parseFloat(this.props.clicks / 5) + "." : null}
            </div>
        )
    }
}

export default ReportClicks;