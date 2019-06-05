import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export class Header extends Component{
    constructor(props){
        super(props);

        this.state = { 
            isNavOpen   : false,
            isModalOpen : false
        }

        this.toggleNav      = this.toggleNav.bind(this)
        this.toggleModal    = this.toggleModal.bind(this)
        this.handleLogin    = this.handleLogin.bind(this)

    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleLogin(event){
        this.toggleModal();

        alert("Username: "+ this.username.value + "Password :" + this.password.value + " Remember :" + this.remember.checked);
        event.preventDefault()
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="./assets/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg" ></span>
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">    
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience.Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup row>
                                <Label htmlFor="username">Username</Label>
                                <Input innerRef={ (input) => this.username = input } type="text" id="username" name="username" />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password">Password</Label>
                                <Input innerRef={ (input) => this.password = input } type="password" id="password" name="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input innerRef={ (input) => this.remember = input } type="checkbox" name="remember" />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" className="bg-primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header