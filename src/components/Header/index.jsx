import { Badge, Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';
import { logout } from '../../features/Auth/userSlice';
import { cartItemsCountSelector } from '../../features/Cart/Selectors';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: 'white',
    }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

export default function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN)
    const [anchorEl, setAnchorEl] = React.useState(null);


    const dispatch = useDispatch();
    const cartItemCount = useSelector(cartItemsCountSelector)
    const loginInUser = useSelector(state => state.user.current)
    const isLoggedIn = !!loginInUser.id
    const history = useHistory()


    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action)
    }

    const handleClickOpenLogin = () => {
        setMode(MODE.LOGIN)
        setOpen(true);
    };

    const handleClickOpenRegister = () => {
        setMode(MODE.REGISTER)
        setOpen(true);
    };

    const handleClose = (reason) => {
        setOpen(false);
    };

    const handleCartClick = () => {
        history.push('/cart')
    };




    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            <Button color="inherit">
                                Gia Kinh
                            </Button>
                        </Link>
                    </Typography>

                    <NavLink to="/products" className={classes.link}>
                        <Button color="inherit">
                            Products
                        </Button>
                    </NavLink>
                    {/* <NavLink to="/cart" className={classes.link}>
                        <Button color="inherit">
                            Cart
                        </Button>
                    </NavLink> */}

                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">
                            Todos
                        </Button>
                    </NavLink>

                    <NavLink to="/Albums" className={classes.link}>
                        <Button color="inherit">
                            Albums
                        </Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <>
                            <Button color="inherit" onClick={handleClickOpenLogin}>Login</Button>
                            <Button color="inherit" onClick={handleClickOpenRegister}>Register</Button>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <IconButton color="inherit" onClick={handleUserClick}>
                                <AccountCircleIcon />
                            </IconButton>
                        </>
                    )}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        style={{margin: "0 5px"}}
                        onClick={handleCartClick}
                    >
                        <Badge badgeContent={cartItemCount} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
            <Dialog
                fullWidth
                open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                // disableBackdropClick
                disableEscapeKeyDown
                >
                <DialogContent>
                    <DialogContentText>
                        {mode === MODE.REGISTER && (
                            <>
                                <Register closeDialog={handleClose} />
                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                        Already have an account. Login here
                                    </Button>
                                </Box>
                            </>
                        )}

                        {mode === MODE.LOGIN && (
                            <>
                                <Login closeDialog={handleClose} />
                                <Box textAlign="center">
                                    <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                        Dont have an account. Register here
                                    </Button>
                                </Box>
                            </>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
