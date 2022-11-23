
import { Row, Col, Button } from 'antd';
import "./index.css"

export default function PersonalProfile() {
  return (
    <div id="profile-account">
    <div
      style={{
        width: '100%',
        marginBottom: '30px',
      }}
    >
      <Button style={{
        backgroundColor: "#39AEA9",
        marginLeft: "30px",
        color: 'white'
      }}
      >Cập nhật</Button>
    </div>
    <Row gutter={[16, 16]}>
      <Col span={8} style={{ textAlign: "left" }} className="col-title">
        Name: Lê Duy Dũng
      </Col>
      <Col span={16} className="col-content">
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8} style={{ textAlign: "left" }} className="col-title">
        Email: leduydung0123@gmail.com
      </Col>
      <Col span={16} className="col-content">
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8} style={{ textAlign: "left" }} className="col-title">
        Role: Admin
      </Col>
      <Col span={16} className="col-content">
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8} style={{ textAlign: "left" }} className="col-title">
        Trạng thái: có bồ
      </Col>
    </Row>
    <Row gutter={[16, 16]}>

    </Row>
    <Row gutter={[16, 16]}>
      <Col span={8} style={{ textAlign: "left" }} className="col-title">
        Thời gian cập nhật
      </Col>
      <Col span={16} className="col-content">
      </Col>
    </Row>
  </div>

  );
}