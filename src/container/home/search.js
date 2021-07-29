import React from "react";
import { Form, Input, Row, Col } from "antd";

function HomeSearch(props) {
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {
      sm: { span: 8 }
    },
    wrapperCol: {
      sm: { span: 14 }
    }
  };
  return <Form>
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item label="分公司">
          <div id="form-department">
            {getFieldDecorator(`branchOffice`, {
              initialValue: componyIni
            })(
              <Select
                placeholder="请选择分公司"
                allowClear
                getPopupContainer={() =>
                  document.getElementById("form-department")
                }
              >
                <Option>
                </Option>
              </Select>
            )}
          </div>
        </Form.Item>
      </Col>
    </Row>
  </Form>
}
export default HomeSearch;