import React from 'react';
import { Menu, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { FormatPainterOutlined } from '@ant-design/icons';
import clsx from 'clsx';

const useStyles = createUseStyles({
    menuBar: {
        padding: {
            top: 0,
            right: '20px'
        },
        overflow: 'auto',
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        // position: 'relative'
        position: 'fixed',
        width: '100%',
        transition: 'all 150ms ease-in;',
        zIndex: 1
    },
    showNav: {
        backgroundColor: 'white',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        borderBottom: 'solid 1px #e8e8e8',
    },
    menu: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    title: {
        display: 'inline-block',
        marginTop: 5,
        marginLeft: 20
        // position: 'absolute'
        // width: '100%',
    }
});

function NavBar(props) {
    const classes = useStyles();
    const { title, sections, navTransparent } = props;
    const history = useHistory();
    const location = useLocation()

    return (
        <nav 
            className={clsx(classes.menuBar, {
                [classes.showNav]: !navTransparent
            })}
        >
           <div className={classes.title}>
                <Typography.Title level={2}>
                <FormatPainterOutlined />
                    {`   ${title}`}
                </Typography.Title>
            </div>
            <div className={classes.menu}>
                <Menu mode='horizontal' selectedKeys={[location.pathname.slice().split('/')[1]]}>
                { sections.map(item => (
                    <Menu.Item key={item.key} onClick={() => history.push(item.href)}>
                        {item.title}
                    </Menu.Item>
                ))}
                </Menu>
            </div>
        </nav>
    )
}
NavBar.propTypes = {
    sections: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    navTransparent: PropTypes.bool,
}
NavBar.defaultProps = {
    navTransparent: true
}

export default NavBar;