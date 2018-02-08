import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import 'typeface-roboto'
import Form from './components/Form';

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
    },
    upperDiv: {
        marginLeft: -10,
        marginTop: -10,
        width: '100vw',
        height: '30vh',
        //backgroundColor: '#7B1FA2', purple
        backgroundColor: '#00796B',
    },
    lowerDiv: {
        marginLeft: -10,
        marginTop: -10,
        width: '100vw',
        minHeight: '70vh',
        backgroundColor: '#F5F5F5',
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
            }
        };
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className = {classes.root}>
                <div className = {classes.upperDiv}></div>
                <div className = {classes.lowerDiv}>
                    <Grid container className = {classes.content} alignItems = {this.state.content.alignItems} 
                        direction = {this.state.content.direction} justify = {this.state.content.justify}>
                        <Grid item xs = {10} md = {4}>
                            <Form />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);