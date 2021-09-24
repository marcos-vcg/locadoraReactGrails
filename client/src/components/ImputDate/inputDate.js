import React from "react";
import {Form, DatePicker} from "antd";
import moment from 'moment';


export function DatePikerAnt (props){
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return(

            <DatePicker
                name={props.name}
                //className={"inputDate"}
                defaultValue={moment('01/01/2021', dateFormatList[0])}
                format={dateFormatList}
            />

    )
}