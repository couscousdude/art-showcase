import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import sections from '../../assets/sections.js';
import ArtDisplay from '../ArtDisplay/ArtDisplay';

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
    const { title, yOffset, onCoverImageLoad, coverImage: coverImageUrl } = props;
    const [coverImage, setCoverImage] = React.useState(
        coverImageUrl
    );

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
                const res = await toObjectUrl(`https://source.unsplash.com/random/${resolution}/?abstract,white`); // NOSONAR
                    // .then(() => {
                    //     onLoad
                    //         ? onLoad()
                    //         : void(0)  
                    // }); // NOSONAR
                setCoverImage(res);
                onLoad(res);        }
            getCoverImage(coverResolutionPicker(), onCoverImageLoad);

        }
    }, [coverImageUrl]);
    
    return (
        <div>
            <div 
                className={'Cover'} 
                style={window.innerWidth > 768
                    ? {
                        backgroundPositionY: yOffset * 0.7, 
                        backgroundImage: `url("${coverImage}")`
                    } 
                    : { backgroundImage: `url("${coverImage}")`}}
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
    title: PropTypes.string.isRequired,
    yOffset: PropTypes.number,
    onCoverImageLoad: PropTypes.func,
    coverImageUrl: PropTypes.string,
}
Main.defaultProps = {
    onNavTop: () => void 0,
    yOffset: 0
}