import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material';

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
      'Designed embedded OT and protocol architectures.',
      'Developed P2P and Modbus communication frameworks.',
      'Maintained CI/CD workflows for legacy products.',
      'Optimized system reliability on constrained platforms.',
    ],
  },
  {
    label: 'Customer Support',
    items: ['Resolved customer issues across protocol and embedded systems.'],
  },
  {
    label: 'Collaboration',
    items: ['Worked with PM, QA, and front-end teams on embedded products.'],
  },
];

function SectionTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Typography
      component="h2"
      sx={{
        color: 'primary.main',
        fontSize: 19,
        fontWeight: 900,
        letterSpacing: 0,
        lineHeight: 1.1,
        mb: 1.05,
      }}
    >
      {children}
    </Typography>
  );
}

function BulletList({
  items,
  dense = false,
}: Readonly<{ items: string[]; dense?: boolean }>) {
  return (
    <Box component="ul" sx={{ color: 'text.secondary', pl: 2.15, my: 0.55 }}>
      {items.map((item) => (
        <Typography
          component="li"
          key={item}
          sx={{
            fontSize: dense ? 10.8 : 11.5,
            lineHeight: dense ? 1.28 : 1.35,
            mb: dense ? 0.22 : 0.34,
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}

function InfoPanel() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.light',
        p: 1.9,
        minHeight: '122mm',
      }}
    >
      <Typography
        component="h1"
        sx={{
          color: 'text.primary',
          fontSize: 31,
          fontWeight: 900,
          letterSpacing: 0,
          lineHeight: 0.98,
        }}
      >
        Ju Ta Tao
        <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
          (Harry)
        </Box>
      </Typography>

      <Typography sx={{ mt: 1.2, color: 'text.secondary', fontSize: 11.7 }}>
        Embedded software engineer focused on RTOS, OT protocols, and system
        architecture.
      </Typography>

      <Divider sx={{ my: 1.6 }} />

      <SectionTitle>Contact</SectionTitle>
      <Typography sx={{ color: 'text.secondary', fontSize: 11.2 }}>
        Taiwan
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: 11.2 }}>
        harryju3@gmail.com
      </Typography>
      <Typography sx={{ color: 'text.secondary', fontSize: 11.2 }}>
        (+886) 988-633-765
      </Typography>

      <Divider sx={{ my: 1.6 }} />

      <SectionTitle>Skills</SectionTitle>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            color="primary"
            variant="outlined"
            size="small"
            sx={{
              height: 21,
              bgcolor: '#ffffff',
              '& .MuiChip-label': {
                px: 0.7,
                fontSize: 9.9,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function ResumePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '210mm',
          height: '297mm',
          p: '10mm 7mm',
          bgcolor: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={3.2} sx={{ height: '100%' }}>
          <Grid size={4.1}>
            <Box sx={{ bgcolor: 'primary.light', px: 1.5, py: 1.15, mb: 1.4 }}>
              <Chip
                label="Embedded Software Engineer"
                color="primary"
                size="small"
              />
            </Box>

            <Box
              component="img"
              src="/assets/resume-profile.jpg"
              alt="Harry Ju profile photo"
              sx={{
                display: 'block',
                width: '100%',
                height: '50mm',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '2px solid',
                borderColor: 'primary.dark',
                bgcolor: 'primary.dark',
                mb: 3.7,
              }}
            />

            <InfoPanel />
          </Grid>

          <Grid size={7.9}>
            <Box sx={{ mb: 2.8 }}>
              <SectionTitle>Education</SectionTitle>
              {education.map((item, index) => (
                <Box
                  key={item.school}
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 1.35,
                    bgcolor: '#fbfdff',
                    mb: index === education.length - 1 ? 0 : 1.35,
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: 17.2, lineHeight: 1.08 }}>
                    {item.school}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 11.4 }}>
                    {item.period}
                  </Typography>
                  <Typography sx={{ mt: 0.45, fontSize: 12.2, lineHeight: 1.2 }}>
                    {item.degree}
                  </Typography>
                  <BulletList items={item.items} />
                </Box>
              ))}
            </Box>

            <Box>
              <SectionTitle>Work Experience</SectionTitle>
              <Typography sx={{ color: 'text.secondary', fontSize: 10.8, mb: 1.25 }}>
                Embedded product development, industrial protocols, customer issue
                resolution, and cross-functional delivery.
              </Typography>
              <Divider sx={{ borderColor: 'primary.main', borderBottomWidth: 2, mb: 1.4 }} />

              <Typography sx={{ fontWeight: 900, fontSize: 15.4 }}>
                Moxa Inc. | Software Engineer R&D
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 10.8 }}>
                2023 - Present
              </Typography>

              <Grid container spacing={1.25} sx={{ mt: 1 }}>
                {workGroups.map((group) => (
                  <Grid size={group.label === 'Product Development' ? 12 : 6} key={group.label}>
                    <Box
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        p: 1.05,
                        bgcolor: '#fbfdff',
                        minHeight: group.label === 'Product Development' ? '33mm' : '21mm',
                      }}
                    >
                      <Chip label={group.label} size="small" sx={{ mb: 0.25 }} />
                      <BulletList items={group.items} dense />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 1.65 }} />

              <Typography sx={{ fontWeight: 900, fontSize: 15.4 }}>
                Academia Sinica | Intern
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 10.8 }}>
                Jul. 2019 - Sep. 2019
              </Typography>
              <Box
                sx={{
                  mt: 0.8,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  p: 1.05,
                  bgcolor: '#fbfdff',
                }}
              >
                <BulletList
                  dense
                  items={['Developed speech recognition web applications.']}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
