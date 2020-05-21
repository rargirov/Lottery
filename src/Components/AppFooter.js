import React, { Component } from 'react';
import { Layout, } from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Lottery React App {new Date().getFullYear()} Created by Ant UED
            </Footer>
        );
    }
}

export default AppFooter
