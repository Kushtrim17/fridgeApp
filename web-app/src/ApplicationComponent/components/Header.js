import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import 'typeface-roboto';
import AppBar from 'material-ui/AppBar';
import classNames from 'classnames';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    root: {
        marginLeft: -10,
        marginTop: -10,
        width: '100vw',
        height: '99vh',
        backgroundColor: '#F5F5F5',
    },
    content: {
        marginLeft: 10,
        marginTop: 10,
        flexGrow: 1
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
				<Toolbar disableGutters={!this.state.open}>
					<IconButton
						color = "inherit"
						aria-label = "open drawer"
						onClick = {this.handleDrawerOpen}
						className = {classNames(classes.menuButton, this.state.open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant = "title" color = "inherit" noWrap>
						Fridge App
					</Typography>
				</Toolbar>
			</AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);