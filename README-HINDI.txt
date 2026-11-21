NEW HI TECH COMPUTER INSTITUTE – UPDATED PORTAL PACKAGE

मुख्य फाइलें (Repository के root में अपलोड करें):
- index.html : मुख्य वेबसाइट
- online-test-portal.html : कोर्स चुनने का अलग पेज
- course-tests.html : चुने हुए कोर्स की अलग टेस्ट-सीरीज़ स्क्रीन
- test-questions.js : संस्थान का प्रश्न बैंक
- advanced-learning.html : पढ़ाई और प्रैक्टिस
- o-level-practice-lab.html : O Level प्रैक्टिकल लैब
- advanced-practical-lab.html : एडवांस प्रैक्टिकल लैब
- typing-practice.html : टाइपिंग अभ्यास

टेस्ट पोर्टल का क्रम:
1. मुख्य वेबसाइट पर Online Test Portal बटन दबाएँ।
2. ADCA, DCA, CCC, Tally, BCC या O Level चुनें। नया पेज खुलेगा।
3. O Level चुनने पर M1, M2, M3, M4 के चार अलग पेपर दिखेंगे।
4. पेपर/कोर्स चुनने पर नया टेस्ट-सीरीज़ पेज खुलेगा; उसमें 1 से 20 तक सीरीज़ हैं।
5. प्रश्न उपलब्ध होने पर ही संबंधित टेस्ट बटन खुलेगा।

प्रश्न जोड़ना:
GitHub के संस्थान-मालिक खाते से test-questions.js खोलें और Edit करें। नीचे जैसा प्रश्न संबंधित course key और test-N array में डालें:
{ "question": "प्रश्न लिखें", "options": ["विकल्प A", "विकल्प B", "विकल्प C", "विकल्प D"], "answer": 0, "timeLimit": 20 }
answer में 0 पहले विकल्प, 1 दूसरे, 2 तीसरे, 3 चौथे विकल्प को दर्शाता है। एक से अधिक प्रश्नों के बीच comma लगाएँ।

Course keys: adca, dca, ccc, tally, bcc, olevel-m1, olevel-m2, olevel-m3, olevel-m4.

सुरक्षा: GitHub Pages static hosting है। HTML/JS में ID-password रखने से विद्यार्थी उसे देख सकते हैं। कोई default admin password नहीं है। केवल GitHub repository write access वाले संस्थान के अधिकृत खाते से प्रश्न जोड़ें। विद्यार्थियों को Write access न दें। अलग secure admin login के लिए Firebase/Supabase जैसे backend और access rules configure करना आवश्यक है।

अपलोड: ZIP extract करें और सभी फाइलें repository के root में upload करें। index.html को replace करें; बाकी पुरानी जरूरी फाइलें न हटाएँ। Commit changes करें। GitHub Pages पर live testing upload के बाद करें।


अलग-अलग पेज अपडेट (नवंबर 2026): मुख्य वेबसाइट के Courses, Student Corner, Notice Board, Gallery, Contact/Admission और Practice नेविगेशन अब अलग HTML पेज खोलते हैं। पुराने #section लिंक हटा दिए गए हैं। नए पेज: courses.html, student-corner.html, notice-board.html, institute-gallery.html, contact-admission.html।
