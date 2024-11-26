import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 20px;
  // flex-wrap: wrap;
  padding: 10px 0px;
`;

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.div<ButtonProps>`
  // background-color: ${({ isActive }) => (isActive ? "#d0f0c0" : "#f1f3f5")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid rgb(214, 100, 115)" : "2px solid transparent")};
  // border: none;
  // border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0px 5px;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#b0e0a0" : "#e0e0e0")};
  }
`;


interface NavButtonProps {
  disabled: any
}

export const NavButton = styled.div<NavButtonProps>`
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    // padding: 0px 5px;
    border-radius: 5px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;