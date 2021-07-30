import React from 'react';
import Post from './Post';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'antd';

const useStyles = createUseStyles({
    root: {
        margin: 10,
        // grid: 'auto-flow',
    }
});

const ArtDisplay = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row gutter={[16, 16]} justify='center'>
            {
                ['', ''].map(() => (
                    <Col 
                    xs={{ span: 22 }}
                    sm={{ span: 22 }}
                    md={{ span: 18 }}
                    lg={{ span: 14 }}
                    xl={{ span: 12 }}
                >
                    <Post 
                        imgSrc='https://source.unsplash.com/random/2560x1440'
                        pfpSrc='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        title='Sample Post'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed efficitur massa, quis semper nunc. Cras elementum ante sed feugiat pellentesque.'
                    />
                </Col>
                ))
            }
            </Row>
        </div>
    );
}

export default ArtDisplay;