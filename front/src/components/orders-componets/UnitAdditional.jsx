import { useState } from "react";
import styled from "styled-components";

const UnitAdditional = ({ info }) => {
    const [isChecked, setIschecked] = useState(false);
    console.log(info)
    const { value, name, description, image } = info;
    return (
        <CsUnitAdditional>
            <div className="moldeImageInfo molde">
                <div className="moldeImg">
                    <img src={image} alt="" />
                </div>
                <div className="moldeInfo">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="valueAndCheck molde">
                <p>{`R$ ${value}`}</p>
                <div className="check" onClick={() => setIschecked(!isChecked)}>
                    {isChecked && <div className="circle"></div>}
                </div>
            </div>
        </CsUnitAdditional>
    );
}

export default UnitAdditional;

const CsUnitAdditional = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 5px;

    .molde{
        display: flex;
    }

    .moldeImg{
        width: 70px;
        height: 70px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .moldeInfo{
        padding-left: 30px;
    }

    .valueAndCheck{
        align-items: center;

        .check{
            width: 20px;
            height: 20px;
            border: 2px solid green;
            border-radius: 50%;
            cursor: pointer;

            margin-left: 30px;

            display: flex;
            justify-items: center;
            align-items: center;



            .circle{
                width: 85%;
                height: 85%;
                border-radius: 50%;
                background-color: green;

                margin: auto auto;
            }
        }
    }
`;