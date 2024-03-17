import React, { useState } from 'react';
import { useEffect } from 'react';
import { MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button,Switch,    theme} from 'antd';

import {Outlet, useNavigate} from "react-router-dom";
import "./index.css"


const { Header, Sider, Content } = Layout;

const Layouts = () => {
  
    





    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate()
    const [current, setCurrent] = useState('1');




 
  
    

    // const {
    //     token: { colorBgContainer, borderRadiusLG },  
    // } = theme.useToken();
    return (
        <Layout className='lay'  
    
        style={{height:"100vh"}}
        >
            <Sider trigger={null} style={{backgroundColor:"white"}} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical text-center text-white" >
                    // <img src="" alt="" />
                </div>
                <Menu className='sls str'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e)=>navigate(e.key)}
                    items={[
                        {
                            key: '/xodimlar',
                            icon: <UserOutlined />,
                            label: 'Kurslar',
                        },
                        {
                            key: '/lavozimlar',
                            icon: <VideoCameraOutlined />,
                            label: "E'lonlar",
                        },
                        {
                            key: '/ilmiy_daraja',
                            icon: <UploadOutlined />,
                            label: 'Vebinar',
                        },
                        {
                            key: '/ilmi',
                            icon: <UploadOutlined />,
                            label: 'Jamoalar',
                        },
                        {
                            key: '/ilm',
                            icon: <UploadOutlined />,
                            label: 'Category',
                        },
                        {
                            key: '/il',
                            icon: <UploadOutlined />,
                            label: 'Kontaktlar',
                        },
                    ]}
                />
                    <Button className='btns'
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
            
            



    
                  
          
          
                     
        
               
            </Sider>
            
            <Layout >
              
                <Content className='bgs'
                    style={{
                        
                        padding: 50,
                        minHeight: 280,
                        
                            // borderRadius: borderRadiusLG,
                    }}
                >
                  <Outlet/>
                </Content>
            </Layout>
        </Layout>

        
    );
};
export default Layouts;