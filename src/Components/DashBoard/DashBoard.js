import React from 'react';
import {Menu, Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import LogOutButton from "../LogoutButton/LogoutButton";
import "./DashBoard.css";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

export default function DashBoard(props){

    const MasonLayout = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
        minHeight: "50vw",
    }

    const getMenu = () => {
        const items = [];
        for (const [index, value] of props.menu.entries()){
            items.push(
                <Menu.Item key={index}>
                    <Link to={value.link}>{value.item}</Link>
                </Menu.Item>
            )
        }
        return items;
    }

    return(
        <div className="dashboard">
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {getMenu()}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0, paddingRight: "10vw"}}>
                        <ul>
                            <li>
                                <LogOutButton />
                            </li>
                        </ul>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={props.masonry && MasonLayout}>
                            {props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

DashBoard.propTypes = {
    menu: PropTypes.array.isRequired
}