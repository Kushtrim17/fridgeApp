import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '80vw',
    },
    button: {
        width: '80vw',
        marginTop: 50,
        margin: theme.spacing.unit,
    },
});

class Fridge extends React.Component {
    state = {
        fridgeID: '',
        fridgePass: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    logFridgeIn = () => {
        alert('we want to log you in ..');
    }

    render() {
        const { classes} = this.props;

        return (
            <form className = {classes.container} noValidate autoComplete = "off">
                <TextField id = "fridgeID" label = "Fridge ID"
                    className = {classes.textField}
                    value = {this.state.fridgeID}
                    onChange = {this.handleChange('fridgeID')}
                    margin = "normal"
                />
                <TextField
                    id = "fridgePass"
                    label = "Fridge Password"
                    className = {classes.textField}
                    onChange = {this.handleChange('fridgePass')}
                    margin = "normal"
                />
                <Button variant = "raised" className = {classes.button} color = "primary" onClick = {this.logFridgeIn}>
                    Login
                </Button>
            </form>
        );
    }
}

Fridge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fridge); 