import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Alertt from './Alert';
import Sidebarr from './sidebar.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    menuButton: {
        marginRight: 20,
    },
});

const Sidebar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => () => {
        setOpen(open);
    };
    const [ch, setCh] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [check,setCheck] = React.useState(false);
    const handleLogout = () => {
        localStorage.clear();
        setCh(7)
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
        setTimeout(() => {
            window.location.href = './Login';
        }, 1500);
    };

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, path: '/home' },
        { text: 'Find item', icon: <FindReplaceIcon />, path: '/item' },
        { text: 'Additem', icon: <AddIcon />, path: '/additem' },
    ];
    return (
        <div>
        {showAlert && Alertt(ch)}
            {check && (
                <div className="popup">
                    <div className="popup-inner">
                        <div>
                            <p>Are you sure you want to log out?</p>
                            <button onClick={(e) => handleLogout()} type="submit" className="boutton">
                                Log out
                            </button>
                            <button onClick={() => setCheck(false)} type="submit" className="boutton">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                size="large"
                
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem button key={item.text} component={Link} to={item.path} >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        ))}
                        <ListItem button key="logout" onClick={e=>setCheck(true)}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>

                </div>
            </Drawer>
        </div>
    );
};

export default Sidebar;

