import React from 'react';
import {Card} from "antd";
import styled from "styled-components";

export default function DashBoardCard(props){

    const DashBoardCardStyle = styled.div`
        display: flex;
        flex: 1 1 auto;
        max-width: 32%;
        margin-bottom: 10px;
        border-radius: 10px;
        margin: 0.2vw;
    `

    return(
        <DashBoardCardStyle>
            <Card>
                {props.children}
            </Card>
        </DashBoardCardStyle>
    )
}