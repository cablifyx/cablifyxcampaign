# Contact Form Setup Instructions

## Overview
The contact form in `src/pages/Contact.tsx` is now functional and uses FormSubmit.co, a free form backend service that sends form submissions directly to your email.

## Configuration Steps

### 1. Update Email Address
Open `src/pages/Contact.tsx` and replace `your-email@example.com` on line ~24 with your actual email address:

```typescript
const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
```

Change to:
```typescript
const response = await fetch('https://formsubmit.co/ajax/support@sathubfix.com', {
```

### 2. First Submission Verification
- The first time someone submits the form to a new email address, FormSubmit will send a verification email
- Click the confirmation link in that email to activate the form
- After confirmation, all future submissions will be sent directly to your email

### 3. Advanced FormSubmit Features (Optional)
You can add additional fields to customize the form behavior:

```typescript
body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  _subject: `New Contact Form Submission - ${formData.subject}`,
  _captcha: 'false',           // Disable captcha (default: true)
  _template: 'table',          // Email format: box, table
  _autoresponse: 'Thank you for contacting Sathubfix!', // Auto-reply to sender
}),
```

## Alternative Solutions

### Option 1: Custom Backend API
If you prefer to handle form submissions with your own backend:

1. Create an API endpoint (Node.js, PHP, Python, etc.)
2. Update the fetch URL in `Contact.tsx` to point to your endpoint
3. Implement email sending logic using services like SendGrid, Mailgun, or nodemailer

### Option 2: Netlify Forms (if deployed on Netlify)
1. Add `netlify` attribute to the form element
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Configure form notifications in Netlify dashboard

### Option 3: EmailJS
1. Install EmailJS: `npm install @emailjs/browser`
2. Sign up at https://www.emailjs.com/
3. Replace the fetch call with EmailJS SDK methods

## Testing
1. Fill out the form with test data
2. Submit and verify you receive the email
3. Check that the success message displays correctly
4. Verify the form clears after submission

## Phone Number Integration
All "Get Started", "Get Bundle", "Contact Us Today", and "Talk to an Expert" buttons now automatically open the phone dialer with (833) 225-0503 when clicked.

The phone number in the navigation and footer also opens the dialer when clicked.

## Notes
- The form validates required fields (name, email, subject, message)
- Phone field is optional
- Form shows loading state during submission
- Success/error messages are displayed to users
- All phone buttons use the tel: protocol for automatic dialing
