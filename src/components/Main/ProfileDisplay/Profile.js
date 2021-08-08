import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card, Row, Col, Typography, Divider } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { AntDesignOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
    root: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.75)'
    },
});

const Profile = props => {
    const classes = useStyles();
    const { username, onCardClicked } = props;
    
    return (
        <Card
            className={classes.root}
            bordered={false}
            hoverable
            onClick={onCardClicked}
        >   
            <Row gutter={[16, 16]} justify='center'>
                <Col>
                    <Avatar 
                        icon={<AntDesignOutlined />}
                        size={{
                            xs: 200,
                            sm: 200,
                            md: 180,
                            lg: 160,
                            xl: 180,
                            xxl: 200
                        }}
                        style={{alignSelf: 'center'}}
                    />
                </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                >
                    <Typography.Title style={{textAlign: 'center'}}>
                        {username}
                    </Typography.Title>
                </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                >
                    <Typography.Title level={5} style={{textAlign: 'center'}}>
                        View Their Works
                    </Typography.Title>
                </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                >
                    <Divider />
                </Col>
                <Col 
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    xxl={24}
                >
                    <Typography.Title level={2} style={{textAlign: 'center'}}>
                        About Me:
                    </Typography.Title>
                </Col>
            </Row>
        </Card>
    );
}

export default Profile;
Profile.propTypes = {
    username: PropTypes.string,
    onCardClicked: PropTypes.func
}
Profile.defaultProps = {
    username: 'Sample User',
    onCardClicked: () => void 0
}