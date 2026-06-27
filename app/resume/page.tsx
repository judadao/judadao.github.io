const skills = [
  'C/C++/Python',
  'RTOS development experience: Zephyr, FreeRTOS',
  'OT protocol implementation: Modbus TCP, SNMP, MQTT',
  'Development environment setup: CI/CD, Docker',
  'AI-related research experience during undergraduate and graduate studies',
];

const moxaProductItems = [
  'Served as the function owner for protocol modules across multiple embedded products.',
  'Designed and implemented system-level architectures for OT features.',
  'Designed and optimized embedded systems for resource-constrained hardware environments with a focus on stability and reliability.',
];

const moxaCollaborationItems = [
  'Coordinated with PMs, QA, and front-end teams to ensure cross-functional alignment on customer needs and product specifications.',
];

const moxaSupportItems = [
  'Resolved customer issues across protocol behavior, embedded systems, and deployment environments.',
];

function BulletList({
  items,
  marker = 'square',
}: Readonly<{ items: string[]; marker?: 'diamond' | 'square' }>) {
  return (
    <ul className={`resume-list resume-list-${marker}`}>
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
          width: 210mm;
          height: 297mm;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13.5px;
          line-height: 1.45;
        }

        .resume-hero {
          display: grid;
          grid-template-columns: 58mm 1fr;
          gap: 10mm;
          align-items: start;
          padding: 7mm 9mm 0;
        }

        .resume-photo {
          width: 58mm;
          height: 48mm;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .resume-name {
          margin: 0 0 4mm;
          font-size: 26px;
          line-height: 1.05;
          font-weight: 500;
          letter-spacing: 0;
        }

        .resume-brief {
          margin: 0 0 2.6mm;
          font-size: 12.2px;
        }

        .resume-brief strong {
          font-style: italic;
          font-weight: 700;
        }

        .resume-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 5mm;
          align-items: center;
          margin-top: 4.5mm;
          font-size: 13px;
        }

        .resume-contact a {
          color: #0057d8;
        }

        .resume-band {
          margin-top: 0;
          padding: 3mm 9mm 4mm;
          background: #eeeeee;
        }

        .resume-section-title {
          margin: 0 0 2mm;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 800;
          color: #111827;
        }

        .resume-about {
          margin: 0 0 3.5mm;
          font-size: 14px;
          line-height: 1.65;
          font-weight: 700;
        }

        .resume-list {
          margin: 1.5mm 0 0;
          padding-left: 10mm;
        }

        .resume-list li {
          margin-bottom: 1.7mm;
          padding-left: 1.5mm;
        }

        .resume-list-diamond {
          list-style-type: '♦';
        }

        .resume-list-square {
          list-style-type: square;
        }

        .resume-content {
          padding: 5mm 9mm 0;
        }

        .resume-role {
          margin: 3mm 0 1.2mm;
          font-size: 17px;
          font-weight: 800;
        }

        .resume-emphasis {
          margin: 0 0 2mm 9mm;
          font-style: italic;
          font-weight: 700;
          font-size: 14px;
        }

        .resume-date {
          margin: 0 0 2.6mm 9mm;
          font-style: italic;
          font-size: 13px;
        }

        .resume-subgroup {
          margin: 2.4mm 0 1.2mm 9mm;
          font-size: 14px;
        }

        .resume-nested {
          margin-left: 9mm;
        }

        @media print {
          .resume-page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <section className="resume-hero">
        <img
          className="resume-photo"
          src="/assets/resume-profile.jpg"
          alt="Harry Ju profile photo"
        />

        <div>
          <h1 className="resume-name">Ju Ta Tao (Harry)</h1>

          <p className="resume-brief">Education:</p>
          <p className="resume-brief">
            <strong>National Chung Cheng University (2020 - 2022):</strong>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;
            <strong>
              Master of Computer Science and Information Engineering
            </strong>
          </p>

          <p className="resume-brief">Working experience:</p>
          <p className="resume-brief">
            <strong>
              Moxa Software Engineer R&D (2023~): Embedded Product Development
            </strong>
          </p>

          <div className="resume-contact">
            <span>Phone: (+886)988633765</span>
            <span>
              Email:{' '}
              <a href="mailto:harryju3@gmail.com">harryju3@gmail.com</a>
            </span>
          </div>
        </div>
      </section>

      <section className="resume-band">
        <h2 className="resume-section-title">About Me:</h2>
        <p className="resume-about">
          Enjoy building reliable systems, collaborating across teams, and
          continuously learning new technologies. Outside of work, I stay active
          through basketball and enjoy exploring technical topics.
        </p>

        <h2 className="resume-section-title">Skills:</h2>
        <BulletList items={skills} marker="diamond" />
      </section>

      <section className="resume-content">
        <h2 className="resume-section-title">Work Experience:</h2>

        <h3 className="resume-role">Intern</h3>
        <p className="resume-emphasis">
          Institute of Information Science, Academia Sinica
        </p>
        <p className="resume-date">Jul. 2019 - Sep. 2019</p>
        <div className="resume-nested">
          <BulletList
            items={['Designed a Taiwanese speech recording and AI speech recognition website.']}
          />
        </div>

        <h3 className="resume-role">Companies</h3>
        <p className="resume-emphasis">Moxa Inc.</p>
        <p className="resume-date">2023 - Present</p>

        <p className="resume-subgroup">Product Development</p>
        <div className="resume-nested">
          <BulletList items={moxaProductItems} />
        </div>

        <p className="resume-subgroup">Collaboration</p>
        <div className="resume-nested">
          <BulletList items={moxaCollaborationItems} />
        </div>

        <p className="resume-subgroup">Customer Support</p>
        <div className="resume-nested">
          <BulletList items={moxaSupportItems} />
        </div>
      </section>
    </main>
  );
}
