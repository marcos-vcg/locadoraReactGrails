import React from "react"
import {useHistory} from "react-router-dom"
import {PageHeader, Button} from "antd";
import {CLIENT_URL} from "../../config";


export default function CabecalhoForm (props){
const history = useHistory()
    return(
        <PageHeader
            className="site-page-header"
            onBack={() => history.push(CLIENT_URL + props.onBack)}
            title={props.title}

            //subTitle="This is a subtitle"
            extra={[
                <Button key="1" type="primary" onClick={props.onClickSalvar}>
                        Salvar
                </Button>,
            ]}
        />
    )
}