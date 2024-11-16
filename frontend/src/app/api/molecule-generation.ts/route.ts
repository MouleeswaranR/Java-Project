// app/api/molecule-generation/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Extract the request body
    const requestBody = await request.json();

    // Make the request to the external molecule generation API (e.g., NVIDIA API)
    const response = await fetch('https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',  // Add your actual API key here
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),  // Forward the request body
    });

    if (!response.ok) {
      throw new Error('Failed to generate molecule');
    }

    const data = await response.json();
    return NextResponse.json(data);  // Return the response data to the client

  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch molecule generation data' }, { status: 500 });
  }
}
