import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';
import { BackTop, Divider, Layout, Typography } from 'antd';
import ArtDisplay from '../ArtDisplay/ArtDisplay';
import { Parallax } from 'react-scroll-parallax';
import ProfileDisplay from './ProfileDisplay/ProfileDisplay';
import blank from '../../assets/blank.png';
import FastAverageColor from 'fast-average-color';
import invert from 'invert-color';

const { Footer, Content } = Layout;

const useStyles = createUseStyles({
    root: {
        zIndex: 1
    },
    coverText: {
        // textAlign: 'center',
        // marginTop: '25vh',
        fontSize: 100,
        fontWeight: '600',
        color: 'linear-gradient(#e66465, #9198e5)'
    },
    cover: {
        marginLeft: '-calc(100vw-100%)'
    },
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    container: {
        position: 'relative',
        textAlign: 'center',
        color: 'transparent',
    }
});

const fac = new FastAverageColor();

function Main(props) {
    const classes = useStyles();
    const { onCoverImageLoad, coverImageUrl } = props;
    const [coverImage, setCoverImage] = React.useState(coverImageUrl);
    const [arrowColor, setArrowColor] = React.useState('');

    const toObjectUrl = async url => {
        const response = await fetch(url);
        return URL.createObjectURL(await response.blob());
    }

    const coverResolutionPicker = () => {
        if (window.innerWidth <= 1920) {
            return ('1920x1080');
        } else if (window.innerWidth <= 2560) {
            return ('2560x1440')
        } else {
            return ('3840x2160')
        }
    }

    React.useEffect(() => {
        if (!coverImageUrl) {
            const getCoverImage = async (resolution, onLoad) => {
                const coverImageB64 = await toObjectUrl(`https://source.unsplash.com/random/${resolution}/?abstract,white`); // NOSONAR
                    // .then(() => {
                    //     onLoad
                    //         ? onLoad()
                    //         : void(0)  
                    // }); // NOSONAR
                const coverImageColorAvg = await fac.getColorAsync(coverImageB64);
                setArrowColor(invert(coverImageColorAvg.hex));
                setCoverImage(coverImageB64);
                onCoverImageLoad(coverImageB64);        
            }
            getCoverImage(coverResolutionPicker(), onCoverImageLoad);
        } else {
            const getArrowColor = async () => {
                const coverImageColorAvg = await fac.getColorAsync(coverImage);
                setArrowColor(invert(coverImageColorAvg.hex));
            }
            getArrowColor();
        }
        // eslint-disable-next-line
    }, [coverImageUrl]);
    
    return (
        <div>
            <div className={classes.container}>
                <Parallax
                    y={[-50, 0]}
                    tagOuter='span'
                >
                    <img 
                        alt='cover' 
                        // src={`https://source.unsplash.com/random/${coverResolutionPicker()}/?abstract,white`}
                        src={coverImage ? coverImage : blank}
                        style={{
                            height: '100vh',
                            width: '100%',
                        }}
                        // onLoad={onCoverImageLoad}
                        className={classes.cover}
                    />
                    <div className={classes.centered}>
                        <Parallax
                            y={[-100, 100]}
                        >
                            <Typography.Title 
                                style={{
                                    fontSize: 100,
                                }}
                            >
                                <ArrowDownOutlined style={{ color: arrowColor ? arrowColor : 'transparent' }} />
                            </Typography.Title>
                        </Parallax>
                    </div>
                </Parallax>

            </div>
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
    coverImageUrl: 'string'
}