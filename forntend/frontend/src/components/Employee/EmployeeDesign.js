import React from "react";
import { Button, Col, Row, Table, Modal, Input, Form } from "antd";
import EmployeeLogic from "./EmployeeLogic";
import CovidInfo from './CovidInfo'
import Home from "./Home";
const EmployeeDesign = () => {
  let {
    tblData,
    setTblData,
    tblHeader,
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    name,
    setName,
    age,
    setAge,
    address,
    setEmpAddress,
    isEdit,
    VaccineName,firstVaccineDate,secondVaccineDate,setVaccineName,
    setFVaccineDate,setSVaccineDate,
      setIsEdit,
  } = EmployeeLogic();

  return (
    <>

 
      <Row>
        
          <CovidInfo/>
        <Col>
          <Button
            type={"primary"}
            onClick={showModal}
            style={{ margin: "20px" }}
          >
            Add Your Details 
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            columns={tblHeader}
            dataSource={tblData}
            style={{ marginLeft: "20px" }}
          />
        </Col>
        <Modal
          title={isEdit ? "Update Data" : "Add New Data"}
          visible={isModalVisible}
          onOk={handleOk}
          okText={isEdit ? "Update":"Save"}
          onCancel={handleCancel}
        >
          <div>
            <Input
              label="Name"
              value={name}
              name="name"
              placeholder="Enter Employee Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              label="Name"
              value={VaccineName}
              name="name"
              placeholder="Enter Vaccine Name"
              onChange={(e) => {
                setVaccineName(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={age}
              name="age"
              placeholder="Enter vaccine Number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={address}
              name="address"
              placeholder="Enter Address"
              onChange={(e) => {
                setEmpAddress(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={firstVaccineDate}
              name="address"
              placeholder="Enter First Vaccine Date"
              onChange={(e) => {
                setFVaccineDate(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
            <Input
              value={secondVaccineDate}
              name="address"
              placeholder="Enter Second Vaccine Date"
              onChange={(e) => {
                setSVaccineDate(e.target.value);
              }}
              style={{ margin: "5px" }}
            />
          </div>
          
        </Modal>
      </Row>
    </>
  );
};

export default EmployeeDesign;