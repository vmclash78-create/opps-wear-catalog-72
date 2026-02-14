import { neon } from '@netlify/neon';

export default async (req, context) => {
  const sql = neon();

  try {
    const posts = await sql`SELECT * FROM posts`;
    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
