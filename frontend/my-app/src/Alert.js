import * as React from 'react';
import { Alert, AlertTitle } from "@mui/material";
import './Alert.css'

function Alertt(check) {
    console.log(check);
    if (check == 1) {
        return (
            <Alert className="custom-alert"
                severity="success">
                    < AlertTitle > Login Success</AlertTitle >
                        You have successfully logged in !
                </Alert >
        );
    }
    if (check == 2) {
        return (
                <Alert className="custom-alert"
                severity="error">
                    <AlertTitle>Login failed</AlertTitle>
                    please fill the blank!
                </Alert>
        );
    }
    if (check == 3) {
        return (
                <Alert className="custom-alert"
                severity="error">
                    <AlertTitle>Login failed</AlertTitle>
                    Invalid username or password!
                </Alert>
        );
    }
    if (check == 4) {
        return (
                <Alert className="custom-alert"
                severity="error">
                    <AlertTitle>Register failed</AlertTitle>
                    Please fill the blank!
                </Alert>
        );
    }
    if (check == 5) {
        return (
                <Alert className="custom-alert"
                severity="error">
                    <AlertTitle>Register failed</AlertTitle>
                    This username is already used
                </Alert>
        );
    }
    if (check == 6) {
        return (
            <Alert className="custom-alert"
            severity="success">
                <AlertTitle>Login Success</AlertTitle>
                You have successfully Register!
            </Alert>
        );
    }
    if (check == 7) {
        return (
            <Alert className="custom-alert"
            severity="success">
                <AlertTitle>Logout Success</AlertTitle>
                You have successfully Logout!
            </Alert>
        );
    }
    if (check == 8) {
        return (
            <Alert className="custom-alert"
            severity="error">
                <AlertTitle>find item failed</AlertTitle>
                please fill the blank!
            </Alert>
        );
    }
    if (check == 9) {
        return (
            <Alert className="custom-alert"
            severity="error">
                <AlertTitle>find item failed</AlertTitle>
                Not found item number!
            </Alert>
        );
    }
    if (check == 10) {
        return (
            <Alert className="custom-alert"
            severity="error">
                <AlertTitle>Add item failed</AlertTitle>
                please fill the blank!
            </Alert>
        );
    }
    if (check == 11) {
        return (
            <Alert className="custom-alert"
            severity="success">
                <AlertTitle>Add item Success</AlertTitle>
                You have successfully Register!
            </Alert>
        );
    }
}

export default Alertt