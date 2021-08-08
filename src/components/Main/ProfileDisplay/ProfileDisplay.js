import React from 'react';
import { Card, Col, Divider, Row, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import Profile from './Profile';

const useStyles = createUseStyles({
    root: {
        margin: 10
    },
    featuredUsers: {
        backgroundColor: 'rgba(255,255,255, 0.3)'
    }
});

const ProfileDisplay = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.featuredUsers} bordered={false} >
                <Row gutter={[16, 16]} justify='space-around'>
                    <Col
                        xs={{ span: 22 }}
                        sm={{ span: 22 }}
                        md={{ span: 20 }}
                        lg={{ span: 20 }}
                        xl={{ span: 20 }}
                    >
                        <Typography.Title style={{textAlign: 'center'}}>
                            Featured Users
                        </Typography.Title>
                        <Divider />
                    </Col>
                    <Col
                        xs={{ span: 22 }}
                        sm={{ span: 22 }}
                        md={{ span: 12 }}
                        lg={{ span: 7 }}
                        xl={{ span: 6 }}
                    >
                        <Profile 

                        />
                    </Col>
                    <Col
                        xs={{ span: 22 }}
                        sm={{ span: 22 }}
                        md={{ span: 12 }}
                        lg={{ span: 7 }}
                        xl={{ span: 6 }}
                    >
                        <Profile />
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default ProfileDisplay;