import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
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

const sectionSx = {
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: '0 18px 60px rgba(15, 23, 42, 0.08)',
};

function SectionTitle({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Typography
      component="h2"
      variant="h4"
      sx={{ mb: 3, color: 'text.primary' }}
    >
      {children}
    </Typography>
  );
}

function BulletList({ items }: Readonly<{ items: string[] }>) {
  return (
    <Box component="ul" sx={{ color: 'text.secondary', pl: 2.5, my: 1.5 }}>
      {items.map((item) => (
        <Typography component="li" key={item} sx={{ mb: 0.75 }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', py: { xs: 3, md: 7 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            ...sectionSx,
            overflow: 'hidden',
            mb: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ p: { xs: 3, md: 6 } }}>
                <Chip
                  label="Embedded Software Engineer"
                  color="primary"
                  sx={{ mb: 2 }}
                />
                <Typography
                  component="h1"
                  variant="h2"
                  sx={{ fontSize: { xs: 42, md: 64 }, lineHeight: 1.02 }}
                >
                  Ju Ta Tao
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {' '}
                    (Harry)
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 2, color: 'text.secondary' }}
                >
                  Taiwan | harryju3@gmail.com | (+886) 988-633-765
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 4,
                    maxWidth: 680,
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  Embedded software engineer focused on RTOS, OT protocols, and
                  system architecture.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                  <Button
                    href="/assets/English_CV.pdf"
                    target="_blank"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    View Resume
                  </Button>
                  <Button
                    href="/assets/English_CV.pdf"
                    download="Harry_Ju_Resume.pdf"
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                  >
                    Download PDF
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: 'grid',
                placeItems: 'center',
                p: { xs: 3, md: 5 },
                bgcolor: 'primary.light',
              }}
            >
              <Avatar
                src="/assets/profile.png"
                alt="Harry Ju profile photo"
                variant="rounded"
                sx={{
                  width: { xs: 220, md: 280 },
                  height: { xs: 280, md: 360 },
                  borderRadius: 2,
                  boxShadow: '0 24px 50px rgba(15, 111, 120, 0.22)',
                }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Stack spacing={3}>
          <Card elevation={0} sx={sectionSx}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <SectionTitle>Skills</SectionTitle>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card elevation={0} sx={sectionSx}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <SectionTitle>Work Experience</SectionTitle>

              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Moxa Inc. | Software Engineer R&D
              </Typography>
              <Typography color="text.secondary">2023 - Present</Typography>

              <Chip label="Product Development" size="small" sx={{ mt: 2 }} />
              <BulletList
                items={[
                  'Designed embedded OT and protocol architectures.',
                  'Developed P2P and Modbus communication frameworks.',
                  'Maintained CI/CD workflows for legacy products.',
                  'Optimized system reliability on constrained platforms.',
                ]}
              />

              <Chip label="Customer Support" size="small" sx={{ mt: 1 }} />
              <BulletList
                items={[
                  'Resolved customer issues across protocol and embedded systems.',
                ]}
              />

              <Chip label="Collaboration" size="small" sx={{ mt: 1 }} />
              <BulletList
                items={[
                  'Worked with PM, QA, and front-end teams on embedded products.',
                ]}
              />

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Academia Sinica | Intern
              </Typography>
              <Typography color="text.secondary">Jul. 2019 - Sep. 2019</Typography>
              <BulletList items={['Developed speech recognition web applications.']} />
            </CardContent>
          </Card>

          <Card elevation={0} sx={sectionSx}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <SectionTitle>Education</SectionTitle>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    National Chung Cheng University
                  </Typography>
                  <Typography color="text.secondary">2020 - 2022</Typography>
                  <Typography sx={{ mt: 1 }}>
                    M.S. in Computer Science and Information Engineering
                  </Typography>
                  <BulletList
                    items={[
                      'AI and speech recognition research using PyTorch.',
                      'Focused on low-resource speech recognition systems.',
                    ]}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    Chang Gung University
                  </Typography>
                  <Typography color="text.secondary">2015 - 2020</Typography>
                  <Typography sx={{ mt: 1 }}>
                    B.S. in Computer Science and Information Engineering
                  </Typography>
                  <BulletList
                    items={[
                      'Built AI and speech recognition projects using TensorFlow and Django.',
                      'Developed embedded and RTOS-based ARM projects.',
                    ]}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card elevation={0} sx={sectionSx}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <SectionTitle>Projects</SectionTitle>
              {projects.map((project) => (
                <Card
                  key={project.repo}
                  variant="outlined"
                  sx={{ bgcolor: '#fbfdff' }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      spacing={2}
                      sx={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>
                          {project.name}
                        </Typography>
                        <Typography color="text.secondary">{project.repo}</Typography>
                      </Box>
                      <Stack direction="row" spacing={1}>
                        <Button
                          href={project.repoUrl}
                          target="_blank"
                          variant="contained"
                          startIcon={<GitHubIcon />}
                        >
                          GitHub
                        </Button>
                        <Button
                          href={project.postUrl}
                          target="_blank"
                          variant="outlined"
                          startIcon={<LinkedInIcon />}
                        >
                          LinkedIn
                        </Button>
                      </Stack>
                    </Stack>

                    <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 780 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} color="secondary" variant="outlined" />
                      ))}
                    </Box>

                    <Grid container spacing={3} sx={{ mt: 1 }}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Chip label="Core Features" size="small" sx={{ mt: 2 }} />
                        <BulletList items={project.features} />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Chip label="Results" size="small" sx={{ mt: 2 }} />
                        <BulletList items={project.highlights} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
