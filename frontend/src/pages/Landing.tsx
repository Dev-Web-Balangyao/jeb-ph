import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import Home from '../components/Home';

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <Helmet>
                <title>JEB - Home</title>
                <meta name="description" content="Welcome to the home page of JEB's Online Job Platform" />
            </Helmet>
            <Home />
        </Layout>
    );
}

export default LandingPage;