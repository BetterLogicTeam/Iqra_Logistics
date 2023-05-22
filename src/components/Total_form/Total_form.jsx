import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

function total_form() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row justify-content-center py-5">
          <div className="col-lg-6 border rounded-3 bg-light">
            <h2 className="text-danger py-4">Vehicle Details</h2>
            <div className="detail_upper">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="mt-3"
              >
                <Form.Item
                  label="Gross"
                  name="Gross"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Gross!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Fuel"
                  name="Fuel"
                  rules={[
                    {
                      required: true,
                      message: "Please input your fuel!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Insurance"
                  name="Insurance"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Insurance!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Instalment"
                  name="Instalment"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Instalment!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Truck Repair"
                  name="Truck Repair"
                  rules={[
                    {
                      required: true,
                      message: "Please input your TruckRepair!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Tax"
                  name="Tax"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Tax!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Dispatch"
                  name="Dispatch"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Dispatch!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Others"
                  name="Others"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Others!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default total_form;
