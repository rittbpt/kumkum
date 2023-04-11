import * as React from 'react';
import { Alert, AlertTitle } from "@mui/material";
// import check from '../../../backend/check';

function Alertt(check) {
    console.log(check);
    if (check == 1) {
        return (
            <Alert severity="success">
                <AlertTitle>Login Success</AlertTitle>
                You have successfully logged in!
            </Alert>
        );
    }
    if (check == 2) {
        return (
            <Alert severity="error">
                <AlertTitle>Login failed</AlertTitle>
                please fill the blank!
            </Alert>
        );
    }
    if (check == 3) {
        return (
            <Alert severity="error">
                <AlertTitle>Login failed</AlertTitle>
                Invalid username or password!
            </Alert>
        );
    }
    if (check == 4) {
        return (
            <Alert severity="error">
                <AlertTitle>Register failed</AlertTitle>
                Please fill the blank!
            </Alert>
        );
    }
    if (check == 5) {
        return (
            <Alert severity="error">
                <AlertTitle>Register failed</AlertTitle>
                This username is already used
            </Alert>
        );
    }
    if (check == 6) {
        return (
            <Alert severity="success">
                <AlertTitle>Login Success</AlertTitle>
                You have successfully Register!
            </Alert>
        );
    }
    if (check == 7) {
        return (
            <Alert severity="success">
                <AlertTitle>Logout Success</AlertTitle>
                You have successfully Logout!
            </Alert>
        );
    }
}

export default Alertt