import { neon } from '@netlify/neon';

export default async (req) => {
  const sql = neon();

  const { email, password } = await req.json();

  const users = await sql`
    SELECT * FROM admins
    WHERE email = ${email}
    AND password = ${password}
  `;

  if (users.length === 0) {
    return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
