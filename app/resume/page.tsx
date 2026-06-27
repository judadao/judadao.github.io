import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
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

const projectFeatures = [
  'Lightweight MQTT broker running on Zephyr RTOS, ESP32, and Linux.',
  'Broker Mesh that synchronizes publish/subscribe traffic across nodes.',
  'Failover and fallback path that keeps clients online during broker failures.',
  'Automatic load balancing for client connections and topic subscriptions.',
];

const projectHighlights = [
  'Validated with ESP32 Wi-Fi brokers, ESP32 + W5500 Ethernet brokers, and Linux brokers.',
  'Reached 99.99% delivery in fixed-message broker failure recovery tests.',
  'Matched Mosquitto-level throughput in single-broker benchmark testing.',
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
        <Typography component="li" key={item} sx={{ mb: 0.35, fontSize: 12.2 }}>
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
          p: 2.6,
          bgcolor: '#f6f8fb',
          '@media print': {
            width: '210mm',
            minHeight: '297mm',
            p: 2.3,
          },
        }}
      >
        <Card elevation={0} sx={{ ...cardSx, overflow: 'hidden', mb: 1.8 }}>
          <Grid container>
            <Grid size={8}>
              <CardContent sx={{ p: 2.8 }}>
                <Chip
                  label="Embedded Software Engineer"
                  color="primary"
                  size="small"
                  sx={{ mb: 1.2 }}
                />
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{ fontWeight: 900, lineHeight: 1, letterSpacing: 0 }}
                >
                  Ju Ta Tao{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    (Harry)
                  </Box>
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, fontSize: 12.5 }}>
                  Taiwan | harryju3@gmail.com | (+886) 988-633-765
                </Typography>
                <Typography
                  sx={{
                    mt: 1.8,
                    color: 'text.secondary',
                    fontSize: 13.5,
                    maxWidth: 560,
                  }}
                >
                  Embedded software engineer focused on RTOS, OT protocols, and
                  system architecture.
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              size={4}
              sx={{
                bgcolor: 'primary.light',
                display: 'grid',
                placeItems: 'center',
                p: 2,
              }}
            >
              <Box
                component="img"
                src="/assets/profile.png"
                alt="Harry Ju profile photo"
                sx={{
                  width: 120,
                  height: 150,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: 2,
                  boxShadow: '0 14px 34px rgba(15, 111, 120, 0.2)',
                }}
              />
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={1.8}>
          <Grid size={7}>
            <Stack spacing={1.8}>
              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ p: 2.2 }}>
                  <SectionTitle>Work Experience</SectionTitle>
                  <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                    Moxa Inc. | Software Engineer R&D
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                    2023 - Present
                  </Typography>
                  <BulletList items={workItems} />

                  <Divider sx={{ my: 1.4 }} />

                  <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                    Academia Sinica | Intern
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                    Jul. 2019 - Sep. 2019
                  </Typography>
                  <BulletList
                    items={['Developed speech recognition web applications.']}
                  />
                </CardContent>
              </Card>

              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ p: 2.2 }}>
                  <SectionTitle>Projects</SectionTitle>
                  <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
                    <GitHubIcon color="primary" fontSize="small" />
                    <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                      Decentralized MQTT Broker Mesh
                    </Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                    github.com/judadao/mqtt_field_bridge_app
                  </Typography>
                  <Typography sx={{ mt: 1, color: 'text.secondary', fontSize: 12.5 }}>
                    High-availability MQTT broker mesh for Zephyr, ESP32, and
                    Linux edge deployments.
                  </Typography>
                  <Chip label="Core Features" size="small" sx={{ mt: 1.2 }} />
                  <BulletList items={projectFeatures} />
                  <Chip label="Results" size="small" sx={{ mt: 0.4 }} />
                  <BulletList items={projectHighlights} />
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={5}>
            <Stack spacing={1.8}>
              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ p: 2.2 }}>
                  <SectionTitle>Skills</SectionTitle>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
                    {skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={0} sx={cardSx}>
                <CardContent sx={{ p: 2.2 }}>
                  <SectionTitle>Education</SectionTitle>
                  <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                    National Chung Cheng University
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                    2020 - 2022
                  </Typography>
                  <Typography sx={{ mt: 0.7, fontSize: 12.5 }}>
                    M.S. in Computer Science and Information Engineering
                  </Typography>
                  <BulletList
                    items={[
                      'AI and speech recognition research using PyTorch.',
                      'Focused on low-resource speech recognition systems.',
                    ]}
                  />

                  <Divider sx={{ my: 1.4 }} />

                  <Typography sx={{ fontWeight: 850, fontSize: 15 }}>
                    Chang Gung University
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                    2015 - 2020
                  </Typography>
                  <Typography sx={{ mt: 0.7, fontSize: 12.5 }}>
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
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
