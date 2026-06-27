import {
  Box,
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

function SectionTitle({
  children,
  light = false,
}: Readonly<{ children: React.ReactNode; light?: boolean }>) {
  return (
    <Typography
      component="h2"
      sx={{
        mb: 1.2,
        color: light ? 'primary.dark' : 'primary.main',
        fontSize: 19,
        fontWeight: 900,
        letterSpacing: 0,
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
    <Box component="ul" sx={{ color: 'text.secondary', pl: 2.4, my: 0.8 }}>
      {items.map((item) => (
        <Typography
          component="li"
          key={item}
          sx={{ mb: dense ? 0.22 : 0.42, fontSize: dense ? 11.2 : 12.2 }}
        >
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
        bgcolor: '#dfe8ea',
        '@media print': {
          bgcolor: '#ffffff',
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: '210mm',
          height: '297mm',
          p: 0,
          display: 'grid',
          gridTemplateColumns: '70mm 1fr',
          bgcolor: '#ffffff',
          overflow: 'hidden',
          boxShadow: '0 18px 60px rgba(15, 23, 42, 0.12)',
          '@media print': {
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            bgcolor: 'primary.light',
            borderRight: '1px solid',
            borderColor: 'divider',
            p: 2.4,
          }}
        >
          <Chip
            label="Embedded Software Engineer"
            color="primary"
            size="small"
            sx={{ mb: 1.4 }}
          />

          <Typography
            component="h1"
            sx={{
              color: 'text.primary',
              fontSize: 33,
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: 0,
            }}
          >
            Ju Ta Tao
            <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
              (Harry)
            </Box>
          </Typography>

          <Typography sx={{ mt: 1.4, color: 'text.secondary', fontSize: 12.2 }}>
            Embedded software engineer focused on RTOS, OT protocols, and system
            architecture.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <SectionTitle light>Contact</SectionTitle>
          <Typography sx={{ color: 'text.secondary', fontSize: 11.7 }}>
            Taiwan
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 11.7 }}>
            harryju3@gmail.com
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 11.7 }}>
            (+886) 988-633-765
          </Typography>

          <Divider sx={{ my: 2 }} />

          <SectionTitle light>Skills</SectionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.55 }}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="primary"
                variant="outlined"
                size="small"
                sx={{
                  height: 22,
                  bgcolor: '#ffffff',
                  '& .MuiChip-label': {
                    px: 0.75,
                    fontSize: 10.3,
                  },
                }}
              />
            ))}
          </Box>

        </Box>

        <Box
          sx={{
            height: '100%',
            p: 3,
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            gap: 2,
          }}
        >
          <Box
            sx={{
              borderBottom: '3px solid',
              borderColor: 'primary.main',
              pb: 1.4,
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: 'text.primary',
                fontSize: 25,
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              Work Experience
            </Typography>
            <Typography sx={{ mt: 0.9, color: 'text.secondary', fontSize: 12.4 }}>
              Embedded product development, industrial protocols, customer
              issue resolution, and cross-functional delivery.
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              Moxa Inc. | Software Engineer R&D
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 12 }}>
              2023 - Present
            </Typography>

            <Grid container spacing={1.5} sx={{ mt: 1 }}>
              {workGroups.map((group) => (
                <Grid size={group.label === 'Product Development' ? 12 : 6} key={group.label}>
                  <Box
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      p: 1.35,
                      bgcolor: '#fbfdff',
                    }}
                  >
                    <Chip label={group.label} size="small" sx={{ mb: 0.4 }} />
                    <BulletList items={group.items} />
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 1.8 }} />

            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              Academia Sinica | Intern
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 12 }}>
              Jul. 2019 - Sep. 2019
            </Typography>
            <Box
              sx={{
                mt: 1,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                p: 1.35,
                bgcolor: '#fbfdff',
              }}
            >
              <BulletList items={['Developed speech recognition web applications.']} />
            </Box>

            <Divider sx={{ my: 1.8 }} />

            <SectionTitle>Education</SectionTitle>
            <Grid container spacing={1.5}>
              <Grid size={6}>
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 1.35,
                    bgcolor: '#fbfdff',
                    height: '100%',
                  }}
                >
                  <Typography sx={{ fontWeight: 850, fontSize: 14.5 }}>
                    National Chung Cheng University
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 11.5 }}>
                    2020 - 2022
                  </Typography>
                  <Typography sx={{ mt: 0.45, fontSize: 11.8 }}>
                    M.S. in Computer Science and Information Engineering
                  </Typography>
                  <BulletList
                    dense
                    items={[
                      'AI and speech recognition research using PyTorch.',
                      'Focused on low-resource speech recognition systems.',
                    ]}
                  />
                </Box>
              </Grid>

              <Grid size={6}>
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 1.35,
                    bgcolor: '#fbfdff',
                    height: '100%',
                  }}
                >
                  <Typography sx={{ fontWeight: 850, fontSize: 14.5 }}>
                    Chang Gung University
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 11.5 }}>
                    2015 - 2020
                  </Typography>
                  <Typography sx={{ mt: 0.45, fontSize: 11.8 }}>
                    B.S. in Computer Science and Information Engineering
                  </Typography>
                  <BulletList
                    dense
                    items={[
                      'Built AI and speech recognition projects using TensorFlow and Django.',
                      'Developed embedded and RTOS-based ARM projects.',
                    ]}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
