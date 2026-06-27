const skills = [
  'C / C++ / Python',
  'Zephyr / FreeRTOS',
  'Embedded Linux',
  'Modbus TCP',
  'SNMP',
  'MQTT',
  'CI/CD',
  'Docker',
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

export default function ResumePage() {
  return (
    <main className="resume-page">
      <style>{`
        .resume-page {
          --primary: #0f6f78;
          --primary-dark: #084f57;
          --primary-light: #d6f3f5;
          --secondary: #6d5dfc;
          --surface: #ffffff;
          --surface-soft: #f6f8fb;
          --text: #18202a;
          --muted: #5c6675;
          --line: #d6dde6;
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          padding: 8mm;
          background: var(--surface-soft);
          color: var(--text);
          overflow: hidden;
          font-family: Inter, Arial, Helvetica, sans-serif;
          font-size: 12.5px;
          line-height: 1.42;
        }

        .resume-hero {
          display: grid;
          grid-template-columns: 48mm 1fr;
          gap: 7mm;
          align-items: stretch;
          margin-bottom: 4mm;
        }

        .resume-photo {
          width: 48mm;
          height: 43mm;
          object-fit: cover;
          object-position: center top;
          display: block;
          border-radius: 8px;
          border: 2px solid var(--primary-dark);
          background: var(--primary-dark);
        }

        .resume-hero-card,
        .resume-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 8px;
        }

        .resume-hero-card {
          padding: 4.5mm 5mm;
          display: grid;
          grid-template-columns: 1fr 47mm;
          gap: 5mm;
          align-items: center;
        }

        .resume-chip {
          display: inline-block;
          padding: 1.4mm 2.4mm;
          border-radius: 8px;
          background: var(--primary);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          line-height: 1;
        }

        .resume-name {
          margin: 2.4mm 0 1.4mm;
          font-size: 32px;
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: 0;
        }

        .resume-name span {
          color: var(--primary);
        }

        .resume-summary {
          margin: 0;
          color: var(--muted);
          font-size: 12.5px;
        }

        .resume-contact {
          border-left: 3px solid var(--primary);
          padding-left: 3mm;
          color: var(--muted);
          font-size: 11.4px;
        }

        .resume-contact p {
          margin: 0 0 1.3mm;
        }

        .resume-contact a {
          color: var(--primary-dark);
          text-decoration: none;
        }

        .resume-band {
          padding: 4mm;
          margin-bottom: 4mm;
          background: var(--primary-light);
          border-radius: 8px;
          border: 1px solid #bddfe3;
        }

        .resume-section-title {
          margin: 0 0 2.2mm;
          font-size: 20px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 0;
          color: var(--primary-dark);
        }

        .resume-about {
          margin: 0 0 3.3mm;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 700;
          color: var(--text);
        }

        .resume-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5mm;
        }

        .resume-skill {
          padding: 1.25mm 2mm;
          border: 1px solid var(--primary);
          border-radius: 8px;
          background: #ffffff;
          color: var(--primary-dark);
          font-size: 10.3px;
          font-weight: 800;
          line-height: 1;
        }

        .resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4mm;
          margin-bottom: 4mm;
        }

        .resume-card {
          padding: 3.5mm;
        }

        .resume-card-title {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.18;
          font-weight: 900;
        }

        .resume-date {
          margin: 0.7mm 0 1.1mm;
          color: var(--muted);
          font-size: 10.8px;
        }

        .resume-degree {
          margin: 0 0 1mm;
          font-size: 11.5px;
          line-height: 1.25;
        }

        .resume-list {
          margin: 1mm 0 0;
          padding-left: 5mm;
          color: var(--muted);
        }

        .resume-list li {
          margin-bottom: 0.9mm;
          padding-left: 0.8mm;
          font-size: 11.1px;
        }

        .resume-work-head {
          padding-bottom: 2.1mm;
          border-bottom: 2px solid var(--primary);
          margin-bottom: 3mm;
        }

        .resume-work-subtitle {
          margin: 1mm 0 0;
          color: var(--muted);
          font-size: 11.2px;
        }

        .resume-role {
          margin: 0;
          font-size: 16px;
          font-weight: 900;
        }

        .resume-tag {
          display: inline-block;
          padding: 1.1mm 2mm;
          border-radius: 8px;
          background: #edf1f5;
          color: var(--text);
          font-size: 10.6px;
          font-weight: 800;
          line-height: 1;
        }

        .resume-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3mm;
          margin-top: 2.6mm;
        }

        .resume-work-grid .wide {
          grid-column: 1 / -1;
        }

        .resume-footer-role {
          margin-top: 3.2mm;
          padding-top: 2.4mm;
          border-top: 1px solid var(--line);
        }

        @media print {
          .resume-page {
            margin: 0;
          }
        }
      `}</style>

      <section className="resume-hero">
        <img
          className="resume-photo"
          src="/assets/resume-profile.jpg"
          alt="Harry Ju profile photo"
        />

        <div className="resume-hero-card">
          <div>
            <span className="resume-chip">Embedded Software Engineer</span>
            <h1 className="resume-name">
              Ju Ta Tao <span>(Harry)</span>
            </h1>
            <p className="resume-summary">
              Embedded software engineer focused on RTOS, OT protocols, and
              system architecture.
            </p>
          </div>
          <div className="resume-contact">
            <p>Taiwan</p>
            <p>
              <a href="mailto:harryju3@gmail.com">harryju3@gmail.com</a>
            </p>
            <p>(+886) 988-633-765</p>
          </div>
        </div>
      </section>

      <section className="resume-band">
        <h2 className="resume-section-title">About Me</h2>
        <p className="resume-about">
          Enjoy building reliable systems, collaborating across teams, and
          continuously learning new technologies. Outside of work, I stay active
          through basketball and enjoy exploring technical topics.
        </p>

        <h2 className="resume-section-title">Skills</h2>
        <div className="resume-skills">
          {skills.map((skill) => (
            <span className="resume-skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="resume-section-title">Education</h2>
        <div className="resume-grid">
          {education.map((item) => (
            <article className="resume-card" key={item.school}>
              <h3 className="resume-card-title">{item.school}</h3>
              <p className="resume-date">{item.period}</p>
              <p className="resume-degree">{item.degree}</p>
              <BulletList items={item.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="resume-card">
        <div className="resume-work-head">
          <h2 className="resume-section-title">Work Experience</h2>
          <p className="resume-work-subtitle">
            Embedded product development, industrial protocols, customer issue
            resolution, and cross-functional delivery.
          </p>
        </div>

        <h3 className="resume-role">Moxa Inc. | Software Engineer R&D</h3>
        <p className="resume-date">2023 - Present</p>

        <div className="resume-work-grid">
          {workGroups.map((group) => (
            <article
              className={`resume-card ${group.label === 'Product Development' ? 'wide' : ''}`}
              key={group.label}
            >
              <span className="resume-tag">{group.label}</span>
              <BulletList items={group.items} />
            </article>
          ))}
        </div>

        <div className="resume-footer-role">
          <h3 className="resume-role">Academia Sinica | Intern</h3>
          <p className="resume-date">Jul. 2019 - Sep. 2019</p>
          <BulletList
            items={['Developed speech recognition web applications.']}
          />
        </div>
      </section>
    </main>
  );
}
