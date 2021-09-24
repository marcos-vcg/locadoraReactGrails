import React from "react";
import { Table, Tag, Space } from 'antd';



export default function TabelaAnt (props){
    return(
        <Table
            columns={props.columns}
            dataSource={props.dataSource}
            actions={props.actions}
        />
    )
}
