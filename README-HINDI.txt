NEW HI TECH COMPUTER INSTITUTE - WEBSITE PACKAGE
================================================

यह package GitHub Pages / किसी static hosting पर upload करने के लिए है।

मुख्य फाइलें:
- index.html       : Home page / मुख्य dashboard
- courses.html     : सभी course buttons
- tests.html       : Online Test Portal (आपके पुराने test portal पर आधारित)
- typing.html      : Hindi/English typing timer, WPM और accuracy
- lab.html         : HTML/CSS live preview और Python practice box
- student.html     : Student Corner / notice
- gallery.html     : Photo Gallery
- admin.html       : Notice, popup और gallery URL settings\n- practical.html   : Course-wise Practical Assignment PDF upload/download
- contact.html     : Institute contact और WhatsApp enquiry
- style.css        : Gradient theme / responsive design
- app.js           : Home page notice और popup

Institute details पहले से set हैं:
NEW HI TECH COMPUTER INSTITUTE
Near Medical College, Infront of Krishi Vigyan Kendra, Bahraich
Sudhir Shukla Sir | Ajay Sir
6394036352 | 7408479110

GITHUB PAGES UPLOAD:
1. ZIP extract करें।
2. GitHub repository खोलें।
3. सभी files/folders (index.html, style.css, app.js आदि) repository के ROOT में upload करें।
   किसी अलग folder के अंदर रखने पर website का root path बदल सकता है।
4. Commit changes करें।
5. Repository Settings > Pages में branch (आमतौर पर main) और /(root) चुनें, Save करें।
6. Website URL पर index.html खुलना चाहिए।

IMPORTANT FUNCTIONALITY / LIMITATIONS:
- यह upload-ready static website है; सभी pages और navigation मौजूद हैं।
- Admin notice/popup/gallery settings और test portal के custom questions browser LocalStorage में save होते हैं।
  वे उसी browser/device पर रहते हैं; दूसरे विद्यार्थियों/मोबाइल पर स्वतः sync नहीं होते।
- Public multi-user database, student accounts, shared results, secure admin login, cloud question bank,
  fee/attendance records और all-student reports के लिए Firebase/backend की अपनी account configuration
  (project, authentication, database rules) जरूरी है। यह credentials इस package में नहीं हैं।
- Static HTML में रखा admin password सुरक्षित authentication नहीं होता; source code देखकर पता किया जा सकता है।
  Public production site पर sensitive student data/password न रखें; Firebase Auth और security rules लगाएं।
- Kruti Dev 010 font आपके computer पर installed होना चाहिए। Mangal/Inscript Hindi input keyboard/IME
  पर निर्भर है। Browser typing test actual keyboard layout install नहीं करता।
- O Level lab का HTML/CSS preview चलता है। Python code box instructions/practice के लिए है; यह server पर
  Python execute नहीं करता। Python execution के लिए सुरक्षित sandbox/backend अलग से चाहिए।
- Popup/notice Admin settings इसी browser में बदलती हैं। Shared public popup के लिए cloud database चाहिए।
- Photo Gallery में public image URL जोड़ें; private/temporary links काम नहीं करेंगे।

TEST PORTAL:
Course page से CCC, O Level, ADCA, DCA, DTP, CCA और Tally Prime चुना जा सकता है। Existing CCC/Tally
sample test banks रखे गए हैं। Test portal में Admin Panel के जरिए custom questions जोड़ने का feature
पुराने portal के अनुसार मौजूद है; local browser storage की सीमा लागू है।

किसी file को हटाने की जरूरत नहीं: सभी pages एक-दूसरे से linked हैं।

PRACTICAL ASSIGNMENT / PDF DOWNLOAD:
- Home page पर PDF Download और Practical Assignment के दो buttons हैं।
- practical.html में MS Word, MS Excel, PowerPoint, MS Access, Tally, Photoshop,
  CorelDRAW और Other categories हैं।
- Admin PDF चुनकर upload/save कर सकता है; विद्यार्थी उसी browser/device में PDF download कर सकते हैं।
- GitHub Pages static hosting में browser से upload की गई PDF सभी visitors को साझा नहीं होती।
  सभी विद्यार्थियों को PDF उपलब्ध कराने के लिए PDF files को repository में रखकर public URL देना
  या Firebase/backend storage configure करना आवश्यक है।
