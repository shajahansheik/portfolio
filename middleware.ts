import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    // In production, add proper authentication checks here
    // For now, we'll allow all requests
    // You can add IP whitelisting, API key checks, etc.
    
    // Example: Check for a simple API key in headers
    // const apiKey = request.headers.get('x-api-key');
    // if (apiKey !== process.env.ADMIN_API_KEY) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/admin/:path*',
};
