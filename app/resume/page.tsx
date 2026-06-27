import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

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

const workItems = [
  'Designed embedded OT and protocol architectures.',
  'Developed P2P and Modbus communication frameworks.',
  'Maintained CI/CD workflows for legacy products.',
  'Optimized system reliability on constrained platforms.',
  'Resolved customer issues across protocol and embedded systems.',
  'Worked with PM, QA, and front-end teams on embedded products.',
];

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: '0 8px 30px rgba(15, 23, 42, 0.07)',
  breakInside: 'avoid',
};

function SectionTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Typography
      component="h2"
      variant="h6"
      sx={{
        mb: 1.5,
        color: 'primary.dark',
        fontWeight: 900,
        letterSpacing: 0,
      }}
    >
      {children}
    </Typography>
  );
}

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <Box component="ul" sx={{ color: 'text.secondary', pl: 2.3, my: 1 }}>
      {items.map((item) => (
        <Typography component="li" key={item} sx={{ mb: 0.28, fontSize: 11.6 }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}

export default function ResumePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: '#eef5f6',
        py: 2,
        '@media print': {
          bgcolor: '#eef5f6',
          py: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '210mm',
          minHeight: '297mm',
          p: 1.8,
          bgcolor: '#f6f8fb',
          '@media print': {
            width: '210mm',
            minHeight: '297mm',
            p: 1.7,
          },
        }}
      >
        <Card elevation={0} sx={{ ...cardSx, overflow: 'hidden', mb: 1.3 }}>
          <CardContent sx={{ p: 2 }}>
            <Grid container spacing={1.6} sx={{ alignItems: 'center' }}>
              <Grid size={8.6}>
                <Chip
                  label="Embedded Software Engineer"
                  color="primary"
                  size="small"
                  sx={{ mb: 0.9 }}
                />
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{ fontWeight: 900, lineHeight: 0.95, letterSpacing: 0 }}
                >
                  Ju Ta Tao{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    (Harry)
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    mt: 1.1,
                    color: 'text.secondary',
                    fontSize: 12.6,
                    maxWidth: 560,
                  }}
                >
                  Embedded software engineer focused on RTOS, OT protocols, and
                  system architecture.
                </Typography>
              </Grid>
              <Grid size={3.4}>
                <Box
                  sx={{
                    borderLeft: '3px solid',
                    borderColor: 'primary.main',
                    pl: 1.5,
                  }}
                >
                  <Typography sx={{ fontSize: 11.7, color: 'text.secondary' }}>
                    Taiwan
                  </Typography>
                  <Typography sx={{ fontSize: 11.7, color: 'text.secondary' }}>
                    harryju3@gmail.com
                  </Typography>
                  <Typography sx={{ fontSize: 11.7, color: 'text.secondary' }}>
                    (+886) 988-633-765
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={1.3}>
          <Grid size={4}>
            <Card elevation={0} sx={{ ...cardSx, mb: 1.3 }}>
              <CardContent sx={{ p: 1.75 }}>
                <SectionTitle>Skills</SectionTitle>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.55 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{
                        height: 23,
                        '& .MuiChip-label': {
                          px: 0.8,
                          fontSize: 10.6,
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card elevation={0} sx={cardSx}>
              <CardContent sx={{ p: 1.75 }}>
                <SectionTitle>Education</SectionTitle>
                <Typography sx={{ fontWeight: 850, fontSize: 13.5 }}>
                  National Chung Cheng University
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 11.4 }}>
                  2020 - 2022
                </Typography>
                <Typography sx={{ mt: 0.45, fontSize: 11.7 }}>
                  M.S. in Computer Science and Information Engineering
                </Typography>
                <BulletList
                  items={[
                    'AI and speech recognition research using PyTorch.',
                    'Focused on low-resource speech recognition systems.',
                  ]}
                />

                <Divider sx={{ my: 1 }} />

                <Typography sx={{ fontWeight: 850, fontSize: 13.5 }}>
                  Chang Gung University
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 11.4 }}>
                  2015 - 2020
                </Typography>
                <Typography sx={{ mt: 0.45, fontSize: 11.7 }}>
                  B.S. in Computer Science and Information Engineering
                </Typography>
                <BulletList
                  items={[
                    'Built AI and speech recognition projects using TensorFlow and Django.',
                    'Developed embedded and RTOS-based ARM projects.',
                  ]}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={8}>
            <Card elevation={0} sx={cardSx}>
              <CardContent sx={{ p: 1.9 }}>
                <SectionTitle>Work Experience</SectionTitle>
                <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                  Moxa Inc. | Software Engineer R&D
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 11.7 }}>
                  2023 - Present
                </Typography>
                <BulletList items={workItems} />

                <Divider sx={{ my: 1 }} />

                <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                  Academia Sinica | Intern
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 11.7 }}>
                  Jul. 2019 - Sep. 2019
                </Typography>
                <BulletList items={['Developed speech recognition web applications.']} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
