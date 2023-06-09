import styled from 'styled-components';

export const HeroBtn = styled.button`
  background: transparent;
  padding: 5px 25px;
  color: ${(props) => props.theme.color.white};
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  transition: color 300ms ease, background-color 300ms ease, border-color 300ms ease;
  text-decoration: none;
  font-weight: 700;
  :hover {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.black};
    border-color: ${(props) => props.theme.color.white};
  }
`;

export const CheckOut = styled.button`
  color: ${(props) => props.theme.color.white};
  display: inline-block;
  width: 100%;
  color:  ${(props) => props.theme.color.black};
  border-style: none;
  border-width: 1px;
  border-radius: 5px;
  background: #A29FFA;
  padding: 10px 25px;
  text-align: center;
  border-color: ${(props) => props.theme.color.primary};
  :hover {
    color:  ${(props) => props.theme.color.black};
  }
`;

export const ViewItem = styled(HeroBtn)`
  color: ${(props) => props.theme.color.black};
  background: ${(props) => props.theme.color.primary};
  font-weight: unset;
  :hover {
    background: ${(props) => props.theme.color.LightBlack};
    border-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }
`;

export const AddCart = styled(HeroBtn)`
border-color: ${(props) => props.theme.color.primary};
color:  ${(props) => props.theme.color.white};
font-weight: unset;
  padding: 8px 25px;
  :hover {
    background: ${(props) => props.theme.color.primary};
    border-color: ${(props) => props.theme.color.primary};
  }
`;

export const RemoveFromCart = styled(HeroBtn)`
border-color: unset;
font-weight: unset;
color:  ${(props) => props.theme.color.white};
border-style: none;
  padding: 5px 5px;
  :hover {
    color: ${(props) => props.theme.color.red};
    background: transparent;
  }
`;

export const ContinueShop = styled(ViewItem)`
font-weight: unset;
text-align: center;
color:  ${(props) => props.theme.color.black};
background: ${(props) => props.theme.color.primary};
border-color: ${(props) => props.theme.color.primary};
:hover {
  background: ${(props) => props.theme.color.white};
  color:  ${(props) => props.theme.color.black};
}
`;

export const ContactSendIn = styled(CheckOut)`
background: #CBCAFB;
  :hover {
    background: #A29FFA;
  }
`;