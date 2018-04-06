import React, { Component } from 'react';

class ReportClicks extends Component {
    render() {
        return (
            <div className="report-clicks-container">
                {(this.props.seconds === 0) && this.props.clicks + " clicks  @ " + parseFloat(this.props.clicks / 5) + " clicks per second"}
            </div>
        )
    }
}

export default ReportClicks;
