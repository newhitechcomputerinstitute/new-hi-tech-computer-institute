# NEW HI TECH COMPUTER INSTITUTE — Advanced Website Starter

This is a polished GitHub Pages-ready front-end starter for the institute website.

## Included now
- Responsive colourful homepage and course cards (CCC, ADCA, DCA, Tally, O Level, Typing)
- Student zone entry points
- Practical Lab links (Office, Tally, web coding, Python, IoT, Canva, JSFiddle)
- Admission enquiry form (Firestore `enquiries` collection after Firebase config)
- Firebase Authentication login screen
- Typing practice timer (5/10/15/30 min), language selector and backspace toggle
- Certificate verification lookup UI (`certificates/{certificateNumber}`)
- Contact and WhatsApp links

## Important: Firebase configuration
1. Open Firebase Console: https://console.firebase.google.com/
2. Select project `new-hi-tech-computer-institute`.
3. Project settings (gear) → General → Your apps → Web app.
4. Copy the Firebase web config values.
5. Open `index.html` and replace:
   - `PASTE_YOUR_FIREBASE_API_KEY`
   - `PASTE_YOUR_MESSAGING_SENDER_ID`
   - `PASTE_YOUR_APP_ID`
6. Enable Authentication → Sign-in method → Email/Password.
7. Create student/admin accounts from Firebase Authentication.
8. Add your institute domain under Authentication → Settings → Authorized domains.

Firebase web config is intended to be present in client code. Never put service-account JSON, private keys, or admin SDK credentials in this website.

## Firestore setup
Create Firestore Database. The included `firestore.rules` is a starting security baseline:
- Anyone can submit an enquiry, but cannot read enquiries.
- Signed-in users can read their own student record.
- Only the configured admin UID can manage institute records.
- Public certificate verification can read only the certificate record by exact ID.
- Students can read published tests and their own results.
- Students cannot change marks, fees, attendance, or certificate status.

Review rules carefully before production use. Add teacher role claims or an `staff/{uid}` collection only after implementing and testing the intended role model.

## Admin UID
The known admin UID supplied for this project is:
`rDDW4TmIvNVlqTgzHGCpAAHkIPU2`

The rules use this UID as the initial administrator. If this UID is not the active Firebase Authentication UID, update it in `firestore.rules`.

## GitHub Pages publish
1. Download/extract this ZIP.
2. Open your repository: https://github.com/newhitechcomputerinstitute/new-hi-tech-computer-institute
3. Back up the current repository first (download ZIP).
4. Upload `index.html`, `firestore.rules`, `storage.rules`, and this README to the repository root.
5. Commit changes.
6. Settings → Pages → Deploy from branch → `main` → `/ (root)`.
7. Open the live website and test it.

Do not delete your old files until you have a backup.

## Current limitations — do not mistake the UI for finished backend modules
This starter does NOT yet include full admin CRUD screens, student dashboard pages, question-bank management, test attempt/result persistence, fee receipts, attendance management, PDF storage upload, QR-code certificate PDF generation, teacher permissions, audit logs, or automatic backups. Those require additional authenticated Firestore/Storage workflows and should be added and tested in a second implementation phase. The buttons that are not yet connected are clearly entry points, not claims that those systems are already active.
