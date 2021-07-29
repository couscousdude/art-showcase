import React from 'react';
import { MenuOutlined, FormatPainterOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { Typography, Button } from 'antd';
import clsx from 'clsx';

const useStyles = createUseStyles({
    menuBar: {
        paddingRight: '20px',
        paddingTop: '10px',
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        position: 'fixed',
        width: '100%',
        overflowY: 'hidden',
        transition: 'all 150ms ease-in;',
        zIndex: 1,
        // backgroundColor: 'transparent',
    },
    title: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    showNav: {
        backgroundColor: 'white',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        borderBottom: 'solid 1px #e8e8e8',
    },
    navButton: {
        display: 'inline-block',
        padding: {
            top: 5,
            left: 10,
            bottom: 5
        },
        marginBottom: '10px',
    },
});

function MobileNavBar(props) {
    const { title, navTransparent, onButtonClick } = props;
    const classes = useStyles();

    return(
        <nav 
            className={clsx(classes.menuBar, {
                [classes.showNav]: !navTransparent
            })}
        >
            <span className={classes.navButton}>
                <Button icon={<MenuOutlined />} onClick={onButtonClick} />
            </span>
            <div className={classes.title}>
                <Typography.Title level={2}>
                    <FormatPainterOutlined />
                    {`   ${title}`}
                </Typography.Title>
            </div>
        </nav>
    )
}
export default MobileNavBar;

MobileNavBar.propTypes = {
    title: PropTypes.string.isRequired,
    navTransparent: PropTypes.bool,
    onButtonClick: PropTypes.func
}
MobileNavBar.defaultProps = {
    navTransparent: true,
    onButtonClick: () => void 0
}