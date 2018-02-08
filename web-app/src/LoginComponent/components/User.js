import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
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
    }
});

class User extends React.Component {
	state = {
		username: '',
		password: '',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	logUserIn = () => {
		alert('log user in ..');
	}

	render() {
		const { classes } = this.props;

		return (
			<form className = {classes.container} noValidate autoComplete = "off">
				<TextField id = "username" label = "Username" className = {classes.textField}
					value = {this.state.username} onChange = {this.handleChange('username')} margin = "normal"
				/>
				<TextField id = "password" label = "Password"
					className = {classes.textField} margin = "normal"
				/>
				<Button variant = "raised" className = {classes.button} color = "primary" onClick = {this.logUserIn}>
					Login
				</Button>
			</form>
		);
	}
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);