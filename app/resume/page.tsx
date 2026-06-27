const skills = [
  'C / C++ / Python',
  'Zephyr / FreeRTOS',
  'Embedded Linux',
  'Modbus TCP / SNMP / MQTT',
  'CI/CD / Docker',
  'ARM',
  'AI / Deep Learning',
];

const education = [
  {
    school: 'National Chung Cheng University',
    period: '2020 - 2022',
    degree: 'M.S. in Computer Science and Information Engineering',
    items: [
      'AI and speech recognition research using PyTorch.',
      'Focused on low-resource speech recognition systems.',
    ],
  },
  {
    school: 'Chang Gung University',
    period: '2015 - 2020',
    degree: 'B.S. in Computer Science and Information Engineering',
    items: [
      'Built AI and speech recognition projects using TensorFlow and Django.',
      'Developed embedded and RTOS-based ARM projects.',
    ],
  },
];

const workGroups = [
  {
    label: 'Product Development',
    items: [
      'Served as the function owner for protocol modules across multiple embedded products.',
      'Designed and implemented system-level architectures for OT features.',
      'Designed and optimized embedded systems for resource-constrained hardware environments with a focus on stability and reliability.',
    ],
  },
  {
    label: 'Collaboration',
    items: [
      'Coordinated with PMs, QA, and front-end teams to align customer needs and product specifications.',
    ],
  },
  {
    label: 'Customer Support',
    items: [
      'Resolved customer issues across protocol behavior, embedded systems, and deployment environments.',
    ],
  },
];

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="resume-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SectionTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h2 className="section-title">{children}</h2>;
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <style>{`
        .resume-page {
          --primary: #0f6f78;
          --primary-dark: #084f57;
          --primary-light: #e7f7f8;
          --text: #18202a;
          --muted: #5c6675;
          --line: #b9c6cf;
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          padding: 10mm 12mm;
          background: #ffffff;
          color: var(--text);
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12.5px;
          line-height: 1.38;
        }

        .top {
          display: grid;
          grid-template-columns: 42mm 1fr;
          gap: 8mm;
          align-items: center;
          padding-bottom: 5mm;
          border-bottom: 2px solid var(--primary);
        }

        .photo {
          width: 42mm;
          height: 42mm;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .name {
          margin: 0;
          font-size: 31px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0;
        }

        .name span {
          color: var(--primary);
        }

        .role {
          margin: 2mm 0 2.5mm;
          color: var(--primary-dark);
          font-size: 14px;
          font-weight: 800;
        }

        .summary {
          max-width: 132mm;
          margin: 0;
          color: var(--muted);
          font-size: 12.2px;
        }

        .contact {
          display: flex;
          gap: 5mm;
          margin-top: 3mm;
          color: var(--muted);
          font-size: 11.5px;
        }

        .contact a {
          color: var(--primary-dark);
          text-decoration: none;
        }

        .band {
          margin: 5mm 0;
          padding: 4mm;
          background: var(--primary-light);
        }

        .section-title {
          margin: 0 0 2mm;
          color: var(--primary-dark);
          font-size: 18px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: 0;
        }

        .about {
          margin: 0 0 3mm;
          font-size: 12.6px;
          font-weight: 700;
          line-height: 1.5;
        }

        .skills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2mm 8mm;
          margin: 0;
          padding-left: 5mm;
        }

        .skills li {
          font-size: 11.7px;
          margin: 0;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6mm;
        }

        .entry {
          margin-bottom: 3mm;
        }

        .entry-title {
          margin: 0;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 800;
        }

        .date {
          margin: 0.5mm 0 1mm;
          color: var(--muted);
          font-size: 11.2px;
        }

        .degree {
          margin: 0 0 1mm;
          font-size: 11.8px;
        }

        .resume-list {
          margin: 1mm 0 0;
          padding-left: 5mm;
          color: var(--muted);
        }

        .resume-list li {
          margin-bottom: 0.8mm;
          padding-left: 0.7mm;
          font-size: 11.4px;
        }

        .work {
          margin-top: 4mm;
          padding-top: 4mm;
          border-top: 1px solid var(--line);
        }

        .work-intro {
          margin: 0 0 3mm;
          color: var(--muted);
          font-size: 11.6px;
        }

        .subhead {
          margin: 2.5mm 0 0.8mm;
          color: var(--primary-dark);
          font-size: 12.8px;
          font-weight: 800;
        }

        .intern {
          margin-top: 3.5mm;
          padding-top: 3mm;
          border-top: 1px solid var(--line);
        }

        @media print {
          .resume-page {
            margin: 0;
          }
        }
      `}</style>

      <section className="top">
        <img
          className="photo"
          src="/assets/resume-profile.jpg"
          alt="Harry Ju profile photo"
        />
        <div>
          <h1 className="name">
            Ju Ta Tao <span>(Harry)</span>
          </h1>
          <p className="role">Embedded Software Engineer</p>
          <p className="summary">
            Embedded software engineer focused on RTOS, OT protocols, and
            system architecture.
          </p>
          <div className="contact">
            <span>Taiwan</span>
            <a href="mailto:harryju3@gmail.com">harryju3@gmail.com</a>
            <span>(+886) 988-633-765</span>
          </div>
        </div>
      </section>

      <section className="band">
        <SectionTitle>About Me</SectionTitle>
        <p className="about">
          Enjoy building reliable systems, collaborating across teams, and
          continuously learning new technologies. Outside of work, I stay active
          through basketball and enjoy exploring technical topics.
        </p>

        <SectionTitle>Skills</SectionTitle>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>Education</SectionTitle>
        <div className="two-col">
          {education.map((item) => (
            <article className="entry" key={item.school}>
              <h3 className="entry-title">{item.school}</h3>
              <p className="date">{item.period}</p>
              <p className="degree">{item.degree}</p>
              <BulletList items={item.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="work">
        <SectionTitle>Work Experience</SectionTitle>
        <p className="work-intro">
          Embedded product development, industrial protocols, customer issue
          resolution, and cross-functional delivery.
        </p>

        <article>
          <h3 className="entry-title">Moxa Inc. | Software Engineer R&D</h3>
          <p className="date">2023 - Present</p>

          {workGroups.map((group) => (
            <div key={group.label}>
              <p className="subhead">{group.label}</p>
              <BulletList items={group.items} />
            </div>
          ))}
        </article>

        <article className="intern">
          <h3 className="entry-title">Academia Sinica | Intern</h3>
          <p className="date">Jul. 2019 - Sep. 2019</p>
          <BulletList
            items={['Developed speech recognition web applications.']}
          />
        </article>
      </section>
    </main>
  );
}
