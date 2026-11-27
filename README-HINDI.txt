NEW HI TECH COMPUTER INSTITUTE — WEBSITE PACKAGE

महत्वपूर्ण:
1. यह GitHub Pages के लिए static HTML/JS पैकेज है। ZIP extract करके सभी files repository के root में डालें।
2. पहले अपनी मौजूदा repository का backup ZIP डाउनलोड करें। पुरानी files को backup के बिना delete न करें।
3. firebase-config.js में आपकी दी हुई Firebase Web App configuration रखी है और Admin UID सेट है।
4. Firebase Authentication में Email/Password पहले से Enabled है। Admin का वही Firebase email/password इस्तेमाल करें जिसका UID config में है।
5. Firebase Console > Firestore Rules में मौजूदा Rules का backup लेकर ही बदलाव करें। firestore.rules.example केवल उदाहरण है; अपने पूरे schema से मिलाए बिना सीधे publish न करें।
6. Student account Authentication > Users में बनाएं। students collection में document ID उसी student UID के बराबर होना चाहिए।
7. Enquiry form के लिए enquiries collection में create permission चाहिए। Admin list के लिए Admin read permission चाहिए।
8. notices collection के लिए admin write और published notice read permission चाहिए।
9. Firebase Storage अभी इस starter package में wired नहीं है। PDF/video upload, practical file submissions, certificate QR verification, attendance, fee ledger, detailed question-bank CRUD और cloud-saved typing/test history अभी पूर्ण production modules नहीं हैं।
10. tests.html में छोटा SAMPLE test है; पुराने CCC 50 प्रश्नों को अलग से migrate/merge करना होगा। यह package पुराने प्रश्नों को मिटाने का दावा नहीं करता।
11. कोई password, service-account JSON या private key GitHub में न डालें।
12. Upload के बाद GitHub Pages build होने में कुछ मिनट लग सकते हैं। पहले staging/backup पर परीक्षण करें।

Institute details:
New Hi Tech Computer Institute
Near Medical College, KDC Road, Bahraich, Uttar Pradesh
Ajay Sir: 6394036352
Sudhir Shukla Sir: 7408479110

यह पैकेज प्रारंभिक Firebase-connected foundation है, पूर्ण audited production system नहीं। Firestore rules, existing collections, Storage billing और actual student/admin flows को deploy से पहले test करना आवश्यक है।
