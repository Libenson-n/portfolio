import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const { ref: iconRef, inView: elementVisible } = useInView();
  return (
    <ContactMeSection id="ContactMe">
      <h2>Let's Connect!</h2>
      <div
        ref={iconRef}
        className={`icons ${elementVisible ? "animateIcons" : ""}`}
      >
        <a href="mailto:libenson.n@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/libenson-nicolas/" target="blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Libenson-n" target="blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <p>Email: libenson.n@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/libenson-nicolas</p>
        <p>GitHub: https://github.com/Libenson-n</p>
      </div>
    </ContactMeSection>
  );
};

export default ContactMe;

const ContactMeSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: clamp(2.5rem, 4vw, 5rem);
  }
  .icons {
    display: flex;
    gap: 2rem;
    margin: 2rem 0 2rem 0;
    font-size: 3.5rem;
  }
  .animateIcons {
    animation: icons;
    animation-duration: 3s;
  }

  @keyframes icons {
    from {
      transform: scale(1.3);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  a {
    transition: 0.4s;
    transition-timing-function: linear;
  }
  a:hover {
    color: grey;
    font-size: 3.4rem;
  }
`;
