import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { name, email, password }: { name: string; email: string; password: string } = await request.json();

  try {
    const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.response?.data?.message || 'An error occurred' }, { status: error.response?.status || 500 });
  }
}
