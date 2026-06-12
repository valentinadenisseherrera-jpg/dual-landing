export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, firstName } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email requerido' });

  try {
    const response = await fetch('https://app.convertkit.com/forms/eaa749822d/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_address: email, fields: { first_name: firstName || '' } })
    });

    const text = await response.text();
    if (!response.ok) return res.status(500).json({ error: 'Kit error', detail: text });

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
