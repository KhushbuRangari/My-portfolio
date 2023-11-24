// Sidebar.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import styled from 'styled-components'; // Import styled-components


// const StyledLink = styled(Link)`
//   color: black;
//   text-decoration: none;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${(props) => props.selectedColor};
//     color: white;
//   }
// `;

const StyledLi = styled.li`
  list-style: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.selectedColor};
    color:white;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: ${(props) => props.selectedColor};
    color: white;
  }
`;

const Sidebar = ({ setClicked, selectedColor }) => {
  const handleChange = (value) => {
    setClicked(value);
  };

  return (
    <div className="sidebar">
      {/* <h3 style={{ fontFamily: "'Jost', sans-serif", color: selectedColor.hex, textDecoration: "underline", textAlign: "center" }}>Khushbu</h3> */}
      <ul className='sidebar-list'>
        {SideBarData.map((item, key) => (
          <StyledLi key={key} selectedColor={selectedColor.hex}>
            <StyledLink
              to={item.link}
              onClick={() => handleChange(item.title)}
            >
              {item.title}
            </StyledLink>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;