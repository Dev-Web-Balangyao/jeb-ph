import React from 'react';
import styled from 'styled-components';
import styles from '../assets/styles/theme.module.scss';

const HeaderContainer = styled.header`
    background-color: ${styles.vividCerulean};
    padding: 1rem;
    color: ${styles.white};
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;`;

const Navigation = styled.nav`
    a {
        color: ${styles.white};
        margin: 0 10px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Navigation>
                <a href="/">Home</a>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;