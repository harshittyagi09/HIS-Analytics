// import styled from 'styled-components';

// export const Container = styled.div`
//   padding: 10px;
//   background-color: #f9f9fb;
//   border-radius: 12px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// export const SubContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// export const IconWrapper = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: #e0f7f9;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 5px;
// `;

// interface IconProps {
//   image: string;
// }

// export const Icon = styled.div<IconProps>`
//   width: 30px;
//   height: 30px;
//   background-image: ${({ image }) => `url(${image})`};
//   background-size: contain;
//   background-repeat: no-repeat;
// `;

// export const Percentage = styled.h2`
//   font-size: 32px;
//   font-weight: bold;
//   color: #333;
//   margin: 10px 0;
// `;

// export const Label = styled.div`
//   color: #888;
//   font-size: 14px;
// `;

// export const Total = styled.p`
//   font-size: 14px;
//   color: #66bb6a;
//   margin-top: 5px;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   // margin-top: 20px;
//   flex-wrap: wrap;
//   padding: 15px;
// `;

// interface ButtonProps {
//   isActive: boolean;
// }

// export const Button = styled.div<ButtonProps>`
//   background-color: ${({ isActive }) => (isActive ? "#d0f0c0" : "#f1f3f5")};
//   border: none;
//   border-radius: 8px;
//   padding: 5px;
//   font-size: 10px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${({ isActive }) => (isActive ? "#b0e0a0" : "#e0e0e0")};
//   }
// `;


// interface NavButtonProps {
//   disabled: any
// }

// export const NavButton = styled.div<NavButtonProps>`
//     opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//     cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
//     padding: 0px 5px;
//     border: 1px solid grey;
//     border-radius: 5px;
//     font-size: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

import styled from 'styled-components';

export const Container = styled.div`
  // width: 150px;
  padding: 5px 10px;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // justify-content: center;
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e0f7f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5px;
`;

interface IconProps {
  image: string;
}

export const Icon = styled.div<IconProps>`
  width: 30px;
  height: 30px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Percentage = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  padding: 0px 10px
  // margin: 10px 0;
  // text-align: center;
  border: 1px solid red;
`;

export const Label = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0px;
`;

export const Total = styled.div`
  font-size: 16px;
  color: rgb(135, 202, 176);
  font-weight: 700;
  padding: 10px 0px;
`;

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
  background-color: ${({ isActive }) => (isActive ? "#d0f0c0" : "#f1f3f5")};
  border: none;
  border-radius: 8px;
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