import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

const Main = styled.main`
    padding: 2rem;
    margin-top: 3rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
}

export default Layout;