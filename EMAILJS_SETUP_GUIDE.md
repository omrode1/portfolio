# 📧 EmailJS Setup Guide for Contact Form

Your contact form is now fully functional with EmailJS! Here's how to complete the setup:

## 🚀 **Step 1: Create EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 🔑 **Step 2: Get Your Credentials**

### **Public Key:**
1. Go to [Account > API Keys](https://dashboard.emailjs.com/admin)
2. Copy your **Public Key**

### **Service ID:**
1. Go to [Email Services](https://dashboard.emailjs.com/admin)
2. Click "Add New Service"
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (`omrode.work@gmail.com`)
5. Copy the **Service ID**

### **Template ID:**
1. Go to [Email Templates](https://dashboard.emailjs.com/admin)
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Message: {{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and copy the **Template ID**

## ⚙️ **Step 3: Update Your Code**

Replace the placeholder values in `components/Contact.tsx`:

```typescript
// Line 8: Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_ACTUAL_PUBLIC_KEY')

// Line 45: Replace YOUR_SERVICE_ID
'YOUR_ACTUAL_SERVICE_ID'

// Line 46: Replace YOUR_TEMPLATE_ID  
'YOUR_ACTUAL_TEMPLATE_ID'

// Line 47: Replace YOUR_PUBLIC_KEY
'YOUR_ACTUAL_PUBLIC_KEY'
```

## ✅ **Step 4: Test Your Form**

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email (`omrode.work@gmail.com`) for the message
4. Check the browser console for success/error logs

## 🎯 **What Happens Now:**

- ✅ **Form validation** (required fields)
- ✅ **Loading states** (spinner while sending)
- ✅ **Success/Error messages**
- ✅ **Form reset** after successful submission
- ✅ **Emails delivered** to your Gmail inbox
- ✅ **No backend required** - everything works client-side

## 📱 **Features Added:**

- **Real-time form validation**
- **Loading spinner** during submission
- **Success message** when email is sent
- **Error handling** with user-friendly messages
- **Form state management** with React hooks
- **Responsive design** for all devices

## 🔒 **Security:**

- EmailJS handles all email delivery securely
- Your private keys are safe
- No sensitive data stored on your server
- Rate limiting included in free tier

## 💰 **Pricing:**

- **Free Tier**: 200 emails/month
- **Paid Plans**: Start at $15/month for 1,000 emails
- Perfect for portfolio websites!

---

**Your contact form is now ready to receive messages! 🎉**

When someone fills it out, you'll get an email at `omrode.work@gmail.com` with their name, email, and message.
