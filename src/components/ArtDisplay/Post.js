import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const { Meta } = Card;

const useStyles = createUseStyles({
    root: {
        width: '100%',
    }
});

const Post = (props) => {
    const classes = useStyles();
    const { imgSrc, pfpSrc, description, title } = props;

    return (
        <Card
            className={classes.root}
            cover={
            <img
                alt="Post's content"
                src={imgSrc}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src={pfpSrc} />}
                title={title}
                description={description}
            />
        </Card>
    );
}
export default Post;
Post.propTypes = {
    imgSrc: PropTypes.string,
    pfpSrc: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
}