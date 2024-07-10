import styled from "styled-components";
import ReactSwitch from "react-switch";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <Switch>
      <p>Dark Mode</p>
      <ReactSwitch
        className="toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </Switch>
  );
};

export default ThemeToggle;

const Switch = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7em;

  .toggle {
    position: relative;
    display: inline-block;
    width: 3.75em;
    height: 2.125em;
  }
`;
