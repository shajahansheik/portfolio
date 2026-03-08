import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET - Read submissions
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ submissions: [] }, { status: 500 });
  }
}

// POST - Add new submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    
    // Read existing data
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Get geo coordinates from IP (using a simple approach)
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    
    // Get approximate location based on timezone/language hints
    const userAgent = request.headers.get('user-agent') || '';
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Create new submission with auto-generated ID
    const newId = data.submissions.length > 0 
      ? Math.max(...data.submissions.map((s: any) => s.id)) + 1 
      : 1;
    
    const newSubmission = {
      id: newId,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      message: body.message,
      submittedAt: new Date().toISOString(),
      ip: ip,
      userAgent: userAgent,
      language: acceptLanguage,
      // Coordinates will be populated by geolocation API on client side
      coordinates: body.coordinates || { lat: null, lng: null },
      location: body.location || 'Unknown'
    };
    
    // Add to beginning of array (latest first)
    data.submissions = [newSubmission, ...data.submissions];
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json({ success: false, error: 'Failed to save submission' }, { status: 500 });
  }
}

// DELETE - Delete a submission
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '0');
    
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Filter out the submission with the given ID
    data.submissions = data.submissions.filter((s: any) => s.id !== id);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete submission' }, { status: 500 });
  }
}
