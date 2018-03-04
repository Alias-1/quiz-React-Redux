import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function CentredContainer(props) {

    return (
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div className="centre-aligned">
                <h3>{props.heading}</h3>
                {props.children}
            </div>
        </ReactCSSTransitionGroup>
    );

}

CentredContainer.propTypes = {
    heading: PropTypes.string
};

export default CentredContainer;
