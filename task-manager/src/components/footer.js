import React from 'react';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const Footer = ({ onSearch }) => {
    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        onSearch(formData.get('search'));
    };

    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Form onSubmit={handleSubmit} className="d-flex">
                    <FormControl type="text" name="search" placeholder="Search" className="mr-2" />
                    <Button type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Footer;