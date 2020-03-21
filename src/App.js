import React from 'react';
import './App.css';
import './body.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import Header from './components/Header';

const API_URL = 'http://localhost:4000/cubejs-api/v1';
const cubejsApi = cubejs(
    'aee2bb3548df624f6d6f597e552efd97746da5e13fc2437b07edce4b617cba8336cdd66ffdc6c91afb6270c260c603699329ca221f7d5b7bf0b34407f8211f4b',
    { apiUrl: API_URL }
);

const AppLayout = ({ children }) => (
    <Layout
        style={{
            height: '100%',
        }}
    >
        <Header />
        <Layout.Content>{children}</Layout.Content>
    </Layout>
);

const App = ({ children }) => (
    <CubeProvider cubejsApi={cubejsApi}>
        <AppLayout>{children}</AppLayout>
    </CubeProvider>
);

export default App;
