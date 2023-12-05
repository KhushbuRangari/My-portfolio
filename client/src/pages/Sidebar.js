// Sidebar.js
import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import styled from 'styled-components'; // Import styled-components




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

  const navigate = useNavigate();
  const handleChange = (value) => {
    setClicked(value);
    console.log(value);
    navigate(value);
  };

  console.log(selectedColor,"sidebar");
  return (
    <div className="sidebar">
      <h3 style={{ fontFamily: "'Jost', sans-serif",fontWeight:"700",fontSize:"40px", color: selectedColor, textDecoration: "underline", textAlign: "center" }}>Khushbu</h3>
      <ul className='sidebar-list'>
        {SideBarData.map((item, key) => (
          <StyledLi key={key} selectedColor={selectedColor}>
            <StyledLink
              to={item.link}
              onClick={() => handleChange(item.link)}
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