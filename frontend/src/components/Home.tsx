import React from 'react';
import styled from 'styled-components';
import styles from '../assets/styles/theme.module.scss';

const Container = styled.div`
    text-align: center;
    padding: 2rem;
    color: ${styles.vividCerulean};
`;

const Home: React.FC = () => {
    return (
        <Container>
            <h1>Welcome to My Web App</h1>
            <p>This is the landing page of my awesome web application. Here you can find various features and information about what we offer.</p>
        </Container>
    );
}

export default Home;