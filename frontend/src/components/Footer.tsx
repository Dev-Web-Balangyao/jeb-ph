import React from 'react';
import styled from 'styled-components';
import styles from '../assets/styles/theme.module.scss';

const FooterContainer = styled.footer`
    background-color: ${styles.vividCerulean};
    padding: 1rem;
    color: white;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;`;

const Footer: React.FC = () => {
    return <FooterContainer>
        &copy; {new Date().getFullYear()} JEB - Hired Skilled Professionals Online. All rights reserved.
    </FooterContainer>;
};

export default Footer;