import React, { useState } from 'react';
import { useEffect } from 'react';
import { MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    LogoutOutlined,
    PoweroffOutlined,
    VideoCameraOutlined,


    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button,Switch,    theme} from 'antd';
import Log from "../../assets/download.png"
import Ibs from "../../assets/image.png"

import {Outlet, useNavigate} from "react-router-dom";
import "./index.css"


function getDefaultMode() {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
}

const { Header, Sider, Content } = Layout;


// function getItem(label, key, icon, children) {
//     return {
//       key,
//       icon,
//       children,
//       label,
//     };
//   }
const Layouts = ({ setIsLoggedIn }) => {



    
    
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

  


    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate()
    // const [current, setCurrent] = useState('1');

    const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    setCurrent(e.key);
  };


    // const [mode, setMode] = useState(getDefaultMode()); 

    // useEffect(() => {
    //   if (mode === 'dark') {
    //     document.body.classList.add('dark');
    //   } else {
    //     document.body.classList.remove('dark');
    //   }
    //   localStorage.setItem('mode', mode);
    // }, [mode]);






 
  
    

    // const {
    //     token: { colorBgContainer, borderRadiusLG },  
    // } = theme.useToken();
    return (
 
        
        <Layout className='lay  dark'  
          theme={theme}

          mode="inline"
          
          onClick={onClick}

      defaultOpenKeys={['sub1']}
      selectedKeys={[current]}
    
        style={{height:"100vh"}}
        >
            <Sider 
              theme={theme}

              mode="mode"
              
              onClick={onClick}

          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}


              defaultSelectedKeys={['1']}
               trigger={null} collapsible collapsed={collapsed}>
                <div
                 className="demo-logo-vertical sls logo gap-0 d-flex px-3" >
                     <img  className='ws' src={Ibs} alt="" />
                    <h1>ibs</h1>
                </div>
           
                <Menu className='sls  str'
                            theme={theme}
                            mode="inline"
                            
                            
        
                        defaultOpenKeys={['sub1']}
                        selectedKeys={[current]}
                        onClick={(e)=>navigate(e.key)}

        
        
                            defaultSelectedKeys={['1']}
                            items = {[
                                {
                                    key: '/cabinet/kurslar',
                                    icon: <UserOutlined />,
                                    label: 'Kurslar',
                                }   ,
                        
                            
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
            <br />
            <br />

            <br />
            <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
            {/* <LogoutOutlined  onClick={handleLogout}/>  */}
                         <div
                      
                  className='d-flex  justify-content-between align-items-center'>
                            <button
                                theme={theme}

                                mode="mode"
                                
                               
                  
                            defaultOpenKeys={['sub1']}
                            selectedKeys={[current]}
                  
                  
                                defaultSelectedKeys={['1']}
                             className='d-flex gap-3 but' onClick={handleLogout}>
    <img  className='log mx-4 ' src={Log} alt="" />

    <p>Sardor Abdullayev</p>

    

                            </button>
                            </div>
                            
          



                        
    
                  
          
          
                     
        
               
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