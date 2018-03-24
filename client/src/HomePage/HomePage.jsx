import React from 'react';
import { Link, Redirect  } from 'react-router-dom';
// import { connect } from 'react-redux';


export default class HomePage extends React.Component {

    state = {helper: false, seeker: false};
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    handleHelperOnClick = () => {
        // some action...
        // then redirect
        this.setState({helper: true});
      }
      handleSeekerOnClick = () => {
        // some action...
        // then redirect
        this.setState({seeker: true});
      }
      
    render() {
        
        const { user, users } = this.props;
        if (this.state.helper) {
            return <Redirect push to="/login" />;
        }
        else if (this.state.seeker){
            return <Redirect push to="/login" />;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                
                <button onClick={this.handleHelperOnClick} type="button">Helper </button>
                <button onClick={this.handleSeekerOnClick} type="button">Seeker </button>
            </div>
        );
    }
}
