import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Tabs, { Tab } from 'material-ui/Tabs';
import 'typeface-roboto'
import Fridge from './Fridge';
import User from './User';

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.teal,
        marginTop: - 160,
        flexGrow: 1
    },
    media: {
        height: 220,
        width: 501
    },
});

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            content: {
                direction: 'row',
                justify: 'center',
                alignItems: 'center',
            }
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    
    render() {
        const { classes, theme } = this.props;
        return (
            <Card className = {classes.root}>
                <center><CardMedia className = {classes.media} 
                    image = "images/wallpaper4.jpg"
                    title = "Icon"
                /></center>
                <CardContent>
                <Tabs value={this.state.value} onChange={this.handleChange}
                    indicatorColor = {theme.palette.background.teal} textColor = {theme.palette.background.teal} fullWidth>
                    <Tab label = "User" />
                    <Tab label = "Fridge" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}>
                    <TabContainer dir={theme.direction}>
                        <User />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Fridge />
                    </TabContainer>
                </SwipeableViews>
                    
                </CardContent>
            </Card>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Form);