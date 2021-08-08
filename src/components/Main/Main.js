import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
// import { ArrowDownOutlined } from '@ant-design/icons';
import { BackTop, Divider, Layout, Typography } from 'antd';
import ArtDisplay from '../ArtDisplay/ArtDisplay';
import { Parallax } from 'react-scroll-parallax';
import ProfileDisplay from './ProfileDisplay/ProfileDisplay';

const { Footer, Content } = Layout;

const useStyles = createUseStyles({
    root: {
        zIndex: 1
    },
    coverText: {
        textAlign: 'center',
        marginTop: '25vh',
        fontWeight: '600',
        color: '#d9d9d9'
    },
    cover: {
        marginLeft: '-calc(100vw-100%)'
    },
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
                    className={classes.cover}
                />
            </Parallax>
            <div className={classes.rest}>
                <Layout>
                    <Content>
                        <Parallax
                            y={[0, -100]}
                        >
                            <ProfileDisplay />
                        </Parallax>
                        <Parallax
                            y={[-500, 0]}
                        >
                            <Divider style={{ margin: 10, orientation: 'center' }}>
                                <Typography.Title style={{textAlign: 'center'}}>
                                    Gallery        
                                </Typography.Title>
                            </Divider>
                        </Parallax>
                        <ArtDisplay />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <BackTop />
        </div>
    )
}
export default Main;
Main.propTypes = {
    onCoverImageLoad: PropTypes.func,
}