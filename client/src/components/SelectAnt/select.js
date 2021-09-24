import React from "react"
import {Form, Select} from 'antd';

const { Option } = Select;


export default function select (props){

    function onChange(value) {
        //console.log(`selected ${value}`);
    }

    function onBlur() {
        //console.log('blur');
    }

    function onFocus() {
        //console.log('focus');
    }

    function onSearch(val) {
        //console.log('search:', val);
    }

    return(
        <Form.Item name={props.name}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder={props.placeholder}
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {props.list.map(registro => (
                    //console.log("registro", registro),
                    <Option
                        key={registro.id}
                        //value={registro.id}
                        value={registro.id}
                    >
                        {registro.nome}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    )
}