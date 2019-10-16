import React from "react"
import PropTypes from "prop-types"
import { Layout, Typography } from "antd"
// import "styles/style.less"

const { Header, Footer, Sider, Content } = Layout
const defaultLayout = ({ children }) => (
  <Layout
    style={{
      maxWidth: "90%",
      margin: "auto",
      alignContent: "center",
      justifyContent: "center",
    }}
  >
    <Header
      style={{
        padding: "30px 20px",
        boxShadow:
          "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Typography.Title>2WW Clinical Decision Support System</Typography.Title>
    </Header>
    <Layout>
      {/* <Sider>Options Treeview</Sider> */}
      <Content
        style={{
          padding: "30px 50px",
          boxShadow:
            "0 16px 24px 2px rgba(200, 50, 50, 0.14), 0 6px 30px 5px rgba(78, 171, 255, 0.12), 0 8px 10px -5px rgba(78, 171, 255, 0.2)",
        }}
      >
        {children}
      </Content>
    </Layout>
    <Footer>
      Developed by <a href="https://splyntor.ai">Splyntor Labs</a>
    </Footer>
  </Layout>
)

defaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default defaultLayout
