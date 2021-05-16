import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Accounts} from '../../data/Accounts';
import {Link} from "react-router-dom";

const Wrapper = styled.div`
    position: absolute;
    background: ${Colors.white};
    padding-top:10px;
    margin-left:24px;
    box-shadow: 1px 2px 10px ;
    width:200px;
    a{
        text-decoration:none;
        color:${Colors.black};
    }
    ul{
        font-size:${fontSize[16]};
    }
    li{
        margin-top:10px;
        margin-bottom:10px;

    }
    .icons{
        margin-right:20px;
    }
    .category{
            font-size:${fontSize[12]};
            color:blue;

        }
`;

const CustomInput = styled.input`
    border:1px solid ;
    padding:4px;
    width:90%;
    text-align:left;
    &:outline{
        outline:none;
    }
    &:focus{
        outline:none;
    }
`;

const Account = styled.div`
    display:grid;
    grid-template-columns:60px 1fr;
    grid-template-rows: 1fr;
    border-top:1px solid ;
    border-bottom:1px solid ;
    align-items: center;
    #portrair{
        width:28px;
        border-radius:90px;
        grid-column: 1;
        grid-row: 1;
    }
    #name{
        grid-column: 2;
        grid-row: 1;
        margin-bottom:30px;
    }
    #see{
        grid-column: 2;
        grid-row: 1;
        margin-top:30px;
        font-size:${fontSize[12]};
        color:red;
    }

`;

const Logout = styled.div`
    text-align:center;
    padding:10px;
    border-top:1px solid red;
    img{
        padding-right:16px;
    }
`;

export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text= e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>
            <ul>
                <CustomInput type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>

                <li className="category">Platform</li>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/">
                <li><img src="./media/icons/house2.png" className="icons"/>Home</li>
                </Link>
                }
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/publications.png" className="icons"/>Publications</li>
                }
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/people.png" className="icons"/>People</li>
                }
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <Link to="/entities">
                <li><img src="./media/icons/entities2.png" className="icons"/>Entities</li>
                </Link>
                }
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/administration.png" className="icons"/>Administration</li>
                }

                <Link to="/workspaces">
                <li className="category">Workspaces</li>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Client contract</li>
                }
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Supplier contract</li>
                }
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/entities.png" className="icons"/>Corporate</li>
                }
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Group Norms</li>
                }
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><img src="./media/icons/ecosystem.png" className="icons"/>Real estate contracts</li>
                }
                </Link>

                <li className="category">Account</li>
                <Account>
                    <img id="portrair" src="./imgs/portrair1.jpg"/>
                    <li id="name">{Accounts[0].name}</li>
                    <li id="see"><Link to="/profile">See profile</Link></li>

                </Account>
                <li><img src="./media/icons/privacy.png" className="icons"/>Privacy</li>
                <li><img src="./media/icons/settings.png" className="icons"/>Settings</li>

            </ul>

            <Logout>
                <img src="./media/icons/logout.png"/>
                <span>Logout</span>
            </Logout>
        </Wrapper>
    );
};