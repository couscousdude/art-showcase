import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import ArtDisplay from '../ArtDisplay/ArtDisplay';
import { Parallax } from 'react-scroll-parallax';

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
        position: 'relative',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverText: {
        textAlign: 'center',
        marginTop: '25vh',
        fontWeight: '600',
        color: '#d9d9d9'
    },
    scrollContent: {
        height: '100vh',
        width: '100%',
    },
    scrollContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'hidden',
    }
});

function Main(props) {
    const classes = useStyles();
    const { onCoverImageLoad } = props;

    const coverResolutionPicker = () => {
        if (window.innerWidth <= 1920) {
            return ('1920x1080');
        } else if (window.innerWidth <= 2560) {
            return ('2560x1440')
        } else {
            return ('3840x2160')
        }
    }
    
    return (
        <div>
            <Parallax
                y={[-50, 0]}
                tagOuter='cover'
            >
                <img 
                    alt='cover' 
                    src={`https://source.unsplash.com/random/${coverResolutionPicker()}/?abstract,white`}
                    style={{
                        height: '100vh',
                        width: '100%',
                    }}
                    onLoad={onCoverImageLoad}
                />
            </Parallax>
            <div className={classes.rest}>
                <Layout>
                    <Content>
                        <ArtDisplay />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
export default Main;
Main.propTypes = {
    onCoverImageLoad: PropTypes.func,
}