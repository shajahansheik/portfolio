# Admin Panel

## Quick Access

**URL**: `/admin`
**Default Password**: `admin123`

⚠️ **IMPORTANT**: Change the password before deploying to production!

---

## Features

- ✅ Manage Profile information
- ✅ Add/Edit/Delete Skills
- ✅ Add/Edit/Delete Work Experience
- ✅ Add/Edit/Delete Education
- ✅ Add/Edit/Delete Projects
- ✅ Edit Contact information
- ✅ Real-time updates (no redeployment needed)
- ✅ Mobile responsive interface
- ✅ Session-based authentication

---

## How to Use

1. Navigate to `/admin`
2. Enter password: `admin123`
3. Click on any section tab
4. Add/Edit/Delete content
5. Click "Save" button
6. Changes appear immediately on public pages

---

## Documentation

- **Quick Setup**: `../ADMIN_SETUP_QUICK.md`
- **Full Guide**: `../ADMIN_PANEL_GUIDE.md`

---

## Security

### Change Password

Edit this file: `app/admin/page.tsx` (Line 43)

```typescript
// Find:
if (password === 'admin123') {

// Change to:
if (password === 'YOUR_SECURE_PASSWORD') {
```

### Use Environment Variable (Recommended)

1. Create `.env.local`:
```
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

2. Update code:
```typescript
if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
```

---

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/admin/profile` | GET/POST | Profile data |
| `/api/admin/skills` | GET/POST | Skills data |
| `/api/admin/experience` | GET/POST | Experience data |
| `/api/admin/education` | GET/POST | Education data |
| `/api/admin/projects` | GET/POST | Projects data |
| `/api/admin/contact` | GET/POST | Contact data |

---

## File Storage

All data is stored in JSON files:
- `/data/profile.json`
- `/data/skills.json`
- `/data/experience.json`
- `/data/education.json`
- `/data/projects.json`
- `/data/contact.json`

**Backup regularly!**

---

## Troubleshooting

### Changes not appearing?
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache

### Can't save data?
- Check file permissions on `/data` directory
- Ensure server has write access
- Check if your hosting supports file writes

### Login not working?
- Verify password is correct
- Clear sessionStorage
- Check browser console for errors

---

## Need Help?

Check the comprehensive documentation:
- `ADMIN_PANEL_GUIDE.md` - Complete guide
- `ADMIN_SETUP_QUICK.md` - Quick setup
