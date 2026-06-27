import { expect, test } from '@playwright/test';

test('renders the main profile sections', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: /Ju Ta Tao/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.getByText('Decentralized MQTT Broker Mesh')).toBeVisible();
});

test('resume actions point to the exported PDF', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const viewResume = page.getByRole('link', { name: /view resume/i });
  const downloadResume = page.getByRole('link', { name: /download pdf/i });

  await expect(viewResume).toHaveAttribute('href', '/assets/English_CV.pdf');
  await expect(viewResume).toHaveAttribute('target', '_blank');
  await expect(downloadResume).toHaveAttribute('href', '/assets/English_CV.pdf');
  await expect(downloadResume).toHaveAttribute('download', 'Harry_Ju_Resume.pdf');

  const pdfResponse = await request.get('/assets/English_CV.pdf');
  expect(pdfResponse.ok()).toBeTruthy();
  expect(pdfResponse.headers()['content-type']).toContain('pdf');
  expect((await pdfResponse.body()).length).toBeGreaterThan(50000);
});

test('print resume route renders the PDF source layout', async ({ page }) => {
  await page.goto('/resume', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: /Ju Ta Tao/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Work Experience/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Skills/i })).toBeVisible();
  await expect(page.getByText(/Education:/i)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Projects' })).toHaveCount(0);
});

test('project links open the expected external targets', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const githubLink = page.getByRole('link', { name: 'GitHub' });
  const linkedInLink = page.getByRole('link', { name: 'LinkedIn' });

  await expect(githubLink).toHaveAttribute(
    'href',
    'https://github.com/judadao/mqtt_field_bridge_app',
  );
  await expect(githubLink).toHaveAttribute('target', '_blank');

  await expect(linkedInLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/posts/tatao-ju_mqtt-iot-embeddedsystems-share-7476474415333941248-bGhB/',
  );
  await expect(linkedInLink).toHaveAttribute('target', '_blank');
});
