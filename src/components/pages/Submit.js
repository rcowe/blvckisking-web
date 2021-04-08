import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Slider from '../Slider';

const styles = {
    paper: {
        padding: "2vw",
        textAlign: "center",
        color: "#000000",
        whiteSpace: "nowrap",
        background: "#A0DB9E",
        marginTop: "2vh",
        marginBottom: "2vh"
    }
};

const useStyles = makeStyles(styles);

export default class Submit extends Component {

    state = {
        name: "",
        message: "",
        email: "",
        subject: "",
        sent: false,
        buttonText: "Send Message",
        emailError: false,
    };

    resetForm = () => {
        this.setState({
            name: "",
            message: "",
            email: "",
            subject: "",
            buttonText: "Message Sent",
        });

        setTimeout(() => {
            this.setState({ sent: false });
        }, 3000);
    };

    handleChangeEmail(e) {
        if (
            !e.target.value.match(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            this.setState({
                email: e.target.value,
            });
            this.setState({ emailError: true });

            if (this.state.email === "") {
                // check if the input is empty
                this.setState({ emailError: false });
            }
        } else {
            this.setState({ email: e.target.value, emailError: false });
        }
    }

    formSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            buttonText: "...sending",
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject,
        };

        try {
            await axios.post("https://simple-backend-nodemailer.herokuapp.com/api/v1", data);
            this.setState({ sent: true }, this.resetForm());
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <Grid container
                  spacing={6}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh' }}
            >
                <Grid item xl={12}>
                    <Paper className={useStyles.paper}>
                        <Slider />
                    </Paper>
                </Grid>
                <Grid item sm={12} background-color="#A0DB9E">
                        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
                            <TextField
                                id="outlined-basic"
                                placeholder="Enter your name"
                                label="Name"
                                variant="outlined"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                required
                                type="text"

                            />
                            <br />
                            <br />
                            <br />

                            <TextField
                                id="outlined-basic"
                                label="Email"
                                placeholder="Enter email address"
                                variant="outlined"
                                value={this.state.email}
                                onChange={(e) => this.handleChangeEmail(e)}
                                error={this.state.emailError}
                                required
                                type="email"
                            />
                            <br />
                            <br />
                            <br />
                            <TextField
                                id="outlined-basic"
                                placeholder="Who is this story about"
                                label="Subject"
                                variant="outlined"
                                value={this.state.subject}
                                onChange={(e) => this.setState({ subject: e.target.value })}
                                required
                            />
                            <br />
                            <br />
                            <br />

                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
                                placeholder="Enter Message"
                                variant="outlined"
                                multiline
                                rowsMax={4}
                                value={this.state.message}
                                onChange={(e) => this.setState({ message: e.target.value })}
                                required
                                type="text"
                            />
                            <br />
                            <br />
                            <br />

                            <div className="button--container">
                                <button type="Send Story" className="button button-primary">
                                    {this.state.buttonText}
                                </button>
                            </div>
                        </form>
                </Grid>
            </Grid>
        )
    }
}