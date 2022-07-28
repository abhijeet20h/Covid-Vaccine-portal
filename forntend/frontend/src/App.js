import React from "react";
import { Layout, Row} from "antd";
import "antd/dist/antd.css";
import EmployeeDesign from "./components/Employee/EmployeeDesign";
import Login from "./components/Employee/Login";
import Registration from "./components/Employee/Registration";
// import { Login } from "./handlers/Login";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  let { Header , Content , Footer } = Layout

  return (
    <Layout>

        <Header>
        <h1 style={{ color: "white"  , padding:"17px"}}>  Covid Vaccine Portal </h1>
      </Header>
      <Content>
       <Registration/>

          {/* <EmployeeDesign/> */}
      
      </Content>

      <Footer></Footer>
    </Layout>
  );
}

export default App;
