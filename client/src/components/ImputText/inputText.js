import React from "react";
import {Form, Input} from "antd";

export default function InputText (props){
    return (
        <Form.Item name={props.name}>
            <Input
                className="input-text"
                name={props.name}
                placeholder={props.placeholder}
            />
        </Form.Item>
    )
}
