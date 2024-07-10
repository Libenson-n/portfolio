import styled from "styled-components";

const About = () => {
  return (
    <AboutSection id="About">
      <AboutMe>
        <AboutText>
          <h2>A little bit about me</h2>
          <p>
            I'm a full-stack developer passionate about creating responsive and
            accessible websites that leave a lasting impression. I'm actively
            seeking opportunities to contribute my creativity and technical
            skills to a dynamic team. When I'm not coding I like using my hands
            for woodworking, I enjoy creating functional furniture pieces for my
            friends and family.
          </p>
        </AboutText>
      </AboutMe>
      <Skills>
        <p>Skills</p>
        <Icons>
          <div>
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div>
            <i className="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div>
            <i className="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div>
            <i className="fa-brands fa-node"></i>
            <p>Node JS</p>
          </div>
          <div>
            <i className="fa-brands fa-react"></i>
            <p>React JS</p>
          </div>
        </Icons>
      </Skills>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  min-height: 100vh;
  margin: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: 3rem;
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    font-size: clamp(2rem, 3.5vw, 5rem);
  }
  img {
    width: min(50vw, 350px);
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
  }
`;
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80%;
  gap: 2rem;
  font-size: 2rem;
  padding-top: 2rem;
`;
const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  font-size: 4rem;
  line-height: 0.8em;

  @media (max-width: 40em) {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
  }
`;
