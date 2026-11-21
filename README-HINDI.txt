NEW HI TECH COMPUTER INSTITUTE – FINAL WEBSITE PACKAGE

FILES TO UPLOAD (all in the repository root):
1. index.html                     Main website
2. advanced-learning.html         Advanced study & practice (O Level + all courses)
3. online-test-portal.html        Online Test Portal
4. test-questions.js              Question bank for 14 courses × 20 series
5. o-level-practice-lab.html      O Level practical lab
6. advanced-practical-lab.html    Advanced practical lab
7. typing-practice.html           Typing practice page

UPLOAD STEPS (mobile or computer):
1. Open https://github.com/newhitechcomputerinstitute/new-hi-tech-computer-institute
2. Open the repository root, choose Add file → Upload files.
3. Upload all seven files. If GitHub asks to replace index.html, confirm Replace.
4. Scroll down and press Commit changes.
5. Wait for GitHub Pages to publish, then open your website and test the buttons.

HOW TO ADD QUESTIONS (institute only):
- Sign in to GitHub using the institute owner's own GitHub account.
- Open test-questions.js → pencil/Edit → add questions in the matching course and test-N array → Commit changes.
- Format: { question: 'प्रश्न', options: ['विकल्प 1','विकल्प 2','विकल्प 3','विकल्प 4'], answer: 0, timeLimit: 20 }
- answer is zero-based: 0=first option, 1=second, 2=third, 3=fourth. Use valid JavaScript strings with double quotes. Separate multiple question objects with commas.
- The portal has 14 course groups and test-1 through test-20 in each group. Empty series remain locked until questions are added.

IMPORTANT SECURITY:
This website is hosted as static GitHub Pages. Do not put an ID/password inside HTML or JavaScript: students can inspect public files and discover it. There is intentionally no fake admin password. Only the GitHub account(s) with repository write access can edit test-questions.js. In repository Settings → Collaborators, do not give Write access to students. Never share your GitHub password or OTP. For a separate in-website Admin Login with private question storage, a secure backend (for example Firebase/Supabase with access rules) must be configured.

TESTING NOTES:
- All local HTML links in this package were checked for file existence.
- Question-bank structure was checked: 14 course keys × 20 series = 280 series slots. They start empty; the institute must add its own questions.
- GitHub Pages deployment and real mobile-device testing must be done after upload; this package has not been deployed to your repository.
