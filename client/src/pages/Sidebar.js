import React from "react";
import { SideBarData } from "./SideBarData";
import styled from "styled-components";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const StyledLi = styled.li`
  list-style: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.selectedColor};
    color: white;
  }
`;

const StyledLink = styled(RouterLink)`
  color: gray;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: ${(props) => props.selectedColor};
    color: white;
  }
`;

const Sidebar = ({ selectedColor, activeLink }) => {
  const navigate = useNavigate();

  const handleChange = (value) => {
    const sectionId = value.replace('/', ''); // Remove the leading slash
    const targetSection = `section${sectionId}`;
    console.log(`Scrolling to ${sectionId}`);
  };

  // console.log(activeLink, "Link");
  return (
    <div className="sidebar">
      <h3
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: "700",
          fontSize: "40px",
          color: selectedColor,
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        Khushbu
      </h3>
      <ul className="sidebar-list">
        {SideBarData.map((item, key) => (
          <StyledLi key={key} selectedColor={selectedColor}>
            <ScrollLink
  activeClass="active"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  to={`/homepage${item.link}`}
  onClick={() => handleChange(item.link)}
  className={`${item.link}` === activeLink ? 'active' : ''}
>
  {item.title}
</ScrollLink>
           
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
