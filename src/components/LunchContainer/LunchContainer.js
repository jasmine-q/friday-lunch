import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lunchActions from '../../actions/lunch-actions';
import Button from '../Button/Button';

class LunchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lunch: {}
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this.props.actions.getLunchPlaces}></Button>
                <div></div>
            </div>
        );
    }
}

LunchContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    lunch: PropTypes.object
}

function mapStateToProps(state, props) {
    return {
        lunch: state.lunch
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(lunchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LunchContainer)
