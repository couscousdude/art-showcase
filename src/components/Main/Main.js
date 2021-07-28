import React from 'react';
import PlaceHolderLongText from '../PlaceHolderLongText.js';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import mobileCheck from '../../utils/mobileCheck';
import sections from '../../assets/sections.js';

const { Header, Footer, Sider, Content } = Layout;

const useStyles = createUseStyles({
    root: {
        zIndex: 1
    },
    rest: {
        // backgroundSize: 'cover'
    },
    coverTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    coverText: {
        textAlign: 'center',
        marginTop: '25vh',
        fontWeight: '600',
        color: '#d9d9d9'
    },
});

function Main(props) {
    const classes = useStyles();
    const { title, yOffset } = props;
    
    return(
        <div>
            <div 
                className={'Cover'} 
                style={window.innerWidth > 768 ? {backgroundPositionY: yOffset * 0.7} : {}}
            >
                <div className={classes.coverTextContainer}>
                    <h1 className={classes.coverText}>{title}</h1>
                    <h2 style={{color: '#d9d9d9'}}>
                        <ArrowDownOutlined />
                    </h2>
                </div> 
            </div>
            <div className={classes.rest}>
                <Layout>
                    <Content>
                        <PlaceHolderLongText />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
export default Main;
Main.propTypes = {
    title: PropTypes.string.isRequired,
    yOffset: PropTypes.number
}
Main.defaultProps = {
    onNavTop: () => void 0,
    yOffset: 0
}