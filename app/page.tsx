const skills = [
  'C / C++ / Python',
  'Embedded Linux',
  'Zephyr',
  'FreeRTOS',
  'Modbus TCP',
  'MQTT',
  'SNMP',
  'CI/CD',
  'Docker',
  'ARM',
  'AI / Deep Learning',
];

export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <div>
          <h1>
            Ju Ta Tao
            <br />
            (Harry)
          </h1>
          <div className="subtitle">Embedded Software Engineer</div>
          <div className="contact">
            Taiwan | harryju3@gmail.com | (+886) 988-633-765
          </div>

          <p className="summary">
            Embedded software engineer focused on{' '}
            <span className="highlight">RTOS</span>,{' '}
            <span className="highlight">OT protocols</span>, and{' '}
            <span className="highlight">system architecture</span>.
          </p>

          <div className="actions">
            <a className="button" href="/assets/English_CV.pdf" target="_blank">
              View Resume
            </a>
            <a
              className="button secondary"
              href="/assets/English_CV.pdf"
              download="Harry_Ju_Resume.pdf"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="photo-wrap">
          <img
            className="photo"
            src="/assets/profile.png"
            alt="Harry Ju profile photo"
          />
        </div>
      </div>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Work Experience</h2>

        <div className="company">Moxa Inc. | Software Engineer R&D</div>
        <div className="date">2023 - Present</div>

        <span className="label">Product Development</span>
        <ul>
          <li>Designed embedded OT and protocol architectures.</li>
          <li>Developed P2P and Modbus communication frameworks.</li>
          <li>Maintained CI/CD workflows for legacy products.</li>
          <li>Optimized system reliability on constrained platforms.</li>
        </ul>

        <span className="label">Customer Support</span>
        <ul>
          <li>Resolved customer issues across protocol and embedded systems.</li>
        </ul>

        <span className="label">Collaboration</span>
        <ul>
          <li>Worked with PM, QA, and front-end teams on embedded products.</li>
        </ul>

        <div className="company">Academia Sinica | Intern</div>
        <div className="date">Jul. 2019 - Sep. 2019</div>
        <ul>
          <li>Developed speech recognition web applications.</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>

        <div className="grid">
          <div>
            <div className="company">National Chung Cheng University</div>
            <div className="date">2020 - 2022</div>
            <p>M.S. in Computer Science and Information Engineering</p>
            <ul>
              <li>AI and speech recognition research using PyTorch.</li>
              <li>Focused on low-resource speech recognition systems.</li>
            </ul>
          </div>

          <div>
            <div className="company">Chang Gung University</div>
            <div className="date">2015 - 2020</div>
            <p>B.S. in Computer Science and Information Engineering</p>
            <ul>
              <li>
                Built AI and speech recognition projects using TensorFlow and
                Django.
              </li>
              <li>Developed embedded and RTOS-based ARM projects.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
