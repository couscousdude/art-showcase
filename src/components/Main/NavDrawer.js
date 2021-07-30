import React from 'react';
import { Drawer, Typography } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    link: {
        fontSize: 20
    },
    root: {
        
    }
});

const DrawerTitle = props => <Typography.Title level={4}><FormatPainterOutlined />{`   ${props.title}`}</Typography.Title>

function NavDrawer(props) {
    const classes = useStyles();
    const { onDrawerClose, open, title, sections, placement } = props;

    return(
        <Drawer
            title={<DrawerTitle title={title} />}
            placement={placement}
            closable={true}
            onClose={onDrawerClose}
            visible={open}
            key={title}
            // style={{position: 'absolute'}}
            className={classes.root}
        >   
            { sections.map(section => (
                <>
                    <hr />
                    <Link onClick={() => onDrawerClose()} to={section.href} className={classes.link}>{section.title}</Link>
                </>
            ))}
        </Drawer>
    )
}
export default NavDrawer;
NavDrawer.propTypes = {
    onDrawerClose: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string,
    sections: PropTypes.array,
    placement: PropTypes.string
}
NavDrawer.defaultProps = {
    onDrawerClose: () => void 0,
    open: false,
    placement: 'top'
}