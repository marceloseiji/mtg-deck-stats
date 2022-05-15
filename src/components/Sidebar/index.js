import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const { Header, Sider, Content } = Layout

const SideBar = ({ content }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const handleChangeRoute = (route = '') => {
    navigate(route)
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
              onClick: () => handleChangeRoute('/')
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'My collection',
              onClick: () => handleChangeRoute('/collection')
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'My decks',
              onClick: () => handleChangeRoute('/decks')
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SideBar
