import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0f7f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/path/to/icon.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Percentage = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const Label = styled.p`
  color: #888;
  font-size: 14px;
`;

export const Total = styled.p`
  font-size: 14px;
  color: #66bb6a;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    overflow: hidden;
`;

export const Button = styled.button`
    flex-shrink: 0;
    width: 100px;
`;

interface NavButtonProps {
    disabled: any
}

export const NavButton = styled.div<NavButtonProps>`
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 0px 5px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;