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
    // cover: {
    //     // backgroundSize: 'cover',
    //     // height: '100vh',
    //     // width: '100%',
    //     // margin: 0,
    //     // padding: 0,
    //     color: 'white',
    //     textAlign: 'center',
    //     fontSize: '50px',
    // }
});

function Main(props) {
    const classes = useStyles();
    const { title, yOffset, onCoverImageLoad } = props;
    const [coverImage, setCoverImage] = React.useState('');

    // const generateCover = (onLoad) => {
    //     const coverImage = new Image(window.innerHeight, window.innerWidth);
    //     coverImage.src = "https://source.unsplash.com/random/2560x1440/?nature,art,abstract";

    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');

    //     canvas.width = coverImage.width;
    //     canvas.height = 
    // }
    const toObjectUrl = async url => {
        const response = await fetch(url);
        
        const responseBlobbed = await response.blob();
        return URL.createObjectURL(responseBlobbed);
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
        const getCoverImage = async (resolution, onLoad) => {
            const res = await toObjectUrl(`https://source.unsplash.com/random/${resolution}/?nature,art,abstract`);
                // .then(() => {
                //     onLoad
                //         ? onLoad()
                //         : void(0)  
                // }); // NOSONAR
            setCoverImage(res);
            onLoad(res);
        }
        getCoverImage(coverResolutionPicker(), onCoverImageLoad);
    }, []);
    
    return (
        <div>
            <div 
                className={'Cover'} 
                style={window.innerHeight > 768
                    ? {
                        backgroundPositionY: yOffset * 0.7, 
                        background: `url("${coverImage}")`
                    } 
                    : { background: `url("${coverImage}")`}}
                // style={
                //     mobileCheck()
                //         ? {  
                //             backgroundImage: "url('https://source.unsplash.com/random/2560x1440/?nature,art,abstract')",
                //             backgroundPosition: 'top center',
                //             backgroundSize: 'cover',
                //             backgroundRepeat: 'no-repeat',
                //             width: '100%',
                //             height: '100vh',
                //             margin: 0,
                //             padding: 0
                //         }
                //         : {
                //             backgroundImage: "url('https://source.unsplash.com/random/2560x1440/?nature,art,abstract')",
                //             backgroundPosition: 'top center',
                //             backgroundSize: 'cover',
                //             backgroundRepeat: 'no-repeat',
                //             width: '100%',
                //             height: '100vh',
                //             margin: 0,
                //             padding: 0,
                //             backgroundPositionY: yOffset * 0.7
                //         }}      
                // this is really bad design and the above code should probably
                // be delegated to a helper function but i cba
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