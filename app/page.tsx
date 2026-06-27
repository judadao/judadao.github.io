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

const projects = [
  {
    name: 'Decentralized MQTT Broker Mesh',
    repo: 'judadao/mqtt_field_bridge_app',
    repoUrl: 'https://github.com/judadao/mqtt_field_bridge_app',
    postUrl:
      'https://www.linkedin.com/posts/tatao-ju_mqtt-iot-embeddedsystems-share-7476474415333941248-bGhB/',
    description:
      'High-availability MQTT broker mesh for Zephyr, ESP32, and Linux edge deployments.',
    tags: ['MQTT', 'Zephyr', 'ESP32', 'Linux', 'Edge IoT'],
    features: [
      'Lightweight MQTT broker running on Zephyr RTOS, ESP32, and Linux.',
      'Broker Mesh that synchronizes publish/subscribe traffic across nodes.',
      'Failover and fallback path that keeps clients online during broker failures.',
      'Automatic load balancing for client connections and topic subscriptions.',
    ],
    highlights: [
      'Validated with ESP32 Wi-Fi brokers, ESP32 + W5500 Ethernet brokers, and Linux brokers.',
      'Reached 99.99% delivery in fixed-message broker failure recovery tests.',
      'Matched Mosquitto-level throughput in single-broker benchmark testing.',
    ],
  },
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

      <section>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.repo}>
              <div className="project-header">
                <div>
                  <div className="company">{project.name}</div>
                  <div className="date">{project.repo}</div>
                </div>
                <div className="project-links">
                  <a href={project.repoUrl} target="_blank">
                    GitHub
                  </a>
                  <a href={project.postUrl} target="_blank">
                    LinkedIn
                  </a>
                </div>
              </div>

              <p>{project.description}</p>

              <div className="skills">
                {project.tags.map((tag) => (
                  <span className="skill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <span className="label">Core Features</span>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <span className="label">Results</span>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
