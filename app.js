/* =============================================
   DevTrust — P2P Trust Social Network App Logic
   ============================================= */

// ============ DATA ============
const USERS = [
  { id: 1, name: 'Linh Nguyễn', seed: 'linh', online: true, trustScore: 87,
    skills: ['React', 'TypeScript', 'UI/UX', 'CSS'],
    interests: ['EdTech', 'Open Source', 'Design Systems'],
    goals: 'Xây dựng nền tảng e-learning offline-first cho vùng sâu',
    role: 'Frontend Lead', location: 'Hà Nội',
    availableHours: '20h/tuần', commitment: 'Part-time', idea: 'EduChain VN'
  },
  { id: 2, name: 'Minh Trần', seed: 'minh', online: true, trustScore: 72,
    skills: ['Backend', 'Node.js', 'PostgreSQL', 'Docker'],
    interests: ['Fintech', 'Open Source', 'DevOps'],
    goals: 'Build fintech infrastructure cho SME Việt Nam',
    role: 'Backend Lead', location: 'TP.HCM',
    availableHours: '15h/tuần', commitment: 'Part-time', idea: 'SmartPay VN'
  },
  { id: 3, name: 'Hương Phạm', seed: 'huong', online: false, trustScore: 91,
    skills: ['AI/ML', 'Python', 'Data Science', 'NLP'],
    interests: ['EdTech', 'AI for Good', 'Research'],
    goals: 'Apply AI để cá nhân hóa lộ trình học tập offline',
    role: 'AI Lead', location: 'Hà Nội',
    availableHours: 'Full-time', commitment: 'Full-time', idea: 'PranjaLearn'
  },
  { id: 4, name: 'Tuấn Vũ', seed: 'tuan', online: true, trustScore: 95,
    skills: ['P2P', 'Blockchain', 'Gun.js', 'Web3'],
    interests: ['Decentralization', 'P2P Networks', 'Open Source'],
    goals: 'Xây dựng internet phi tập trung cho cộng đồng Việt',
    role: 'Protocol Architect', location: 'Đà Nẵng',
    availableHours: 'Full-time', commitment: 'Full-time', idea: 'FreeNet VN'
  },
  { id: 5, name: 'Mai Lê', seed: 'mai', online: false, trustScore: 63,
    skills: ['Marketing', 'Growth Hacking', 'Content', 'SEO'],
    interests: ['EdTech', 'Startup', 'Community'],
    goals: 'Scale product EdTech tới 100K user trong 1 năm',
    role: 'Growth & Marketing', location: 'TP.HCM',
    availableHours: '10h/tuần', commitment: 'Part-time', idea: 'Viral EDU'
  },
  { id: 6, name: 'Đức Hoàng', seed: 'duc', online: true, trustScore: 78,
    skills: ['Backend', 'Go', 'Microservices', 'K8s'],
    interests: ['Infrastructure', 'DevOps', 'Open Source'],
    goals: 'Xây dựng platform microservices mở cho startup',
    role: 'DevOps / Backend', location: 'Hà Nội',
    availableHours: '20h/tuần', commitment: 'Part-time', idea: 'CloudBase VN'
  },
  { id: 7, name: 'Thảo Ngô', seed: 'thao', online: true, trustScore: 84,
    skills: ['React', 'Mobile', 'Flutter', 'UI/UX'],
    interests: ['EdTech', 'Mobile Apps', 'Community'],
    goals: 'Build mobile app cho Binh dan hoc vu so đến vùng nông thôn',
    role: 'Mobile Lead', location: 'TP.HCM',
    availableHours: 'Full-time', commitment: 'Full-time', idea: 'MobileEDU'
  },
  { id: 8, name: 'Khoa Đặng', seed: 'khoa', online: false, trustScore: 45,
    skills: ['Python', 'Data Analysis', 'Excel', 'SQL'],
    interests: ['Fintech', 'Data', 'Analytics'],
    goals: 'Build data platform cho SME tự phân tích tài chính',
    role: 'Data Analyst', location: 'Đà Nẵng',
    availableHours: '15h/tuần', commitment: 'Part-time', idea: 'DataSME'
  },
  { id: 9, name: 'Anh Bùi', seed: 'anhb', online: true, trustScore: 56,
    skills: ['Blockchain', 'Solidity', 'Web3', 'DeFi'],
    interests: ['DeFi', 'NFT', 'Decentralization'],
    goals: 'Xây dựng DeFi platform tự chủ cho nguời Việt',
    role: 'Smart Contract Dev', location: 'Hà Nội',
    availableHours: '20h/tuần', commitment: 'Part-time', idea: 'DeFi VN'
  },
  { id: 10, name: 'Quỳnh Trương', seed: 'quynh', online: false, trustScore: 38,
    skills: ['UX Research', 'Product', 'Figma', 'User Testing'],
    interests: ['EdTech', 'Accessibility', 'Community'],
    goals: 'Thiết kế UX cho product giáo dục offline dễ dùng nhất Việt Nam',
    role: 'Product Designer', location: 'TP.HCM',
    availableHours: '10h/tuần', commitment: 'Part-time', idea: 'DesignEDU'
  },
];

const POSTS = [
  {
    id: 1, userId: 1,
    tag: '🚀 Build In Public',
    content: '📊 DevTrust — Tuần 8:\n\n✅ 234 users đăng ký (tăng 40% so với tuần trước)\n✅ Join Team flow hoạt động — 12 người đã match thành công\n✅ Pitch Feed: avg session 4.2 phút (TikTok benchmark: 11 phút 😅)\n❌ Bounce rate 67% — landing page chưa đủ hấp dẫn\n❌ Chỉ 8% user quay lại ngày 2\n\n🎯 Tuần tới: onboarding flow mới + email sequence\n\n#BuildInPublic #DevTrust #StartupVN',
    image: null,
    likes: 312, comments: 47, shares: 28,
    reactions: ['🔥', '👏', '❤️'],
    time: '2 giờ trước',
    commentList: [
      { userId: 2, text: 'D1 retention 8% thì cần fix onboarding gấp anh ơi! Có thể thử progressive onboarding không?' },
      { userId: 4, text: 'Con số 12 match từ Join Team flow sau 1 tuần là rất ổn! 👏 Tập trung convert số này sang active contributor.' }
    ]
  },
  {
    id: 2, userId: 4,
    tag: '💡 Product Insight',
    content: '3 sai lầm lớn nhất khi build MVP mà mình đã mắc phải:\n\n1️⃣ Build quá nhiều feature trước khi có 1 user dùng thật\n→ Giải pháp: Fake it first. Google Doc trước, code sau.\n\n2️⃣ Hỏi user "bạn có dùng cái này không?" thay vì "lần cuối bạn gặp vấn đề này là khi nào?"\n→ Behavior > Opinion\n\n3️⃣ Measure vanity metrics (traffic, signup) thay vì activation + retention\n→ AARRR framework: chỉ có Retention mới chứng minh product-market fit\n\n🔑 Lesson learned sau 2 năm build sản phẩm.\n\n#ProductManagement #MVP #StartupLesson',
    image: null,
    likes: 891, comments: 134, shares: 267,
    reactions: ['🔥', '👏', '💡'],
    time: '4 giờ trước',
    commentList: [
      { userId: 6, text: 'Point số 2 chuẩn vãi! Tôi từng hỏi "bạn có cần feature X không?" và 90% nói có nhưng 0% dùng 😂' },
      { userId: 7, text: 'Fake it first 🔥 Mình build landing page + waitlist trước khi viết 1 dòng code. 200 người đăng ký = đủ validation rồi!' }
    ]
  },
  {
    id: 3, userId: 6,
    tag: '🎯 Problem → Solution',
    content: 'Vấn đề mình đang cần giải: Làm sao collect user feedback mà không annoying?\n\n❌ Pop-up "rate us" → user skip 95%\n❌ Email survey → open rate < 5%\n❌ In-app survey dài → drop-off\n\n✅ Cách đang test: Micro-surveys 1 câu, xuất hiện ngay sau key action\nVD: Sau khi user join team xong → "Trải nghiệm này có hữu ích không? 👍👎"\n\nAi đang giải vấn đề này tốt? @ mình với! 🙏\n\n#UserResearch #ProductDesign #Feedback',
    image: null,
    likes: 445, comments: 89, shares: 34,
    reactions: ['💡', '🔥', '❤️'],
    time: '6 giờ trước',
    commentList: [
      { userId: 1, text: 'Mình dùng Hotjar + screen recording — xem user làm gì thay vì hỏi họ nghĩ gì. Game changer!' },
      { userId: 3, text: 'Intercom có tính năng in-context survey cực ngon. Trigger khi user vừa complete 1 action.' }
    ]
  },
  {
    id: 4, userId: 7,
    tag: '📈 Milestone',
    content: '🎉 HealthTech VN vừa chạm mốc 1,000 lượt khám từ xa!\n\n6 tháng trước: idea trên giấy\n3 tháng trước: 50 users pilot\nHôm nay: 1,000 lượt khám, 23 bác sĩ, 8 tỉnh\n\nMọi người hay hỏi: "Làm sao anh lấy được bác sĩ tham gia?"\n→ Thật ra không ai chịu lúc đầu. Mình đã bị từ chối 47 lần.\n→ Người thứ 48 là em họ mình. Từ đó build social proof.\n→ Lesson: Start với network. Đừng pitch stranger trước.\n\nNext: 10,000 lượt và series A.\n\n#HealthTech #1000Users #StartupVN #Milestone',
    image: 'https://picsum.photos/seed/milestone/600/350',
    likes: 1234, comments: 234, shares: 89,
    reactions: ['🎉', '🔥', '👏'],
    time: '8 giờ trước',
    commentList: [
      { userId: 2, text: '47 lần từ chối 😳 Đây mới là entrepreneurship thật sự. Chúc mừng anh!!!🎉' },
      { userId: 4, text: '"Start với network" — bài học xương máu của mọi B2B startup. 🔥' }
    ]
  },
  {
    id: 5, userId: 2,
    tag: '🤔 Founder Question',
    content: 'Thắc mắc thật: Khi nào thì nên bỏ pivot làm lại từ đầu?\n\nCurrently: App học tiếng Nhật của mình, 300 users sau 4 tháng\n- Retention D7: 12%\n- Churn rate: 40%/tháng\n- Users nói app "hay" nhưng không dùng đều\n\nMình đang phân vân:\nA) Tiếp tục fix UX và marketing\nB) Pivot sang B2B — bán cho công ty có nhân viên đi Nhật\nC) Pivot content: từ app học thành community + mentoring\n\nAi đã từng trong situation này? Tư vấn với! 🙏\n\n#StartupAdvice #Pivot #EdTech',
    image: null,
    likes: 567, comments: 123, shares: 45,
    reactions: ['💡', '🤔', '❤️'],
    time: '10 giờ trước',
    commentList: [
      { userId: 1, text: 'D7 retention 12% + churn 40% = product-market fit chưa có. Mình sẽ pivot B2B — enterprises trả tiền dễ hơn và predictable hơn.' },
      { userId: 7, text: 'Option C nghe promising hơn! Community + mentoring là sticky hơn app. LINE/Zalo cũng bắt đầu thế.' }
    ]
  },
  {
    id: 6, userId: 3,
    tag: '🔬 Research & Findings',
    content: 'Sau 50 user interviews cho sản phẩm AgriTech:\n\n🌾 Nông dân VN không thiếu thông tin — họ thiếu **người đáng tin để hỏi**\n\nKey findings:\n• 78% tra Google nhưng không biết ai đúng ai sai\n• 91% quyết định mua phân bón dựa trên hàng xóm nói\n• "Trust" là currency lớn hơn "price" trong nông nghiệp\n\n→ Pivot: Không build info platform. Build **trust network** giữa nông dân với nông dân.\n\nUser behavior > user opinion. Luôn luôn.\n\n#UserResearch #AgriTech #ProductDiscovery',
    image: 'https://picsum.photos/seed/agriresearch/600/400',
    likes: 678, comments: 91, shares: 156,
    reactions: ['💡', '🔥', '👏'],
    time: '1 ngày trước',
    commentList: [
      { userId: 5, text: '"Trust là currency" — cái này cũng đúng cho healthcare, legal, fintech! Insight cực valuable 🔥' },
      { userId: 1, text: 'Đây là lý do DevTrust tồn tại 🛡️ Trust economy là real.' }
    ]
  },
  {
    id: 7, userId: 5,
    tag: '⚡ Quick Win',
    content: 'Tăng conversion landing page từ 3.2% → 8.7% chỉ bằng 1 thay đổi:\n\nBefore: "Tham gia DevTrust — mạng xã hội cho developer"\nAfter: "Tìm co-founder trong 7 ngày — đã có 234 founder match thành công"\n\n🔑 Lesson:\n• Benefit > Feature\n• Social proof + số cụ thể > mô tả chung chung\n• "Bạn sẽ được gì?" > "Chúng tôi là gì?"\n\nA/B test này chạy 2 tuần, 1,200 visitors mỗi bên.\n\n#GrowthHacking #ConversionOptimization #CopyWriting',
    image: null,
    likes: 1089, comments: 167, shares: 345,
    reactions: ['🔥', '💡', '👏'],
    time: '1 ngày trước',
    commentList: [
      { userId: 4, text: 'Bài học copywriting này worth $1M 🔥 Mình sẽ test ngay trên landing page của mình!' },
      { userId: 2, text: 'Numbers create trust. "234 founder match" cụ thể hơn "nhiều founder" rất nhiều.' }
    ]
  },
  {
    id: 8, userId: 8,
    tag: '🏗️ Technical Deep Dive',
    content: 'Tại sao chúng ta chọn P2P (Gun.js) thay vì server truyền thống cho DevTrust:\n\n❌ Server tập trung:\n• Ai kiểm soát server → kiểm soát data\n• Chi phí scale tốn kém\n• Single point of failure\n\n✅ P2P với Gun.js:\n• Data thuộc về user\n• Scale tự động theo network\n• Không ai có thể "shut it down"\n\nThách thức:\n⚠️ Conflict resolution khi có concurrent writes\n⚠️ Search / query phức tạp hơn SQL\n⚠️ Offline sync cần handle cẩn thận\n\nAi đang build P2P app? Connect với mình!\n\n#P2P #GunJS #Architecture #Web3',
    image: null,
    likes: 445, comments: 78, shares: 112,
    reactions: ['💻', '🔥', '💡'],
    time: '2 ngày trước',
    commentList: [
      { userId: 1, text: 'Gun.js conflict resolution dùng CRDT — eventual consistency. Đọc paper "Designing Data-Intensive Applications" của Martin Kleppmann đi!' },
      { userId: 6, text: 'Tradeoff này classic. Centralized = convenient. Decentralized = resilient. Tùy use case.' }
    ]
  },
];

const STORIES = [
  { userId: 1, gradient: 'linear-gradient(135deg, #22c55e, #16a34a)', text: '📊 Week 8 Update' },
  { userId: 2, gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)', text: '🤔 Pivot Decision' },
  { userId: 4, gradient: 'linear-gradient(135deg, #f59e0b, #d97706)', text: '💡 MVP Lessons' },
  { userId: 6, gradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)', text: '🎯 Feedback Loop' },
  { userId: 7, gradient: 'linear-gradient(135deg, #ef4444, #dc2626)', text: '🎉 1K Milestone' },
  { userId: 3, gradient: 'linear-gradient(135deg, #84cc16, #65a30d)', text: '🌾 AgriTech Findings' },
  { userId: 5, gradient: 'linear-gradient(135deg, #f97316, #ea580c)', text: '⚡ 3x Conversion' },
  { userId: 8, gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)', text: '🏗️ P2P vs Server' },
];

const CHATS = [
  { userId: 1, messages: [
    { from: 'them', text: 'Anh ơi D1 retention 8% có fix được không hay pivot luôn?', time: '14:30' },
    { from: 'me', text: 'Đang test lại onboarding — đặt expectation đúng từ sign-up. 🔥', time: '14:32' },
    { from: 'them', text: 'Em nghĩ cần value proposition rõ hơn ngay first session', time: '14:33' },
    { from: 'me', text: 'Đúng! Đang viết lại copy + add quick-win cho user mới', time: '14:35' },
  ], unread: true, lastTime: '14:35' },
  { userId: 4, messages: [
    { from: 'them', text: 'Bài post về MVP sai lầm reach 50K rồi 😳', time: '12:15' },
    { from: 'me', text: 'Thật không?? Cái nào viral nhất?', time: '12:20' },
    { from: 'them', text: 'Cái "behavior > opinion" — dev đang debate nhau nhiều lắm 🔥', time: '12:21' },
  ], unread: true, lastTime: '12:21' },
  { userId: 7, messages: [
    { from: 'them', text: 'Cảm ơn đã support mốc 1000 users! Đang chuẩn bị deck cho series A', time: 'Hôm qua' },
    { from: 'me', text: 'Chúc mừng! Anh có thể review deck không? 🙏', time: 'Hôm qua' },
  ], unread: false, lastTime: 'Hôm qua' },
  { userId: 2, messages: [
    { from: 'them', text: 'Bạn nghĩ sao về option B — pivot B2B?', time: '10:00' },
    { from: 'me', text: 'B2B ổn hơn về revenue nhưng sales cycle dài. B2C mới check PMF được nhanh.', time: '10:05' },
  ], unread: true, lastTime: '10:05' },
];

const TRENDING = [
  { id: 1, tag: '#BuildInPublic', posts: '23.4K', desc: 'Chia sẻ hành trình build sản phẩm thật' },
  { id: 2, tag: '#ProductMarketFit', posts: '15.1K', desc: 'Tìm kiếm PMF — câu hỏi muôn thuở' },
  { id: 3, tag: '#StartupVN', posts: '12.5K', desc: 'Startup Việt Nam đang thay đổi' },
  { id: 4, tag: '#FounderJourney', posts: '9.8K', desc: 'Câu chuyện hành trình thật của founder' },
  { id: 5, tag: '#ZeroToOne', posts: '7.2K', desc: 'Từ 0 đến sản phẩm đầu tiên' },
];

const HACK_GRANTS = [
  {
    id: 1, title: 'An Đức Build Hackathon', host: 'DevTrust x Minh-Cường',
    reward: 'Vô giá (Kết nối chiến hữu)', deadline: 'Không giới hạn',
    desc: 'Không hình tướng, không tiêu đức. Tập trung vào Awareness và sự An Tâm giữa những người anh em. Xây dựng AI hỗ trợ đời sống thực.',
    tags: ['An Đức', 'Awareness', 'Peace'], color: '#facc15'
  },
  {
    id: 2, title: 'Basao AI Agent Grant', host: 'Basao Protocol',
    reward: '50M - 200M VNĐ', deadline: '30/04/2026',
    desc: 'Hỗ trợ các chiến hữu xây dựng AI Agent bảo mật, phi tập trung và có đạo đức.',
    tags: ['AI', 'P2P', 'Privacy'], color: '#818cf8'
  },
  {
    id: 3, title: 'Cross-Border Fintech', host: 'GreenCanal x VMA',
    reward: '$5,000 Grant', deadline: '01/06/2026',
    desc: 'Giải quyết các bài toán di chuyển và thanh toán xuyên biên giới VN - Bangladesh.',
    tags: ['Travel', 'Fintech'], color: '#10b981'
  }
];

const VISA_SERVICES = [
  { id: 1, country: 'Bangladesh', category: 'Business/Work', time: '5-7 ngày', price: '2.5tr - 4tr', provider: 'GreenCanal', icon: '🇧🇩' },
  { id: 2, country: 'Australia', category: 'Digital Nomad', time: '14-21 ngày', price: '6tr - 12tr', provider: 'GreenCanal', icon: '🇦🇺' },
  { id: 3, country: 'Japan', category: 'Tech Visit', time: '7-10 ngày', price: '3tr - 5tr', provider: 'GreenCanal', icon: '🇯🇵' },
  { id: 4, country: 'Singapore', category: 'Training/Meeting', time: '3-5 ngày', price: '2tr - 3.5tr', provider: 'GreenCanal', icon: '🇸🇬' }
];

const STAY_SERVICES = [
  { id: 1, name: 'Dhaka Tech Hub Coliving', location: 'Dhaka, Bangladesh', desc: 'Chỗ ở tối ưu cho team dev, internet 1Gbps, gần các bộ ngành.', price: '$450/month/pax', icon: '🏠' },
  { id: 2, name: 'Sydney Ocean View Retreat', location: 'Sydney, Australia', desc: 'Resort cho team làm chiến lược, không gian yên tĩnh, gần biển.', price: '$1200/week/team', icon: '🌊' },
  { id: 3, name: 'Hanoi Coding House (Old Qtr)', location: 'Hà Nội, Việt Nam', desc: 'Trải nghiệm văn hóa, làm việc tại phố cổ, chi phí tối ưu.', price: '8tr/month/pax', icon: '🏮' }
];

const INDUSTRIAL_EQUIPMENT = [
  { id: 1, name: 'CNC Milling Machine (5-axis)', category: 'Cơ khí', value: '1.2B - 1.8B VNĐ', status: 'Đã thẩm định', icon: '⚙️', provider: 'Toan-Chinh Partners' },
  { id: 2, name: 'Industrial Robot Arm (ABB)', category: 'Tự động hóa', value: '800M - 1.1B VNĐ', status: 'Cần thẩm định', icon: '🤖', provider: 'Industrial Hub' },
  { id: 3, name: 'Semiconductor Testing Unit', category: 'Linh kiện', value: '450M VNĐ', status: 'Đang ươm mầm', icon: '📟', provider: 'TechPort VN' },
  { id: 4, name: 'Precision Lathe System', category: 'Cơ khí', value: '250M - 350M VNĐ', status: 'Hỗ trợ định giá', icon: '🛠️', provider: 'Toan-Chinh Partners' }
];

const INDUSTRIAL_SUPPLIES = [
  { id: 1, name: 'High-grade Steel Coil', category: 'Vật tư', unit: 'Tấn', price: '18M VNĐ', icon: '🏗️' },
  { id: 2, name: 'Ceramic Insulation Plates', category: 'Vật tư', unit: 'M2', price: '1.2M VNĐ', icon: '🧱' },
  { id: 3, name: 'Industrial Lubricant (Grade A)', category: 'Hóa chất', unit: 'Lít', price: '150K VNĐ', icon: '🧪' }
];



// ============ HELPERS ============
function getUser(id) { return USERS.find(u => u.id === id); }
function avatarUrl(seed) { return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`; }

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function getTrustBadge(score) {
  if (score >= 80) return '<span class="post__trust-score post__trust-score--high">🛡️ ' + score + '</span>';
  if (score >= 50) return '<span class="post__trust-score post__trust-score--mid">🛡️ ' + score + '</span>';
  return '<span class="post__trust-score post__trust-score--low">⚠️ ' + score + '</span>';
}

// ============ RENDER FUNCTIONS ============
function renderStories() {
  const container = $('#stories');
  STORIES.forEach(story => {
    const user = getUser(story.userId);
    const el = document.createElement('div');
    el.className = 'story';
    el.innerHTML = `
      <div class="story__img-wrap">
        <img src="${avatarUrl(user.seed)}" alt="${user.name}" />
      </div>
      <span class="story__name">${user.name.split(' ')[0]}</span>
    `;
    el.addEventListener('click', () => openStory(story));
    container.appendChild(el);
  });
}

function renderPosts(container, posts) {
  container.innerHTML = '';
  posts.forEach((post, idx) => {
    const user = getUser(post.userId);
    const el = document.createElement('article');
    el.className = 'post';
    el.style.animationDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <div class="post__header">
        <div class="avatar avatar--md ${user.online ? 'online' : ''}">
          <img src="${avatarUrl(user.seed)}" alt="${user.name}" />
        </div>
        <div class="post__header-info">
          ${post.tag ? `<div class="post__tag">${post.tag}</div>` : ''}
          <div class="post__author">${user.name} ${getTrustBadge(user.trustScore || 50)}</div>
          <div class="post__time">${post.time}</div>
        </div>
        <button class="post__menu">⋯</button>
      </div>
      <div class="post__content">
        ${post.content.split('\n').map(l => `<p>${l}</p>`).join('')}
      </div>
      ${post.image ? `<img class="post__image" src="${post.image}" alt="Post image" loading="lazy" />` : ''}
      <div class="post__stats">
        <div class="post__likes-display">
          <div class="post__reaction-icons">${post.reactions.map(r => `<span>${r}</span>`).join('')}</div>
          <span>${post.likes} lượt thích</span>
        </div>
        <span>${post.comments} bình luận · ${post.shares} chia sẻ</span>
      </div>
      <div class="post__actions">
        <button class="post__action" data-action="like" data-post-id="${post.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span>Thích</span>
        </button>
        <button class="post__action" data-action="comment" data-post-id="${post.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Bình luận</span>
        </button>
        <button class="post__action" data-action="share" data-post-id="${post.id}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          <span>Chia sẻ</span>
        </button>
      </div>
      <div class="post__comments hidden" data-comments-for="${post.id}">
        ${(post.commentList || []).map(c => {
          const cu = getUser(c.userId);
          return `
            <div class="post__comment">
              <div class="avatar avatar--xs"><img src="${avatarUrl(cu.seed)}" alt="" /></div>
              <div class="post__comment-body"><strong>${cu.name}</strong> ${c.text}</div>
            </div>
          `;
        }).join('')}
        <div class="post__comment-input-wrap">
          <div class="avatar avatar--xs"><img src="${avatarUrl('owner')}" alt="" /></div>
          <input class="post__comment-input" placeholder="Viết bình luận..." data-post-id="${post.id}" />
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

function renderSuggestions() {
  const container = $('#suggestion-list');
  const suggestions = USERS.slice(7);
  suggestions.forEach(user => {
    const el = document.createElement('div');
    el.className = 'suggestion-item';
    el.innerHTML = `
      <div class="avatar avatar--sm ${user.online ? 'online' : ''}">
        <img src="${avatarUrl(user.seed)}" alt="${user.name}" />
      </div>
      <div class="suggestion-item__info">
        <div class="suggestion-item__name">${user.name}</div>
        <div class="suggestion-item__mutual">${Math.floor(Math.random() * 20) + 3} bạn chung</div>
      </div>
      <button class="btn btn--primary btn--sm" onclick="this.textContent='Đã gửi';this.disabled=true;this.style.opacity='0.6'">Kết bạn</button>
    `;
    container.appendChild(el);
  });
}

function renderTrending() {
  const container = $('#trending-list');
  TRENDING.forEach(item => {
    const el = document.createElement('div');
    el.className = 'trending-item';
    el.innerHTML = `
      <div class="trending-item__tag">${item.tag}</div>
      <div class="trending-item__desc">${item.desc}</div>
      <div class="trending-item__count">${item.count}</div>
    `;
    container.appendChild(el);
  });
}

function renderNotifications() {
  const container = $('#notifications-list');
  container.innerHTML = '';
  NOTIFICATIONS.forEach(notif => {
    const iconClass = `notif-item__icon--${notif.type}`;
    const el = document.createElement('div');
    el.className = `notif-item ${notif.unread ? 'notif-item--unread' : ''}`;
    el.innerHTML = `
      <div class="notif-item__icon ${iconClass}">${notif.icon}</div>
      <div class="notif-item__body">
        <p>${notif.text}</p>
        <time>${notif.time}</time>
      </div>
    `;
    container.appendChild(el);
  });
}

function renderNotifDropdown() {
  const container = $('#notif-list');
  container.innerHTML = '';
  NOTIFICATIONS.slice(0, 5).forEach(notif => {
    const user = getUser(notif.userId);
    const el = document.createElement('div');
    el.className = `dropdown__item ${notif.unread ? 'dropdown__item--unread' : ''}`;
    el.innerHTML = `
      <div class="avatar avatar--sm"><img src="${avatarUrl(user.seed)}" alt="" /></div>
      <div>
        <p>${notif.text}</p>
        <time>${notif.time}</time>
      </div>
    `;
    container.appendChild(el);
  });
}

function renderChatList() {
  const container = $('#chat-list');
  container.innerHTML = '';
  CHATS.forEach((chat, idx) => {
    const user = getUser(chat.userId);
    const lastMsg = chat.messages[chat.messages.length - 1];
    const el = document.createElement('div');
    el.className = `chat-item ${idx === 0 ? 'active' : ''}`;
    el.innerHTML = `
      <div class="avatar avatar--md ${user.online ? 'online' : ''}">
        <img src="${avatarUrl(user.seed)}" alt="" />
      </div>
      <div class="chat-item__info">
        <div class="chat-item__name">
          <span>${user.name}</span>
          <time>${chat.lastTime}</time>
        </div>
        <div class="chat-item__preview">${lastMsg.from === 'me' ? 'Bạn: ' : ''}${lastMsg.text}</div>
      </div>
      ${chat.unread ? '<div class="chat-item__unread"></div>' : ''}
    `;
    el.addEventListener('click', () => openChat(chat, user));
    container.appendChild(el);
  });
}

function renderChatMessages(chat) {
  const body = $('#chat-body');
  body.innerHTML = '';
  chat.messages.forEach(msg => {
    const el = document.createElement('div');
    el.className = `msg msg--${msg.from === 'me' ? 'sent' : 'received'}`;
    el.innerHTML = `
      <div>${msg.text}</div>
      <div class="msg__time">${msg.time}</div>
    `;
    body.appendChild(el);
  });
  body.scrollTop = body.scrollHeight;
}

function renderExploreGrid() {
  const container = $('#explore-grid');
  const seeds = ['cafe1', 'street2', 'food3', 'travel4', 'tech5', 'nature6', 'city7', 'art8', 'music9', 'sport10', 'sunset11', 'coffee12'];
  container.innerHTML = '';
  seeds.forEach(seed => {
    const el = document.createElement('div');
    el.className = 'explore-card';
    el.innerHTML = `
      <img src="https://picsum.photos/seed/${seed}/300/300" alt="" loading="lazy" />
      <div class="explore-card__overlay">
        <div class="explore-card__stats">
          <span>❤️ ${Math.floor(Math.random() * 500) + 50}</span>
          <span>💬 ${Math.floor(Math.random() * 100) + 10}</span>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ============ VIEW SWITCHING ============
function switchView(viewName) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $$('.sidebar__link').forEach(l => l.classList.remove('sidebar__link--active'));

  const viewEl = $(`#view-${viewName}`);
  const navEl = $(`[data-view="${viewName}"]`);

  if (viewEl) viewEl.classList.add('active');
  if (navEl) navEl.classList.add('sidebar__link--active');

  // Lazy render
  if (viewName === 'explore' && !$('#explore-grid').children.length) {
    renderExploreGrid();
  }
  if (viewName === 'notifications' && !$('#notifications-list').children.length) {
    renderSmartNotifications();
  }
  if (viewName === 'hackathon') {
    if (!$('#hackathon-grid').children.length) renderHackathons();
  }
  if (viewName === 'travel') {
    if (!$('#visa-grid').children.length) renderTravelHub();
  }
  if (viewName === 'messages') {
    if (!$('#chat-list').children.length) {
      renderChatList();
      renderChatMessages(CHATS[0]);
    }
  }
  if (viewName === 'learning') {
    if (!$('#course-grid').children.length) renderCourseGrid();
    if (!$('#quiz-section').children.length) renderQuizSection();
    renderLearningProgress();
  }
  if (viewName === 'shorts') {
    if (!$('#shorts-container').children.length) renderShortsFeed();
    _shortsCurrentIdx = 0;
    setTimeout(() => { const c = $('#shorts-container'); if (c) c.scrollTop = 0; }, 50);
  }
  if (viewName === 'fund') {
    if (!$('#fund-grid').children.length) renderFundFeed();
    startFundTicker();
    animateFundCounters();
  }
  if (viewName === 'feed') {
    renderHomeDashboard();
  }
  if (viewName === 'match') {
    if (!$('#match-grid').children.length) renderMatchFeed();
  }
  if (viewName === 'devmap') {
    initDevMap();
  }
  if (viewName === 'fund') {
    // Render leaderboard & bounties on first fund visit
    if (!$('#leaderboard-list').children.length) renderLeaderboard();
    if (!$('#bounty-list').children.length) renderBountyBoard();
  }
  if (viewName === 'investor') {
    if (!$('#investor-deal-flow').children.length) renderInvestorDashboard();
  }
  if (viewName === 'industrial') {
    if (!$('#industrial-appraisal-grid').children.length) renderIndustrialHub();
  }
  if (viewName === 'marketplace') {
    if (!$('#marketplace-grid').children.length) renderMarketplace();
  }
  if (viewName === 'plugins') {
    if (!$('#plugin-store-grid').children.length) renderPluginStore();
  }
  if (viewName === 'profile') {
    renderCertificateGallery();
  }
  if (viewName === 'agents') {
    if (!$('#agent-fleet-grid').children.length) renderAgentDashboard();
  }
  if (viewName === 'startup-builder') {
    if (!$('#ai-cofounder-grid').children.length) renderStartupBuilder();
  }
}

// ============ 🧑‍💼 INVESTOR DASHBOARD ENGINE ============

function renderInvestorDashboard() {
  renderInvestorDeals(FUND_IDEAS);
  renderTrustMetrics();
}

function filterInvestorDeals(stage) {
  document.querySelectorAll('.inv-filter').forEach(b => b.classList.remove('active'));
  document.querySelector(`.inv-filter[data-stage="${stage}"]`)?.classList.add('active');
  const filtered = stage === 'all' ? FUND_IDEAS : FUND_IDEAS.filter(i => i.stage === stage);
  renderInvestorDeals(filtered);
}

function renderInvestorDeals(ideas) {
  const container = $('#investor-deal-flow');
  if (!container) return;
  container.innerHTML = ideas.map(idea => {
    const founder = getUser(idea.founderId);
    const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
    const stageColor = getFundStageColor(idea.stage);
    const avgTrust = idea.members.reduce((s, uid) => {
      const u = getUser(uid); return s + (u ? u.trustScore : 0);
    }, 0) / (idea.members.length || 1);
    const momentum = idea.contributions.length * 12 + idea.members.length * 8;
    return `
    <div class="investor-deal-card">
      <div class="investor-deal-card__left">
        <div class="investor-deal-emoji">${idea.emoji}</div>
        <div class="investor-deal-info">
          <div class="investor-deal-name">${idea.name}</div>
          <div class="investor-deal-stage" style="color:${stageColor}">${getFundStageLabel(idea.stage)}</div>
          <div class="investor-deal-desc">${idea.desc}</div>
        </div>
      </div>
      <div class="investor-deal-metrics">
        <div class="inv-metric">
          <div class="inv-metric__val">${pct}%</div>
          <div class="inv-metric__label">Funded</div>
          <div class="inv-metric-bar"><div class="inv-metric-bar__fill" style="width:${pct}%;background:${stageColor}"></div></div>
        </div>
        <div class="inv-metric">
          <div class="inv-metric__val">${idea.members.length}</div>
          <div class="inv-metric__label">Team</div>
        </div>
        <div class="inv-metric">
          <div class="inv-metric__val" style="color:${avgTrust>=80?'#10b981':'#f59e0b'}">${Math.round(avgTrust)}</div>
          <div class="inv-metric__label">Avg Trust</div>
        </div>
        <div class="inv-metric">
          <div class="inv-metric__val inv-metric__val--hot">${momentum}</div>
          <div class="inv-metric__label">Momentum🔥</div>
        </div>
      </div>
      <div class="investor-deal-team">
        ${idea.members.slice(0,3).map(uid=>{ const u=getUser(uid); return u?`<img class="inv-team-avatar" src="${avatarUrl(u.seed)}" title="${u.name} 🛡️${u.trustScore}" />`:''; }).join('')}
        ${idea.members.length>3?`<span class="inv-team-more">+${idea.members.length-3}</span>`:''}
      </div>
      <div class="investor-deal-actions">
        <button class="btn btn--primary btn--sm" onclick="openContributeModal(${idea.id})">💰 Đầu tư</button>
        <button class="btn btn--glass btn--sm" onclick="openDevJoinModal(${idea.id})">💻 Join Dev</button>
      </div>
    </div>`;
  }).join('');
}

function renderTrustMetrics() {
  const container = $('#trust-metrics-grid');
  if (!container) return;
  const metrics = [
    { icon: '🛡️', title: 'Trust Score System', val: '87/100', desc: 'Avg team trust score — tự động tính từ contributions & peer verify', color: '#10b981' },
    { icon: '🔗', title: 'P2P Verified', val: '100%', desc: 'Mọi giao dịch equity đều on-chain P2P, không thể giả mạo', color: '#818cf8' },
    { icon: '📊', title: 'Contribution Transparency', val: 'Real-time', desc: 'Mọi giờ code, giờ design đều ghi nhận tự động với timestamp', color: '#f59e0b' },
    { icon: '⚖️', title: 'Fair Equity Split', val: '60/30/10', desc: 'Contributor 60% · Referrer 30% · Trust Fund 10% — tự động', color: '#ef4444' },
    { icon: '🔒', title: 'Zero Lock-in', val: 'Exit anytime', desc: 'Nhà đầu tư được quyền rút vốn bất kỳ lúc nào, minh bạch', color: '#22c55e' },
    { icon: '📈', title: 'Network Effect', val: '10K+ users', desc: 'Mỗi user thêm vào tăng giá trị cả ecosystem theo hàm mũ', color: '#06b6d4' },
  ];
  container.innerHTML = metrics.map(m => `
    <div class="trust-metric-card" style="border-color:${m.color}30">
      <div class="trust-metric-card__icon" style="background:${m.color}18;color:${m.color}">${m.icon}</div>
      <div class="trust-metric-card__title">${m.title}</div>
      <div class="trust-metric-card__val" style="color:${m.color}">${m.val}</div>
      <div class="trust-metric-card__desc">${m.desc}</div>
    </div>
  `).join('');
}

// ============ 💻 DEV JOIN PORTAL ENGINE ============

function renderDevJoinGrid(ideas) {
  const container = $('#devjoin-grid');
  if (!container) return;
  container.innerHTML = ideas.map(idea => {
    const founder = getUser(idea.founderId);
    const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
    const stageColor = getFundStageColor(idea.stage);
    const equityAvail = Math.max(0, 100 - pct);
    const openSpots = idea.needs.map(n => RESOURCE_RATES[n]?.label || n);
    return `
    <div class="devjoin-card">
      <div class="devjoin-card__top">
        <span class="devjoin-card__emoji">${idea.emoji}</span>
        <span class="devjoin-card__stage-badge" style="background:${stageColor}22;color:${stageColor}">${getFundStageLabel(idea.stage)}</span>
      </div>
      <h3 class="devjoin-card__name">${idea.name}</h3>
      <p class="devjoin-card__desc">${idea.desc}</p>
      <div class="devjoin-card__needs">
        <div class="devjoin-needs-label">🔍 Đang cần:</div>
        <div class="devjoin-needs-tags">
          ${openSpots.map(s=>`<span class="devjoin-need-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="devjoin-card__stats">
        <div class="devjoin-stat"><strong style="color:${stageColor}">${equityAvail}%</strong><span>Equity còn</span></div>
        <div class="devjoin-stat"><strong>${idea.members.length}</strong><span>Thành viên</span></div>
        <div class="devjoin-stat"><strong>${idea.contributions.length}</strong><span>Contributions</span></div>
      </div>
      <div class="devjoin-card__team">
        ${idea.members.slice(0,4).map(uid=>{ const u=getUser(uid); return u?`<img class="devjoin-team-avatar" src="${avatarUrl(u.seed)}" title="${u.name}" />`:''; }).join('')}
        ${founder?`<span class="devjoin-founder-badge">Founder: ${founder.name} 🛡️${founder.trustScore}</span>`:''}
      </div>
      <div class="devjoin-card__progress">
        <div class="devjoin-progress-bar"><div style="width:${pct}%;background:${stageColor};height:100%;border-radius:4px"></div></div>
        <span>${pct}% funded</span>
      </div>
      <button class="devjoin-join-btn" onclick="openDevJoinModal(${idea.id})">
        🚀 Tham gia ngay — Nhận equity
      </button>
    </div>`;
  }).join('');
}

function filterDevJoin(query) {
  const q = query.toLowerCase();
  const filtered = FUND_IDEAS.filter(i => (i.name + i.desc + i.needs.join(' ')).toLowerCase().includes(q));
  renderDevJoinGrid(filtered);
}

function filterDevJoinStage(btn, need) {
  document.querySelectorAll('.devjoin-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const filtered = need === 'all' ? FUND_IDEAS : FUND_IDEAS.filter(i => i.needs.includes(need));
  renderDevJoinGrid(filtered);
}

let _devJoinRole = null, _devJoinHours = null, _devJoinIdeaId = null;

function openDevJoinModal(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  $('#dev-join-modal')?.remove();

  const founder = getUser(idea.founderId);
  const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
  const stageColor = getFundStageColor(idea.stage);
  const equityAvail = Math.max(0, 100 - pct);
  _devJoinIdeaId = ideaId;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'dev-join-modal';
  modal.innerHTML = `
    <div class="modal card dev-join-modal-inner">
      <div class="modal__header">
        <h3>${idea.emoji} Tham gia “${idea.name}”</h3>
        <button class="modal__close" onclick="document.getElementById('dev-join-modal').remove()">✕</button>
      </div>
      <div class="dev-join-modal-body">
        ${founder ? `
        <div class="dev-join-founder-row">
          <img class="dev-join-founder-avatar" src="${avatarUrl(founder.seed)}" />
          <div style="flex:1">
            <div class="dev-join-founder-name">${founder.name} <span class="trust-badge-inline">🛡️${founder.trustScore}</span></div>
            <div class="dev-join-founder-meta">${founder.role} · ${founder.location}</div>
          </div>
          <div class="dev-join-equity-pill" style="border-color:${stageColor}">
            <span style="color:${stageColor};font-size:1.3rem;font-weight:800">${equityAvail}%</span>
            <span style="font-size:0.7rem;color:var(--text-tertiary)">equity còn</span>
          </div>
        </div>` : ''}

        <div class="dev-join-section">
          <div class="dev-join-section-label">🎯 Bạn đóng góp gì?</div>
          <div class="dev-join-roles" id="dev-join-roles-${ideaId}">
            ${Object.entries(RESOURCE_RATES).map(([key, r]) => `
              <button class="dev-join-role-btn ${idea.needs.includes(key)?'dev-join-role-btn--needed':''}" data-role="${key}" onclick="selectDevJoinRole(this, ${ideaId})">
                ${r.label}
                ${idea.needs.includes(key)?'<span class="needed-badge">Cần ngạy!</span>':''}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="dev-join-section">
          <div class="dev-join-section-label">⏰ Bạn dành bao nhiêu giờ/tuần?</div>
          <div class="dev-join-hours">
            <button class="dev-join-hour-btn" data-h="5" onclick="selectDevJoinHours(this)">5h</button>
            <button class="dev-join-hour-btn" data-h="10" onclick="selectDevJoinHours(this)">10h</button>
            <button class="dev-join-hour-btn" data-h="20" onclick="selectDevJoinHours(this)">20h</button>
            <button class="dev-join-hour-btn dev-join-hour-btn--full" data-h="40" onclick="selectDevJoinHours(this)">Full-time 🔥</button>
          </div>
        </div>

        <div class="dev-join-equity-preview" id="dev-join-equity-preview">
          <div>📊 Equity của bạn (dự kiến)</div>
          <div class="dev-join-equity-val" id="dev-join-equity-val">Chọn role để xem</div>
          <div style="font-size:0.72rem;color:var(--text-tertiary);margin-top:4px">Trust Score 92 → ×${calcTrustMultiplier(92).toFixed(1)} multiplier</div>
        </div>

        <div class="dev-join-section">
          <div class="dev-join-section-label">💬 Bạn mang gì đến? <small style="opacity:.5">(tuỳ chọn)</small></div>
          <textarea class="form-input" id="dev-join-note" rows="2" placeholder="VD: Mình có 3 năm React, từng build EdTech 0→5K users..."></textarea>
        </div>

        <button class="dev-join-submit" id="dev-join-submit" onclick="submitDevJoin(${ideaId})" disabled style="opacity:0.4;cursor:not-allowed">
          🚀 Tham gia — Nhận equity ngay
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function selectDevJoinRole(btn, ideaId) {
  document.querySelectorAll('.dev-join-role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _devJoinRole = btn.dataset.role;
  _devJoinIdeaId = ideaId;
  updateDevJoinEquityPreview();
}

function selectDevJoinHours(btn) {
  document.querySelectorAll('.dev-join-hour-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _devJoinHours = parseInt(btn.dataset.h);
  updateDevJoinEquityPreview();
}

function updateDevJoinEquityPreview() {
  const valEl = $('#dev-join-equity-val');
  const submitBtn = $('#dev-join-submit');
  if (!_devJoinRole || !_devJoinHours) return;
  const pts = calculateEquity(_devJoinRole, _devJoinHours, 92);
  const idea = FUND_IDEAS.find(i => i.id === _devJoinIdeaId);
  const pctOfIdea = idea ? ((pts / idea.goalPoints) * 100).toFixed(1) : '?';
  if (valEl) valEl.innerHTML = `<span style="font-size:1.5rem;font-weight:800;color:var(--accent-primary)">${pts.toLocaleString()} điểm</span> <span style="font-size:0.85rem;color:var(--text-secondary)">≈ ${pctOfIdea}% trong dự án</span>`;
  if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; submitBtn.style.cursor = 'pointer'; }
}

function submitDevJoin(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea || !_devJoinRole || !_devJoinHours) return;
  const note = $('#dev-join-note')?.value || 'Dev mới join';
  const pts = calculateEquity(_devJoinRole, _devJoinHours, 92);
  idea.contributions.push({ userId: 0, type: _devJoinRole, amount: _devJoinHours, points: pts, note });
  if (!idea.members.includes(0)) idea.members.push(0);
  idea.raisedPoints += pts;
  $('#dev-join-modal')?.remove();
  showToast(`🎉 Đã tham gia “${idea.name}”! ${pts.toLocaleString()} điểm equity ghi nhận. Welcome to the team!`, 'success');
  setTimeout(() => switchView('fund'), 1200);
  _devJoinRole = null; _devJoinHours = null; _devJoinIdeaId = null;
}


// ============ 🌟 INSPIRATION HUB ENGINE ============

const INSPO_LEGENDS = [
  {
    icon: '⚔️', era: 'Cổ Đại · Trung Quốc', year: '206 TCN',
    name: 'Lưu Bang & Hàn Tín',
    role: 'Hán Cao Tổ & Đại Nguyên Soái',
    tagline: 'Từ tên vô lại thành Hoàng đế nhờ biết dùng người',
    story: 'Lưu Bang không có tài năng đặc biệt — nhưng ông biết chọn đúng người. Hàn Tín — thiên tài quân sự, Trương Lương — chiến lược gia, Tiêu Hà — quản trị. Ba người khác nhau hoàn toàn, nhưng cùng một mục tiêu. Lưu Bang thắng Hạng Vũ — người tài giỏi hơn, mạnh hơn, nhưng không biết tin tưởng người khác.',
    lesson: '"Hào kiệt không phải người làm được mọi việc — mà là người biết ai làm được gì."',
    metrics: [{ val: '400 năm', label: 'Nhà Hán trị vì' }, { val: '3', label: 'Chiến hữu cốt lõi' }, { val: '1', label: 'Kẻ địch tài năng hơn bị đánh bại' }],
    color: '#f59e0b', bg: 'rgba(245,158,11,0.06)'
  },
  {
    icon: '🌙', era: 'Tam Quốc · Trung Quốc', year: '184 SCN',
    name: 'Lưu Bị · Quan Vũ · Trương Phi',
    role: 'Ba anh em Vườn Đào',
    tagline: 'Lời thề trung thành vĩnh cửu — không cùng sống thì cùng chết',
    story: 'Ba người không cùng huyết thống, gặp nhau trong thời loạn. Họ thề tại vườn đào: "Dù không sinh cùng ngày, cùng tháng, cùng năm — nguyện chết cùng ngày, cùng tháng, cùng năm." Không có hợp đồng, không có luật sư — chỉ có lời hứa và sự tin tưởng tuyệt đối. Đây là liên minh đã tồn tại ngàn năm trong lòng người.',
    lesson: '"Trust mạnh nhất không đến từ hợp đồng — mà từ lòng người đã chọn nhau."',
    metrics: [{ val: '3', label: 'Anh em kết nghĩa' }, { val: '40 năm', label: 'Đồng hành' }, { val: '∞', label: 'Lòng trung thành' }],
    color: '#818cf8', bg: 'rgba(129,140,248,0.06)'
  },
  {
    icon: '🍎', era: 'Silicon Valley · Mỹ', year: '1976',
    name: 'Steve Jobs & Steve Wozniak',
    role: 'Co-founders Apple',
    tagline: 'Một người bán giấc mơ, một người viết code — cùng thay đổi thế giới',
    story: 'Wozniak là thiên tài kỹ thuật — Jobs không code được. Jobs là thiên tài vision — Wozniak không quan tâm business. Họ bổ sung nhau hoàn hảo. Garage $1,300 → công ty nghìn tỷ. Jobs bị đuổi, rồi quay lại cứu Apple khỏi phá sản. Bài học: co-founder phù hợp quan trọng hơn tài năng cá nhân.',
    lesson: '"Design không chỉ là trông đẹp. Design là cách nó hoạt động."',
    metrics: [{ val: '$3T', label: 'Market cap đỉnh' }, { val: '1976', label: 'Năm thành lập' }, { val: 'Garage', label: 'Nơi bắt đầu' }],
    color: '#94a3b8', bg: 'rgba(148,163,184,0.06)'
  },
  {
    icon: '🚀', era: 'Silicon Valley · Mỹ', year: '2002',
    name: 'Elon Musk — SpaceX',
    role: 'CEO & Chief Engineer',
    tagline: 'Bị từ chối 3 lần, còn $30M cuối cùng — đặt cược tất cả vào launch thứ 4',
    story: '3 lần phóng tên lửa đầu tiên đều thất bại. Tháng 8/2008: còn đúng $30M — đủ cho 1 lần phóng nữa. Nếu thất bại, SpaceX đóng cửa. Musk họp team: "Chúng ta làm không phải vì dễ — mà vì quan trọng." Launch thứ 4 thành công. Hôm đó, NASA trao hợp đồng $1.6B. Lesson: đội ngũ tin vào sứ mệnh sẽ không bỏ đi khi khó khăn nhất.',
    lesson: '"Khi mọi thứ đủ quan trọng, bạn làm dù xác suất thành công không ủng hộ bạn."',
    metrics: [{ val: '3', label: 'Lần thất bại liên tiếp' }, { val: '$30M', label: 'Còn lại trước launch 4' }, { val: '$1.6B', label: 'NASA contract sau đó' }],
    color: '#22c55e', bg: 'rgba(34,197,94,0.06)'
  },
  {
    icon: '🎵', era: 'Stockholm · Thụy Điển', year: '2006',
    name: 'Daniel Ek & Martin Lorentzon',
    role: 'Co-founders Spotify',
    tagline: 'Câu trả lời cho piracy không phải là chiến đấu — mà là tạo ra thứ tốt hơn',
    story: 'Âm nhạc đang bị phá hủy bởi piracy — Napster, Pirate Bay. Thay vì kiện, Daniel Ek nghĩ khác: "Piracy thắng vì nó tiện hơn." Ông và Lorentzon bỏ 2 năm thuyết phục các hãng đĩa — bị từ chối không đếm xuể. Cuối cùng: Spotify launch với mô hình freemium. Ngành âm nhạc hồi sinh. Bài học: đừng fight cái cũ — build cái mới.',
    lesson: '"Cách tốt nhất để tiêu diệt đối thủ là khiến họ không còn relevant."',
    metrics: [{ val: '602M', label: 'Monthly active users' }, { val: '2006', label: 'Founded Stockholm' }, { val: '$10B', label: 'Trả cho nghệ sĩ 2023' }],
    color: '#1db954', bg: 'rgba(29,185,84,0.06)'
  },
  {
    icon: '🌐', era: 'Harvard → Silicon Valley', year: '2004',
    name: 'Mark Zuckerberg & Eduardo Saverin',
    role: 'Co-founders Facebook (Maskbook)',
    tagline: 'Kết nối mọi người — câu chuyện về tình bạn, phản bội, và bài học lòng tin',
    story: 'Facebook bắt đầu từ dorm room Harvard — Zuck code, Eduardo tài chính. Khi scale, mâu thuẫn nổ ra về vision và quyền kiểm soát. Eduardo bị dilute shares từ 30% xuống 0.03%. The Social Network kể câu chuyện này. Bài học cay đắng nhất Silicon Valley: co-founder agreement cần rõ ràng từ đầu — trust cần được bảo vệ bởi cấu trúc.',
    lesson: '"Thành công mà mất đi người bạn đồng hành — đó là thành công gì?"',
    metrics: [{ val: '3B+', label: 'Monthly active users' }, { val: '2004', label: 'Harvard dorm room' }, { val: '$19B', label: 'Mua WhatsApp 2014' }],
    color: '#1877f2', bg: 'rgba(24,119,242,0.06)'
  },
];

const INSPO_BROTHERHOOD = [
  {
    icon: '🌸', culture: 'Nhật Bản', name: 'Honda & Fujisawa',
    tagline: '"Một người làm kỹ sư, một người làm business — không ai can thiệp vào lĩnh vực của nhau."',
    story: 'Soichiro Honda là thiên tài cơ khí, ghét việc quản lý. Takeo Fujisawa là thiên tài kinh doanh, không hiểu kỹ thuật. Họ ký thỏa thuận thủ công: Honda không bao giờ bàn về business, Fujisawa không bao giờ xen vào kỹ thuật. 25 năm partnership hoàn hảo — khi retire, hai người cùng rời công ty một ngày.',
    lesson: 'Tin tưởng thật sự là: biết ranh giới của mình và tôn trọng ranh giới của đối tác.',
    color: '#ef4444'
  },
  {
    icon: '🦁', culture: 'Phim · Brothers', name: '"Band of Brothers" (2001)',
    tagline: '"Dễ thương với nhau khi tốt đẹp — vĩ đại là ở bên nhau khi địa ngục."',
    story: 'Easy Company, 506th PIR — những người lính nhảy dù WWII. Không có gì "gắn kết team" hơn chiến trận. Họ không giỏi nhất — nhưng họ không bỏ nhau. Sergeant Carwood Lipton viết về đồng đội: "Tôi biết rằng nếu tôi ngã xuống, họ sẽ không để tôi ở lại." DevTrust DNA: không bỏ teammate khi khó khăn.',
    lesson: 'Loyalty không phải khi thuận lợi — loyalty là khi mọi thứ sụp đổ.',
    color: '#64748b'
  },
  {
    icon: '🔬', culture: 'Nga · Khoa học', name: 'Curie & Einstein — Tinh thần khoa học',
    tagline: '"Những người vĩ đại chia sẻ tất cả — họ không sợ bị steal vì biết mình sẽ tiếp tục tạo ra."',
    story: 'Marie Curie chia sẻ công thức phóng xạ ra thế giới — không patent, không giữ bí mật. Einstein chia sẻ toàn bộ research. Họ tin rằng kiến thức thuộc về nhân loại. Tinh thần open source của devs bắt nguồn từ đây: Linus Torvalds với Linux, Tim Berners-Lee với World Wide Web — tặng cho thế giới mà không lấy gì.',
    lesson: 'Build in public, share openly — người chia sẻ nhiều nhất thường được nhớ đến lâu nhất.',
    color: '#8b5cf6'
  },
  {
    icon: '🤝', culture: 'DevTrust · Vietnam', name: 'Triết lý chiến hữu DevTrust',
    tagline: '"Không vì bốc đồng mà bỏ bạn bè đội ngũ. Trân trọng người đồng hành."',
    story: 'Trong bối cảnh Atlassian, Google, Meta layoff hàng nghìn người — dev Việt Nam cần một nơi khác. Không phải job board. Không phải marketplace lạnh lùng. Mà là cộng đồng chiến hữu — nơi trust được đo lường, cống hiến được ghi nhận, và không ai bị bỏ lại một mình. DevTrust được build cho thời đại này — khi AI lấy đi jobs, nhưng không thể lấy đi human connection.',
    lesson: '"Chân thành và thật thà là vốn." — DNA của DevTrust.',
    color: '#6366f1'
  },
];

const INSPO_FILMS = [
  { emoji: '🎬', title: 'The Social Network', year: '2010', director: 'David Fincher', lesson: 'Về tham vọng, tình bạn và cái giá của thành công. "You don\'t get to 500M friends without making a few enemies."', tags: ['startup', 'betrayal', 'vision'], color: '#1877f2' },
  { emoji: '🍎', title: 'Pirates of Silicon Valley', year: '1999', director: 'Martyn Burke', lesson: 'Jobs vs Gates — hai thiên tài, hai style hoàn toàn khác, cùng thay đổi thế giới máy tính.', tags: ['Apple', 'Microsoft', 'rivalry'], color: '#94a3b8' },
  { emoji: '🚀', title: 'The Founder', year: '2016', director: 'John Lee Hancock', lesson: 'Ray Kroc và McDonald\'s — về franchising, tham vọng, và đôi khi sự tàn nhẫn của business.', tags: ['McDonald\'s', 'franchise', 'ambition'], color: '#f59e0b' },
  { emoji: '🌍', title: 'Joy', year: '2015', director: 'David O. Russell', lesson: 'Joy Mangano từ một bà mẹ đơn thân thành tỷ phú. Về sự kiên trì khi cả gia đình không tin bạn.', tags: ['female founder', 'hustle', 'product'], color: '#ec4899' },
  { emoji: '⚡', title: 'The Internship', year: '2013', director: 'Shawn Levy', lesson: 'Hài hước nhẹ nhàng về Google culture, teamwork và việc không bao giờ quá già để học lại.', tags: ['Google', 'teamwork', 'comeback'], color: '#22c55e' },
  { emoji: '🎸', title: 'Bohemian Rhapsody', year: '2018', director: 'Bryan Singer', lesson: 'Queen không phải startup tech — nhưng đây là câu chuyện về brand building, team conflict và legacy.', tags: ['music', 'brand', 'resilience'], color: '#fbbf24' },
  { emoji: '🏠', title: 'Air', year: '2023', director: 'Ben Affleck', lesson: 'Nike ký Michael Jordan khi không ai tin — về bet lớn, thuyết phục và thay đổi cả ngành công nghiệp.', tags: ['Nike', 'deal', 'risk'], color: '#f97316' },
  { emoji: '🤝', title: 'Band of Brothers', year: '2001', director: 'Steven Spielberg', lesson: 'Không phải startup film — nhưng là tác phẩm vĩ đại nhất về team, loyalty và không bỏ teammate.', tags: ['brotherhood', 'loyalty', 'war'], color: '#64748b' },
];

const INSPO_STORIES = [
  {
    founder: USERS[2], // Hương - AI Lead
    idea: FUND_IDEAS[0],
    headline: '67 ngày từ idea đến MVP — bằng cách hỏi đúng câu hỏi',
    story: 'Tôi không bắt đầu với solution. Tôi bắt đầu với một câu hỏi đơn giản: "Tại sao học sinh vùng cao bỏ học nhiều vậy?" 3 tuần field research, 40 cuộc phỏng vấn, và tôi nhận ra: vấn đề không phải thiếu thầy — mà là nội dung không relevant với cuộc sống của họ. EduChain VN ra đời từ đó.',
    tags: ['EdTech', 'AI', 'Vietnam', 'field research'],
    metrics: [{ val: '67', label: 'ngày đến MVP' }, { val: '40', label: 'user interviews' }, { val: '91', label: 'Trust Score' }],
  },
  {
    founder: USERS[0], // Linh - Frontend
    idea: FUND_IDEAS[1],
    headline: 'Tôi bị từ chối 12 lần trước khi tìm được co-founder',
    story: 'Mọi người nghĩ tìm co-founder khó vì họ muốn tìm người "perfect". Tôi nghĩ khác — co-founder tốt là người share CÙNG nỗi đau, không phải cùng skill. Sau 12 lần thất bại, Minh Trần accept — vì anh ấy cũng ghét cách SME bị ngân hàng đối xử. SmartPay VN bắt đầu từ nỗi đau chung đó.',
    tags: ['Fintech', 'co-founder', 'rejection', 'lesson'],
    metrics: [{ val: '12', label: 'lần từ chối' }, { val: '1', label: 'co-founder đúng' }, { val: '38', label: 'ngày cùng nhau' }],
  },
  {
    founder: USERS[3], // Tuấn - P2P
    idea: FUND_IDEAS[2],
    headline: 'Xây P2P app khi không ai tin vào decentralization ở VN',
    story: 'Năm 2022, tôi pitch ý tưởng P2P social network cho 10 người. 9 người cười. 1 người hỏi "tại sao không?". Đó là lý do tôi tin: sự hoài nghi của số đông thường là dấu hiệu bạn đang làm điều gì đó đúng. TrustChain Social giờ có 3 contributor và growing.',
    tags: ['P2P', 'blockchain', 'contrarian', 'Vietnam'],
    metrics: [{ val: '9/10', label: 'người không tin' }, { val: '1', label: 'người tin đủ rồi' }, { val: '95', label: 'Trust Score' }],
  },
];

let _currentInspoTab = 'legends';

function switchInspoTab(btn, tab) {
  document.querySelectorAll('.inspo-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _currentInspoTab = tab;
  renderInspoContent(tab);
}

function renderInspoContent(tab) {
  const container = $('#inspo-content');
  if (!container) return;
  if (tab === 'legends') renderInspoLegends(container);
  else if (tab === 'brotherhood') renderInspoBrotherhood(container);
  else if (tab === 'films') renderInspoFilms(container);
  else if (tab === 'stories') renderInspoStories(container);
}

function renderInspoLegends(container) {
  container.innerHTML = `<div class="inspo-legends-grid">
    ${INSPO_LEGENDS.map((l, i) => `
    <div class="inspo-legend-card" style="background:${l.bg};border-color:${l.color}25" onclick="toggleLegendExpand(this)">
      <div class="inspo-legend-card__top">
        <div class="inspo-legend-icon" style="background:${l.color}15;color:${l.color}">${l.icon}</div>
        <div style="flex:1;min-width:0">
          <div class="inspo-legend-era" style="color:${l.color}">${l.era} · ${l.year}</div>
          <div class="inspo-legend-name">${l.name}</div>
          <div class="inspo-legend-role">${l.role}</div>
        </div>
      </div>
      <div class="inspo-legend-tagline">"${l.tagline}"</div>
      <div class="inspo-legend-story hidden">${l.story}</div>
      <div class="inspo-legend-lesson" style="border-color:${l.color}30;color:${l.color}">💡 ${l.lesson}</div>
      <div class="inspo-legend-metrics">
        ${l.metrics.map(m => `<div class="inspo-metric"><strong>${m.val}</strong><span>${m.label}</span></div>`).join('')}
      </div>
      <div class="inspo-legend-expand" style="color:${l.color}">▼ Đọc thêm</div>
    </div>`).join('')}
  </div>`;
}

function toggleLegendExpand(card) {
  const story = card.querySelector('.inspo-legend-story');
  const toggle = card.querySelector('.inspo-legend-expand');
  if (story.classList.contains('hidden')) {
    story.classList.remove('hidden');
    toggle.textContent = '▲ Thu gọn';
  } else {
    story.classList.add('hidden');
    toggle.textContent = '▼ Đọc thêm';
  }
}

function renderInspoBrotherhood(container) {
  container.innerHTML = `<div class="inspo-brotherhood-list">
    ${INSPO_BROTHERHOOD.map(b => `
    <div class="inspo-brotherhood-card" style="border-left-color:${b.color}">
      <div class="inspo-brotherhood-header">
        <span class="inspo-brotherhood-icon">${b.icon}</span>
        <div>
          <div class="inspo-brotherhood-culture" style="color:${b.color}">${b.culture}</div>
          <div class="inspo-brotherhood-name">${b.name}</div>
        </div>
      </div>
      <div class="inspo-brotherhood-tagline">${b.tagline}</div>
      <div class="inspo-brotherhood-story">${b.story}</div>
      <div class="inspo-brotherhood-lesson" style="color:${b.color}">🔑 ${b.lesson}</div>
    </div>`).join('')}
  </div>`;
}

function renderInspoFilms(container) {
  container.innerHTML = `<div class="inspo-films-grid">
    ${INSPO_FILMS.map(f => `
    <div class="inspo-film-card" style="border-top-color:${f.color}">
      <div class="inspo-film-poster" style="background:linear-gradient(135deg,${f.color}20,${f.color}08)">${f.emoji}</div>
      <div class="inspo-film-body">
        <div class="inspo-film-title">${f.title}</div>
        <div class="inspo-film-meta" style="color:${f.color}">${f.year} · ${f.director}</div>
        <div class="inspo-film-lesson">${f.lesson}</div>
        <div class="inspo-film-tags">
          ${f.tags.map(t => `<span class="inspo-film-tag" style="background:${f.color}12;color:${f.color}">${t}</span>`).join('')}
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

function renderInspoStories(container) {
  container.innerHTML = `<div class="inspo-stories-list">
    ${INSPO_STORIES.map(s => {
      const u = s.founder;
      const idea = s.idea;
      return `
    <div class="inspo-story-card">
      <div class="inspo-story-header">
        <img class="inspo-story-avatar" src="${avatarUrl(u.seed)}" />
        <div>
          <div class="inspo-story-author">${u.name} <span class="trust-badge-inline">🛡️${u.trustScore}</span></div>
          <div class="inspo-story-role">${u.role} · ${idea.emoji} ${idea.name}</div>
        </div>
        <button class="btn btn--glass btn--sm" onclick="openKudosModal(${u.id})">💌 Kudos</button>
      </div>
      <div class="inspo-story-headline">${s.headline}</div>
      <div class="inspo-story-body">${s.story}</div>
      <div class="inspo-story-tags">
        ${s.tags.map(t => `<span class="inspo-film-tag">${t}</span>`).join('')}
      </div>
      <div class="inspo-story-metrics">
        ${s.metrics.map(m => `<div class="inspo-metric"><strong>${m.val}</strong><span>${m.label}</span></div>`).join('')}
      </div>
    </div>`;
    }).join('')}
  </div>`;
}

// ============ 🏠 HOME DASHBOARD ENGINE ============

function renderHomeDashboard() {
  renderHomeIdeasGrid();
  renderHomeFundingRounds();
  renderHomeTeamSpotlight();
  renderInspoContent('legends'); // default tab
  animateHomeStats();
}


function animateHomeStats() {
  const totalDevs = FUND_IDEAS.reduce((s,i) => s + i.members.length, 0) + 20;
  animateCount('hs-ideas', FUND_IDEAS.length);
  animateCount('hs-devs', totalDevs);
}

function animateCount(id, target) {
  const el = $(`#${id}`);
  if (!el || el.dataset.animated) return;
  el.dataset.animated = '1';
  let current = 0;
  const step = Math.ceil(target / 30);
  const t = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(t);
  }, 40);
}

function renderHomeIdeasGrid() {
  const container = $('#home-ideas-grid');
  if (!container) return;
  // Show top 3 by momentum (contributions * members)
  const sorted = [...FUND_IDEAS].sort((a, b) =>
    (b.contributions.length * b.members.length) - (a.contributions.length * a.members.length)
  ).slice(0, 3);

  container.innerHTML = sorted.map(idea => {
    const founder = getUser(idea.founderId);
    const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
    const stageColor = getFundStageColor(idea.stage);
    const equityLeft = Math.max(0, 100 - pct);
    const openRoles = idea.needs.map(n => RESOURCE_RATES[n]?.label || n);

    return `
    <div class="home-idea-card" style="--card-accent:${stageColor}">
      <div class="home-idea-card__glow" style="background:${stageColor}"></div>
      <div class="home-idea-card__top">
        <span class="home-idea-card__emoji">${idea.emoji}</span>
        <span class="home-idea-card__stage" style="background:${stageColor}22;color:${stageColor}">${getFundStageLabel(idea.stage)}</span>
      </div>
      <h3 class="home-idea-card__name">${idea.name}</h3>
      <p class="home-idea-card__desc">${idea.desc}</p>

      <div class="home-idea-card__needs">
        ${openRoles.slice(0,2).map(r => `<span class="home-idea-need-tag">${r}</span>`).join('')}
        ${openRoles.length > 2 ? `<span class="home-idea-need-tag">+${openRoles.length-2}</span>` : ''}
      </div>

      <div class="home-idea-card__metrics">
        <div class="home-idea-metric">
          <strong style="color:${stageColor}">${equityLeft}%</strong>
          <span>Equity còn</span>
        </div>
        <div class="home-idea-metric">
          <strong>${idea.members.length}</strong>
          <span>Thành viên</span>
        </div>
        <div class="home-idea-metric">
          <strong>${idea.contributions.length}</strong>
          <span>Contributions</span>
        </div>
      </div>

      <div class="home-idea-card__progress">
        <div class="home-idea-progress-bar">
          <div class="home-idea-progress-fill" style="width:${pct}%;background:${stageColor}"></div>
        </div>
        <span style="color:${stageColor}">${pct}%</span>
      </div>

      <div class="home-idea-card__team">
        ${idea.members.slice(0,4).map(uid => {
          const u = getUser(uid);
          return u ? `<img class="home-idea-avatar" src="${avatarUrl(u.seed)}" title="${u.name}" />` : '';
        }).join('')}
        ${founder ? `<span class="home-idea-founder">by ${founder.name}</span>` : ''}
      </div>

      <button class="home-idea-join-btn" onclick="openDevJoinModal(${idea.id})" style="--btn-color:${stageColor}">
        🚀 Xem & Tham gia
      </button>
    </div>`;
  }).join('');
}

function renderHomeFundingRounds() {
  const container = $('#home-rounds-list');
  if (!container) return;
  const sorted = [...FUND_IDEAS].sort((a, b) => {
    const aP = a.raisedPoints / a.goalPoints;
    const bP = b.raisedPoints / b.goalPoints;
    return bP - aP; // most funded first (most active)
  });

  container.innerHTML = sorted.map(idea => {
    const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
    const stageColor = getFundStageColor(idea.stage);
    const goalDisplay = (idea.goalPoints / 1000).toFixed(0) + 'K';
    const raisedDisplay = (idea.raisedPoints / 1000).toFixed(1) + 'K';
    const timeLeft = Math.floor(Math.random() * 20) + 5; // simulated days left
    const isHot = idea.contributions.length >= 3;

    return `
    <div class="home-round-item" onclick="switchView('fund')">
      <div class="home-round-item__left">
        <div class="home-round-emoji">${idea.emoji}</div>
        <div class="home-round-info">
          <div class="home-round-name">
            ${idea.name}
            ${isHot ? '<span class="home-round-hot">🔥 HOT</span>' : ''}
          </div>
          <div class="home-round-meta" style="color:${stageColor}">${getFundStageLabel(idea.stage)} · ${timeLeft} ngày còn lại</div>
        </div>
      </div>

      <div class="home-round-progress-wrap">
        <div class="home-round-nums">
          <span style="color:${stageColor};font-weight:700">${raisedDisplay} pts</span>
          <span style="color:var(--text-tertiary)">/ ${goalDisplay} pts</span>
        </div>
        <div class="home-round-bar">
          <div class="home-round-bar__fill" style="width:${pct}%;background:linear-gradient(90deg,${stageColor},${stageColor}cc)"></div>
        </div>
        <div class="home-round-pct" style="color:${stageColor}">${pct}%</div>
      </div>

      <div class="home-round-team">
        ${idea.members.slice(0,3).map(uid => {
          const u = getUser(uid);
          return u ? `<img class="home-round-avatar" src="${avatarUrl(u.seed)}" title="${u.name}" />` : '';
        }).join('')}
        ${idea.members.length > 3 ? `<span class="home-round-more">+${idea.members.length-3}</span>` : ''}
      </div>

      <button class="btn btn--primary btn--sm" onclick="event.stopPropagation();openContributeModal(${idea.id})" style="flex-shrink:0">
        💰 Góp vốn
      </button>
    </div>`;
  }).join('');
}

function renderHomeTeamSpotlight() {
  const container = $('#home-team-scroll');
  if (!container) return;
  // Top users by trust score + contributions
  const topUsers = [...USERS].sort((a, b) => b.trustScore - a.trustScore).slice(0, 8);

  container.innerHTML = topUsers.map(user => {
    const kudos = getKudosCount(user.id);
    const bond = getTeamBondScore(user.id);
    const days = getDaysTogether(user.id);
    const ideaCount = FUND_IDEAS.filter(i => i.members.includes(user.id) || i.founderId === user.id).length;

    return `
    <div class="home-spotlight-card" onclick="openCofounderModal(${user.id})">
      <div class="home-spotlight-card__avatar-wrap">
        <img class="home-spotlight-avatar" src="${avatarUrl(user.seed)}" />
        ${user.online ? '<span class="home-spotlight-online"></span>' : ''}
      </div>
      <div class="home-spotlight-name">${user.name.split(' ').pop()}</div>
      <div class="home-spotlight-role">${user.role.split(' ')[0]}</div>
      <div class="home-spotlight-trust" style="color:${user.trustScore >= 80 ? '#10b981' : user.trustScore >= 60 ? '#f59e0b' : '#64748b'}">
        🛡️ ${user.trustScore}
      </div>
      <div class="home-spotlight-meta">
        <span>💌 ${kudos}</span>
        <span>🔗 ${bond}</span>
        <span>⚡ ${ideaCount}</span>
      </div>
      <button class="home-spotlight-btn" onclick="event.stopPropagation();openKudosModal(${user.id})">
        💌 Kudos
      </button>
    </div>`;
  }).join('');
}

// ============ CHAT ============
function openChat(chat, user) {
  $$('.chat-item').forEach(c => c.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const header = $('#chat-header');
  header.innerHTML = `
    <div class="messages-chat__user">
      <div class="avatar avatar--sm ${user.online ? 'online' : ''}"><img src="${avatarUrl(user.seed)}" alt="" /></div>
      <div>
        <h4>${user.name}</h4>
        <span class="status-text">${user.online ? 'Đang hoạt động' : 'Offline'}</span>
      </div>
    </div>
    <div class="messages-chat__actions">
      <button class="icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
      <button class="icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
    </div>
  `;
  renderChatMessages(chat);
}

// ============ STORY VIEWER ============
let currentStoryIdx = 0;
function openStory(story) {
  currentStoryIdx = STORIES.indexOf(story);
  showStory();
  $('#story-modal').classList.remove('hidden');
}

function showStory() {
  const story = STORIES[currentStoryIdx];
  const user = getUser(story.userId);

  // Progress
  const progress = $('#story-progress');
  progress.innerHTML = STORIES.map((_, i) => `
    <div class="story-viewer__progress-bar ${i === currentStoryIdx ? 'story-viewer__progress-bar--active' : ''}">
      <div class="story-viewer__progress-fill"></div>
    </div>
  `).join('');

  // User
  $('#story-viewer-user').innerHTML = `
    <div class="avatar avatar--sm"><img src="${avatarUrl(user.seed)}" alt="" /></div>
    <div>
      <strong>${user.name}</strong>
      <span>2h</span>
    </div>
  `;

  // Content
  const content = $('#story-viewer-content');
  content.style.background = story.gradient;
  content.innerHTML = `<div style="font-size:2rem">${story.text}</div>`;
}

// ============ POST ACTIONS ============
function handlePostAction(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const postId = btn.dataset.postId;

  if (action === 'like') {
    btn.classList.toggle('liked');
    btn.classList.add('like-animate');
    setTimeout(() => btn.classList.remove('like-animate'), 350);

    const post = POSTS.find(p => p.id == postId);
    if (post) {
      if (btn.classList.contains('liked')) {
        post.likes++;
      } else {
        post.likes--;
      }
      // Update likes display
      const postEl = btn.closest('.post');
      const likesSpan = postEl.querySelector('.post__likes-display span');
      if (likesSpan) likesSpan.textContent = `${post.likes} lượt thích`;
    }
  }

  if (action === 'comment') {
    const commentsEl = document.querySelector(`[data-comments-for="${postId}"]`);
    if (commentsEl) {
      commentsEl.classList.toggle('hidden');
      if (!commentsEl.classList.contains('hidden')) {
        const input = commentsEl.querySelector('.post__comment-input');
        if (input) input.focus();
      }
    }
  }

  if (action === 'share') {
    showToast('Đã sao chép liên kết bài viết! 📋', 'success');
  }
}

// ============ COMMENT SUBMIT ============
function handleCommentSubmit(e) {
  if (e.key !== 'Enter') return;
  const input = e.target;
  if (!input.classList.contains('post__comment-input')) return;
  if (!input.value.trim()) return;

  const postId = input.dataset.postId;
  const commentsEl = document.querySelector(`[data-comments-for="${postId}"]`);

  const commentDiv = document.createElement('div');
  commentDiv.className = 'post__comment';
  commentDiv.style.animation = 'msg-in 0.2s ease';
  commentDiv.innerHTML = `
    <div class="avatar avatar--xs"><img src="${avatarUrl('owner')}" alt="" /></div>
    <div class="post__comment-body"><strong>David Cuong</strong> ${input.value}</div>
  `;

  const inputWrap = commentsEl.querySelector('.post__comment-input-wrap');
  commentsEl.insertBefore(commentDiv, inputWrap);
  input.value = '';
}

// ============ TOAST ============
function showToast(message, type = 'success') {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : '❌'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============ CREATE POST ============
function submitPost() {
  const textarea = $('#post-textarea');
  const content = textarea.value.trim();
  if (!content) return;

  const newPost = {
    id: POSTS.length + 1,
    userId: 0,
    content: content,
    image: null,
    likes: 0, comments: 0, shares: 0,
    reactions: [],
    time: 'Vừa xong',
    commentList: []
  };

  // Create a temporary user-like entry for "owner"
  const ownerUser = { id: 0, name: 'David Cuong', seed: 'owner', online: true };
  if (!USERS.find(u => u.id === 0)) USERS.unshift(ownerUser);

  POSTS.unshift(newPost);
  renderPosts($('#feed-container'), POSTS);

  textarea.value = '';
  $('#post-modal').classList.add('hidden');
  showToast('Đăng bài thành công! 🎉');
}

// ============ SEND MESSAGE ============
function sendMessage() {
  const input = $('#chat-input');
  const text = input.value.trim();
  if (!text) return;

  const body = $('#chat-body');
  const msg = document.createElement('div');
  msg.className = 'msg msg--sent';
  msg.innerHTML = `<div>${text}</div><div class="msg__time">${new Date().toLocaleTimeString('vi', { hour: '2-digit', minute: '2-digit' })}</div>`;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
  input.value = '';

  // Simulate reply
  setTimeout(() => {
    const replies = [
      'Oke anh/chị! 👍',
      'Được luôn! 😊',
      'Hay quá! Để em xem thêm nhé',
      'Cảm ơn nhiều! 🙏',
      'Haha, đúng rồi! 😂',
      'Tuyệt vời! 🔥',
      'Ok em, anh ghi nhận',
    ];
    const reply = document.createElement('div');
    reply.className = 'msg msg--received';
    reply.innerHTML = `<div>${replies[Math.floor(Math.random() * replies.length)]}</div><div class="msg__time">${new Date().toLocaleTimeString('vi', { hour: '2-digit', minute: '2-digit' })}</div>`;
    body.appendChild(reply);
    body.scrollTop = body.scrollHeight;
  }, 1000 + Math.random() * 1500);
}

// ============ THEME TOGGLE ============
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isDark = !document.body.classList.contains('light-theme');
  const settingsToggle = $('#settings-dark-toggle');
  if (settingsToggle) settingsToggle.checked = isDark;
}

// ============ 🎬 SHORTS / PITCH FEED ENGINE ============

const SHORTS_DATA = [
  {
    type: 'hook', id: 'h1',
    emoji: '🔥', name: 'Tôi đốt 1 TỶ rồi học ra điều này',
    tagline: '— Cyrus Dinh, founder DevTrust',
    desc: 'Năm 2022 tôi chi 1 tỷ vào Facebook Ads. Kết quả? Gần như 0. Bài học: người Việt không mua vì quảng cáo. Họ mua vì TIN TƯỞNG người bán. Từ đó tôi build DevTrust.',
    tags: ['#BàiHọcMáu', '#StartupVN', '#MarketingKhôngAds'],
    stage: '💸 Thất bại → Bài học', stageColor: '#ef4444',
    raised: null, likes: 1243,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at top left, #450a0a 0%, #1c0505 40%, #0f0f0f 100%)',
    accentColor: '#ef4444',
    seeking: ['AI Co-founder', 'Người đã từng thất bại'],
    cta: { label: '🤝 Nghe thêm câu chuyện', action: () => switchView('match') },
    cta2: { label: '💡 Tham gia build', action: () => switchView('fund') },
  },
  {
    type: 'hook', id: 'h2',
    emoji: '🇯🇵', name: 'Nhật Bản thiếu 600,000 IT engineers',
    tagline: 'Và gần như không ai ở VN biết điều này',
    desc: 'Lương kỹ sư IT tại Nhật: 150–300 triệu/năm. Yêu cầu: biết tiếng Nhật N3 + có kỹ năng tech cơ bản. Đây là cơ hội lớn nhất cho dev Việt trong 5 năm tới.',
    tags: ['#CơHội', '#NhậtBản', '#DevViệt', '#XKLĐ'],
    stage: '🚨 Cơ hội có hạn', stageColor: '#f59e0b',
    raised: 62, goal: 100, unit: '%',
    members: 8, likes: 2891,
    founder: { name: 'Cường Đinh', seed: 'cuong', trust: 88 },
    gradient: 'radial-gradient(ellipse at bottom right, #431407 0%, #1c0a03 40%, #030712 100%)',
    accentColor: '#f97316',
    cta: { label: '🎯 Tôi muốn biết thêm', action: () => window.open('https://social-network-tau-ten.vercel.app/japan.html', '_blank') },
    cta2: { label: '💰 Đầu tư vào cơ hội này', action: () => openContributeModal(1) },
  },
  {
    type: 'hook', id: 'h3',
    emoji: '⚡', name: 'AI đang xoá sổ 3 triệu việc làm VN',
    tagline: 'Bạn đang ở phía nào của lịch sử?',
    desc: 'Kế toán. Phiên dịch. Lập trình viên junior. Nhân viên ngân hàng. AI sẽ thay tất cả trong 2–3 năm. Người thắng là người BUILD AI — không phải dùng AI.',
    tags: ['#AIRevolution', '#TươngLai', '#BuildOrDie'],
    stage: '🌊 Sóng thần đang đến', stageColor: '#6366f1',
    raised: null, likes: 4102,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f0a2e 50%, #000000 100%)',
    accentColor: '#818cf8',
    seeking: ['Người muốn build AI', 'Dev dám đặt cược vào tương lai'],
    cta: { label: '🚀 Tôi muốn ở phía thắng', action: () => switchView('match') },
    cta2: { label: '🧠 Tìm hiểu Basao AI', action: () => window.open('https://github.com/manhcuongk55/budai', '_blank') },
  },
  {
    type: 'founder', id: 'f1',
    emoji: '👊', name: 'Bạn có kỹ năng. Tôi có network.',
    tagline: '— Cường Đinh · 100+ học viên đang chờ',
    desc: 'Tôi có 100+ người muốn học tiếng Nhật để đi XKLĐ. Tôi cần người build platform. Bạn code giỏi mà chưa có idea? Đây là deal win-win hiếm gặp.',
    tags: ['#CoDeal', '#WinWin', '#XKLĐ', '#CoFounder'],
    stage: '🤝 Đang tìm đối tác', stageColor: '#22c55e',
    raised: null, likes: 567,
    founder: { name: 'Cường Đinh', seed: 'cuong', trust: 88 },
    gradient: 'radial-gradient(ellipse at top right, #052e16 0%, #064e3b 30%, #0f172a 100%)',
    accentColor: '#22c55e',
    seeking: ['Dev P2P', 'Mobile developer', 'UX designer'],
    cta: { label: '🤝 Gặp Cường ngay', action: () => switchView('match') },
    cta2: { label: '💰 Góp vốn vào deal', action: () => openContributeModal(1) },
  },
  {
    type: 'hook', id: 'h4',
    emoji: '💎', name: 'Bạn không cần 1 tỷ để khởi nghiệp',
    tagline: 'Bạn cần đúng 3 người',
    desc: 'DevTrust không là một app. Nó là cách để tìm người tin tưởng nhau đủ để build cùng. Mỗi đóng góp — dù 1 giờ code hay 500k — được ghi lại minh bạch và quy đổi thành cổ phần thật.',
    tags: ['#BootstrapVN', '#TrustFirst', '#Equity', '#ZeroBS'],
    stage: '🛡️ DevTrust · Live now', stageColor: '#22c55e',
    raised: 62, goal: 100, unit: '%',
    members: 12, likes: 893,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at bottom left, #0c2d22 0%, #063018 40%, #000000 100%)',
    accentColor: '#4ade80',
    cta: { label: '💡 Tôi muốn thử', action: () => switchView('fund') },
    cta2: { label: '🤝 Tìm đồng đội', action: () => switchView('match') },
  },
  {
    type: 'founder', id: 'f2',
    emoji: '🌸', name: 'Từ kỹ sư Fujitsu → dạy người Việt đi Nhật',
    tagline: '— Hương Phạm · N1 · 5 năm tại Nhật',
    desc: '5 năm làm việc tại Nhật, tôi thấy hàng trăm bạn VN thất bại vì học sai cách. Giờ tôi dạy đúng cách — não nhớ chứ không phải app nhớ. Kết quả: 94% học viên đạt N3 sau 6 tháng.',
    tags: ['#ResultsNotVibes', '#N1Teacher', '#ITNhật', '#94%'],
    stage: '✅ 94% học viên thành công', stageColor: '#f472b6',
    raised: null, likes: 1034,
    founder: { name: 'Hương Phạm', seed: 'huong', trust: 88 },
    gradient: 'radial-gradient(ellipse at top, #4a044e 0%, #2d0839 50%, #0f0523 100%)',
    accentColor: '#f472b6',
    seeking: ['Học viên IT nghiêm túc', 'Co-founder có passion về EdTech'],
    cta: { label: '📚 Học thử 1 buổi FREE', action: () => window.open('https://social-network-tau-ten.vercel.app/japan.html', '_blank') },
    cta2: { label: '🤝 Kết nối cùng Hương', action: () => switchView('match') },
  },
  {
    type: 'hook', id: 'h5',
    emoji: '🎯', name: 'Nếu bạn có idea mà không có team...',
    tagline: 'Đây là platform bạn đang cần',
    desc: 'Đăng pitch của bạn. Để cộng đồng vote, góp sức, connect. Không cần pitch đến VC. Không cần gọi vốn triệu đô. Chỉ cần đủ người tin tưởng đủ để bắt đầu.',
    tags: ['#JustStart', '#CommunityFund', '#NoVC', '#TrustEconomy'],
    stage: '🚀 Start ngay hôm nay', stageColor: '#06b6d4',
    raised: null, likes: 742,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at center top, #0c4a6e 0%, #075985 30%, #000000 100%)',
    accentColor: '#38bdf8',
    seeking: ['Founder có ý tưởng', 'Bất kỳ ai đủ dũng cảm để start'],
    cta: { label: '✨ Đăng idea của tôi', action: () => { switchView('fund'); setTimeout(openIdeaModal, 300); } },
    cta2: { label: '🔍 Xem idea đang hot', action: () => switchView('fund') },
  },

  // ---- MOONSHOT / VISIONARY CARDS ----
  {
    type: 'moonshot', id: 'm1',
    emoji: '🌍', name: '1 tỷ người đang học sai cách',
    tagline: 'Elon build xe điện. Bạn build tương lai giáo dục.',
    desc: 'Hệ thống giáo dục toàn cầu được thiết kế cho thế kỷ 19. 1 tỷ học sinh đang học thuộc lòng thứ AI biết hết rồi. Ai sẽ build hệ thống dạy con người cách TƯ DUY — không phải cách NHỚ?',
    tags: ['#MoonshotEDU', '#ThayĐổiGiáoDục', '#1TỷNgười', '#AIxGiáoDục'],
    stage: '🌟 Moonshot · Cần pioneer', stageColor: '#f59e0b',
    raised: null, likes: 5821,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at top left, #1c1917 0%, #292524 30%, #0c0a09 70%, #000000 100%)',
    accentColor: '#fbbf24',
    seeking: ['EdTech visionary', 'AI researcher', 'Người dám build từ đầu'],
    cta: { label: '🚀 Tôi muốn build điều này', action: () => { switchView('fund'); setTimeout(openIdeaModal, 300); } },
    cta2: { label: '🤝 Tìm đồng đội', action: () => switchView('match') },
  },
  {
    type: 'moonshot', id: 'm2',
    emoji: '☮️', name: 'Chiến tranh xảy ra vì người ta không hiểu nhau',
    tagline: 'Công nghệ có thể tạo ra hòa bình không?',
    desc: 'Elon build Starlink để kết nối thế giới. Zuckerberg build Facebook. Cả hai đều nghĩ connectivity = peace. Nhưng thiếu 1 thứ: TRUST. DevTrust đang build cái đó. Bạn muốn cùng xây không?',
    tags: ['#PeaceTech', '#TrustEconomy', '#GlobalConnect', '#HòaBình'],
    stage: '🌐 Tầm nhìn toàn cầu', stageColor: '#38bdf8',
    raised: null, likes: 8934,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at center, #0f172a 0%, #1e3a5f 40%, #0c2461 70%, #000510 100%)',
    accentColor: '#38bdf8',
    seeking: ['Peace-tech builder', 'Người có vision toàn cầu', 'Bất kỳ ai muốn đóng góp'],
    cta: { label: '🌍 Tôi tin vào điều này', action: () => switchView('match') },
    cta2: { label: '💡 Tìm hiểu DevTrust', action: () => switchView('fund') },
  },
  {
    type: 'moonshot', id: 'm3',
    emoji: '⚡', name: 'ASEAN là Silicon Valley tiếp theo',
    tagline: '700 triệu người · Tầng lớp trẻ · Khát vọng khổng lồ',
    desc: 'Elon chọn Mỹ. Jack Ma chọn Trung Quốc. VN + ASEAN đang ở điểm tương tự năm 1995 của họ. Dev Việt giỏi không thua ai — chỉ thiếu platform để kết nối và nguồn vốn để bắt đầu. DevTrust là câu trả lời.',
    tags: ['#ASEANRises', '#VNTech', '#NextSiliconValley', '#700TriệuNgười'],
    stage: '🔥 Đang xây nền móng', stageColor: '#f97316',
    raised: null, likes: 12400,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at bottom, #431407 0%, #7c2d12 30%, #1c0a03 70%, #000000 100%)',
    accentColor: '#fb923c',
    seeking: ['Regional founder', 'Dev từ ASEAN', 'Ai tin VN có thể thay đổi thế giới'],
    cta: { label: '🇻🇳 Tôi ở đây, sẵn sàng', action: () => switchView('match') },
    cta2: { label: '💰 Cùng build nền móng', action: () => switchView('fund') },
  },
  {
    type: 'moonshot', id: 'm4',
    emoji: '🤝', name: 'Giàu một mình không phải thắng',
    tagline: 'Thắng thật sự là khi đồng đội cùng thắng',
    desc: 'Bezos giàu nhất thế giới nhưng Amazon có 1.5 triệu nhân viên cùng hưởng lợi. Mô hình DevTrust: góp 1 giờ code → nhận equity minh bạch → khi dự án thành công, tất cả cùng thắng. Đây là capitalism 2.0.',
    tags: ['#TrustEconomy', '#SharedWin', '#Equity4All', '#Capitalism20'],
    stage: '💎 Mô hình mới · Đang build', stageColor: '#8b5cf6',
    raised: 62, goal: 100, unit: '%',
    members: 12, likes: 3241,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at top right, #1e1b4b 0%, #312e81 30%, #0f0a2e 70%, #000000 100%)',
    accentColor: '#a78bfa',
    cta: { label: '💡 Tham gia mô hình này', action: () => switchView('fund') },
    cta2: { label: '🤝 Tìm đồng đội tin tưởng', action: () => switchView('match') },
  },
  {
    type: 'moonshot', id: 'm5',
    emoji: '🧬', name: 'AI nhân văn hơn — không phải AI thay thế người',
    tagline: 'Đây là lý do Cyrus build Basao',
    desc: 'OpenAI, Google, Meta đang race to the top. Ai kiểm soát AI mạnh nhất? DevTrust tin rằng AI tốt nhất là AI được xây bởi cộng đồng, cho cộng đồng, với transparency tuyệt đối. Bạn có muốn cùng xây không?',
    tags: ['#HumaneAI', '#OpenSource', '#AIforAll', '#EthicalTech'],
    stage: '🛡️ Basao AI · Đang xây', stageColor: '#22c55e',
    raised: 78, goal: 100, unit: '%',
    members: 5, likes: 6103,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at center bottom, #022c22 0%, #064e3b 40%, #0f172a 80%, #000000 100%)',
    accentColor: '#34d399',
    cta: { label: '🧠 Cùng build AI nhân văn', action: () => window.open('https://github.com/manhcuongk55/budai', '_blank') },
    cta2: { label: '💰 Góp nguồn lực', action: () => switchView('fund') },
  },

  // ================================================================
  // 🚀 25+ DIVERSE STARTUP IDEAS — IDEA MACHINE
  // ================================================================

  // --- AgriTech ---
  {
    type: 'idea', id: 'i1',
    emoji: '🌾', name: 'Nông dân VN bán trực tiếp ra thế giới',
    tagline: '30% nông sản VN bị bỏ thối mỗi năm vì middlemen',
    desc: 'Nông dân Đà Lạt trồng rau sạch xuất khẩu được 3$/kg nhưng chỉ nhận 0.3$. Middleman ăn 90%. Chúng ta build P2P marketplace nối nông dân VN với nhà hàng Nhật, Sing, Hàn. Blockchain xác nhận nguồn gốc.',
    tags: ['#AgriTech', '#P2P', '#Export', '#Blockchain', '#VNFarm'],
    stage: '💡 Cần co-founder', stageColor: '#84cc16',
    raised: null, likes: 2341,
    founder: { name: 'Minh Farmer', seed: 'minh', trust: 74 },
    gradient: 'radial-gradient(ellipse at top, #052e16 0%, #14532d 40%, #000000 100%)',
    accentColor: '#86efac',
    seeking: ['Dev marketplace', 'Blockchain engineer', 'Export/logistics expert'],
    cta: { label: '🌱 Join AgriTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i1")) },
    cta2: { label: '💰 Góp vốn', action: () => switchView('fund') },
  },
  // --- HealthTech ---
  {
    type: 'idea', id: 'i2',
    emoji: '🏥', name: 'Khám bệnh từ xa cho 20 triệu người vùng cao',
    tagline: '20 triệu người VN không có bác sĩ gần nhà',
    desc: 'Tây Nguyên, Tây Bắc — người ốm đi xe máy 4 tiếng mới đến được bệnh viện. Chúng ta build app teleconsult + AI chuẩn đoán sơ bộ. Bác sĩ Hà Nội/SG khám từ xa. WHO đã chứng minh mô hình này hoạt động ở Rwanda.',
    tags: ['#HealthTech', '#Telemedicine', '#AI', '#SocialImpact'],
    stage: '🛠️ MVP cần dev', stageColor: '#f59e0b',
    raised: 35, likes: 4120,
    founder: { name: 'Linh BS', seed: 'linh', trust: 82 },
    gradient: 'radial-gradient(ellipse at center, #0c4a6e 0%, #1e3a5f 50%, #000000 100%)',
    accentColor: '#7dd3fc',
    seeking: ['React Native dev', 'AI/ML engineer', 'Bác sĩ co-founder'],
    cta: { label: '🩺 Join HealthTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i2")) },
    cta2: { label: '💰 Góp vốn', action: () => switchView('fund') },
  },
  // --- FinTech ---
  {
    type: 'idea', id: 'i3',
    emoji: '💳', name: 'Tín dụng cho người không có lịch sử vay',
    tagline: '60% người Việt bị từ chối vay vì "không đủ điều kiện"',
    desc: 'Ngân hàng từ chối anh bán bún vì không có sao kê. Nhưng anh bán 300 tô/ngày, 7 năm không nghỉ. AI của chúng ta tính trust score từ hành vi thực tế — dữ liệu momo, grab, điện thoại. Đã pilot với 500 người.',
    tags: ['#FinTech', '#CreditScoring', '#AI', '#InclusiveFinance'],
    stage: '📈 Đang scale', stageColor: '#22c55e',
    raised: 71, likes: 5890,
    founder: { name: 'Phong FinTech', seed: 'phong', trust: 85 },
    gradient: 'radial-gradient(ellipse at bottom right, #1e3a5f 0%, #1e40af 40%, #000000 100%)',
    accentColor: '#60a5fa',
    seeking: ['ML engineer', 'Risk/Credit expert', 'Banking partnership BD'],
    cta: { label: '💳 Join FinTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i3")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- CleanTech ---
  {
    type: 'idea', id: 'i4',
    emoji: '♻️', name: 'Biến rác thải nhựa Hà Nội thành tiền',
    tagline: 'Hà Nội thải 800 tấn nhựa/ngày. 0% được tái chế đúng cách.',
    desc: 'Người thu gom phế liệu — nguồn lực sẵn có, am hiểu thị trường, chỉ thiếu app kết nối. Chúng ta build 2-sided marketplace: doanh nghiệp trả tiền cho người thu gom giao đúng loại rác. Token hóa credit carbon.',
    tags: ['#CleanTech', '#CircularEconomy', '#Web3', '#HaNoi', '#CarbonCredit'],
    stage: '💡 Tìm co-founder', stageColor: '#10b981',
    raised: null, likes: 3201,
    founder: { name: 'Xanh Startup', seed: 'xanh', trust: 71 },
    gradient: 'radial-gradient(ellipse at top left, #022c22 0%, #065f46 40%, #000000 100%)',
    accentColor: '#34d399',
    seeking: ['Full-stack dev', 'Logistics expert', 'ESG investor connection'],
    cta: { label: '♻️ Join CleanTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i4")) },
    cta2: { label: '🌍 Góp vốn xanh', action: () => switchView('fund') },
  },
  // --- FoodTech ---
  {
    type: 'idea', id: 'i5',
    emoji: '🍜', name: 'Phở thủ công VN ra thị trường Mỹ',
    tagline: 'Pho đang trending ở Mỹ — nhưng người nấu ngon là bà nội bạn, không phải corporation',
    desc: 'Grab Food VN đã chứng minh giao đồ ăn được. Chúng ta làm version Mỹ: kết nối đầu bếp Việt kiều nấu phở tươi, giao tận nhà trong 45 phút. Flash-frozen = giữ được vị thật. Thị trường $3B.',
    tags: ['#FoodTech', '#VietKieu', '#USA', '#Pho', '#CloudKitchen'],
    stage: '💡 Idea Stage', stageColor: '#f97316',
    raised: null, likes: 7823,
    founder: { name: 'Bếp Việt', seed: 'bep', trust: 68 },
    gradient: 'radial-gradient(ellipse at center, #431407 0%, #7c2d12 40%, #000000 100%)',
    accentColor: '#fb923c',
    seeking: ['Operations co-founder (US-based)', 'Food tech engineer', 'Marketing viral'],
    cta: { label: '🍜 Join FoodTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i5")) },
    cta2: { label: '💰 Đầu tư vào thị trường Mỹ', action: () => switchView('fund') },
  },
  // --- LogiTech ---
  {
    type: 'idea', id: 'i6',
    emoji: '🚚', name: 'Uber cho xe tải — gom hàng ngược chiều',
    tagline: 'Xe tải VN chạy chiều về 80% là… rỗng',
    desc: '10 triệu chuyến xe tải/năm ở VN chạy về rỗng, đốt xăng vô ích. Chúng ta kết nối shipper cần gửi hàng với xe đang rỗng chiều về. Giá rẻ hơn 40%, tài xế có thêm thu nhập. Giaxe.vn đã làm được 1 phần.',
    tags: ['#LogiTech', '#UberForTruck', '#GreenLogistics', '#VN'],
    stage: '🛠️ MVP', stageColor: '#f59e0b',
    raised: 28, likes: 4567,
    founder: { name: 'Tuấn Logi', seed: 'tuan', trust: 79 },
    gradient: 'radial-gradient(ellipse at bottom, #292524 0%, #1c1917 50%, #000000 100%)',
    accentColor: '#fbbf24',
    seeking: ['Mobile dev', 'Operations', 'Fleet partnership BD'],
    cta: { label: '🚚 Join LogiTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i6")) },
    cta2: { label: '💰 Góp vốn', action: () => switchView('fund') },
  },
  // --- EduTech ---
  {
    type: 'idea', id: 'i7',
    emoji: '🧒', name: 'Dạy con tư duy thuật toán qua trò chơi dân gian',
    tagline: 'Ô ăn quan, cờ tướng, kéo co — thực ra là dạy lập trình',
    desc: 'Phần Lan dạy coding qua trò chơi — học sinh top thế giới. Tại sao VN không dùng trò chơi dân gian vốn có? Ô ăn quan = thuật toán lặp. Kéo co = distributed systems. Chúng ta build game EdTech dựa trên bản sắc VN.',
    tags: ['#EdTech', '#GameBased', '#VNCulture', '#K12', '#Coding'],
    stage: '💡 Cần game dev', stageColor: '#8b5cf6',
    raised: null, likes: 9123,
    founder: { name: 'Giáo Viên Ngọc', seed: 'ngoc', trust: 76 },
    gradient: 'radial-gradient(ellipse at top, #1e1b4b 0%, #312e81 40%, #000000 100%)',
    accentColor: '#a78bfa',
    seeking: ['Unity/Game dev', 'Curriculum designer', 'Child psychology expert'],
    cta: { label: '🧒 Join EdTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i7")) },
    cta2: { label: '💰 Đầu tư vào thế hệ tới', action: () => switchView('fund') },
  },
  // --- LegalTech ---
  {
    type: 'idea', id: 'i8',
    emoji: '⚖️', name: 'AI tư vấn pháp lý miễn phí cho người nghèo',
    tagline: '90% người VN không dám thuê luật sư vì sợ đắt',
    desc: 'Bị chủ nhà quỵt tiền cọc, không biết phải làm gì. Bị sếp chèn ép, không biết quyền lợi của mình. AI của chúng ta được train trên 500,000 vụ án VN — tư vấn cơ bản MIỄN PHÍ. Luật sư thật chỉ khi cần.',
    tags: ['#LegalTech', '#AILawyer', '#AccessToJustice', '#SocialImpact'],
    stage: '🛠️ Đang train AI', stageColor: '#ec4899',
    raised: 45, likes: 6234,
    founder: { name: 'Luật Sư Hà', seed: 'ha', trust: 88 },
    gradient: 'radial-gradient(ellipse at center top, #4a044e 0%, #831843 40%, #000000 100%)',
    accentColor: '#f472b6',
    seeking: ['NLP/LLM engineer', 'Luật sư đồng sáng lập', 'React dev'],
    cta: { label: '⚖️ Join LegalTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i8")) },
    cta2: { label: '💰 Góp vốn', action: () => switchView('fund') },
  },
  // --- SportsTech ---
  {
    type: 'idea', id: 'i9',
    emoji: '⚽', name: 'Booking sân bóng online — giải quyết bài toán "sân đâu tối nay"',
    tagline: '30 triệu người VN chơi thể thao — 90% đặt sân qua điện thoại gọi tay',
    desc: 'Mỗi tối hàng triệu group chat "tối nay có sân chưa?". Chủ sân không fill được chỗ trống, người chơi không tìm được sân. Sân bóng, cầu lông, pickle ball, bơi lội — tất cả trong 1 app. Hiện tại Zalo làm trung gian.',
    tags: ['#SportsTech', '#Booking', '#VNSports', '#B2B2C'],
    stage: '💡 Tìm tech co-founder', stageColor: '#16a34a',
    raised: null, likes: 11204,
    founder: { name: 'Bóng Đá Tuấn', seed: 'bongda', trust: 72 },
    gradient: 'radial-gradient(ellipse at bottom left, #052e16 0%, #166534 40%, #000000 100%)',
    accentColor: '#4ade80',
    seeking: ['React Native dev', 'UI/UX designer', 'Sales để onboard sân bóng'],
    cta: { label: '⚽ Join SportsTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i9")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- TravelTech ---
  {
    type: 'idea', id: 'i10',
    emoji: '🏍️', name: 'Xe ôm bản địa đưa khách Tây khám phá VN thật',
    tagline: 'Khách Tây muốn trải nghiệm thật — không phải tour 5 sao đóng gói',
    desc: 'Airbnb Experience đã chứng minh: khách Tây trả 50-100$ cho 3 tiếng với người dân địa phương. Chúng ta kết nối rider xe máy địa phương có chút tiếng Anh với khách du lịch muốn khám phá như người bản địa.',
    tags: ['#TravelTech', '#LocalExperience', '#Motorbike', '#Tourism'],
    stage: '💡 Cần dev + business', stageColor: '#0ea5e9',
    raised: null, likes: 8901,
    founder: { name: 'Phượt Thủ Nam', seed: 'nam', trust: 70 },
    gradient: 'radial-gradient(ellipse at top right, #0c4a6e 0%, #0369a1 40%, #000000 100%)',
    accentColor: '#38bdf8',
    seeking: ['Mobile dev', 'Ops co-founder', 'English-speaking local rider network'],
    cta: { label: '🏍️ Join TravelTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i10")) },
    cta2: { label: '💰 Đầu tư vào du lịch', action: () => switchView('fund') },
  },
  // --- MentalHealth ---
  {
    type: 'idea', id: 'i11',
    emoji: '🧘', name: 'Sức khỏe tâm thần cho Gen Z VN — taboo cần phá vỡ',
    tagline: '40% sinh viên VN bị trầm cảm — chỉ 2% tìm kiếm giúp đỡ',
    desc: 'VN vẫn coi tâm lý là "yếu đuối". Nhưng WHO nói 2030 trầm cảm là bệnh tốn kém nhất thế giới. Chúng ta build anonymous peer support + AI therapy cộng với community — để nói chuyện được, không phán xét.',
    tags: ['#MentalHealth', '#GenZ', '#AI', '#Anonymous', '#WellBeing'],
    stage: '💡 Cần tâm lý trị liệu + dev', stageColor: '#a78bfa',
    raised: null, likes: 15023,
    founder: { name: 'Dr. Tâm', seed: 'tam', trust: 86 },
    gradient: 'radial-gradient(ellipse at center, #2e1065 0%, #1e1b4b 50%, #000000 100%)',
    accentColor: '#c4b5fd',
    seeking: ['Psychologist co-founder', 'Mobile dev', 'Community builder'],
    cta: { label: '🧘 Join MentalHealth team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i11")) },
    cta2: { label: '💰 Đầu tư vào sức khỏe', action: () => switchView('fund') },
  },
  // --- PropTech ---
  {
    type: 'idea', id: 'i12',
    emoji: '🏠', name: 'Thuê nhà không cọc — startup đánh vào nỗi đau lớn nhất',
    tagline: 'Cọc nhà 2-3 tháng tiền = 30-90 triệu bị "đóng băng" mỗi năm',
    desc: 'Sinh viên mới ra trường bị mắc kẹt vì phải đặt cọc 60-90 triệu. Chúng ta dùng Trust Score + bảo lãnh tập thể từ cộng đồng thay cho tiền cọc. Chủ nhà an tâm. Người thuê không phải gom tiền. Win-win.',
    tags: ['#PropTech', '#RentWithoutDeposit', '#TrustScore', '#YoungWorkers'],
    stage: '🛠️ MVP', stageColor: '#f59e0b',
    raised: 52, likes: 19234,
    founder: { name: 'Nhà Xinh', seed: 'nha', trust: 80 },
    gradient: 'radial-gradient(ellipse at bottom, #1c1917 0%, #292524 40%, #000000 100%)',
    accentColor: '#d97706',
    seeking: ['Fullstack dev', 'Insurance/Legal partner', 'Property network'],
    cta: { label: '🏠 Join PropTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i12")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- EnergyTech ---
  {
    type: 'idea', id: 'i13',
    emoji: '☀️', name: 'Solar cho nhà dân không cần bỏ tiền trước',
    tagline: 'Điện mặt trời có lãi — nhưng 95% người VN không đủ tiền đặt cọc',
    desc: 'Lắp solar = tiết kiệm 2-3 triệu/tháng. Nhưng chi phí ban đầu 70-100 triệu. Ai chịu bỏ vốn trước? Chúng ta: lắp free, thu tiền điện chia sẻ 5 năm rồi bàn giao. Mô hình ESCO đã proven ở Đức, Mỹ, Thái.',
    tags: ['#SolarTech', '#CleanEnergy', '#ESCO', '#ZeroCapex'],
    stage: '💡 Cần finance + dev', stageColor: '#eab308',
    raised: null, likes: 6782,
    founder: { name: 'Solar Việt', seed: 'solar', trust: 75 },
    gradient: 'radial-gradient(ellipse at top, #422006 0%, #78350f 40%, #000000 100%)',
    accentColor: '#fde047',
    seeking: ['Finance structuring', 'IoT engineer', 'Solar installer network'],
    cta: { label: '☀️ Join EnergyTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i13")) },
    cta2: { label: '💰 Đầu tư xanh', action: () => switchView('fund') },
  },
  // --- HR Tech ---
  {
    type: 'idea', id: 'i14',
    emoji: '🤖', name: 'AI tuyển dụng — chấm dứt CV đẹp nhưng làm không được',
    tagline: 'Doanh nghiệp VN mất 150 triệu mỗi lần tuyển sai người',
    desc: 'HR ngồi đọc 500 CV, chọn 10 người phỏng vấn, nhận 1 người làm 3 tháng rồi nghỉ. Vòng lặp này tốn 200 giờ + 150 triệu/lần. AI chúng ta đánh giá ứng viên qua project thật + trust network — không phải CV đẹp.',
    tags: ['#HRTech', '#AIRecruiting', '#TrustScore', '#TalentMatching'],
    stage: '🛠️ Beta', stageColor: '#0ea5e9',
    raised: 38, likes: 8234,
    founder: { name: 'HR Minh', seed: 'hrminh', trust: 83 },
    gradient: 'radial-gradient(ellipse at center, #1e3a5f 0%, #1d4ed8 40%, #000000 100%)',
    accentColor: '#93c5fd',
    seeking: ['ML engineer', 'Enterprise sales', 'UX researcher'],
    cta: { label: '🤖 Join HRTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i14")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- Social Commerce ---
  {
    type: 'idea', id: 'i15',
    emoji: '📱', name: 'TikTok Shop cho hàng thủ công mỹ nghệ VN',
    tagline: 'Đồ thêu Hà Giang, gốm Bát Tràng — nghệ nhân làm đẹp nhưng không biết bán online',
    desc: 'Nghệ nhân 60 tuổi thêu tay 20 ngày ra chiếc khăn giá trị thật 2 triệu — bán ở chợ được 200k. Chúng ta quay video TikTok ngắn về quá trình làm, bán trực tiếp cho người mua Mỹ/Âu/Nhật. Kết nối nghệ nhân với content creator.',
    tags: ['#SocialCommerce', '#Handicraft', '#TikTokShop', '#ExportVN'],
    stage: '💡 Cần creator + dev', stageColor: '#ec4899',
    raised: null, likes: 12450,
    founder: { name: 'Thủ Công Linh', seed: 'craft', trust: 73 },
    gradient: 'radial-gradient(ellipse at top left, #500724 0%, #9d174d 40%, #000000 100%)',
    accentColor: '#f9a8d4',
    seeking: ['Content creator/TikTok', 'E-commerce dev', 'Export logistics'],
    cta: { label: '📱 Join team ngay', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i15")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- EdFinTech ---
  {
    type: 'idea', id: 'i16',
    emoji: '🎓', name: 'Vay học phí trả dần bằng lương tương lai',
    tagline: 'Đại học tốt = lương cao. Nhưng không ai cho bạn vay để theo đuổi điều đó',
    desc: 'Income Share Agreement (ISA): học phí miễn phí trước, ra trường trả 10% lương 3 năm. Lambda School Mỹ đã làm, sinh viên tốt nghiệp lương $80K. Chúng ta làm cho dev learning ở VN với mức thu nhập thực tế.',
    tags: ['#EdFinTech', '#ISA', '#BootcampVN', '#Education', '#Loan'],
    stage: '💡 Cần financial model', stageColor: '#6366f1',
    raised: null, likes: 7892,
    founder: { name: 'Edu Finance', seed: 'edufin', trust: 78 },
    gradient: 'radial-gradient(ellipse at center right, #1e1b4b 0%, #4338ca 40%, #000000 100%)',
    accentColor: '#818cf8',
    seeking: ['Finance structuring expert', 'EdTech co-founder', 'Institutional investor connection'],
    cta: { label: '🎓 Join EdFinTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i16")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- WaterTech ---
  {
    type: 'idea', id: 'i17',
    emoji: '💧', name: 'Nước sạch cho 4 triệu người không có đường ống',
    tagline: '4 triệu người VN vẫn uống nước giếng ô nhiễm',
    desc: 'Arsenic trong nước giếng Đồng bằng Sông Cửu Long gây ung thư. 4 triệu người biết nhưng không có lựa chọn. Chúng ta lắp máy lọc cộng đồng IoT sensor tự báo cáo chất lượng nước + thanh toán theo lít. $5/tháng.',
    tags: ['#WaterTech', '#IoT', '#CleanTech', '#MekongDelta', '#SDG'],
    stage: '💡 Pilot 5 xã', stageColor: '#06b6d4',
    raised: null, likes: 5123,
    founder: { name: 'Water Hero', seed: 'water', trust: 77 },
    gradient: 'radial-gradient(ellipse at bottom, #0c4a6e 0%, #0e7490 40%, #000000 100%)',
    accentColor: '#22d3ee',
    seeking: ['IoT engineer', 'NGO partnership', 'Finance for hardware'],
    cta: { label: '💧 Join WaterTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i17")) },
    cta2: { label: '💰 Góp vốn tác động', action: () => switchView('fund') },
  },
  // --- Elderly Care ---
  {
    type: 'idea', id: 'i18',
    emoji: '👴', name: 'Người cao tuổi VN cô đơn — ai chăm sóc họ?',
    tagline: '2050: VN có 25 triệu người già. 70% không có con cái gần bên.',
    desc: 'Con cái đi Hà Nội, Sài Gòn làm việc. Bố mẹ ở quê một mình. Chúng ta build companion app: AI giữ conversation, thiết bị đeo theo dõi sức khỏe, kết nối với con cái qua app. Nhật đã có $50B industry này.',
    tags: ['#ElderCare', '#AgingVN', '#AICompanion', '#HealthTech'],
    stage: '💡 Research stage', stageColor: '#f59e0b',
    raised: null, likes: 8901,
    founder: { name: 'Care VN', seed: 'care', trust: 74 },
    gradient: 'radial-gradient(ellipse at top, #1c1917 0%, #44403c 40%, #000000 100%)',
    accentColor: '#d4a08a',
    seeking: ['Gerontology expert', 'Hardware/IoT engineer', 'AI conversation designer'],
    cta: { label: '👴 Join ElderCare team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i18")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- Creator Economy ---
  {
    type: 'idea', id: 'i19',
    emoji: '🎨', name: 'Kiếm $1000/tháng bằng kỹ năng của bạn — không cần công ty',
    tagline: '500 triệu freelancer toàn cầu. VN có bao nhiêu người đang bỏ lỡ?',
    desc: 'Dev VN lương 15tr/tháng có thể làm $3000/tháng trên Upwork — nếu biết cách. Vấn đề: không biết cách build portfolio, không biết pitch, không có trust. DevTrust = trust score + portfolio thật + community support.',
    tags: ['#CreatorEconomy', '#Freelance', '#GlobalTalent', '#RemoteWork'],
    stage: '🛡️ DevTrust Feature', stageColor: '#22c55e',
    raised: 62, likes: 21003,
    founder: { name: 'Cyrus Dinh', seed: 'owner', trust: 92 },
    gradient: 'radial-gradient(ellipse at center, #022c22 0%, #064e3b 40%, #000000 100%)',
    accentColor: '#4ade80',
    seeking: ['Dev muốn $3K/tháng', 'Designer muốn freelance toàn cầu', 'Marketer với skill thật'],
    cta: { label: '🚀 Tôi muốn $3K/tháng', action: () => switchView('match') },
    cta2: { label: '💡 Tìm project', action: () => switchView('fund') },
  },
  // --- GameFi ---
  {
    type: 'idea', id: 'i20',
    emoji: '🎮', name: 'Game VN ra thị trường toàn cầu — không cần publisher lớn',
    tagline: 'Among Us làm bởi 3 người. VN có hàng nghìn dev giỏi chờ cơ hội.',
    desc: 'Untitled Goose Game = 2 dev, $5M revenue. Among Us = 3 dev, $200M. VN có game dev giỏi nhưng thiếu: publisher connection, global marketing, legal setup. DevTrust kết nối game dev với publisher, investor, và player community.',
    tags: ['#GameDev', '#IndieGame', '#GlobalPublish', '#VNTech'],
    stage: '💡 Publishing platform idea', stageColor: '#8b5cf6',
    raised: null, likes: 14230,
    founder: { name: 'Gamer Dev', seed: 'game', trust: 76 },
    gradient: 'radial-gradient(ellipse at top right, #1e1b4b 0%, #7c3aed 40%, #000000 100%)',
    accentColor: '#a78bfa',
    seeking: ['Game dev', 'Publisher/Marketing', 'Community manager'],
    cta: { label: '🎮 Join GameDev team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i20")) },
    cta2: { label: '💰 Đầu tư vào game', action: () => switchView('fund') },
  },
  // --- PetTech ---
  {
    type: 'idea', id: 'i21',
    emoji: '🐾', name: 'Thú cưng VN — thị trường $500M chưa ai làm đúng',
    tagline: '5 triệu thú cưng VN, chủ nhân chi 3-5 triệu/tháng — nhưng không có service tốt',
    desc: 'Booking spa thú cưng qua điện thoại gọi. Tìm bác sĩ thú y qua Facebook. Mua thức ăn hàng xóm bán. Thị trường $500M đang được phục vụ bởi hàng nghìn cửa hàng nhỏ lẻ. Chúng ta tạo all-in-one pet platform.',
    tags: ['#PetTech', '#PetEconomy', '#VNMillennial', '#ServicePlatform'],
    stage: '💡 Tìm co-founder', stageColor: '#ec4899',
    raised: null, likes: 9876,
    founder: { name: 'PetLover Hoa', seed: 'pet', trust: 71 },
    gradient: 'radial-gradient(ellipse at bottom left, #500724 0%, #be185d 40%, #000000 100%)',
    accentColor: '#f472b6',
    seeking: ['Product manager', 'Mobile dev', 'Vet/Pet expert'],
    cta: { label: '🐾 Join PetTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i21")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- AgriFinTech ---
  {
    type: 'idea', id: 'i22',
    emoji: '🌱', name: 'Crowdfund một vụ mùa — nhà đầu tư nhận trái cây',
    tagline: 'Thay vì cổ phiếu ảo, bạn đầu tư vào vườn bưởi Bến Tre thật',
    desc: 'Nông dân cần 50 triệu để mua phân bón cho vụ mùa sầu riêng. Ngân hàng không cho vay. Bạn góp 1 triệu, 4 tháng sau nhận 20kg sầu riêng + 10% lợi nhuận. Token hóa quyền lợi trên blockchain. Đang pilot 3 tỉnh ĐBSCL.',
    tags: ['#AgriFinTech', '#CrowdFarm', '#Blockchain', '#ESCL', '#SầuRiêng'],
    stage: '🛠️ Pilot live', stageColor: '#16a34a',
    raised: 67, likes: 7234,
    founder: { name: 'Farm Token', seed: 'farmtoken', trust: 81 },
    gradient: 'radial-gradient(ellipse at top, #052e16 0%, #15803d 40%, #000000 100%)',
    accentColor: '#86efac',
    seeking: ['Blockchain dev', 'AgriExpert', 'DeFi community builder'],
    cta: { label: '🌱 Join AgriFinTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i22")) },
    cta2: { label: '💰 Đầu tư vào vụ mùa', action: () => switchView('fund') },
  },
  // --- VR/AR ---
  {
    type: 'idea', id: 'i23',
    emoji: '🥽', name: 'Virtual Try-On cho thời trang VN — mua online không bao giờ sai size',
    tagline: '35% đơn hàng thời trang online bị trả lại — đốt $2B logistics mỗi năm',
    desc: 'Mua áo online chụp ảnh mặc thử ảo trước. AI tính toán size chính xác từ 2 bức ảnh selfie. Giảm return 80%, tăng conversion 40%. Zara đã thử nghiệm, chưa ai làm cho brand VN. Thị trường thời trang VN $5B.',
    tags: ['#VR', '#FashionTech', '#AIFashion', '#TryOn', '#VNFashion'],
    stage: '💡 Prototype', stageColor: '#8b5cf6',
    raised: null, likes: 10234,
    founder: { name: 'Fashion AI', seed: 'fashion', trust: 74 },
    gradient: 'radial-gradient(ellipse at center, #1e1b4b 0%, #6d28d9 40%, #000000 100%)',
    accentColor: '#c4b5fd',
    seeking: ['AR/Computer Vision engineer', 'Fashion brand partnership', 'Mobile dev'],
    cta: { label: '🥽 Join FashionTech team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i23")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- Waste to Value ---
  {
    type: 'idea', id: 'i24',
    emoji: '🍄', name: 'Trồng nấm từ bã cà phê — circular economy thật sự',
    tagline: 'VN xuất 2 triệu tấn cà phê/năm. Bã cà phê bị đổ sông.',
    desc: 'Bã cà phê bị đổ đi 100% ở VN. Ở Anh/Đức, startup dùng bã cà phê trồng nấm oyster đặc biệt, bán $20/kg. Chúng ta collect bã từ chuỗi cafe, trồng nấm, bán cho nhà hàng high-end và export. Zero waste + cao lợi nhuận.',
    tags: ['#CircularEconomy', '#FoodTech', '#Mushroom', '#ZeroWaste', '#CafeDep'],
    stage: '💡 Pilot 3 cafe', stageColor: '#84cc16',
    raised: null, likes: 5678,
    founder: { name: 'Nấm Sáng', seed: 'mush', trust: 69 },
    gradient: 'radial-gradient(ellipse at bottom, #1a2e05 0%, #365314 40%, #000000 100%)',
    accentColor: '#a3e635',
    seeking: ['Operations/Supply chain', 'Agronomist', 'B2B sales người biết nhà hàng'],
    cta: { label: '🍄 Join team ngay', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i24")) },
    cta2: { label: '💰 Đầu tư', action: () => switchView('fund') },
  },
  // --- DAO for Communities ---
  {
    type: 'idea', id: 'i25',
    emoji: '🏘️', name: 'Hội tổ dân phố 4.0 — quản lý chung cư trên blockchain',
    tagline: 'Phí quản lý chung cư biến mất không rõ đi đâu — mỗi năm',
    desc: 'Quỹ bảo trì chung cư Hà Nội bị trưởng ban quản trị "nuốt". Không ai kiểm soát được. Chúng ta build DAO cho tổ dân phố: vote on-chain, quỹ smart contract không ai rút một mình được. Minh bạch 100%.',
    tags: ['#DAO', '#Web3', '#PropTech', '#Transparency', '#ChungCuVN'],
    stage: '💡 Whitepaper done', stageColor: '#06b6d4',
    raised: null, likes: 8934,
    founder: { name: 'DAO VN', seed: 'daovn', trust: 78 },
    gradient: 'radial-gradient(ellipse at top right, #0c4a6e 0%, #155e75 40%, #000000 100%)',
    accentColor: '#22d3ee',
    seeking: ['Solidity dev', 'Legal/compliance', 'Community organizer'],
    cta: { label: '🏘️ Join DAO team', action: () => openJoinSheet(SHORTS_DATA.findIndex(s=>s.id==="i25")) },
    cta2: { label: '💰 Góp vốn', action: () => switchView('fund') },
  },
];


// ---- Join Team Bottom Sheet ----
let _joinTargetIdx = null;
let _joinRole = null;
let _joinHours = null;

const JOIN_ROLE_EQUITY = {
  // Công nghệ
  dev: { base: 100 }, design: { base: 85 }, data: { base: 95 },
  devops: { base: 90 }, ai: { base: 110 }, security: { base: 95 },
  // Y tế
  doctor: { base: 130 }, nurse: { base: 80 }, psychologist: { base: 100 }, nutrition: { base: 70 },
  // Giáo dục
  teacher: { base: 75 }, researcher: { base: 90 }, student: { base: 50 }, trainer: { base: 70 },
  // Tài chính
  money: { base: 200 }, accountant: { base: 80 }, banker: { base: 85 }, insurance: { base: 75 },
  // Pháp lý
  lawyer: { base: 110 }, government: { base: 65 }, policy: { base: 80 },
  // Nông nghiệp & Môi trường
  farmer: { base: 70 }, agri_eng: { base: 85 }, environment: { base: 80 }, energy: { base: 90 },
  // Sáng tạo
  creator: { base: 75 }, artist: { base: 70 }, journalist: { base: 70 }, filmmaker: { base: 80 },
  // Kinh doanh
  marketing: { base: 65 }, sales: { base: 70 }, business: { base: 75 }, ops: { base: 70 }, mentor: { base: 120 },
  // Xây dựng
  architect: { base: 90 }, engineer: { base: 85 }, manufacturing: { base: 75 },
};

function openJoinSheet(idx) {
  _joinTargetIdx = idx;
  _joinRole = null;
  _joinHours = null;
  const item = SHORTS_DATA[idx];
  if (!item) return;

  const titleEl = $('#join-sheet-title');
  if (titleEl) titleEl.textContent = item.name;

  // Reset UI
  document.querySelectorAll('.join-role-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.join-hours-btn').forEach(b => b.classList.remove('selected'));
  ['pledge-ambitious','pledge-honest','pledge-loyal','pledge-ethical','pledge-tolerant'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
  const noteEl = $('#join-note');
  if (noteEl) noteEl.value = '';
  const valEl = $('#join-equity-val');
  if (valEl) valEl.textContent = 'Chọn vai trò để xem';
  updatePledgeBtn();

  const overlay = $('#join-sheet-overlay');
  const sheet = $('#join-sheet');
  if (!overlay || !sheet) return;
  overlay.classList.remove('hidden');
  sheet.classList.remove('hidden');
  sheet.classList.remove('slide-in');
  sheet.offsetHeight; // reflow
  sheet.classList.add('slide-in');
  document.body.style.overflow = 'hidden';
}

function closeJoinSheet() {
  const overlay = $('#join-sheet-overlay');
  const sheet = $('#join-sheet');
  if (overlay) overlay.classList.add('hidden');
  if (sheet) sheet.classList.add('hidden');
  document.body.style.overflow = '';
}

function selectJoinRole(btn) {
  document.querySelectorAll('.join-role-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  _joinRole = btn.dataset.role;
  updateJoinEquityPreview();
}

function selectJoinHours(btn) {
  document.querySelectorAll('.join-hours-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  _joinHours = parseInt(btn.dataset.h) || 10;
  updateJoinEquityPreview();
}

function updateJoinEquityPreview() {
  const valEl = $('#join-equity-val');
  if (!valEl) return;
  if (!_joinRole) { valEl.textContent = 'Chọn vai trò để xem'; return; }
  const roleInfo = JOIN_ROLE_EQUITY[_joinRole];
  if (!roleInfo) return;
  const user = CURRENT_USER || { trustScore: 70 };
  const mult = Math.max(1.0, Math.min(2.0, user.trustScore / 50));
  const pts = Math.round(roleInfo.base * mult);
  const hoursText = _joinHours ? ` · ${_joinHours}h/tuần ≈ ${_joinHours * pts} điểm/tuần` : '';
  valEl.textContent = `${pts} điểm/giờ (Trust ×${mult.toFixed(1)})${hoursText}`;
}

function updatePledgeBtn() {
  const ids = ['pledge-ambitious','pledge-honest','pledge-loyal','pledge-ethical','pledge-tolerant'];
  const allChecked = ids.every(id => { const el = document.getElementById(id); return el && el.checked; });
  const btn = $('#join-submit-btn');
  if (!btn) return;
  if (allChecked) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  } else {
    btn.disabled = true;
    btn.style.opacity = '0.4';
    btn.style.cursor = 'not-allowed';
  }
}

function submitJoin() {
  if (!_joinRole) {
    showToast('⚠️ Hãy chọn vai trò của bạn!', 'warning');
    return;
  }
  const ids = ['pledge-ambitious','pledge-honest','pledge-loyal','pledge-ethical','pledge-tolerant'];
  const allChecked = ids.every(id => { const el = document.getElementById(id); return el && el.checked; });
  if (!allChecked) {
    showToast('⚠️ Hãy xác nhận đủ 5 giá trị cốt lõi!', 'warning');
    return;
  }
  const item = SHORTS_DATA[_joinTargetIdx];
  if (!item) return;
  if (item.members != null) item.members += 1;
  closeJoinSheet();
  showToast(`🌟 "${item.name}" — Cảm ơn bạn đã cam kết Khát vọng · Thật thà · Đạo đức · Chân thành · Bao dung. Founder sẽ liên hệ bạn sớm!`, 'success');
  setTimeout(() => switchView('match'), 3000);
}

// ----

let _shortsCurrentIdx = 0;

function renderShortsFeed() {
  const container = $('#shorts-container');
  const dotsEl = $('#shorts-dots');
  if (!container) return;

  container.innerHTML = '';
  dotsEl.innerHTML = '';

  SHORTS_DATA.forEach((item, idx) => {
    const pct = item.raised != null ? item.raised : null;
    const founder = item.founder;
    const founderAvatarUrl = avatarUrl(founder.seed);
    const isProject = item.type === 'project';

    // Build card
    const card = document.createElement('div');
    card.className = 'short-card';
    card.dataset.idx = idx;

    card.innerHTML = `
      <!-- Progress bar -->
      <div class="short-card__progress">
        <div class="short-card__progress-fill" style="width:${pct != null ? pct : 0}%"></div>
      </div>

      <!-- Background -->
      <div class="short-card__bg" style="background:${item.gradient};"></div>
      <div class="short-card__overlay"></div>

      <!-- Stage badge -->
      <div class="short-card__stage-badge" style="background:${item.stageColor}22;border-color:${item.stageColor}55;color:${item.stageColor}">
        ${item.stage}
      </div>

      <!-- Content -->
      <div class="short-card__content">
        <span class="short-card__emoji">${item.emoji}</span>
        <div class="short-card__name">${item.name}</div>
        <div class="short-card__type">${item.tagline}</div>
        <div class="short-card__desc">${item.desc}</div>
        <div class="short-card__tags">
          ${item.tags.map(t => `<span class="short-card__tag">${t}</span>`).join('')}
        </div>
        ${pct != null ? `
        <div class="short-card__stats">
          <span>🔥 <strong>${pct}%</strong> đã huy động</span>
          ${item.members ? `<span>👥 <strong>${item.members}</strong> thành viên</span>` : ''}
          <span>❤️ <strong>${item.likes}</strong></span>
        </div>` : `
        <div class="short-card__stats">
          ${item.seeking ? `<span>🔍 Cần: <strong style="color:${item.accentColor}">${item.seeking[0]}</strong></span>` : ''}
          <span>❤️ <strong>${item.likes}</strong></span>
          <span>🛡️ Trust <strong>${founder.trust}</strong></span>
        </div>`}
        <div class="short-card__ctas">
          <button class="short-btn short-btn--primary" onclick="(${item.cta.action.toString()})()">
            ${item.cta.label}
          </button>
          ${item.cta2 ? `<button class="short-btn short-btn--glass" onclick="(${item.cta2.action.toString()})()">
            ${item.cta2.label}
          </button>` : ''}
        </div>
      </div>

      <!-- Right actions -->
      <div class="short-card__actions">
        <div class="short-founder-avatar-wrap">
          <img class="short-founder-avatar" src="${founderAvatarUrl}" alt="${founder.name}" />
          <div class="short-founder-follow">+</div>
        </div>
        <button class="short-action" onclick="shortsLike(this, ${idx})">
          <div class="short-action__icon">❤️</div>
          <span class="short-action__count likes-count-${idx}">${item.likes}</span>
        </button>
        <button class="short-action" onclick="shortsShare(${idx})">
          <div class="short-action__icon">🔗</div>
          <span class="short-action__count">Chia sẻ</span>
        </button>
        <button class="short-action" onclick="shortsInterest(this, ${idx})">
          <div class="short-action__icon">⭐</div>
          <span class="short-action__count">Quan tâm</span>
        </button>
        <button class="short-action" onclick="openJoinSheet(${idx})">
          <div class="short-action__icon" style="background:rgba(34,197,94,0.2);border-color:rgba(34,197,94,0.4)">🙋</div>
          <span class="short-action__count" style="color:#4ade80">Join</span>
        </button>
      </div>
    `;
    container.appendChild(card);

    // Dots
    const dot = document.createElement('div');
    dot.className = `shorts-dot${idx === 0 ? ' active' : ''}`;
    dot.onclick = () => shortsGoTo(idx);
    dotsEl.appendChild(dot);
  });

  // Intersection observer to update dots
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.idx);
        _shortsCurrentIdx = idx;
        updateShortsDots(idx);
      }
    });
  }, { threshold: 0.6, root: container });

  container.querySelectorAll('.short-card').forEach(card => observer.observe(card));

  // Keyboard navigation
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); shortsNavigate(1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); shortsNavigate(-1); }
  });
  container.setAttribute('tabindex', '0');
}

function updateShortsDots(idx) {
  document.querySelectorAll('.shorts-dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

function shortsGoTo(idx) {
  const container = $('#shorts-container');
  if (!container) return;
  const cards = container.querySelectorAll('.short-card');
  if (cards[idx]) {
    cards[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    _shortsCurrentIdx = idx;
    updateShortsDots(idx);
  }
}

function shortsNavigate(dir) {
  const next = Math.max(0, Math.min(SHORTS_DATA.length - 1, _shortsCurrentIdx + dir));
  shortsGoTo(next);
}

function shortsLike(btn, idx) {
  const item = SHORTS_DATA[idx];
  if (!item) return;
  const isLiked = btn.classList.toggle('liked');
  item.likes += isLiked ? 1 : -1;
  const countEl = document.querySelector(`.likes-count-${idx}`);
  if (countEl) countEl.textContent = item.likes;
  if (isLiked) showToast('❤️ Đã thích dự án này!', 'success');
}

function shortsShare(idx) {
  const item = SHORTS_DATA[idx];
  if (navigator.share) {
    navigator.share({ title: item.name, text: item.tagline, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('🔗 Đã copy link!', 'success');
  }
}

function shortsInterest(btn, idx) {
  btn.classList.toggle('liked');
  showToast('⭐ Đã lưu vào danh sách quan tâm!', 'success');
}

// ============ FUNDRAISING & RESOURCE POOL ENGINE ============


// ---- Live Ticker ----
const TICKER_MESSAGES = [
  '🔥 Tuấn vừa góp 30 giờ dev vào EduChain VN · +3,000 điểm equity',
  '⚡ Hương vừa góp 20 giờ Design vào DevTrust XKLĐ · +1,600 điểm',
  '💰 Cường Đinh vừa rót 5 triệu vào Viral EDU · +1,000 điểm equity',
  '🚀 Dự án CloudBase VN vừa đạt 52% mục tiêu!',
  '🎯 Minh vừa tham gia team DeFi XKLĐ Bond với vai Dev',
  '💡 Ý tưởng mới: "AgriChain VN" vừa được đăng bởi Linh N.',
  '🛡️ Trust Score của Hương tăng lên 93 — x1.86 equity multiplier!',
  '🤝 EduChain VN vừa tuyển được thành viên thứ 4: Thành (Marketing)',
];
let _tickerInterval = null;
let _tickerIdx = 0;

function startFundTicker() {
  const el = $('#fund-ticker-text');
  if (!el) return;
  if (_tickerInterval) clearInterval(_tickerInterval);
  _tickerIdx = 0;
  _tickerInterval = setInterval(() => {
    _tickerIdx = (_tickerIdx + 1) % TICKER_MESSAGES.length;
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'ticker-slide 0.5s ease both';
    el.textContent = TICKER_MESSAGES[_tickerIdx];
  }, 4000);
}

// ---- Animated Counters ----
function animateFundCounters() {
  const pills = document.querySelectorAll('.fund-stat-pill__num[data-target]');
  pills.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    if (!target) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}



/**
 * Bảng quy đổi nguồn lực → điểm equity
 * Trust Score multiplier: trustScore/50 (min 1.0, max 2.0)
 */
const RESOURCE_RATES = {
  dev:       { label: '💻 Dev', pointsPerHour: 100 },
  design:    { label: '🎨 Design', pointsPerHour: 80 },
  marketing: { label: '📣 Marketing', pointsPerHour: 60 },
  mentor:    { label: '🧠 Mentor', pointsPerHour: 70 },
  money:     { label: '💵 Vốn tiền mặt', pointsPerMillion: 200 },
};

function calcTrustMultiplier(trustScore) {
  return Math.min(2.0, Math.max(1.0, trustScore / 50));
}

function calculateEquity(type, amount, trustScore) {
  const mult = calcTrustMultiplier(trustScore);
  if (type === 'money') return Math.round(amount * RESOURCE_RATES.money.pointsPerMillion * mult);
  const rate = RESOURCE_RATES[type];
  return rate ? Math.round(amount * rate.pointsPerHour * mult) : 0;
}

// Mock FUND_IDEAS data
let FUND_IDEAS = [
  {
    id: 1, founderId: 4, stage: 'mvp', emoji: '🌐',
    name: 'DevTrust XKLĐ Platform',
    desc: 'P2P platform kết nối học viên tiếng Nhật với mentor đáng tin — không cần trung gian.',
    needs: ['dev', 'marketing', 'mentor'],
    goalPoints: 50000, raisedPoints: 31200,
    members: [4, 3, 1],
    contributions: [
      { userId: 3, type: 'dev', amount: 40, points: 4000, note: 'Build AI matching algo' },
      { userId: 1, type: 'design', amount: 30, points: 2400, note: 'UI/UX cho mobile' },
      { userId: 4, type: 'money', amount: 12, points: 24000, note: 'Seed capital' },
    ]
  },
  {
    id: 2, founderId: 1, stage: 'idea', emoji: '📚',
    name: 'EduChain VN',
    desc: 'Nền tảng e-learning offline-first cho vùng sâu. Học xong — dữ liệu tiến độ đồng bộ P2P.',
    needs: ['dev', 'money', 'mentor'],
    goalPoints: 30000, raisedPoints: 8500,
    members: [1, 3],
    contributions: [
      { userId: 3, type: 'dev', amount: 20, points: 2000, note: 'Research offline sync' },
      { userId: 1, type: 'money', amount: 3, points: 6000, note: 'Bootstrap UX sprint' },
    ]
  },
  {
    id: 3, founderId: 5, stage: 'growth', emoji: '🚀',
    name: 'Viral EDU',
    desc: 'Growth hacking machine cho startup EdTech — 100K user trong 12 tháng. Đã có 3K beta users.',
    needs: ['dev', 'design'],
    goalPoints: 80000, raisedPoints: 62000,
    members: [5, 2, 7],
    contributions: [
      { userId: 2, type: 'dev', amount: 80, points: 8000, note: 'Backend infra' },
      { userId: 7, type: 'design', amount: 60, points: 4800, note: 'App redesign' },
      { userId: 5, type: 'money', amount: 24, points: 48000, note: 'Marketing spend' },
    ]
  },
  {
    id: 4, founderId: 9, stage: 'idea', emoji: '🏗',
    name: 'DeFi XKLĐ Bond',
    desc: 'Smart contract bond cho người đi XKLĐ — huy động vốn từ cộng đồng, trả lãi sau khi có thu nhập Nhật.',
    needs: ['dev', 'mentor', 'money'],
    goalPoints: 100000, raisedPoints: 15000,
    members: [9, 4],
    contributions: [
      { userId: 4, type: 'dev', amount: 30, points: 3000, note: 'Smart contract prototype' },
      { userId: 9, type: 'money', amount: 6, points: 12000, note: 'Audit & legal' },
    ]
  },
  {
    id: 5, founderId: 6, stage: 'mvp', emoji: '☁️',
    name: 'CloudBase VN',
    desc: 'Open-source microservices platform cho startup Việt — deploy bằng 1 command, cost giảm 70%.',
    needs: ['dev', 'marketing'],
    goalPoints: 40000, raisedPoints: 21000,
    members: [6, 2],
    contributions: [
      { userId: 2, type: 'dev', amount: 50, points: 5000, note: 'K8s config' },
      { userId: 6, type: 'dev', amount: 80, points: 8000, note: 'Core infra build' },
      { userId: 6, type: 'money', amount: 4, points: 8000, note: 'Server costs' },
    ]
  },
];

function getFundStageLabel(stage) {
  return { idea: '💡 Ý tưởng', mvp: '🛠️ MVP', growth: '📈 Tăng trưởng' }[stage] || stage;
}
function getFundStageColor(stage) {
  return { idea: '#6366f1', mvp: '#f59e0b', growth: '#22c55e' }[stage] || '#64748b';
}

function renderFundFeed(ideasToRender) {
  const container = $('#fund-grid');
  if (!container) return;
  const ideas = ideasToRender || FUND_IDEAS;
  const countEl = $('#fund-count');
  if (countEl) countEl.textContent = ideas.length;
  container.innerHTML = '';

  ideas.forEach((idea, idx) => {
    const founder = getUser(idea.founderId);
    const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));
    const stageColor = getFundStageColor(idea.stage);
    const totalMembers = idea.members.length;

    const el = document.createElement('div');
    el.className = 'fund-card';
    el.style.animationDelay = `${idx * 0.06}s`;
    el.innerHTML = `
      <div class="fund-card__header" style="border-left:3px solid ${stageColor}">
        <div class="fund-card__emoji">${idea.emoji}</div>
        <div class="fund-card__hinfo">
          <div class="fund-card__stage" style="color:${stageColor}">${getFundStageLabel(idea.stage)}</div>
          <div class="fund-card__name">${idea.name}</div>
        </div>
      </div>
      <div class="fund-card__desc">${idea.desc}</div>
      <div class="fund-card__needs">
        ${idea.needs.map(n => `<span class="fund-need-tag">${RESOURCE_RATES[n]?.label || n}</span>`).join('')}
      </div>
      <div class="fund-card__progress-wrap">
        <div class="fund-card__progress-bar">
          <div class="fund-card__progress-fill" style="width:${pct}%;background:${stageColor}"></div>
        </div>
        <div class="fund-card__progress-info">
          <span class="fund-card__raised">${idea.raisedPoints.toLocaleString()} điểm</span>
          <span class="fund-card__pct" style="color:${stageColor}">${pct}%</span>
          <span class="fund-card__goal">/ ${idea.goalPoints.toLocaleString()}</span>
        </div>
      </div>
      <div class="fund-card__footer">
        <div class="fund-card__team">
          ${idea.members.slice(0, 3).map(uid => {
            const u = getUser(uid);
            return u ? `<img class="fund-member-avatar" src="${avatarUrl(u.seed)}" title="${u.name}" />` : '';
          }).join('')}
          <span class="fund-card__team-count">${totalMembers} thành viên</span>
        </div>
        ${founder ? `<div class="fund-card__founder">
          <img src="${avatarUrl(founder.seed)}" class="fund-founder-avatar" />
          <span>${founder.name}</span>
          <span class="fund-trust-badge">🛡️ ${founder.trustScore}</span>
        </div>` : ''}
      </div>
      <div class="fund-card__actions">
        <button class="btn btn--primary btn--sm" onclick="openContributeModal(${idea.id})">💰 Góp nguồn lực</button>
        <button class="btn btn--glass btn--sm" onclick="openFundTeamModal(${idea.id})">👥 Xem nhóm</button>
      </div>
    `;
    container.appendChild(el);
  });
}

function filterFund(stage) {
  document.querySelectorAll('.fund-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.fund-tab[data-stage="${stage}"]`);
  if (activeTab) activeTab.classList.add('active');
  const filtered = stage === 'all' ? FUND_IDEAS : FUND_IDEAS.filter(i => i.stage === stage);
  renderFundFeed(filtered);
}

function openContributeModal(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  const founder = getUser(idea.founderId);
  const pct = Math.min(100, Math.round(idea.raisedPoints / idea.goalPoints * 100));

  $('#contribute-modal-title').textContent = `Góp vốn vào "${idea.name}"`;
  const body = $('#contribute-modal-body');
  body.innerHTML = `
    <div class="contribute-idea-info">
      <div style="font-size:2rem">${idea.emoji}</div>
      <div>
        <div class="contribute-idea-name">${idea.name}</div>
        <div class="contribute-idea-desc">${idea.desc}</div>
        <div class="contribute-progress-mini">
          <div class="contribute-prog-fill" style="width:${pct}%;background:${getFundStageColor(idea.stage)}"></div>
        </div>
        <div style="font-size:0.75rem;color:var(--text-tertiary);margin-top:0.25rem">
          ${idea.raisedPoints.toLocaleString()} / ${idea.goalPoints.toLocaleString()} điểm (${pct}%)
        </div>
      </div>
    </div>

    <div class="contribute-form">
      <div class="contribute-form__label">Chọn loại đóng góp:</div>
      <div class="contribute-types" id="contribute-types">
        ${Object.entries(RESOURCE_RATES).map(([key, r]) => `
          <label class="contribute-type-item">
            <input type="radio" name="ctype" value="${key}" ${idea.needs.includes(key) ? 'checked' : ''} onchange="updateEquityPreview(${ideaId})">
            <span class="contribute-type-label">${r.label}</span>
            <span class="contribute-type-rate">${key === 'money' ? r.pointsPerMillion + ' đ/tr' : r.pointsPerHour + ' đ/h'}</span>
          </label>
        `).join('')}
      </div>

      <div class="contribute-amount-row">
        <div class="form-group">
          <label class="form-label" id="contribute-amount-label">Số giờ đóng góp:</label>
          <input type="number" id="contribute-amount" class="form-input" value="10" min="1" oninput="updateEquityPreview(${ideaId})" placeholder="10" />
        </div>
        <div class="contribute-equity-preview" id="equity-preview">
          <div class="equity-preview__num" id="equity-num">1,000</div>
          <div class="equity-preview__label">điểm equity</div>
          <div class="equity-preview__pct" id="equity-pct">~2.0%</div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Ghi chú (bạn sẽ làm gì?):</label>
        <textarea id="contribute-note" class="form-input" rows="2" placeholder="VD: Build API backend cho module matching"></textarea>
      </div>

      <div class="contribute-trust-info">
        <div class="trust-mult-badge">🛡️ Trust Score của bạn: <strong>92</strong> → Nhân hệ số <strong>×${calcTrustMultiplier(92).toFixed(1)}</strong></div>
      </div>

      <div style="display:flex;gap:0.75rem;margin-top:1rem">
        <button class="btn btn--primary" style="flex:1" onclick="submitContribution(${ideaId})">💰 Xác nhận Góp Vốn</button>
        <button class="btn btn--glass" onclick="$('#contribute-modal').classList.add('hidden')">Hủy</button>
      </div>
    </div>

    <div class="contribute-top-list">
      <div class="contribute-top-title">🏆 Top contributors</div>
      ${idea.contributions.map(c => {
        const u = getUser(c.userId);
        return u ? `<div class="contribute-top-item">
          <img class="fund-member-avatar" src="${avatarUrl(u.seed)}" />
          <div style="flex:1">
            <div style="font-size:0.82rem;font-weight:600">${u.name}</div>
            <div style="font-size:0.72rem;color:var(--text-tertiary)">${c.note}</div>
          </div>
          <div style="font-size:0.82rem;font-weight:700;color:var(--accent-primary)">${c.points.toLocaleString()} đ</div>
        </div>` : '';
      }).join('')}
    </div>
  `;
  $('#contribute-modal').classList.remove('hidden');
  updateEquityPreview(ideaId);
}

function updateEquityPreview(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  const type = document.querySelector('input[name="ctype"]:checked')?.value || 'dev';
  const amount = parseFloat($('#contribute-amount')?.value) || 0;
  const label = $('#contribute-amount-label');
  if (label) label.textContent = type === 'money' ? 'Số triệu VNĐ:' : 'Số giờ đóng góp:';
  const points = calculateEquity(type, amount, 92); // 92 = owner trust score
  const totalAfter = idea.raisedPoints + points;
  const pct = totalAfter > 0 ? ((points / totalAfter) * 100).toFixed(1) : '0.0';
  const numEl = $('#equity-num');
  const pctEl = $('#equity-pct');
  if (numEl) numEl.textContent = points.toLocaleString();
  if (pctEl) pctEl.textContent = `~${pct}% equity`;
}

function submitContribution(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  const type = document.querySelector('input[name="ctype"]:checked')?.value || 'dev';
  const amount = parseFloat($('#contribute-amount')?.value) || 0;
  const note = $('#contribute-note')?.value || '';
  const points = calculateEquity(type, amount, 92);
  idea.raisedPoints += points;
  idea.contributions.push({ userId: 0, type, amount, points, note });
  $('#contribute-modal').classList.add('hidden');
  showToast(`💰 Đã góp ${points.toLocaleString()} điểm equity vào "${idea.name}"! 🎉`, 'success');
  renderFundFeed();
}

function openFundTeamModal(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  showToast(`👥 ${idea.name} có ${idea.members.length} thành viên. Tính năng xem chi tiết nhóm sẽ sớm ra mắt!`, 'info');
}

function openIdeaModal() {
  $('#post-idea-modal').classList.remove('hidden');
}

function submitIdea() {
  const name = $('#idea-name')?.value.trim();
  const desc = $('#idea-desc')?.value.trim();
  const stage = $('#idea-stage')?.value || 'idea';
  const goalMillion = parseFloat($('#idea-goal')?.value) || 10;
  const needs = [...document.querySelectorAll('input[name="need"]:checked')].map(cb => cb.value);
  if (!name) { showToast('Vui lòng nhập tên dự án!', 'error'); return; }
  const stageEmojis = { idea: '💡', mvp: '🛠️', growth: '📈' };
  const newIdea = {
    id: FUND_IDEAS.length + 1,
    founderId: 0,
    stage, emoji: stageEmojis[stage] || '🚀',
    name, desc: desc || 'Ý tưởng mới từ cộng đồng DevTrust.',
    needs: needs.length > 0 ? needs : ['dev'],
    goalPoints: goalMillion * 200,
    raisedPoints: 0,
    members: [0],
    contributions: [],
  };
  FUND_IDEAS.unshift(newIdea);
  $('#post-idea-modal').classList.add('hidden');
  $('#idea-name').value = '';
  $('#idea-desc').value = '';
  $('#idea-goal').value = '';
  showToast(`🚀 Đã đăng dự án "${name}"! Cộng đồng sẽ sớm góp nguồn lực cho bạn!`, 'success');
  renderFundFeed();
}

// ============ CO-FOUNDER MATCHING ENGINE ============


// "Owner" profile (current user) used as matching reference
const OWNER_PROFILE = {
  id: 0, name: 'David Cuộng', seed: 'owner', online: true, trustScore: 92,
  skills: ['P2P', 'Gun.js', 'JavaScript', 'Product Management'],
  interests: ['EdTech', 'Open Source', 'Decentralization', 'Community'],
  goals: 'Xây dựng DevTrust — mạng xã hội P2P trust cho cộng đồng dev Việt',
  role: 'Founder / CEO', location: 'Hà Nội'
};

// Active filters state
let matchFilters = { skill: 'all', location: 'all', trust: 'all', search: '' };

/**
 * Calculate compatibility score between two users (0–100)
 * Formula: Skills overlap (50%) + Interests overlap (30%) + Trust band (20%)
 */
function calculateMatchScore(userA, userB) {
  if (!userA.skills || !userB.skills) return 0;

  // Skills overlap (50%)
  const sharedSkills = userA.skills.filter(s => userB.skills.includes(s)).length;
  const totalSkills = new Set([...userA.skills, ...userB.skills]).size;
  const skillScore = totalSkills > 0 ? (sharedSkills / Math.min(userA.skills.length, userB.skills.length)) * 50 : 0;

  // Interests overlap (30%)
  const sharedInterests = (userA.interests || []).filter(i => (userB.interests || []).includes(i)).length;
  const maxInterests = Math.max((userA.interests || []).length, (userB.interests || []).length, 1);
  const interestScore = (sharedInterests / maxInterests) * 30;

  // Trust band compatibility (20%) — complementary scores preferred
  const trustDiff = Math.abs(userA.trustScore - userB.trustScore);
  const trustScore = trustDiff < 15 ? 20 : trustDiff < 30 ? 14 : trustDiff < 50 ? 8 : 4;

  // Complementary skills bonus — different skills = better co-founder pairing
  const complementBonus = sharedSkills === 0 ? 8 : 0; // bonus if completely different skills

  return Math.min(100, Math.round(skillScore + interestScore + trustScore + complementBonus));
}

function getMatchGradient(score) {
  if (score >= 80) return 'linear-gradient(135deg, #10b981, #059669)';
  if (score >= 60) return 'linear-gradient(135deg, #f59e0b, #d97706)';
  if (score >= 40) return 'linear-gradient(135deg, #6366f1, #4f46e5)';
  return 'linear-gradient(135deg, #64748b, #475569)';
}

function getMatchLabel(score) {
  if (score >= 80) return '🔥 Super Match';
  if (score >= 60) return '✨ Good Match';
  if (score >= 40) return '👥 Potential';
  return '🔍 Explore';
}

function renderMatchFeed(usersToRender) {
  const container = $('#match-grid');
  if (!container) return;

  const candidates = (usersToRender || USERS).map(u => ({
    ...u,
    matchScore: calculateMatchScore(OWNER_PROFILE, u)
  })).sort((a, b) => b.matchScore - a.matchScore);

  // Update counter
  const countEl = $('#match-count');
  if (countEl) countEl.textContent = candidates.length;

  container.innerHTML = '';

  if (candidates.length === 0) {
    container.innerHTML = `
      <div class="progress-empty" style="grid-column:1/-1">
        <div class="progress-empty__icon">🔍</div>
        <h3>Không tìm thấy ứng viên</h3>
        <p>Thử điều chỉnh bộ lọc để tìm thêm cơ hội!</p>
      </div>
    `;
    return;
  }

  candidates.forEach((user, idx) => {
    const { matchScore } = user;
    const gradient = getMatchGradient(matchScore);
    const label = getMatchLabel(matchScore);
    const trustBadgeClass = user.trustScore >= 80 ? 'high' : user.trustScore >= 50 ? 'mid' : 'low';

    const el = document.createElement('div');
    el.className = 'match-card';
    el.style.animationDelay = `${idx * 0.07}s`;
    el.innerHTML = `
      <div class="match-card__score-bar" style="background:${gradient}">
        <div class="match-badge">
          <div class="match-badge__pct">${matchScore}%</div>
          <div class="match-badge__label">${label}</div>
        </div>
        <div class="match-card__avatar-wrap">
          <div class="avatar avatar--lg ${user.online ? 'online' : ''}">
            <img src="${avatarUrl(user.seed)}" alt="${user.name}" />
          </div>
        </div>
      </div>
      <div class="match-card__body">
        <div class="match-card__header">
          <div>
            <div class="match-card__name">${user.name}</div>
            <div class="match-card__role">${user.role || 'Developer'}</div>
          </div>
          <span class="trust-badge trust-badge--${trustBadgeClass}">🛡️ ${user.trustScore}</span>
        </div>
        <div class="match-card__goal">${user.goals || ''}</div>
        <div class="match-card__location">📍 ${user.location} &middot; ${user.commitment || 'Part-time'}</div>
        <div class="match-card__skills">
          ${(user.skills || []).slice(0, 4).map(s =>
            `<span class="skill-tag">${s}</span>`
          ).join('')}
          ${user.skills && user.skills.length > 4 ? `<span class="skill-tag skill-tag--more">+${user.skills.length - 4}</span>` : ''}
        </div>
        <div class="match-card__interests">
          ${(user.interests || []).slice(0, 3).map(i =>
            `<span class="goal-tag">${i}</span>`
          ).join('')}
        </div>
        <div class="match-card__actions">
          <button class="btn btn--primary btn--sm" onclick="openCofounderModal(${user.id})">🤝 Kết nối</button>
          <button class="btn btn--glass btn--sm" onclick="sendMatchMessage(${user.id})">💬 Nhắn tin</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

function filterMatchFeed() {
  const { skill, location, trust, search } = matchFilters;

  const filtered = USERS.filter(u => {
    if (skill !== 'all' && !(u.skills || []).includes(skill)) return false;
    if (location !== 'all' && u.location !== location) return false;
    if (trust === 'high' && u.trustScore < 80) return false;
    if (trust === 'mid' && u.trustScore < 50) return false;
    if (search) {
      const q = search.toLowerCase();
      const haystack = [
        u.name, u.role, u.goals, u.location,
        ...(u.skills || []), ...(u.interests || [])
      ].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  renderMatchFeed(filtered);
}

function openCofounderModal(userId) {
  const user = getUser(userId);
  if (!user) return;

  const matchScore = calculateMatchScore(OWNER_PROFILE, user);
  const gradient = getMatchGradient(matchScore);
  const label = getMatchLabel(matchScore);

  const sharedSkills = OWNER_PROFILE.skills.filter(s => (user.skills || []).includes(s));
  const sharedInterests = OWNER_PROFILE.interests.filter(i => (user.interests || []).includes(i));
  const uniqueSkills = (user.skills || []).filter(s => !OWNER_PROFILE.skills.includes(s));

  $('#cofounder-modal-title').textContent = `${user.name} — Co-Founder Profile`;
  const body = $('#cofounder-modal-body');
  body.innerHTML = `
    <div class="cofounder-hero" style="background:${gradient}">
      <div class="avatar avatar--xl">
        <img src="${avatarUrl(user.seed)}" alt="${user.name}" />
      </div>
      <div class="cofounder-hero__info">
        <h2>${user.name}</h2>
        <div class="cofounder-hero__role">${user.role || 'Developer'}</div>
        <div class="match-badge match-badge--lg">
          <div class="match-badge__pct match-badge__pct--lg">${matchScore}%</div>
          <div class="match-badge__label">${label}</div>
        </div>
      </div>
    </div>
    <div class="cofounder-body">
      <div class="cofounder-section">
        <h4>🎯 Mục tiêu</h4>
        <p>${user.goals || 'Chưa cập nhật'}</p>
      </div>
      <div class="cofounder-section cofounder-section--grid">
        <div>
          <h4>📍 Địa điểm</h4>
          <p>${user.location || 'Toàn quốc'}</p>
        </div>
        <div>
          <h4>⏰ Thời gian</h4>
          <p>${user.availableHours || 'Linh hoạt'}</p>
        </div>
        <div>
          <h4>🆝 Trust Score</h4>
          <p style="color:${user.trustScore >= 80 ? '#10b981' : user.trustScore >= 50 ? '#f59e0b' : '#64748b'}">${user.trustScore}/100</p>
        </div>
        <div>
          <h4>💡 Ý tưởng</h4>
          <p>${user.idea || 'Đang tìm kiếm'}</p>
        </div>
      </div>
      <div class="cofounder-section">
        <h4>🛠️ Tất cả kỹ năng</h4>
        <div class="cofounder-skills">${(user.skills || []).map(s =>
          `<span class="skill-tag ${uniqueSkills.includes(s) ? 'skill-tag--unique' : sharedSkills.includes(s) ? 'skill-tag--shared' : ''}">${s}</span>`
        ).join('')}</div>
        <div class="cofounder-legend">
          <span class="skill-tag skill-tag--shared">Chưng kỹ năng</span>
          <span class="skill-tag skill-tag--unique">Kỹ năng bổ trợ cho bạn</span>
        </div>
      </div>
      ${sharedInterests.length > 0 ? `
      <div class="cofounder-section">
        <h4>❤️ Chung niềm đam mê</h4>
        <div>${sharedInterests.map(i => `<span class="goal-tag">${i}</span>`).join('')}</div>
      </div>` : ''}
      <div class="cofounder-section cofounder-section--actions">
        <button class="btn btn--primary" onclick="sendMatchMessage(${user.id});$('#cofounder-modal').classList.add('hidden')">
          💬 Gửi lời mời hợp tác
        </button>
        <button class="btn btn--glass" onclick="$('#cofounder-modal').classList.add('hidden')">
          ✕ Đóng
        </button>
      </div>
    </div>
  `;
  $('#cofounder-modal').classList.remove('hidden');
}

function sendMatchMessage(userId) {
  const user = getUser(userId);
  if (!user) return;
  showToast(`🤝 Đã gửi lời mời kết nối tới ${user.name}! Trò chuyện sẽ mở trong Messages.`, 'success');
}

// ============ E-LEARNING DATA ============
const COURSES = [
  {
    id: 1, category: 'AI', icon: '🤖',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: 'AI Cơ Bản cho Mọi Người',
    desc: 'Hiểu AI là gì, cách AI ảnh hưởng cuộc sống, và cách dùng AI tools (ChatGPT, Gemini) hiệu quả.',
    teacher: { name: 'Tuấn Vũ', seed: 'tuan', trust: 95 },
    lessons: [
      { title: 'AI là gì? Tại sao quan trọng?', duration: '15 phút', completed: true },
      { title: 'Các loại AI phổ biến', duration: '20 phút', completed: true },
      { title: 'Dùng ChatGPT cơ bản', duration: '25 phút', completed: false },
      { title: 'Dùng Gemini cho công việc', duration: '20 phút', completed: false },
      { title: 'AI trong đời sống hàng ngày', duration: '15 phút', completed: false },
      { title: 'An toàn khi dùng AI', duration: '20 phút', completed: false },
    ],
    students: 2340, offline: true, p2p: true, progress: 33,
  },
  {
    id: 2, category: 'Tiếng Anh', icon: '🌍',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: 'Tiếng Anh Giao Tiếp Cơ Bản',
    desc: 'Học tiếng Anh giao tiếp từ số 0. Phương pháp P2P: luyện nói với bạn học qua mạng trust.',
    teacher: { name: 'Hương Phạm', seed: 'huong', trust: 91 },
    lessons: [
      { title: 'Chào hỏi & Giới thiệu bản thân', duration: '20 phút', completed: true },
      { title: 'Hỏi đường & Phương tiện', duration: '20 phút', completed: true },
      { title: 'Mua sắm & Trả giá', duration: '25 phút', completed: true },
      { title: 'Nhà hàng & Gọi món', duration: '20 phút', completed: false },
      { title: 'Phỏng vấn xin việc cơ bản', duration: '30 phút', completed: false },
    ],
    students: 3120, offline: true, p2p: true, progress: 60,
  },
  {
    id: 3, category: 'Kỹ năng số', icon: '📱',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    title: 'Kỹ Năng Số Cơ Bản — BDHVS',
    desc: 'Chương trình Bình dân học vụ số: Dùng smartphone, email, Zalo, thanh toán online, an toàn mạng.',
    teacher: { name: 'Linh Nguyễn', seed: 'linh', trust: 87 },
    lessons: [
      { title: 'Dùng smartphone hiệu quả', duration: '20 phút', completed: true },
      { title: 'Email & Zalo cơ bản', duration: '15 phút', completed: false },
      { title: 'Thanh toán online an toàn', duration: '25 phút', completed: false },
      { title: 'Bảo mật tài khoản cá nhân', duration: '20 phút', completed: false },
      { title: 'Nhận biết lừa đảo online', duration: '20 phút', completed: false },
      { title: 'Dùng dịch vụ công trực tuyến', duration: '25 phút', completed: false },
    ],
    students: 5680, offline: true, p2p: true, progress: 17,
  },
  {
    id: 4, category: 'An toàn mạng', icon: '🛡️',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    title: 'An Toàn Mạng cho Dân Thường',
    desc: 'Bảo vệ bản thân khỏi lừa đảo, hack, mất tiền online. Kiến thức thiết yếu cho mọi người.',
    teacher: { name: 'Đức Hoàng', seed: 'duc', trust: 78 },
    lessons: [
      { title: 'Mật khẩu mạnh & 2FA', duration: '15 phút', completed: false },
      { title: 'Nhận biết email lừa đảo', duration: '20 phút', completed: false },
      { title: 'Bảo mật WiFi & thiết bị', duration: '20 phút', completed: false },
      { title: 'An toàn mạng xã hội', duration: '25 phút', completed: false },
    ],
    students: 1890, offline: true, p2p: true, progress: 0,
  },
  {
    id: 5, category: 'Lập trình', icon: '💻',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    title: 'Python Cơ Bản — Lập Trình Cho Ai Cũng Hiểu',
    desc: 'Học lập trình Python từ đầu. Build dự án thực tế. Có thể học offline và sync bài tập P2P.',
    teacher: { name: 'Tuấn Vũ', seed: 'tuan', trust: 95 },
    lessons: [
      { title: 'Cài đặt Python & Hello World', duration: '20 phút', completed: false },
      { title: 'Biến, kiểu dữ liệu, toán tử', duration: '30 phút', completed: false },
      { title: 'Điều kiện if/else', duration: '25 phút', completed: false },
      { title: 'Vòng lặp for/while', duration: '25 phút', completed: false },
      { title: 'Hàm & Module', duration: '30 phút', completed: false },
      { title: 'Dự án: Máy tính cá nhân', duration: '45 phút', completed: false },
    ],
    students: 4210, offline: true, p2p: true, progress: 0,
  },
  {
    id: 6, category: 'Kỹ năng số', icon: '💼',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    title: 'Kiếm Tiền Online Chân Chính',
    desc: 'Freelance, bán hàng online, content creation. Kỹ năng số để tạo thu nhập bền vững.',
    teacher: { name: 'Thảo Ngô', seed: 'thao', trust: 84 },
    lessons: [
      { title: 'Tổng quan kiếm tiền online', duration: '15 phút', completed: false },
      { title: 'Freelance trên Upwork/Fiverr', duration: '25 phút', completed: false },
      { title: 'Bán hàng Shopee/TikTok Shop', duration: '30 phút', completed: false },
      { title: 'Content Creation & YouTube', duration: '25 phút', completed: false },
      { title: 'Tránh bẫy đa cấp & lừa đảo', duration: '20 phút', completed: false },
    ],
    students: 7820, offline: true, p2p: true, progress: 0,
  },
];

const QUIZZES = [
  {
    id: 1, icon: '📱', title: 'Kỹ năng số cơ bản',
    desc: 'Đánh giá khả năng sử dụng smartphone, internet, và các ứng dụng cơ bản.',
    questionCount: 5, difficulty: 2, duration: '5 phút',
    questions: [
      { q: 'Ứng dụng nào dùng để thanh toán điện tử phổ biến nhất tại Việt Nam?', options: ['Microsoft Word', 'MoMo / ZaloPay', 'Facebook', 'Calculator'], answer: 1 },
      { q: 'Khi nhận được tin nhắn lạ yêu cầu chuyển tiền, bạn nên làm gì?', options: ['Chuyển ngay theo yêu cầu', 'Gọi lại số đó xác nhận', 'Xác minh qua kênh chính thức & KHÔNG chuyển tiền', 'Chặn và quên đi'], answer: 2 },
      { q: '2FA (xác thực 2 yếu tố) giúp bảo vệ tài khoản bằng cách nào?', options: ['Thay đổi mật khẩu hàng ngày', 'Yêu cầu thêm 1 bước xác nhận ngoài mật khẩu', 'Chặn mọi truy cập từ thiết bị lạ', 'Mã hóa toàn bộ dữ liệu'], answer: 1 },
      { q: 'Email có đuôi nào sau đây KHÔNG đáng tin cậy?', options: ['@techcombank.com.vn', '@gov.vn', '@gmail-secure-login.xyz', '@vietcombank.com.vn'], answer: 2 },
      { q: 'Cách an toàn nhất để kết nối WiFi công cộng?', options: ['Kết nối thoải mái, không sao cả', 'Dùng VPN khi kết nối WiFi công cộng', 'Tắt WiFi, chỉ dùng 4G', 'Hỏi mật khẩu WiFi và đăng nhập'], answer: 1 },
    ],
  },
  {
    id: 2, icon: '🤖', title: 'AI & công nghệ mới',
    desc: 'Kiểm tra hiểu biết về trí tuệ nhân tạo và ứng dụng trong cuộc sống.',
    questionCount: 5, difficulty: 3, duration: '5 phút',
    questions: [
      { q: 'AI (Trí tuệ nhân tạo) là gì?', options: ['Robot biết nói chuyện', 'Máy tính có khả năng học và ra quyết định', 'Phần mềm diệt virus', 'Mạng xã hội thông minh'], answer: 1 },
      { q: 'ChatGPT, Gemini thuộc loại AI nào?', options: ['AI tự lái xe', 'AI nhận dạng khuôn mặt', 'AI ngôn ngữ lớn (LLM)', 'AI chơi game'], answer: 2 },
      { q: 'Khi dùng AI, bạn KHÔNG nên làm gì?', options: ['Kiểm tra lại thông tin AI đưa ra', 'Chia sẻ thông tin cá nhân nhạy cảm', 'Dùng AI để học thêm kiến thức', 'Đặt câu hỏi rõ ràng'], answer: 1 },
      { q: 'Deep Fake là gì?', options: ['App chỉnh ảnh', 'Video/ảnh giả tạo bằng AI rất giống thật', 'Mạng xã hội mới', 'Công cụ mã hóa dữ liệu'], answer: 1 },
      { q: 'AI có thể giúp gì trong giáo dục?', options: ['Chỉ chấm bài tự động', 'Cá nhân hóa lộ trình học, tạo nội dung, trợ giảng', 'Thay thế hoàn toàn giáo viên', 'Không có ứng dụng gì'], answer: 1 },
    ],
  },
  {
    id: 3, icon: '🛡️', title: 'An toàn mạng',
    desc: 'Đánh giá kiến thức bảo mật, phòng chống lừa đảo trực tuyến.',
    questionCount: 5, difficulty: 2, duration: '5 phút',
    questions: [
      { q: 'Mật khẩu nào sau đây an toàn nhất?', options: ['123456', 'password', 'Tr0ng$Binh_2025!', 'tên_bạn_gái'], answer: 2 },
      { q: 'Phishing là gì?', options: ['Câu cá trên mạng', 'Giả mạo website/email để lừa lấy thông tin', 'Virus máy tính', 'Phần mềm quảng cáo'], answer: 1 },
      { q: 'Bạn nên cập nhật phần mềm điện thoại khi nào?', options: ['Không bao giờ — sợ hỏng máy', 'Khi có bản cập nhật bảo mật mới', 'Chỉ khi máy chậm', 'Mỗi năm 1 lần'], answer: 1 },
      { q: 'Khi bị hack tài khoản mạng xã hội, bước đầu tiên nên làm gì?', options: ['Đăng bài thông báo', 'Đổi mật khẩu ngay + bật 2FA', 'Tạo tài khoản mới', 'Chờ vài ngày xem sao'], answer: 1 },
      { q: 'QR Code lạ trên đường có nên scan không?', options: ['Scan thoải mái', 'Không nên — có thể dẫn đến web lừa đảo', 'Chỉ scan nếu có logo ngân hàng', 'Scan rồi xóa ngay'], answer: 1 },
    ],
  },
  {
    id: 4, icon: '🌍', title: 'Tiếng Anh giao tiếp',
    desc: 'Kiểm tra trình độ tiếng Anh cơ bản để gợi ý lộ trình học phù hợp.',
    questionCount: 5, difficulty: 1, duration: '5 phút',
    questions: [
      { q: '"Hello, how are you?" nghĩa là gì?', options: ['Bạn ở đâu?', 'Xin chào, bạn khỏe không?', 'Bạn tên gì?', 'Tạm biệt nhé!'], answer: 1 },
      { q: 'Cách trả lời "What is your name?" đúng nhất?', options: ['I am fine', 'My name is Linh', 'I am 25 years old', 'I like coffee'], answer: 1 },
      { q: '"Turn left" nghĩa là gì?', options: ['Rẽ phải', 'Rẽ trái', 'Đi thẳng', 'Quay lại'], answer: 1 },
      { q: 'Khi muốn gọi thêm nước, bạn nói?', options: ['Can I have more water, please?', 'Where is the water?', 'The water is good', 'I don\'t like water'], answer: 0 },
      { q: '"Thank you very much" nghĩa là gì?', options: ['Xin lỗi nhiều', 'Cảm ơn rất nhiều', 'Không có gì', 'Hẹn gặp lại'], answer: 1 },
    ],
  },
];

// ============ E-LEARNING RENDER ============
function renderCourseGrid() {
  const container = $('#course-grid');
  if (!container) return;
  container.innerHTML = '';
  COURSES.forEach((course, idx) => {
    const circumference = 2 * Math.PI * 16;
    const offset = circumference - (course.progress / 100) * circumference;
    const el = document.createElement('div');
    el.className = 'course-card';
    el.style.animationDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <div class="course-card__cover">
        <div class="course-card__cover-gradient" style="background:${course.gradient}">${course.icon}</div>
        <div class="course-card__badges">
          ${course.offline ? '<span class="course-card__offline-badge">📥 Offline</span>' : ''}
          ${course.p2p ? '<span class="course-card__p2p-badge">🔗 P2P</span>' : ''}
        </div>
      </div>
      <div class="course-card__body">
        <div class="course-card__category">${course.category}</div>
        <div class="course-card__title">${course.title}</div>
        <div class="course-card__desc">${course.desc}</div>
        <div class="course-card__meta">
          <div class="course-card__teacher">
            <div class="avatar avatar--xs"><img src="${avatarUrl(course.teacher.seed)}" alt="" /></div>
            <div>
              <div class="course-card__teacher-name">${course.teacher.name}</div>
              <div class="course-card__teacher-trust">🛡️ ${course.teacher.trust}</div>
            </div>
          </div>
          ${course.progress > 0 ? `
          <div class="course-card__progress">
            <svg viewBox="0 0 36 36">
              <circle class="course-card__progress-bg" cx="18" cy="18" r="16" />
              <circle class="course-card__progress-fill" cx="18" cy="18" r="16"
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
            </svg>
            <div class="course-card__progress-text">${course.progress}%</div>
          </div>` : `
          <div class="course-card__stats">
            <div class="course-card__stat">👥 ${course.students.toLocaleString()}</div>
            <div class="course-card__stat">📖 ${course.lessons.length} bài</div>
          </div>`}
        </div>
      </div>
    `;
    el.addEventListener('click', () => openCourseModal(course));
    container.appendChild(el);
  });
}

function renderQuizSection() {
  const container = $('#quiz-section');
  if (!container) return;
  container.innerHTML = '';
  QUIZZES.forEach(quiz => {
    const el = document.createElement('div');
    el.className = 'quiz-card';
    const dots = Array.from({ length: 3 }, (_, i) =>
      `<div class="quiz-card__difficulty-dot ${i < quiz.difficulty ? 'filled' : ''}"></div>`
    ).join('');
    el.innerHTML = `
      <div class="quiz-card__icon">${quiz.icon}</div>
      <div class="quiz-card__title">${quiz.title}</div>
      <div class="quiz-card__desc">${quiz.desc}</div>
      <div class="quiz-card__meta">
        <span>⏱ ${quiz.duration} · ${quiz.questionCount} câu hỏi</span>
        <div class="quiz-card__difficulty">${dots}</div>
      </div>
    `;
    el.addEventListener('click', () => startQuiz(quiz));
    container.appendChild(el);
  });
}

function renderLearningProgress() {
  const container = $('#progress-overview');
  if (!container) return;
  const enrolled = COURSES.filter(c => c.progress > 0);
  if (enrolled.length === 0) {
    container.innerHTML = `
      <div class="progress-empty">
        <div class="progress-empty__icon">📚</div>
        <h3>Chưa có khóa học nào</h3>
        <p>Hãy đăng ký khóa học đầu tiên để bắt đầu hành trình học tập P2P!</p>
        <button class="btn btn--primary" onclick="switchLearningTab('courses')">Xem khóa học</button>
      </div>
    `;
    return;
  }
  container.innerHTML = '';
  enrolled.forEach(course => {
    const completed = course.lessons.filter(l => l.completed).length;
    const barClass = course.progress >= 60 ? 'progress-card__bar-fill--success' : course.progress >= 30 ? '' : 'progress-card__bar-fill--warning';
    const el = document.createElement('div');
    el.className = 'progress-card';
    el.innerHTML = `
      <div class="progress-card__icon">${course.icon}</div>
      <div class="progress-card__info">
        <div class="progress-card__title">${course.title}</div>
        <div class="progress-card__subtitle">${completed}/${course.lessons.length} bài · Teacher: ${course.teacher.name} 🛡️${course.teacher.trust}</div>
        <div class="progress-card__bar">
          <div class="progress-card__bar-fill ${barClass}" style="width:${course.progress}%"></div>
        </div>
      </div>
      <div class="progress-card__percent">${course.progress}%</div>
    `;
    container.appendChild(el);
  });
}

// ============ COURSE MODAL ============
function openCourseModal(course) {
  const modal = $('#course-modal');
  $('#course-modal-title').textContent = course.title;
  const body = $('#course-modal-body');
  const completed = course.lessons.filter(l => l.completed).length;
  body.innerHTML = `
    <div class="course-modal__hero" style="background:${course.gradient}">${course.icon}</div>
    <div class="course-modal__info">
      <div class="course-modal__category">${course.category}</div>
      <h2 class="course-modal__title">${course.title}</h2>
      <p class="course-modal__desc">${course.desc}</p>
      <div class="course-modal__stats">
        <div class="course-modal__stat-item">👥 ${course.students.toLocaleString()} học viên</div>
        <div class="course-modal__stat-item">📖 ${course.lessons.length} bài học</div>
        <div class="course-modal__stat-item">🛡️ Trust: ${course.teacher.trust}</div>
        <div class="course-modal__stat-item">${course.offline ? '📥 Offline-ready' : ''}</div>
      </div>
    </div>
    <h4 class="course-modal__lessons-title">Nội dung khóa học (${completed}/${course.lessons.length} hoàn thành)</h4>
    ${course.lessons.map((l, i) => `
      <div class="course-modal__lesson">
        <div class="course-modal__lesson-num ${l.completed ? 'completed' : ''}">${l.completed ? '✓' : i + 1}</div>
        <div class="course-modal__lesson-title">${l.title}</div>
        <div class="course-modal__lesson-duration">${l.duration}</div>
      </div>
    `).join('')}
    <div class="course-modal__actions">
      <button class="btn btn--primary btn--block" onclick="enrollCourse(${course.id})">
        ${course.progress > 0 ? '▶ Tiếp tục học' : '📚 Đăng ký học'}
      </button>
      <button class="btn btn--glass" onclick="downloadForOffline(${course.id})">📥 Tải offline</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

function enrollCourse(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  if (course.progress === 0) {
    course.progress = 10;
    course.lessons[0].completed = true;
  }
  $('#course-modal').classList.add('hidden');
  showToast(`Đã đăng ký "${course.title}"! Bài học đầu tiên sẵn sàng 📚`, 'success');
  syncLearningProgress(course);
  renderCourseGrid();
  renderLearningProgress();
}

function downloadForOffline(courseId) {
  const course = COURSES.find(c => c.id === courseId);
  showToast(`📥 Đang tải "${course.title}" cho học offline... (demo)`, 'success');
}

// ============ QUIZ ENGINE ============
let currentQuiz = null;
let currentQuestionIdx = 0;
let quizAnswers = [];

function startQuiz(quiz) {
  currentQuiz = quiz;
  currentQuestionIdx = 0;
  quizAnswers = new Array(quiz.questions.length).fill(-1);
  $('#quiz-q-total').textContent = quiz.questions.length;
  showQuizQuestion();
  $('#quiz-modal').classList.remove('hidden');
}

function showQuizQuestion() {
  if (!currentQuiz) return;
  const q = currentQuiz.questions[currentQuestionIdx];
  $('#quiz-q-num').textContent = currentQuestionIdx + 1;
  $('#quiz-question').textContent = q.q;
  const optionsEl = $('#quiz-options');
  const labels = ['A', 'B', 'C', 'D'];
  optionsEl.innerHTML = q.options.map((opt, i) => `
    <div class="quiz-option ${quizAnswers[currentQuestionIdx] === i ? 'selected' : ''}" data-idx="${i}">
      <div class="quiz-option__marker">${labels[i]}</div>
      <span>${opt}</span>
    </div>
  `).join('');

  // Click handler for options
  optionsEl.querySelectorAll('.quiz-option').forEach(el => {
    el.addEventListener('click', () => {
      quizAnswers[currentQuestionIdx] = parseInt(el.dataset.idx);
      showQuizQuestion(); // re-render to show selected
    });
  });

  // Button states
  $('#btn-quiz-prev').disabled = currentQuestionIdx === 0;
  const nextBtn = $('#btn-quiz-next');
  if (currentQuestionIdx === currentQuiz.questions.length - 1) {
    nextBtn.textContent = '✅ Nộp bài';
  } else {
    nextBtn.textContent = 'Tiếp →';
  }
}

function nextQuizQuestion() {
  if (!currentQuiz) return;
  if (currentQuestionIdx === currentQuiz.questions.length - 1) {
    submitQuiz();
  } else {
    currentQuestionIdx++;
    showQuizQuestion();
  }
}

function prevQuizQuestion() {
  if (currentQuestionIdx > 0) {
    currentQuestionIdx--;
    showQuizQuestion();
  }
}

function submitQuiz() {
  if (!currentQuiz) return;
  let correct = 0;
  currentQuiz.questions.forEach((q, i) => {
    if (quizAnswers[i] === q.answer) correct++;
  });
  const total = currentQuiz.questions.length;
  const percent = Math.round((correct / total) * 100);

  $('#quiz-modal').classList.add('hidden');

  const resultModal = $('#quiz-result-modal');
  let icon, title, desc;
  if (percent >= 80) {
    icon = '🎉'; title = 'Xuất sắc!'; desc = `Bạn đã vượt qua sát hạch "${currentQuiz.title}" với kết quả tuyệt vời! Trust Score +5 🛡️`;
  } else if (percent >= 60) {
    icon = '👍'; title = 'Khá tốt!'; desc = `Bạn nắm được kiến thức cơ bản. Hãy học thêm các khóa bên dưới để nâng cao. Trust Score +2 🛡️`;
  } else {
    icon = '📖'; title = 'Cần học thêm'; desc = `Đừng lo! Hãy đăng ký khóa học phù hợp bên dưới. Học offline, sync P2P — tiện lợi mọi lúc!`;
  }

  $('#quiz-result-icon').textContent = icon;
  $('#quiz-result-title').textContent = title;
  $('#quiz-result-desc').textContent = desc;
  $('#quiz-result-score').textContent = `${correct}/${total} (${percent}%)`;
  resultModal.classList.remove('hidden');

  // Sync result via Gun.js
  if (window._gun) {
    const devtrust = window._gun.get('devtrust-network');
    devtrust.get('quiz-results').get('user_' + Date.now()).put({
      quiz: currentQuiz.title,
      score: percent,
      timestamp: Date.now(),
      trustImpact: percent >= 80 ? 5 : percent >= 60 ? 2 : 0,
    });
  }
}

// ============ LEARNING TAB SWITCH ============
function switchLearningTab(tabId) {
  $$('.learning-tab').forEach(t => t.classList.remove('active'));
  $$('.learning-panel').forEach(p => p.classList.remove('active'));
  const tab = $(`.learning-tab[data-ltab="${tabId}"]`);
  const panel = $(`#panel-${tabId}`);
  if (tab) tab.classList.add('active');
  if (panel) panel.classList.add('active');

  // Lazy render
  if (tabId === 'courses' && !$('#course-grid').children.length) renderCourseGrid();
  if (tabId === 'bdhvs' && !$('#quiz-section').children.length) renderQuizSection();
  if (tabId === 'progress') renderLearningProgress();
}

// ============ GUN.JS LEARNING SYNC ============
function syncLearningProgress(course) {
  if (!window._gun) return;
  const devtrust = window._gun.get('devtrust-network');
  devtrust.get('learning-progress').get('course_' + course.id).put({
    courseId: course.id,
    title: course.title,
    progress: course.progress,
    completedLessons: course.lessons.filter(l => l.completed).length,
    totalLessons: course.lessons.length,
    timestamp: Date.now(),
  });
}

// ============ INIT (updated) ============
function init() {
  // Render initial content
  renderStories();
  renderPosts($('#feed-container'), POSTS);
  renderSuggestions();
  renderTrending();
  renderNotifDropdown();

  // Navigation
  $$('.sidebar__link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(link.dataset.view);
    });
  });

  // Logo click → feed
  $('#logo').addEventListener('click', () => switchView('feed'));

  // Create post modal
  $('#btn-open-post-modal').addEventListener('click', () => {
    $('#post-modal').classList.remove('hidden');
    setTimeout(() => $('#post-textarea').focus(), 100);
  });
  $('#btn-close-post-modal').addEventListener('click', () => {
    $('#post-modal').classList.add('hidden');
  });
  $('#post-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) $('#post-modal').classList.add('hidden');
  });
  $('#btn-submit-post').addEventListener('click', submitPost);

  // Post actions (like, comment, share)
  $('#feed-container').addEventListener('click', handlePostAction);
  document.addEventListener('keydown', handleCommentSubmit);

  // Notifications dropdown
  $('#btn-notifications').addEventListener('click', (e) => {
    e.stopPropagation();
    $('#dropdown-notif').classList.toggle('hidden');
  });
  document.addEventListener('click', () => {
    $('#dropdown-notif').classList.add('hidden');
  });

  // Theme toggle
  $('#btn-theme-toggle').addEventListener('click', toggleTheme);
  const settingsToggle = $('#settings-dark-toggle');
  if (settingsToggle) {
    settingsToggle.addEventListener('change', toggleTheme);
  }

  // Story modal
  $('#btn-close-story').addEventListener('click', () => {
    $('#story-modal').classList.add('hidden');
  });
  $('#story-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) $('#story-modal').classList.add('hidden');
  });
  $('#story-prev').addEventListener('click', () => {
    currentStoryIdx = Math.max(0, currentStoryIdx - 1);
    showStory();
  });
  $('#story-next').addEventListener('click', () => {
    currentStoryIdx = Math.min(STORIES.length - 1, currentStoryIdx + 1);
    showStory();
  });

  // Send message
  $('#btn-send-msg').addEventListener('click', sendMessage);
  $('#chat-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Messages top nav
  $('#btn-messages-top').addEventListener('click', () => switchView('messages'));

  // Nav avatar → profile
  $('#nav-avatar').addEventListener('click', () => switchView('profile'));

  // Profile posts
  renderPosts($('#profile-posts'), POSTS.slice(0, 3));

  // Explore tabs
  $$('.explore-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.explore-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Profile tabs
  $$('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.profile-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ============ E-LEARNING EVENTS ============
  // Learning tabs
  $$('.learning-tab').forEach(tab => {
    tab.addEventListener('click', () => switchLearningTab(tab.dataset.ltab));
  });

  // Hero buttons
  const startAssessBtn = $('#btn-start-assessment');
  if (startAssessBtn) {
    startAssessBtn.addEventListener('click', () => {
      switchLearningTab('bdhvs');
    });
  }
  const browseCourseBtn = $('#btn-browse-courses');
  if (browseCourseBtn) {
    browseCourseBtn.addEventListener('click', () => {
      switchLearningTab('courses');
    });
  }

  // Course modal
  const closeCourseModal = $('#btn-close-course-modal');
  if (closeCourseModal) {
    closeCourseModal.addEventListener('click', () => $('#course-modal').classList.add('hidden'));
  }
  const courseModal = $('#course-modal');
  if (courseModal) {
    courseModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) courseModal.classList.add('hidden');
    });
  }

  // Quiz modal
  const closeQuizModal = $('#btn-close-quiz-modal');
  if (closeQuizModal) {
    closeQuizModal.addEventListener('click', () => $('#quiz-modal').classList.add('hidden'));
  }
  const quizModal = $('#quiz-modal');
  if (quizModal) {
    quizModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) quizModal.classList.add('hidden');
    });
  }
  const quizNext = $('#btn-quiz-next');
  if (quizNext) quizNext.addEventListener('click', nextQuizQuestion);
  const quizPrev = $('#btn-quiz-prev');
  if (quizPrev) quizPrev.addEventListener('click', prevQuizQuestion);

  // Quiz result modal
  const quizResultModal = $('#quiz-result-modal');
  if (quizResultModal) {
    quizResultModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) quizResultModal.classList.add('hidden');
    });
  }
  const quizRetry = $('#btn-quiz-retry');
  if (quizRetry) {
    quizRetry.addEventListener('click', () => {
      quizResultModal.classList.add('hidden');
      if (currentQuiz) startQuiz(currentQuiz);
    });
  }
  const quizCourses = $('#btn-quiz-courses');
  if (quizCourses) {
    quizCourses.addEventListener('click', () => {
      quizResultModal.classList.add('hidden');
      switchLearningTab('courses');
    });
  }

  // Learning filter buttons
  $$('.learning-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.learning-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.textContent.trim();
      filterCourses(category);
    });
  });

  console.log('✨ DevTrust initialized successfully!');
  console.log('📚 E-Learning module loaded — Bình dân học vụ số ready!');
  console.log('🤝 Co-Founder Matching engine ready!');

  // ============ MOBILE BOTTOM NAV EVENTS ============
  $$('.bottom-nav__item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      if (view) {
        $$('.bottom-nav__item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        switchView(view);
      }
    });
  });

  // ============ CO-FOUNDER MATCHING EVENTS ============
  // Filter chips
  $$('.match-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filterType = chip.dataset.filter;
      const filterValue = chip.dataset.value;
      // Deactivate siblings
      $$(`[data-filter="${filterType}"]`).forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      matchFilters[filterType] = filterValue;
      filterMatchFeed();
    });
  });

  // Search input
  const matchSearchInput = $('#match-search-input');
  if (matchSearchInput) {
    matchSearchInput.addEventListener('input', (e) => {
      matchFilters.search = e.target.value.trim();
      filterMatchFeed();
    });
  }

  // Co-Founder modal close
  const closeCofounder = $('#btn-close-cofounder-modal');
  if (closeCofounder) {
    closeCofounder.addEventListener('click', () => $('#cofounder-modal').classList.add('hidden'));
  }
  const cofounderModal = $('#cofounder-modal');
  if (cofounderModal) {
    cofounderModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) cofounderModal.classList.add('hidden');
    });
  }

  // ============ FUND MODAL EVENTS ============
  const closeContributeModal = $('#btn-close-contribute-modal');
  if (closeContributeModal) {
    closeContributeModal.addEventListener('click', () => $('#contribute-modal').classList.add('hidden'));
  }
  const contributeModal = $('#contribute-modal');
  if (contributeModal) {
    contributeModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) contributeModal.classList.add('hidden');
    });
  }
  const closeIdeaModal = $('#btn-close-idea-modal');
  if (closeIdeaModal) {
    closeIdeaModal.addEventListener('click', () => $('#post-idea-modal').classList.add('hidden'));
  }

  // ============ GUN.JS P2P INTEGRATION ============
  initP2P();
}

// ============ COURSE FILTER ============
function filterCourses(category) {
  const container = $('#course-grid');
  container.innerHTML = '';
  const filtered = category === 'Tất cả' ? COURSES : COURSES.filter(c => c.category === category);
  if (filtered.length === 0) {
    container.innerHTML = '<div class="progress-empty"><div class="progress-empty__icon">🔍</div><h3>Không tìm thấy khóa học</h3><p>Thử chọn danh mục khác</p></div>';
    return;
  }
  filtered.forEach((course, idx) => {
    const circumference = 2 * Math.PI * 16;
    const offset = circumference - (course.progress / 100) * circumference;
    const el = document.createElement('div');
    el.className = 'course-card';
    el.style.animationDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <div class="course-card__cover">
        <div class="course-card__cover-gradient" style="background:${course.gradient}">${course.icon}</div>
        <div class="course-card__badges">
          ${course.offline ? '<span class="course-card__offline-badge">📥 Offline</span>' : ''}
          ${course.p2p ? '<span class="course-card__p2p-badge">🔗 P2P</span>' : ''}
        </div>
      </div>
      <div class="course-card__body">
        <div class="course-card__category">${course.category}</div>
        <div class="course-card__title">${course.title}</div>
        <div class="course-card__desc">${course.desc}</div>
        <div class="course-card__meta">
          <div class="course-card__teacher">
            <div class="avatar avatar--xs"><img src="${avatarUrl(course.teacher.seed)}" alt="" /></div>
            <div>
              <div class="course-card__teacher-name">${course.teacher.name}</div>
              <div class="course-card__teacher-trust">🛡️ ${course.teacher.trust}</div>
            </div>
          </div>
          ${course.progress > 0 ? `
          <div class="course-card__progress">
            <svg viewBox="0 0 36 36">
              <circle class="course-card__progress-bg" cx="18" cy="18" r="16" />
              <circle class="course-card__progress-fill" cx="18" cy="18" r="16"
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
            </svg>
            <div class="course-card__progress-text">${course.progress}%</div>
          </div>` : `
          <div class="course-card__stats">
            <div class="course-card__stat">👥 ${course.students.toLocaleString()}</div>
            <div class="course-card__stat">📖 ${course.lessons.length} bài</div>
          </div>`}
        </div>
      </div>
    `;
    el.addEventListener('click', () => openCourseModal(course));
    container.appendChild(el);
  });
}

// ============ VIEW SWITCHING (updated for learning) ============

// ============ 🗺️ DEVMAP ENGINE ============

const CODING_HOUSES = [
  {
    id: 'hn', name: 'Coding House Hà Nội',
    lat: 21.028, lng: 105.834,
    emoji: '🏠', color: '#6366f1',
    desc: 'Không gian làm việc P2P · 24/7 · 15 dev đang active',
    members: 15, wifi: true, coffee: true,
    address: 'Cầu Giấy, Hà Nội',
  },
  {
    id: 'dn', name: 'Coding House Đà Nẵng',
    lat: 16.054, lng: 108.202,
    emoji: '🏠', color: '#f59e0b',
    desc: 'Hub DevTrust miền Trung · Hackathon mỗi tháng · 8 dev',
    members: 8, wifi: true, coffee: true,
    address: 'Hải Châu, Đà Nẵng',
  },
  {
    id: 'sg', name: 'Coding House TP.HCM',
    lat: 10.762, lng: 106.660,
    emoji: '🏠', color: '#22c55e',
    desc: 'Lớn nhất · Startup office + P2P node · 23 dev',
    members: 23, wifi: true, coffee: true,
    address: 'Quận 1, TP.HCM',
  },
];

// Mock locations for each user (lat/lng near their city)
const USER_LOCATIONS = {
  1: { lat: 21.033, lng: 105.840 }, // Linh — HN
  2: { lat: 10.775, lng: 106.700 }, // Minh — SG
  3: { lat: 21.022, lng: 105.820 }, // Hương — HN
  4: { lat: 16.065, lng: 108.210 }, // Tuấn — ĐN
  5: { lat: 10.756, lng: 106.650 }, // Mai — SG
  6: { lat: 21.038, lng: 105.810 }, // Đức — HN
  7: { lat: 10.768, lng: 106.680 }, // Thảo — SG
  8: { lat: 16.058, lng: 108.195 }, // Khoa — ĐN
  9: { lat: 21.015, lng: 105.845 }, // Anh — HN
  10: { lat: 10.780, lng: 106.665 }, // Quỳnh — SG
};

let _devMap = null;

function initDevMap() {
  if (typeof L === 'undefined') {
    $('#devmap-container').innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-secondary)">🗺️ Đang tải bản đồ...</div>';
    return;
  }
  if (_devMap) {
    _devMap.invalidateSize();
    return;
  }

  // Init Leaflet map centered on Vietnam
  _devMap = L.map('devmap-container', {
    center: [16.0, 107.0],
    zoom: 6,
    zoomControl: true,
  });

  // Dark tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18,
  }).addTo(_devMap);

  // Add Coding House markers
  CODING_HOUSES.forEach(house => {
    const houseIcon = L.divIcon({
      className: '',
      html: `<div class="map-house-marker" style="background:${house.color}">${house.emoji}</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });
    const marker = L.marker([house.lat, house.lng], { icon: houseIcon }).addTo(_devMap);
    marker.bindPopup(`
      <div class="map-popup">
        <div class="map-popup__title">${house.name}</div>
        <div class="map-popup__desc">${house.desc}</div>
        <div class="map-popup__meta">📍 ${house.address} · 👥 ${house.members} devs</div>
        <button class="map-popup__btn" onclick="showToast('🏠 Đã lưu ${house.name} vào danh sách!', \'success\')">+ Lưu địa điểm</button>
      </div>
    `);
  });

  // Add user markers
  let onlineCount = 0;
  USERS.forEach(user => {
    const loc = USER_LOCATIONS[user.id];
    if (!loc) return;
    if (user.online) onlineCount++;

    const color = user.trustScore >= 80 ? '#10b981' : user.trustScore >= 50 ? '#f59e0b' : '#64748b';
    const userIcon = L.divIcon({
      className: '',
      html: `<div class="map-user-marker" style="border-color:${color};${user.online ? 'animation:map-pulse 2s infinite' : ''}">
        <img src="${avatarUrl(user.seed)}" alt="" style="width:100%;height:100%;border-radius:50%" />
        ${user.online ? '<span class="map-online-dot"></span>' : ''}
      </div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
    const marker = L.marker([loc.lat + (Math.random() - 0.5) * 0.02, loc.lng + (Math.random() - 0.5) * 0.02], { icon: userIcon }).addTo(_devMap);
    marker.bindPopup(`
      <div class="map-popup">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <img src="${avatarUrl(user.seed)}" style="width:36px;height:36px;border-radius:50%;border:2px solid ${color}" />
          <div>
            <div class="map-popup__title" style="margin:0">${user.name}</div>
            <div style="font-size:11px;color:${color}">🛡️ ${user.trustScore} · ${user.role}</div>
          </div>
        </div>
        <div class="map-popup__desc">${user.goals}</div>
        <div class="map-popup__meta">📍 ${user.location} · ⏰ ${user.availableHours}</div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <button class="map-popup__btn" onclick="openCofounderModal(${user.id});this.closest('.leaflet-popup').querySelector('.leaflet-popup-close-button').click()">👤 Xem profile</button>
          <button class="map-popup__btn map-popup__btn--msg" onclick="sendMatchMessage(${user.id})">💬 Nhắn tin</button>
        </div>
      </div>
    `);
  });

  // Update stats
  const devCountEl = $('#devmap-dev-count');
  const onlineCountEl = $('#devmap-online-count');
  if (devCountEl) devCountEl.textContent = USERS.length;
  if (onlineCountEl) onlineCountEl.textContent = onlineCount;

  // Render sidebar
  renderCodingHousesSidebar();
  renderNearbyDevsSidebar();
}

function renderCodingHousesSidebar() {
  const container = $('#coding-houses-list');
  if (!container) return;
  container.innerHTML = CODING_HOUSES.map(h => `
    <div class="coding-house-item" style="border-left:3px solid ${h.color}" onclick="_devMap && _devMap.flyTo([${h.lat},${h.lng}], 13)">
      <div class="coding-house-item__name">${h.emoji} ${h.name}</div>
      <div class="coding-house-item__meta">👥 ${h.members} devs · 📍 ${h.address}</div>
    </div>
  `).join('');
}

function renderNearbyDevsSidebar() {
  const container = $('#nearby-devs-list');
  if (!container) return;
  const sorted = [...USERS].sort((a, b) => b.trustScore - a.trustScore).slice(0, 5);
  container.innerHTML = sorted.map(u => `
    <div class="nearby-dev-item" onclick="openCofounderModal(${u.id})">
      <img class="nearby-dev-avatar" src="${avatarUrl(u.seed)}" />
      <div class="nearby-dev-info">
        <div class="nearby-dev-name">${u.name}</div>
        <div class="nearby-dev-meta">🛡️ ${u.trustScore} · ${u.location}</div>
      </div>
      ${u.online ? '<span class="nearby-dev-online"></span>' : ''}
    </div>
  `).join('');
}

// ============ 🏆 LEADERBOARD ENGINE ============

function renderLeaderboard() {
  const container = $('#leaderboard-list');
  if (!container) return;

  // Compute scores: trustScore + contribution points
  const scored = USERS.map(u => {
    const contribs = FUND_IDEAS.reduce((sum, idea) => {
      return sum + idea.contributions
        .filter(c => c.userId === u.id)
        .reduce((s, c) => s + c.points, 0);
    }, 0);
    return { ...u, totalPoints: u.trustScore * 10 + contribs, contribs };
  }).sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 5);

  const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
  container.innerHTML = scored.map((u, i) => `
    <div class="leaderboard-item" onclick="openCofounderModal(${u.id})">
      <span class="leaderboard-item__medal">${medals[i]}</span>
      <img class="leaderboard-item__avatar" src="${avatarUrl(u.seed)}" />
      <div class="leaderboard-item__info">
        <div class="leaderboard-item__name">${u.name}</div>
        <div class="leaderboard-item__role">${u.role}</div>
      </div>
      <div class="leaderboard-item__score">
        <div class="leaderboard-item__trust">🛡️ ${u.trustScore}</div>
        ${u.contribs > 0 ? `<div class="leaderboard-item__pts">+${u.contribs.toLocaleString()}đ</div>` : ''}
      </div>
    </div>
  `).join('');
}

// ============ 🎯 BOUNTY BOARD ENGINE ============

const BOUNTIES = [
  { id: 1, icon: '💻', title: 'Build chat plugin P2P (WebRTC)', reward: '15% revenue', difficulty: 3, category: 'dev', status: 'open' },
  { id: 2, icon: '📱', title: 'Mobile app wrapper (Flutter)', reward: '20% equity', difficulty: 4, category: 'dev', status: 'open' },
  { id: 3, icon: '🤖', title: 'Teacher Trust Score plugin', reward: '10% revenue', difficulty: 2, category: 'dev', status: 'open' },
  { id: 4, icon: '📚', title: 'Course marketplace (publish/sell)', reward: '20% equity', difficulty: 4, category: 'dev', status: 'hot' },
  { id: 5, icon: '🎓', title: 'Certificate generation (trust-based)', reward: 'Trust 85+', difficulty: 2, category: 'design', status: 'open' },
  { id: 6, icon: '⚡', title: 'Offline sync optimizer (CRDT)', reward: '15% revenue', difficulty: 4, category: 'dev', status: 'open' },
  { id: 7, icon: '🎨', title: 'UI/UX thiết kế thêm screens', reward: 'Trust 85+', difficulty: 1, category: 'design', status: 'open' },
  { id: 8, icon: '🌾', title: 'Build offline lesson downloader', reward: '15% revenue', difficulty: 3, category: 'dev', status: 'open' },
];

function renderBountyBoard() {
  const container = $('#bounty-list');
  const totalEl = $('#bounty-total');
  if (!container) return;
  if (totalEl) totalEl.textContent = BOUNTIES.length + ' bounties';

  container.innerHTML = BOUNTIES.map(b => `
    <div class="bounty-card">
      <div class="bounty-card__icon">${b.icon}</div>
      <div class="bounty-card__info">
        <div class="bounty-card__title">${b.title}</div>
        <div class="bounty-card__meta">
          ${'⭐'.repeat(b.difficulty)} · <span class="bounty-category">${b.category === 'dev' ? '💻 Dev' : '🎨 Design'}</span>
        </div>
      </div>
      <div class="bounty-card__right">
        <div class="bounty-reward">${b.reward}</div>
        ${b.status === 'hot' ? '<span class="bounty-hot">🔥 HOT</span>' : ''}
        <button class="btn btn--primary btn--sm bounty-claim-btn" onclick="claimBounty(${b.id})">Claim</button>
      </div>
    </div>
  `).join('');
}

function claimBounty(id) {
  const bounty = BOUNTIES.find(b => b.id === id);
  if (!bounty) return;
  const btn = document.querySelector(`.bounty-claim-btn[onclick*="claimBounty(${id})"]`);
  if (btn) {
    btn.textContent = 'Đã claim!';
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.style.background = '#22c55e';
  }
  showToast(`🎯 Đã claim bounty "${bounty.title}"! Check Messages để nhận task.`, 'success');
}

// ============ 🔔 SMART NOTIFICATIONS ENGINE ============

// Extend NOTIFICATIONS with connection requests
const SMART_NOTIFICATIONS = [
  { type: 'connection_request', icon: '🤝', userId: 3, text: '<strong>Hương Phạm</strong> muốn kết nối — AI Lead · Trust 91 · 5 năm kinh nghiệm', time: '3 phút trước', unread: true, actionable: true },
  { type: 'connection_request', icon: '🤝', userId: 4, text: '<strong>Tuấn Vũ</strong> gửi lời mời co-founder — P2P Protocol Architect · Trust 95', time: '12 phút trước', unread: true, actionable: true },
  ...NOTIFICATIONS,
];

function renderSmartNotifications() {
  const container = $('#notifications-list');
  if (!container) return;
  container.innerHTML = '';
  SMART_NOTIFICATIONS.forEach((notif, idx) => {
    const el = document.createElement('div');
    el.className = `notif-item ${notif.unread ? 'notif-item--unread' : ''} ${notif.actionable ? 'notif-item--actionable' : ''}`;
    const iconClass = `notif-item__icon--${notif.type}`;
    el.innerHTML = `
      <div class="notif-item__icon ${iconClass}">${notif.icon}</div>
      <div class="notif-item__body">
        <p>${notif.text}</p>
        <time>${notif.time}</time>
        ${notif.actionable ? `
          <div class="notif-actions" id="notif-actions-${idx}">
            <button class="notif-btn notif-btn--accept" onclick="acceptConnection(${notif.userId}, ${idx})">✓ Chấp nhận</button>
            <button class="notif-btn notif-btn--decline" onclick="declineConnection(${notif.userId}, ${idx})">✕ Từ chối</button>
          </div>` : ''}
      </div>
    `;
    container.appendChild(el);
  });
}

function acceptConnection(userId, idx) {
  const user = getUser(userId);
  const actionsEl = $(`#notif-actions-${idx}`);
  if (actionsEl) {
    actionsEl.innerHTML = '<span class="notif-status notif-status--accepted">✅ Đã kết nối!</span>';
  }
  // Add to chat list
  const existingChat = CHATS.find(c => c.userId === userId);
  if (!existingChat && user) {
    CHATS.unshift({
      userId,
      messages: [
        { from: 'them', text: 'Xin chào! Mình rất vui được kết nối với bạn trên DevTrust 🤝', time: new Date().toLocaleTimeString('vi', {hour:'2-digit',minute:'2-digit'}) }
      ],
      unread: true,
      lastTime: 'Vừa xong'
    });
    // Reset chat list so it re-renders
    const chatList = $('#chat-list');
    if (chatList) chatList.innerHTML = '';
  }
  showToast(`🤝 Đã chấp nhận kết nối với ${user ? user.name : 'người dùng'}! Bắt đầu trò chuyện ngay.`, 'success');
}

function declineConnection(userId, idx) {
  const user = getUser(userId);
  const actionsEl = $(`#notif-actions-${idx}`);
  if (actionsEl) {
    actionsEl.innerHTML = '<span class="notif-status notif-status--declined">Đã từ chối</span>';
  }
  showToast(`Đã từ chối lời mời từ ${user ? user.name : 'người dùng'}.`, 'success');
}

// ============ GUN.JS P2P LAYER ============
function initP2P() {
  if (typeof Gun === 'undefined') {
    console.warn('Gun.js not loaded — P2P features disabled (offline mode)');
    updateP2PStatus(0, false);
    // Simulate peer discovery in demo
    simulatePeers();
    return;
  }

  try {
    const gun = Gun({
      peers: ['https://gun-manhattan.herokuapp.com/gun'],
      localStorage: true
    });

    window._gun = gun;
    const devtrust = gun.get('devtrust-network');

    // Track peers
    let peerCount = 0;
    gun.on('hi', () => {
      peerCount++;
      updateP2PStatus(peerCount, true);
      if (peerCount === 1) {
        showToast('🔗 Kết nối P2P thành công!', 'success');
      }
    });
    gun.on('bye', () => {
      peerCount = Math.max(0, peerCount - 1);
      updateP2PStatus(peerCount, peerCount > 0);
    });

    // Sync posts via Gun
    devtrust.get('posts').map().on((data, key) => {
      if (!data || !data.content) return;
      // Check if post already exists locally
      if (POSTS.find(p => p.gunKey === key)) return;

      const p2pPost = {
        id: POSTS.length + 100,
        gunKey: key,
        userId: 0,
        content: data.content,
        image: null,
        likes: data.likes || 0,
        comments: 0,
        shares: 0,
        reactions: ['🔗'],
        time: 'P2P sync',
        commentList: []
      };

      const ownerUser = { id: 0, name: data.author || 'P2P User', seed: 'owner', online: true, trustScore: data.trustScore || 50 };
      if (!USERS.find(u => u.id === 0)) USERS.unshift(ownerUser);

      POSTS.unshift(p2pPost);
      renderPosts($('#feed-container'), POSTS);
    });

    // Override submitPost to also sync to Gun
    const origSubmit = submitPost;
    window._gunSyncPost = function(content) {
      const key = 'post_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      devtrust.get('posts').get(key).put({
        content: content,
        author: 'David Cuong',
        trustScore: 92,
        likes: 0,
        timestamp: Date.now()
      });
    };

    console.log('🔗 Gun.js P2P layer initialized');
  } catch (err) {
    console.warn('Gun.js init failed:', err);
    simulatePeers();
  }
}

function updateP2PStatus(count, connected) {
  const el = $('#p2p-status');
  const countEl = $('#p2p-peers-count');
  if (el) el.classList.toggle('connected', connected);
  if (countEl) countEl.textContent = count;
}

function simulatePeers() {
  // Simulate P2P peer discovery for demo
  let peers = 0;
  const interval = setInterval(() => {
    peers += Math.floor(Math.random() * 2) + 1;
    if (peers > 7) peers = 3 + Math.floor(Math.random() * 5);
    updateP2PStatus(peers, true);
    if (peers >= 3 && peers <= 4) {
      clearInterval(interval);
      showToast('🔗 Đã kết nối ' + peers + ' peers P2P!', 'success');
    }
  }, 2000);
}

// Patch submitPost to also sync via Gun
const _origSubmitPost = submitPost;
submitPost = function() {
  const textarea = $('#post-textarea');
  const content = textarea ? textarea.value.trim() : '';
  _origSubmitPost();
  if (content && window._gunSyncPost) {
    window._gunSyncPost(content);
  }
};

// ============ 🤝 TEAM BOND & APPRECIATION ENGINE ============
// "Giúp các bạn trân trọng hơn những người chiến hữu bên cạnh"
// "Không vì bốc đồng mà bỏ bạn bè đội ngũ"

const KUDOS_TYPES = [
  { emoji: '🔥', label: 'Nhiệt huyết', desc: 'Luôn hết mình với team' },
  { emoji: '💡', label: 'Ý tưởng hay', desc: 'Mang lại những insight giá trị' },
  { emoji: '🛡️', label: 'Đáng tin cậy', desc: 'Luôn giữ cam kết với team' },
  { emoji: '⚡', label: 'Hiệu quả cao', desc: 'Giao việc xong đúng hẹn' },
  { emoji: '🤗', label: 'Đồng đội tốt', desc: 'Luôn hỗ trợ mọi người' },
  { emoji: '🌱', label: 'Cầu tiến', desc: 'Liên tục học hỏi và phát triển' },
];

// Simulated kudos data
const KUDOS_GIVEN = {
  1: [{ from: 2, type: 0, note: 'Linh luôn deliver đúng deadline, cảm ơn bạn!' }, { from: 3, type: 2, note: '' }],
  2: [{ from: 1, type: 3, note: 'Minh refactor code cực nhanh và clean!' }],
  3: [{ from: 1, type: 1, note: 'Hương có insight AI rất sâu sắc' }, { from: 4, type: 4, note: '' }],
  4: [{ from: 2, type: 0, note: 'Tuấn P2P expert thực sự!' }, { from: 3, type: 2, note: 'Rất đáng tin' }],
  5: [{ from: 1, type: 4, note: 'Mai luôn sẵn sàng giúp đỡ mọi người' }],
};

// Get days since joined (simulated)
function getDaysTogether(userId) {
  const bases = { 1: 42, 2: 38, 3: 67, 4: 15, 5: 28, 6: 53, 7: 9, 8: 71, 9: 31, 10: 22 };
  return bases[userId] || Math.floor(Math.random() * 60) + 7;
}

function getKudosCount(userId) {
  return (KUDOS_GIVEN[userId] || []).length;
}

// Team Bond Score: based on days + kudos + trust
function getTeamBondScore(userId) {
  const days = getDaysTogether(userId);
  const kudos = getKudosCount(userId) * 5;
  const u = getUser(userId);
  const trust = u ? Math.floor(u.trustScore / 10) : 0;
  return Math.min(100, days + kudos + trust);
}

// Open Kudos modal — send appreciation to a teammate
function openKudosModal(toUserId) {
  const toUser = getUser(toUserId);
  if (!toUser) return;
  $('#kudos-modal')?.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'kudos-modal';
  const days = getDaysTogether(toUserId);
  const existingKudos = KUDOS_GIVEN[toUserId] || [];
  const bondScore = getTeamBondScore(toUserId);

  modal.innerHTML = `
    <div class="modal card kudos-modal-inner">
      <div class="modal__header">
        <h3>🙏 Gửi lời tri ân đến ${toUser.name}</h3>
        <button class="modal__close" onclick="document.getElementById('kudos-modal').remove()">✕</button>
      </div>
      <div class="kudos-modal-body">

        <!-- Team Bond Status -->
        <div class="bond-status-card">
          <div class="bond-status-left">
            <img class="bond-avatar" src="${avatarUrl(toUser.seed)}" />
            <div>
              <div class="bond-name">${toUser.name}</div>
              <div class="bond-role">${toUser.role}</div>
            </div>
          </div>
          <div class="bond-stats">
            <div class="bond-stat">
              <div class="bond-stat__val">${days}</div>
              <div class="bond-stat__label">Ngày đồng hành</div>
            </div>
            <div class="bond-stat">
              <div class="bond-stat__val">${toUser.trustScore}</div>
              <div class="bond-stat__label">Trust Score</div>
            </div>
            <div class="bond-stat">
              <div class="bond-stat__val" style="color:var(--success)">${bondScore}</div>
              <div class="bond-stat__label">Bond Score</div>
            </div>
          </div>
        </div>

        <!-- Existing kudos they received -->
        ${existingKudos.length > 0 ? `
        <div class="kudos-received">
          <div class="kudos-received__label">💌 Đã nhận được:</div>
          <div class="kudos-received__list">
            ${existingKudos.map(k => {
              const fromUser = getUser(k.from);
              const kt = KUDOS_TYPES[k.type];
              return `<div class="kudos-pill">${kt.emoji} ${kt.label}${k.note ? ` · <em>${k.note}</em>` : ''}</div>`;
            }).join('')}
          </div>
        </div>` : ''}

        <!-- Choose kudos type -->
        <div class="kudos-section">
          <div class="kudos-section-label">Bạn muốn khen điều gì?</div>
          <div class="kudos-types-grid" id="kudos-types-grid">
            ${KUDOS_TYPES.map((kt, i) => `
              <button class="kudos-type-btn" data-idx="${i}" onclick="selectKudosType(this)">
                <span class="kudos-type-emoji">${kt.emoji}</span>
                <span class="kudos-type-label">${kt.label}</span>
                <span class="kudos-type-desc">${kt.desc}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Personal note -->
        <div class="kudos-section">
          <div class="kudos-section-label">✍️ Lời nhắn cá nhân <small style="opacity:.5">(tuỳ chọn)</small></div>
          <textarea class="form-input" id="kudos-note" rows="2"
            placeholder="VD: Cảm ơn bạn đã luôn ở đây khi team cần, mình rất trân trọng điều đó..."></textarea>
        </div>

        <button class="kudos-submit-btn" id="kudos-submit-btn" onclick="submitKudos(${toUserId})" disabled style="opacity:0.4;cursor:not-allowed">
          💌 Gửi lời tri ân
        </button>

        <!-- Anti-churn reminder -->
        <div class="bond-reminder">
          💡 <strong>Nhắc nhở:</strong> Chia sẻ sự trân trọng thường xuyên — team gắn kết hơn, dự án thành công hơn.
          Đừng để những điều tốt đẹp chỉ nằm trong lòng.
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

let _selectedKudosType = null;
function selectKudosType(btn) {
  document.querySelectorAll('.kudos-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _selectedKudosType = parseInt(btn.dataset.idx);
  const submitBtn = $('#kudos-submit-btn');
  if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; submitBtn.style.cursor = 'pointer'; }
}

function submitKudos(toUserId) {
  if (_selectedKudosType === null) return;
  const toUser = getUser(toUserId);
  const kt = KUDOS_TYPES[_selectedKudosType];
  const note = $('#kudos-note')?.value.trim() || '';

  // Add kudos
  if (!KUDOS_GIVEN[toUserId]) KUDOS_GIVEN[toUserId] = [];
  KUDOS_GIVEN[toUserId].push({ from: 0, type: _selectedKudosType, note });

  $('#kudos-modal')?.remove();
  _selectedKudosType = null;

  showToast(`💌 Đã gửi lời tri ân "${kt.emoji} ${kt.label}" đến ${toUser?.name}! Trust đôi bên tăng lên.`, 'success');

  // Confetti-style toast
  setTimeout(() => {
    showToast(`🎉 ${toUser?.name} vừa nhận được lời khen từ bạn — họ sẽ trân trọng điều này!`, 'success');
  }, 2500);
}

// Anti-churn: show what they'd lose before leaving a project
function showLeaveConfirmation(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  if (!idea) return;
  const pts = idea.contributions.filter(c => c.userId === 0).reduce((s,c) => s+c.points, 0);
  const daysIn = 14; // simulated
  const teamSize = idea.members.length;

  $('#leave-confirm-modal')?.remove();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'leave-confirm-modal';
  modal.innerHTML = `
    <div class="modal card leave-confirm-inner">
      <div class="leave-confirm-emoji">⚠️</div>
      <h3 class="leave-confirm-title">Bạn có thực sự muốn rời đội?</h3>
      <p class="leave-confirm-sub">Hãy dừng lại 30 giây trước khi quyết định.</p>

      <div class="leave-what-you-lose">
        <div class="leave-lose-title">Nếu bạn rời đi bây giờ, bạn sẽ mất:</div>
        <div class="leave-lose-item">💎 <strong>${pts.toLocaleString()} điểm equity</strong> bạn đã tích lũy trong ${daysIn} ngày</div>
        <div class="leave-lose-item">🤝 <strong>${teamSize} người đồng đội</strong> đang tin tưởng vào bạn</div>
        <div class="leave-lose-item">📉 <strong>Trust Score giảm -15 điểm</strong> vì reputation bị ảnh hưởng</div>
        <div class="leave-lose-item">⏱️ <strong>${daysIn} ngày</strong> cùng nhau xây dựng — xóa bỏ tất cả</div>
      </div>

      <div class="leave-team-preview">
        <div class="leave-team-label">Những người đang cần bạn:</div>
        <div class="leave-team-avatars">
          ${idea.members.filter(uid => uid !== 0).slice(0,5).map(uid => {
            const u = getUser(uid);
            return u ? `
              <div class="leave-team-member">
                <img src="${avatarUrl(u.seed)}" />
                <span>${u.name.split(' ').pop()}</span>
              </div>` : '';
          }).join('')}
        </div>
      </div>

      <div class="leave-alternatives">
        <div class="leave-alternatives-label">💡 Thay vì bỏ đi, hãy thử:</div>
        <button class="leave-alt-btn" onclick="openKudosModal(${idea.founderId});document.getElementById('leave-confirm-modal').remove()">
          💌 Gửi feedback cho founder
        </button>
        <button class="leave-alt-btn" onclick="switchView('messages');document.getElementById('leave-confirm-modal').remove()">
          💬 Nói chuyện trực tiếp với team
        </button>
        <button class="leave-alt-btn" onclick="document.getElementById('leave-confirm-modal').remove()">
          ⏸️ Giảm commitment (pause, không bỏ)
        </button>
      </div>

      <div class="leave-confirm-actions">
        <button class="btn btn--glass" onclick="document.getElementById('leave-confirm-modal').remove()">
          ← Quay lại — Tôi muốn ở lại
        </button>
        <button class="btn leave-confirm-btn" onclick="confirmLeaveProject(${ideaId})">
          Vẫn rời đội
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function confirmLeaveProject(ideaId) {
  const idea = FUND_IDEAS.find(i => i.id === ideaId);
  $('#leave-confirm-modal')?.remove();
  showToast(`Đã rời "${idea?.name}". Trust Score -15. Chúc bạn mọi điều tốt lành.`, 'success');
}

// Inject "Kudos" button into cofounder modal when it opens
const _origOpenCofounder = openCofounderModal;
window.openCofounderModal = function(userId) {
  _origOpenCofounder(userId);
  // After modal opens, inject kudos + bond info
  setTimeout(() => {
    const modal = $('#cofounder-modal');
    if (!modal) return;
    const footer = modal.querySelector('.cofounder-modal__actions') || modal.querySelector('.modal__footer');
    if (!footer) return;
    // Check if kudos btn already added
    if (footer.querySelector('.kudos-inject-btn')) return;
    const kudosBtn = document.createElement('button');
    kudosBtn.className = 'btn btn--glass kudos-inject-btn';
    kudosBtn.innerHTML = `💌 Gửi Kudos`;
    kudosBtn.onclick = () => { openKudosModal(userId); };
    footer.appendChild(kudosBtn);

    // Inject bond score
    const days = getDaysTogether(userId);
    const bond = getTeamBondScore(userId);
    const kudos = getKudosCount(userId);
    const bondEl = document.createElement('div');
    bondEl.className = 'cofounder-bond-row';
    bondEl.innerHTML = `
      <div class="bond-mini-stat">🗓️ <strong>${days}</strong> ngày đồng hành</div>
      <div class="bond-mini-stat">💌 <strong>${kudos}</strong> kudos nhận được</div>
      <div class="bond-mini-stat" style="color:var(--success)">🔗 Bond <strong>${bond}</strong></div>
    `;
    footer.parentElement.insertBefore(bondEl, footer);
  }, 100);
};


// ============ INDUSTRIAL TECH HUB ENGINE ============

function renderIndustrialHub() {
  const container = $('#industrial-appraisal-grid');
  if (!container) return;

  container.innerHTML = `
    <div class="industrial-sub-section" style="width: 100%;">
      <h4 style="margin-bottom:1rem;color:var(--text-secondary)">🏭 Thiết bị & Máy móc Cần Định giá (Đồng hành cùng Chú Toán & Anh Chính)</h4>
      <div class="travel-grid">
        ${INDUSTRIAL_EQUIPMENT.map(eq => `
          <div class="travel-card card">
            <div class="travel-card__icon">${eq.icon}</div>
            <div class="travel-card__body">
              <div class="travel-country">${eq.name}</div>
              <div class="travel-category">${eq.category}</div>
              <div class="travel-meta">Giá trị thực: <strong>${eq.value}</strong></div>
              <div class="travel-provider">Đối tác thẩm định: <strong>${eq.provider}</strong></div>
              <div class="trust-badge-inline" style="background:${eq.status === 'Đã thẩm định' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)'};color:${eq.status === 'Đã thẩm định' ? '#10b981' : '#f59e0b'}">
                ${eq.status}
              </div>
            </div>
            <button class="btn btn--glass btn--sm" onclick="openAIShoppingAssistant('Hỗ trợ thẩm định ${eq.name}')">
              🤝 Hỗ trợ Định giá
            </button>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="industrial-sub-section" style="margin-top:2rem; width: 100%;">
      <h4 style="margin-bottom:1rem;color:var(--text-secondary)">🏗️ Vật tư Nhà máy & Linh kiện (Ươm mầm Phát triển)</h4>
      <div class="travel-grid">
        ${INDUSTRIAL_SUPPLIES.map(sup => `
          <div class="travel-card card">
            <div class="travel-card__icon">${sup.icon}</div>
            <div class="travel-card__body">
              <div class="travel-country">${sup.name}</div>
              <div class="travel-category">${sup.category}</div>
              <div class="travel-meta">Đơn vị: ${sup.unit} · Giá hỗ trợ: <strong>${sup.price}</strong></div>
            </div>
            <button class="btn btn--glass btn--sm" onclick="openAIShoppingAssistant('Cung ứng vật tư ${sup.name}')">
              📦 Hỗ trợ Cung ứng
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============ HACKATHON ENGINE ============

function renderHackathons() {
  const container = $('#hackathon-grid');
  if (!container) return;

  container.innerHTML = HACK_GRANTS.map(grant => `
    <div class="hack-card card" style="border-top: 4px solid ${grant.color}">
      <div class="hack-card__header">
        <div class="hack-host">${grant.host}</div>
        <div class="hack-deadline">Ends: ${grant.deadline}</div>
      </div>
      <h3 class="hack-title">${grant.title}</h3>
      <p class="hack-desc">${grant.desc}</p>
      <div class="hack-reward">💰 Reward: <strong>${grant.reward}</strong></div>
      <div class="hack-tags">
        ${grant.tags.map(t => `<span class="hack-tag">${t}</span>`).join('')}
      </div>
      <button class="btn btn--primary btn--sm" style="width:100%;margin-top:1rem" onclick="showToast('Hackathon Portal đang mở đăng ký!', 'success')">
        🚀 Tham gia Hackathon
      </button>
    </div>
  `).join('');
}

// ============ TRAVEL HUB ENGINE ============

function renderTravelHub() {
  const visaGrid = $('#visa-grid');
  const stayGrid = $('#stay-grid');
  if (!visaGrid || !stayGrid) return;

  visaGrid.innerHTML = VISA_SERVICES.map(service => `
    <div class="travel-card card">
      <div class="travel-card__icon">${service.icon}</div>
      <div class="travel-card__body">
        <div class="travel-country">${service.country}</div>
        <div class="travel-category">${service.category}</div>
        <div class="travel-meta">⏱️ ${service.time} · 💳 ${service.price}</div>
        <div class="travel-provider">Provider: <strong>${service.provider}</strong></div>
      </div>
      <button class="btn btn--glass btn--sm" onclick="openAIShoppingAssistant('Visa ${service.country}')">
        Hỗ trợ Visa
      </button>
    </div>
  `).join('');

  stayGrid.innerHTML = STAY_SERVICES.map(service => `
    <div class="travel-card card">
      <div class="travel-card__icon">${service.icon}</div>
      <div class="travel-card__body">
        <div class="travel-country">${service.name}</div>
        <div class="travel-category">${service.location}</div>
        <div class="travel-meta">${service.desc}</div>
        <div class="travel-provider">💰 ${service.price}</div>
      </div>
      <button class="btn btn--glass btn--sm" onclick="openAIShoppingAssistant('Stay at ${service.name}')">
        Đặt chỗ ngay
      </button>
    </div>
  `).join('');
}

// ============ AI SHOPPING ASSISTANT (Shopping GPT) ============

function openAIShoppingAssistant(context) {
  switchView('messages');
  renderChatMessages({
    userId: 999, // AI Assistant ID
    messages: [
      { from: 'them', text: `Xin chào chiến hữu! Tôi là AI Assistant của DevTrust. Tôi thấy bạn đang quan tâm đến **${context}**.`, time: 'Vừa xong' },
      { from: 'them', text: 'Tôi có thể hỗ trợ bạn xử lý giấy tờ, đặt chỗ hoặc kết nối trực tiếp với đại diện GreenCanal. Bạn muốn bắt đầu từ đâu?', time: 'Vừa xong' }
    ]
  });
  $('#chat-header').innerHTML = `
    <div class="messages-chat__user">
      <div class="avatar avatar--sm online"><img src="https://api.dicebear.com/7.x/bottts/svg?seed=ai" alt="" /></div>
      <div>
        <h4>DevTrust AI Shopping 🛍️</h4>
        <span>Đang hoạt động · GPT-4o Power</span>
      </div>
    </div>
  `;
}

// ============ 🏆 CERTIFICATE GENERATION SYSTEM ============

const CERTIFICATES = [
  { id: 'cert-1', courseId: 'ai', courseName: 'AI Cơ bản cho người mới', studentName: 'David Cuong', score: 92, date: '2026-03-10', trustScore: 92, verifyCode: 'DT-AI-2026-0392', issuer: 'DevTrust Academy', level: 'Cơ bản', hours: 12 },
  { id: 'cert-2', courseId: 'digital', courseName: 'Kỹ năng số cho mọi người', studentName: 'David Cuong', score: 88, date: '2026-02-28', trustScore: 90, verifyCode: 'DT-DIG-2026-0288', issuer: 'DevTrust Academy', level: 'Cơ bản', hours: 8 },
  { id: 'cert-3', courseId: 'python', courseName: 'Lập trình Python từ 0', studentName: 'David Cuong', score: 95, date: '2026-03-14', trustScore: 92, verifyCode: 'DT-PY-2026-0495', issuer: 'DevTrust Academy', level: 'Trung cấp', hours: 24 },
];

function generateCertificate(courseId, courseName, score) {
  if (score < 80) return null;
  const certId = `cert-${Date.now()}`;
  const verifyCode = `DT-${courseId.toUpperCase().slice(0,3)}-2026-${String(Math.floor(Math.random()*10000)).padStart(4,'0')}`;
  const cert = {
    id: certId, courseId, courseName,
    studentName: 'David Cuong', score,
    date: new Date().toISOString().split('T')[0],
    trustScore: 92, verifyCode,
    issuer: 'DevTrust Academy',
    level: score >= 90 ? 'Xuất sắc' : 'Đạt chuẩn',
    hours: Math.floor(Math.random() * 20) + 8,
  };
  CERTIFICATES.push(cert);
  return cert;
}

function renderCertificateGallery() {
  const container = $('#cert-gallery');
  if (!container) return;
  if (CERTIFICATES.length === 0) {
    container.innerHTML = '<div class="cert-empty"><p>Chưa có chứng chỉ nào. Hoàn thành khóa học và đạt ≥80% để nhận chứng chỉ! 🎯</p></div>';
    return;
  }
  container.innerHTML = CERTIFICATES.map(cert => {
    const levelColor = cert.score >= 90 ? '#10b981' : cert.score >= 85 ? '#f59e0b' : '#6366f1';
    return `
    <div class="cert-card" onclick="openCertificateModal('${cert.id}')">
      <div class="cert-card__hologram"></div>
      <div class="cert-card__badge" style="background:${levelColor}22;color:${levelColor}">🏆 ${cert.level}</div>
      <div class="cert-card__icon">📜</div>
      <div class="cert-card__name">${cert.courseName}</div>
      <div class="cert-card__score" style="color:${levelColor}">${cert.score}%</div>
      <div class="cert-card__date">${cert.date}</div>
      <div class="cert-card__verify">🛡️ ${cert.verifyCode}</div>
    </div>`;
  }).join('');
}

function openCertificateModal(certId) {
  const cert = CERTIFICATES.find(c => c.id === certId);
  if (!cert) return;
  const existing = $('#cert-modal');
  if (existing) existing.remove();
  const levelColor = cert.score >= 90 ? '#10b981' : cert.score >= 85 ? '#f59e0b' : '#6366f1';
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'cert-modal';
  modal.innerHTML = `
    <div class="modal card cert-modal-inner">
      <div class="modal__header">
        <h3>📜 Chứng chỉ Trust-Verified</h3>
        <button class="modal__close" onclick="document.getElementById('cert-modal').remove()">✕</button>
      </div>
      <div class="cert-modal-body">
        <div class="cert-preview">
          <div class="cert-preview__hologram"></div>
          <div class="cert-preview__border" style="border-color:${levelColor}"></div>
          <div class="cert-preview__content">
            <div class="cert-preview__logo">◈ DevTrust Academy</div>
            <h2 class="cert-preview__title">CHỨNG CHỈ HOÀN THÀNH</h2>
            <div class="cert-preview__subtitle">Certificate of Completion</div>
            <div class="cert-preview__student">${cert.studentName}</div>
            <div class="cert-preview__course">đã hoàn thành xuất sắc khóa học</div>
            <div class="cert-preview__course-name" style="color:${levelColor}">${cert.courseName}</div>
            <div class="cert-preview__details">
              <div class="cert-detail"><span>📊 Điểm</span><strong style="color:${levelColor}">${cert.score}%</strong></div>
              <div class="cert-detail"><span>🛡️ Trust</span><strong>${cert.trustScore}</strong></div>
              <div class="cert-detail"><span>⏱️ Giờ học</span><strong>${cert.hours}h</strong></div>
              <div class="cert-detail"><span>📅 Ngày</span><strong>${cert.date}</strong></div>
            </div>
            <div class="cert-preview__verify">
              <span>Mã xác thực P2P:</span>
              <strong>${cert.verifyCode}</strong>
            </div>
            <div class="cert-preview__seal">
              <div class="cert-seal" style="border-color:${levelColor}">🛡️</div>
              <span>Trust-Verified · P2P Authenticated</span>
            </div>
          </div>
        </div>
        <div class="cert-modal-actions">
          <button class="btn btn--primary" onclick="downloadCertificate('${cert.id}')">📥 Tải chứng chỉ (PNG)</button>
          <button class="btn btn--glass" onclick="navigator.clipboard.writeText('${cert.verifyCode}');showToast('Đã copy mã xác thực!','success')">🔗 Copy mã xác thực</button>
          <button class="btn btn--glass" onclick="showToast('Đã chia sẻ chứng chỉ lên blockchain P2P!','success')">🌐 Chia sẻ P2P</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function downloadCertificate(certId) {
  const cert = CERTIFICATES.find(c => c.id === certId);
  if (!cert) return;
  const canvas = document.createElement('canvas');
  canvas.width = 1200; canvas.height = 850;
  const ctx = canvas.getContext('2d');
  // Background
  const grad = ctx.createLinearGradient(0, 0, 1200, 850);
  grad.addColorStop(0, '#0f172a'); grad.addColorStop(1, '#1e293b');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 1200, 850);
  // Border
  ctx.strokeStyle = cert.score >= 90 ? '#10b981' : '#f59e0b';
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 1140, 790);
  ctx.strokeRect(40, 40, 1120, 770);
  // Logo
  ctx.fillStyle = '#818cf8'; ctx.font = 'bold 28px Inter, sans-serif';
  ctx.textAlign = 'center'; ctx.fillText('◈ DevTrust Academy', 600, 100);
  // Title
  ctx.fillStyle = '#f8fafc'; ctx.font = 'bold 42px Inter, sans-serif';
  ctx.fillText('CHỨNG CHỈ HOÀN THÀNH', 600, 180);
  ctx.fillStyle = '#94a3b8'; ctx.font = '18px Inter, sans-serif';
  ctx.fillText('Certificate of Completion', 600, 215);
  // Student
  ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 36px Inter, sans-serif';
  ctx.fillText(cert.studentName, 600, 310);
  ctx.fillStyle = '#94a3b8'; ctx.font = '20px Inter, sans-serif';
  ctx.fillText('đã hoàn thành xuất sắc khóa học', 600, 360);
  // Course name
  ctx.fillStyle = cert.score >= 90 ? '#10b981' : '#f59e0b';
  ctx.font = 'bold 32px Inter, sans-serif';
  ctx.fillText(cert.courseName, 600, 420);
  // Details
  ctx.fillStyle = '#e2e8f0'; ctx.font = '20px Inter, sans-serif';
  ctx.fillText(`📊 Điểm: ${cert.score}%   |   🛡️ Trust: ${cert.trustScore}   |   ⏱️ ${cert.hours} giờ học   |   📅 ${cert.date}`, 600, 510);
  // Verify code
  ctx.fillStyle = '#64748b'; ctx.font = '16px Inter, sans-serif';
  ctx.fillText(`Mã xác thực P2P: ${cert.verifyCode}`, 600, 600);
  ctx.fillText('Trust-Verified · P2P Authenticated · Blockchain Recorded', 600, 640);
  // Seal
  ctx.fillStyle = '#818cf830'; ctx.beginPath(); ctx.arc(600, 740, 40, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#818cf8'; ctx.font = '32px sans-serif'; ctx.fillText('🛡️', 600, 750);
  // Download
  const link = document.createElement('a');
  link.download = `DevTrust-Certificate-${cert.verifyCode}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('📥 Đã tải chứng chỉ thành công!', 'success');
}

// ============ 🛒 COURSE MARKETPLACE ENGINE ============

const MARKETPLACE_COURSES = [
  { id: 'm1', name: 'Mastering React — Từ Zero đến Production', teacher: 'Linh Nguyễn', teacherSeed: 'linh', teacherTrust: 87, price: '499K', priceFree: false, students: 1234, rating: 4.9, hours: 40, level: 'Trung cấp', category: 'Lập trình', emoji: '⚛️', desc: 'Build production-ready React apps với hooks, context, performance optimization. Cuối khóa deploy app thật.', tags: ['React', 'Hooks', 'TypeScript'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm2', name: 'AI/ML cho Developer — Thực hành với Python', teacher: 'Hương Phạm', teacherSeed: 'huong', teacherTrust: 91, price: '799K', priceFree: false, students: 892, rating: 4.8, hours: 60, level: 'Nâng cao', category: 'AI', emoji: '🤖', desc: 'Từ Linear Regression đến Deep Learning. Build chatbot, image recognition, recommendation engine.', tags: ['Python', 'AI/ML', 'TensorFlow'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm3', name: 'Tiếng Nhật N3 cho IT — 6 tháng Speed Run', teacher: 'Hương Phạm', teacherSeed: 'huong', teacherTrust: 91, price: '1.2M', priceFree: false, students: 567, rating: 4.9, hours: 120, level: 'Đặc biệt', category: 'Ngôn ngữ', emoji: '🇯🇵', desc: 'Chương trình tập trung cho IT engineer. Kanji IT, keigo business, phỏng vấn kỹ thuật bằng tiếng Nhật.', tags: ['Tiếng Nhật', 'N3', 'XKLĐ'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm4', name: 'P2P & Decentralization với Gun.js', teacher: 'Tuấn Vũ', teacherSeed: 'tuan', teacherTrust: 95, price: 'FREE', priceFree: true, students: 2341, rating: 4.7, hours: 20, level: 'Nâng cao', category: 'Lập trình', emoji: '🔗', desc: 'Build real-time P2P apps. CRDT, offline-first, encryption. Dự án thực tế: chat P2P + social network.', tags: ['P2P', 'Gun.js', 'Web3'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm5', name: 'Growth Hacking cho Startup VN', teacher: 'Mai Lê', teacherSeed: 'mai', teacherTrust: 63, price: '299K', priceFree: false, students: 445, rating: 4.5, hours: 15, level: 'Cơ bản', category: 'Marketing', emoji: '📈', desc: 'Viral loops, referral systems, content marketing, SEO. Build growth engine từ 0 budget.', tags: ['Growth', 'Marketing', 'Startup'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm6', name: 'DevOps & Cloud Infrastructure', teacher: 'Đức Hoàng', teacherSeed: 'duc', teacherTrust: 78, price: '599K', priceFree: false, students: 678, rating: 4.6, hours: 35, level: 'Nâng cao', category: 'DevOps', emoji: '☁️', desc: 'Docker, K8s, CI/CD, AWS/GCP. Deploy microservices với zero downtime.', tags: ['Docker', 'K8s', 'AWS'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm7', name: 'An toàn mạng — Bảo vệ bản thân online', teacher: 'Tuấn Vũ', teacherSeed: 'tuan', teacherTrust: 95, price: 'FREE', priceFree: true, students: 3456, rating: 4.8, hours: 8, level: 'Cơ bản', category: 'An ninh', emoji: '🔐', desc: 'Password manager, 2FA, VPN, phishing detection. Bảo vệ gia đình và doanh nghiệp nhỏ.', tags: ['Security', 'Privacy', 'P2P'], revenue: { creator: 60, referrer: 30, fund: 10 } },
  { id: 'm8', name: 'Mobile App với Flutter', teacher: 'Thảo Ngô', teacherSeed: 'thao', teacherTrust: 84, price: '699K', priceFree: false, students: 901, rating: 4.7, hours: 45, level: 'Trung cấp', category: 'Mobile', emoji: '📱', desc: 'Build cross-platform iOS & Android apps. State management, animations, API integration. Publish lên store.', tags: ['Flutter', 'Dart', 'Mobile'], revenue: { creator: 60, referrer: 30, fund: 10 } },
];

var _marketplaceFilter = 'all';

function renderMarketplace() {
  const container = $('#marketplace-grid');
  if (!container) return;
  const courses = _marketplaceFilter === 'all' ? MARKETPLACE_COURSES : MARKETPLACE_COURSES.filter(c => c.category === _marketplaceFilter);
  container.innerHTML = courses.map((c, idx) => {
    const priceColor = c.priceFree ? '#10b981' : '#f59e0b';
    return `
    <div class="mkt-card" style="animation-delay:${idx * 0.06}s">
      <div class="mkt-card__top">
        <div class="mkt-card__emoji">${c.emoji}</div>
        <div class="mkt-card__level" style="background:${c.level === 'Nâng cao' ? '#6366f122' : c.level === 'Trung cấp' ? '#f59e0b22' : '#10b98122'};color:${c.level === 'Nâng cao' ? '#818cf8' : c.level === 'Trung cấp' ? '#f59e0b' : '#10b981'}">${c.level}</div>
        <div class="mkt-card__price" style="color:${priceColor}">${c.price}</div>
      </div>
      <h3 class="mkt-card__name">${c.name}</h3>
      <p class="mkt-card__desc">${c.desc}</p>
      <div class="mkt-card__tags">
        ${c.tags.map(t => `<span class="mkt-tag">${t}</span>`).join('')}
      </div>
      <div class="mkt-card__stats">
        <span>👥 ${c.students.toLocaleString()}</span>
        <span>⭐ ${c.rating}</span>
        <span>⏱️ ${c.hours}h</span>
      </div>
      <div class="mkt-card__teacher">
        <img class="mkt-teacher-avatar" src="${avatarUrl(c.teacherSeed)}" />
        <span>${c.teacher}</span>
        <span class="mkt-trust-badge">🛡️ ${c.teacherTrust}</span>
      </div>
      <div class="mkt-card__revenue-split">
        <div class="mkt-revenue-label">Phân phối thu nhập P2P:</div>
        <div class="mkt-revenue-bar">
          <div class="mkt-revenue-seg" style="width:60%;background:#10b981" title="Giảng viên 60%">👨‍🏫 60%</div>
          <div class="mkt-revenue-seg" style="width:30%;background:#6366f1" title="Người giới thiệu 30%">🔗 30%</div>
          <div class="mkt-revenue-seg" style="width:10%;background:#f59e0b" title="Trust Fund 10%">🛡️ 10%</div>
        </div>
      </div>
      <div class="mkt-card__actions">
        <button class="btn btn--primary btn--sm" style="flex:1" onclick="purchaseCourse('${c.id}')">${c.priceFree ? '📚 Học miễn phí' : '💳 Đăng ký ngay'}</button>
        <button class="btn btn--glass btn--sm" onclick="showToast('👁️ Xem preview khóa học ${c.name}','success')">👁️</button>
      </div>
    </div>`;
  }).join('');
}

function filterMarketplace(btn, category) {
  document.querySelectorAll('.mkt-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  _marketplaceFilter = category;
  renderMarketplace();
}

function purchaseCourse(courseId) {
  const course = MARKETPLACE_COURSES.find(c => c.id === courseId);
  if (!course) return;
  if (course.priceFree) {
    showToast(`📚 Đã đăng ký khóa "${course.name}" thành công! Bắt đầu học ngay.`, 'success');
    return;
  }
  // Show purchase modal
  const existing = $('#purchase-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'purchase-modal';
  modal.innerHTML = `
    <div class="modal card" style="max-width:480px">
      <div class="modal__header">
        <h3>💳 Đăng ký khóa học</h3>
        <button class="modal__close" onclick="document.getElementById('purchase-modal').remove()">✕</button>
      </div>
      <div style="padding:1.25rem">
        <div class="purchase-course-info">
          <span style="font-size:2rem">${course.emoji}</span>
          <div>
            <div style="font-weight:700">${course.name}</div>
            <div style="color:var(--text-tertiary);font-size:0.85rem">${course.teacher} · 🛡️ ${course.teacherTrust}</div>
          </div>
        </div>
        <div class="purchase-price-row">
          <span>Học phí:</span>
          <strong style="color:#f59e0b;font-size:1.3rem">${course.price}</strong>
        </div>
        <div class="purchase-revenue-info">
          <div class="purchase-revenue-title">💡 Thu nhập P2P minh bạch:</div>
          <div class="purchase-revenue-items">
            <div>👨‍🏫 Giảng viên nhận <strong>60%</strong></div>
            <div>🔗 Người giới thiệu nhận <strong>30%</strong></div>
            <div>🛡️ Trust Fund cộng đồng <strong>10%</strong></div>
          </div>
        </div>
        <div style="display:flex;gap:0.75rem;margin-top:1.25rem">
          <button class="btn btn--primary" style="flex:1" onclick="document.getElementById('purchase-modal').remove();showToast('🎉 Đã đăng ký khóa \\'${course.name}\\' thành công! Trust Score +5','success')">✅ Xác nhận thanh toán</button>
          <button class="btn btn--glass" onclick="document.getElementById('purchase-modal').remove()">Hủy</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ============ 📦 OFFLINE-FIRST STORAGE ENGINE ============

const OfflineStorage = {
  DB_NAME: 'DevTrustOfflineDB',
  DB_VERSION: 1,
  _db: null,
  _isOnline: navigator.onLine,

  async open() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('courses')) {
          db.createObjectStore('courses', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('progress')) {
          db.createObjectStore('progress', { keyPath: 'courseId' });
        }
        if (!db.objectStoreNames.contains('certificates')) {
          db.createObjectStore('certificates', { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => { this._db = e.target.result; resolve(this._db); };
      req.onerror = (e) => reject(e.target.error);
    });
  },

  async saveCourse(course) {
    if (!this._db) await this.open();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('courses', 'readwrite');
      tx.objectStore('courses').put({ ...course, savedAt: Date.now(), offlineReady: true });
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  },

  async getCourse(courseId) {
    if (!this._db) await this.open();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('courses', 'readonly');
      const req = tx.objectStore('courses').get(courseId);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e.target.error);
    });
  },

  async getAllCourses() {
    if (!this._db) await this.open();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('courses', 'readonly');
      const req = tx.objectStore('courses').getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = (e) => reject(e.target.error);
    });
  },

  async saveProgress(courseId, progress) {
    if (!this._db) await this.open();
    return new Promise((resolve, reject) => {
      const tx = this._db.transaction('progress', 'readwrite');
      tx.objectStore('progress').put({ courseId, ...progress, updatedAt: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  },

  init() {
    this.open().then(() => {
      console.log('📦 OfflineStorage: IndexedDB ready');
      this.updateOnlineStatus();
    }).catch(err => console.warn('OfflineStorage:', err));

    window.addEventListener('online', () => { this._isOnline = true; this.updateOnlineStatus(); this.syncWhenOnline(); });
    window.addEventListener('offline', () => { this._isOnline = false; this.updateOnlineStatus(); });
  },

  updateOnlineStatus() {
    const indicator = $('#offline-indicator');
    if (!indicator) return;
    if (this._isOnline) {
      indicator.classList.add('online');
      indicator.classList.remove('offline');
      indicator.innerHTML = '<span class="offline-dot online"></span> Online — Synced ✓';
    } else {
      indicator.classList.remove('online');
      indicator.classList.add('offline');
      indicator.innerHTML = '<span class="offline-dot offline"></span> Offline — Đang dùng dữ liệu local';
    }
  },

  async syncWhenOnline() {
    console.log('🔄 Syncing data to P2P network...');
    showToast('🔄 Đang đồng bộ dữ liệu với mạng P2P...', 'success');
    setTimeout(() => showToast('✅ Đồng bộ thành công!', 'success'), 2000);
  }
};

// Track which courses are saved offline
const _offlineSavedCourses = new Set();

async function saveCourseOffline(courseId, courseName) {
  try {
    await OfflineStorage.saveCourse({ id: courseId, name: courseName, content: 'cached', savedAt: Date.now() });
    _offlineSavedCourses.add(courseId);
    showToast(`📥 Đã tải "${courseName}" cho học offline! ✓`, 'success');
    // Update button visually
    const btn = document.querySelector(`[data-offline-course="${courseId}"]`);
    if (btn) {
      btn.innerHTML = '✅ Offline Ready';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    }
  } catch(err) {
    showToast('❌ Lỗi lưu offline: ' + err.message, 'error');
  }
}

// ============ 🔌 PLUGIN MARKETPLACE ENGINE ============

const PLUGIN_STORE = [
  { id: 'p1', name: 'Quiz P2P Verifier', emoji: '✅', desc: 'Verify đáp án quiz qua mạng P2P — không cần server.', author: 'Tuấn Vũ', authorSeed: 'tuan', authorTrust: 95, installs: 2341, rating: 4.9, version: '1.2.0', size: '12KB', category: 'E-Learning', tags: ['quiz', 'P2P', 'verification'], color: '#10b981', installed: true },
  { id: 'p2', name: 'Offline Lesson Downloader', emoji: '📥', desc: 'Tải bài giảng IPFS về máy, học mọi nơi không cần internet.', author: 'Đức Hoàng', authorSeed: 'duc', authorTrust: 78, installs: 1567, rating: 4.7, version: '2.0.1', size: '24KB', category: 'Storage', tags: ['offline', 'IPFS', 'download'], color: '#6366f1', installed: false },
  { id: 'p3', name: 'Trust Score Analytics', emoji: '📊', desc: 'Dashboard phân tích chi tiết Trust Score — breakdown, trends, so sánh.', author: 'Hương Phạm', authorSeed: 'huong', authorTrust: 91, installs: 890, rating: 4.8, version: '1.0.3', size: '18KB', category: 'Analytics', tags: ['analytics', 'trust', 'dashboard'], color: '#f59e0b', installed: true },
  { id: 'p4', name: 'WebRTC Video Chat', emoji: '📹', desc: 'Video call P2P trực tiếp trong browser — không qua server, mã hóa end-to-end.', author: 'Tuấn Vũ', authorSeed: 'tuan', authorTrust: 95, installs: 3456, rating: 4.6, version: '1.5.0', size: '45KB', category: 'Communication', tags: ['WebRTC', 'video', 'P2P'], color: '#ef4444', installed: false },
  { id: 'p5', name: 'Certificate Generator', emoji: '🏆', desc: 'Auto-generate chứng chỉ trust-verified khi hoàn thành khóa học.', author: 'Linh Nguyễn', authorSeed: 'linh', authorTrust: 87, installs: 1234, rating: 4.9, version: '1.1.0', size: '15KB', category: 'E-Learning', tags: ['certificate', 'PDF', 'trust'], color: '#22c55e', installed: true },
  { id: 'p6', name: 'Dark Mode Pro', emoji: '🌙', desc: 'Advanced dark theme với custom accent colors và AMOLED black option.', author: 'Thảo Ngô', authorSeed: 'thao', authorTrust: 84, installs: 5678, rating: 4.5, version: '3.0.0', size: '8KB', category: 'Theme', tags: ['dark', 'theme', 'UI'], color: '#8b5cf6', installed: false },
  { id: 'p7', name: 'Peer Review System', emoji: '🔍', desc: 'Review code P2P — gửi PR, nhận review từ trusted devs, Trust Score tăng theo.', author: 'Minh Trần', authorSeed: 'minh', authorTrust: 72, installs: 670, rating: 4.4, version: '0.9.0', size: '30KB', category: 'Development', tags: ['code review', 'P2P', 'Git'], color: '#06b6d4', installed: false },
  { id: 'p8', name: 'Community Polls', emoji: '📣', desc: 'Tạo khảo sát cộng đồng on-chain — vote minh bạch, không chỉnh sửa được.', author: 'Khoa Đặng', authorSeed: 'khoa', authorTrust: 45, installs: 345, rating: 4.3, version: '0.5.0', size: '20KB', category: 'Governance', tags: ['polls', 'DAO', 'voting'], color: '#f97316', installed: false },
];

function renderPluginStore() {
  const container = $('#plugin-store-grid');
  if (!container) return;

  // Stats
  const totalInstalls = PLUGIN_STORE.reduce((s, p) => s + p.installs, 0);
  const statEl = $('#plugin-stats');
  if (statEl) {
    statEl.innerHTML = `
      <div class="plugin-stat"><strong>${PLUGIN_STORE.length}</strong><span>Plugins</span></div>
      <div class="plugin-stat"><strong>${totalInstalls.toLocaleString()}</strong><span>Lượt cài đặt</span></div>
      <div class="plugin-stat"><strong>${PLUGIN_STORE.filter(p => p.installed).length}</strong><span>Đã cài</span></div>
    `;
  }

  container.innerHTML = PLUGIN_STORE.map((p, idx) => `
    <div class="plugin-card" style="animation-delay:${idx * 0.06}s;border-top:3px solid ${p.color}">
      <div class="plugin-card__top">
        <div class="plugin-card__emoji" style="background:${p.color}18">${p.emoji}</div>
        <div class="plugin-card__info">
          <div class="plugin-card__name">${p.name}</div>
          <div class="plugin-card__meta">${p.category} · v${p.version} · ${p.size}</div>
        </div>
        ${p.installed ? '<div class="plugin-installed-badge">✅ Đã cài</div>' : ''}
      </div>
      <p class="plugin-card__desc">${p.desc}</p>
      <div class="plugin-card__tags">
        ${p.tags.map(t => `<span class="plugin-tag" style="background:${p.color}12;color:${p.color}">${t}</span>`).join('')}
      </div>
      <div class="plugin-card__stats">
        <span>📥 ${p.installs.toLocaleString()}</span>
        <span>⭐ ${p.rating}</span>
      </div>
      <div class="plugin-card__author">
        <img class="plugin-author-avatar" src="${avatarUrl(p.authorSeed)}" />
        <span>${p.author}</span>
        <span class="plugin-trust-badge">🛡️ ${p.authorTrust}</span>
      </div>
      <div class="plugin-card__revenue">
        <div class="plugin-revenue-label">Plugin Revenue:</div>
        <div class="plugin-revenue-bar">
          <div style="width:60%;background:${p.color};border-radius:4px 0 0 4px;text-align:center;font-size:0.65rem;color:#fff;padding:2px 0">Creator 60%</div>
          <div style="width:30%;background:#818cf8;text-align:center;font-size:0.65rem;color:#fff;padding:2px 0">Share 30%</div>
          <div style="width:10%;background:#f59e0b;border-radius:0 4px 4px 0;text-align:center;font-size:0.65rem;color:#fff;padding:2px 0">10%</div>
        </div>
      </div>
      <button class="plugin-install-btn ${p.installed ? 'plugin-install-btn--installed' : ''}" onclick="installPlugin('${p.id}')" ${p.installed ? 'disabled' : ''}>
        ${p.installed ? '✅ Đã cài đặt' : '📥 Cài đặt Plugin'}
      </button>
    </div>
  `).join('');
}

function installPlugin(pluginId) {
  const plugin = PLUGIN_STORE.find(p => p.id === pluginId);
  if (!plugin || plugin.installed) return;
  plugin.installed = true;
  plugin.installs++;
  showToast(`🔌 Đã cài plugin "${plugin.name}" thành công! Trust Score +2`, 'success');
  renderPluginStore();
}

// ---- Init Offline Storage ----
if (typeof indexedDB !== 'undefined') {
  OfflineStorage.init();
}

// ============ 🤖 PHASE 6: AI AGENT TRUST LAYER ============

// ---- Agent Fleet Data ----
const AGENT_FLEET = [
  {
    id: 'agent-1', name: 'CodePilot Alpha', type: 'Code Generation', emoji: '💻',
    model: 'GPT-4o', status: 'active', uptime: 99.7,
    ownerId: 'owner', ownerName: 'David Cuong', ownerTrust: 92,
    trustInherited: 88, tasksCompleted: 1247, tasksToday: 23,
    accuracy: 94.2, ethicsScore: 97, lastActive: '2 phút trước',
    skills: ['JavaScript', 'Python', 'React', 'Node.js'],
    recentOutputs: [
      { type: 'PR', title: 'Fix auth middleware vulnerability', verified: true, time: '15m ago' },
      { type: 'Code', title: 'Implement rate limiter module', verified: true, time: '1h ago' },
      { type: 'Review', title: 'Review P2P sync protocol', verified: false, time: '2h ago' },
    ],
    color: '#6366f1'
  },
  {
    id: 'agent-2', name: 'DesignMind', type: 'UI/UX Design', emoji: '🎨',
    model: 'Claude 3.5', status: 'active', uptime: 98.9,
    ownerId: 'owner', ownerName: 'David Cuong', ownerTrust: 92,
    trustInherited: 85, tasksCompleted: 834, tasksToday: 12,
    accuracy: 91.5, ethicsScore: 96, lastActive: '5 phút trước',
    skills: ['Figma', 'CSS', 'Accessibility', 'Animation'],
    recentOutputs: [
      { type: 'Design', title: 'Marketplace card redesign', verified: true, time: '30m ago' },
      { type: 'CSS', title: 'Certificate hologram animation', verified: true, time: '3h ago' },
    ],
    color: '#f59e0b'
  },
  {
    id: 'agent-3', name: 'DataSentry', type: 'Security Audit', emoji: '🛡️',
    model: 'GPT-4o', status: 'active', uptime: 99.9,
    ownerId: 'owner', ownerName: 'David Cuong', ownerTrust: 92,
    trustInherited: 90, tasksCompleted: 567, tasksToday: 8,
    accuracy: 97.8, ethicsScore: 99, lastActive: '1 phút trước',
    skills: ['Security', 'Penetration Testing', 'OWASP', 'Encryption'],
    recentOutputs: [
      { type: 'Audit', title: 'P2P encryption audit passed', verified: true, time: '10m ago' },
      { type: 'Alert', title: 'SQL injection attempt blocked', verified: true, time: '45m ago' },
    ],
    color: '#10b981'
  },
  {
    id: 'agent-4', name: 'GrowthBot', type: 'Marketing & Growth', emoji: '📈',
    model: 'Gemini Pro', status: 'idle', uptime: 95.2,
    ownerId: 'owner', ownerName: 'David Cuong', ownerTrust: 92,
    trustInherited: 82, tasksCompleted: 345, tasksToday: 3,
    accuracy: 88.7, ethicsScore: 94, lastActive: '30 phút trước',
    skills: ['SEO', 'Content', 'Analytics', 'A/B Testing'],
    recentOutputs: [
      { type: 'Content', title: 'Blog post: Trust in AI Economy', verified: true, time: '2h ago' },
    ],
    color: '#8b5cf6'
  },
  {
    id: 'agent-5', name: 'DocuHelper', type: 'Documentation', emoji: '📝',
    model: 'Claude 3.5', status: 'active', uptime: 97.1,
    ownerId: 'linh', ownerName: 'Linh Nguyễn', ownerTrust: 87,
    trustInherited: 78, tasksCompleted: 223, tasksToday: 5,
    accuracy: 92.1, ethicsScore: 98, lastActive: '8 phút trước',
    skills: ['Markdown', 'API Docs', 'Tutorials', 'i18n'],
    recentOutputs: [
      { type: 'Doc', title: 'Plugin API reference v2', verified: true, time: '1h ago' },
    ],
    color: '#06b6d4'
  },
  {
    id: 'agent-6', name: 'TestRunner Pro', type: 'QA & Testing', emoji: '🧪',
    model: 'GPT-4o', status: 'active', uptime: 99.1,
    ownerId: 'tuan', ownerName: 'Tuấn Vũ', ownerTrust: 95,
    trustInherited: 91, tasksCompleted: 1890, tasksToday: 42,
    accuracy: 96.4, ethicsScore: 97, lastActive: 'Bây giờ',
    skills: ['Unit Test', 'E2E', 'Performance', 'Selenium'],
    recentOutputs: [
      { type: 'Test', title: 'E2E marketplace flow: PASS', verified: true, time: '5m ago' },
      { type: 'Test', title: 'Load test 10K users: PASS', verified: true, time: '20m ago' },
    ],
    color: '#22c55e'
  },
  {
    id: 'agent-7', name: 'TranslateBot', type: 'Localization', emoji: '🌍',
    model: 'GPT-4o', status: 'idle', uptime: 93.8,
    ownerId: 'huong', ownerName: 'Hương Phạm', ownerTrust: 91,
    trustInherited: 83, tasksCompleted: 456, tasksToday: 0,
    accuracy: 95.3, ethicsScore: 98, lastActive: '2 giờ trước',
    skills: ['Vietnamese', 'Japanese', 'English', 'Korean'],
    recentOutputs: [
      { type: 'Translation', title: 'Japanese N3 course materials', verified: true, time: '3h ago' },
    ],
    color: '#ec4899'
  },
  {
    id: 'agent-8', name: 'InfraWatcher', type: 'DevOps & Infra', emoji: '☁️',
    model: 'Claude 3.5', status: 'active', uptime: 99.8,
    ownerId: 'duc', ownerName: 'Đức Hoàng', ownerTrust: 78,
    trustInherited: 68, tasksCompleted: 678, tasksToday: 15,
    accuracy: 93.9, ethicsScore: 96, lastActive: '3 phút trước',
    skills: ['Docker', 'K8s', 'CI/CD', 'Monitoring'],
    recentOutputs: [
      { type: 'Deploy', title: 'Auto-scale to 3 replicas', verified: true, time: '12m ago' },
      { type: 'Alert', title: 'Memory spike detected & resolved', verified: true, time: '1h ago' },
    ],
    color: '#f97316'
  },
];

// ---- Human Intent Protocol ----
const HUMAN_INTENTS = [
  { id: 'hi-1', human: 'David Cuong', humanTrust: 92, humanSeed: 'owner', intent: 'Deploy marketplace feature to production', agents: ['CodePilot Alpha', 'TestRunner Pro'], timestamp: '2026-03-16 02:30', verified: true, proofHash: '0x7a3f...e91d' },
  { id: 'hi-2', human: 'Tuấn Vũ', humanTrust: 95, humanSeed: 'tuan', intent: 'Audit P2P encryption protocol', agents: ['DataSentry', 'TestRunner Pro'], timestamp: '2026-03-16 01:15', verified: true, proofHash: '0x4b2c...f83a' },
  { id: 'hi-3', human: 'Linh Nguyễn', humanTrust: 87, humanSeed: 'linh', intent: 'Generate API documentation v2', agents: ['DocuHelper'], timestamp: '2026-03-15 23:40', verified: true, proofHash: '0x9e1d...a72b' },
  { id: 'hi-4', human: 'Hương Phạm', humanTrust: 91, humanSeed: 'huong', intent: 'Translate course materials to Japanese', agents: ['TranslateBot'], timestamp: '2026-03-15 22:00', verified: true, proofHash: '0x3c5f...b14e' },
  { id: 'hi-5', human: 'David Cuong', humanTrust: 92, humanSeed: 'owner', intent: 'Build AI Agent Dashboard UI', agents: ['CodePilot Alpha', 'DesignMind'], timestamp: '2026-03-16 03:00', verified: true, proofHash: '0x8d7a...c56f' },
];

// ---- Agent Collaboration Requests ----
const AGENT_COLLABS = [
  { id: 'col-1', fromAgent: 'CodePilot Alpha', fromOwner: 'David Cuong', fromTrust: 92, toAgent: 'TestRunner Pro', toOwner: 'Tuấn Vũ', toTrust: 95, task: 'E2E test cho marketplace payment flow', status: 'approved', trustGate: 80 },
  { id: 'col-2', fromAgent: 'DesignMind', fromOwner: 'David Cuong', fromTrust: 92, toAgent: 'DocuHelper', toOwner: 'Linh Nguyễn', toTrust: 87, task: 'Design system documentation', status: 'approved', trustGate: 80 },
  { id: 'col-3', fromAgent: 'GrowthBot', fromOwner: 'David Cuong', fromTrust: 92, toAgent: 'TranslateBot', toOwner: 'Hương Phạm', toTrust: 91, task: 'Dịch landing page sang tiếng Nhật', status: 'pending', trustGate: 80 },
  { id: 'col-4', fromAgent: 'DataSentry', fromOwner: 'David Cuong', fromTrust: 92, toAgent: 'InfraWatcher', toOwner: 'Đức Hoàng', toTrust: 78, task: 'Security audit toàn bộ infrastructure', status: 'approved', trustGate: 70 },
];

// ---- Render Agent Dashboard ----
function renderAgentDashboard() {
  // 1. Fleet Stats
  const statsEl = $('#agent-fleet-stats');
  if (statsEl) {
    const activeCount = AGENT_FLEET.filter(a => a.status === 'active').length;
    const totalTasks = AGENT_FLEET.reduce((s, a) => s + a.tasksCompleted, 0);
    const avgAccuracy = (AGENT_FLEET.reduce((s, a) => s + a.accuracy, 0) / AGENT_FLEET.length).toFixed(1);
    const avgEthics = (AGENT_FLEET.reduce((s, a) => s + a.ethicsScore, 0) / AGENT_FLEET.length).toFixed(0);
    statsEl.innerHTML = `
      <div class="agent-stat agent-stat--green"><strong>${activeCount}/${AGENT_FLEET.length}</strong><span>Active Agents</span></div>
      <div class="agent-stat agent-stat--blue"><strong>${totalTasks.toLocaleString()}</strong><span>Tasks Completed</span></div>
      <div class="agent-stat agent-stat--purple"><strong>${avgAccuracy}%</strong><span>Avg Accuracy</span></div>
      <div class="agent-stat agent-stat--gold"><strong>${avgEthics}</strong><span>Ethics Score</span></div>
    `;
  }

  // 2. Fleet Grid
  const grid = $('#agent-fleet-grid');
  if (grid) {
    grid.innerHTML = AGENT_FLEET.map((agent, idx) => {
      const statusColor = agent.status === 'active' ? '#22c55e' : '#f59e0b';
      const statusText = agent.status === 'active' ? '🟢 Active' : '🟡 Idle';
      const trustColor = agent.trustInherited >= 85 ? '#10b981' : agent.trustInherited >= 70 ? '#f59e0b' : '#ef4444';
      return `
      <div class="agent-card" style="animation-delay:${idx * 0.07}s;border-top:3px solid ${agent.color}">
        <div class="agent-card__header">
          <div class="agent-card__identity">
            <div class="agent-card__emoji" style="background:${agent.color}15">${agent.emoji}</div>
            <div>
              <div class="agent-card__name">${agent.name}</div>
              <div class="agent-card__type">${agent.type} · ${agent.model}</div>
            </div>
          </div>
          <div class="agent-card__status" style="color:${statusColor}">${statusText}</div>
        </div>

        <div class="agent-card__owner">
          <img src="${avatarUrl(agent.ownerId === 'owner' ? 'owner' : agent.ownerId)}" class="agent-owner-avatar" />
          <span>Chủ sở hữu: <strong>${agent.ownerName}</strong></span>
          <span class="agent-owner-trust">🛡️ ${agent.ownerTrust}</span>
        </div>

        <div class="agent-card__trust-inherit">
          <div class="agent-trust-label">Trust kế thừa từ chủ sở hữu:</div>
          <div class="agent-trust-bar-wrap">
            <div class="agent-trust-bar">
              <div class="agent-trust-bar__fill" style="width:${agent.trustInherited}%;background:${trustColor}"></div>
            </div>
            <span class="agent-trust-val" style="color:${trustColor}">${agent.trustInherited}</span>
          </div>
        </div>

        <div class="agent-card__metrics">
          <div class="agent-metric"><strong>${agent.tasksCompleted.toLocaleString()}</strong><span>Tasks</span></div>
          <div class="agent-metric"><strong>${agent.accuracy}%</strong><span>Accuracy</span></div>
          <div class="agent-metric"><strong>${agent.ethicsScore}</strong><span>Ethics</span></div>
          <div class="agent-metric"><strong>${agent.uptime}%</strong><span>Uptime</span></div>
        </div>

        <div class="agent-card__skills">
          ${agent.skills.map(s => `<span class="agent-skill" style="background:${agent.color}12;color:${agent.color};border:1px solid ${agent.color}25">${s}</span>`).join('')}
        </div>

        <div class="agent-card__outputs">
          <div class="agent-outputs-label">Hoạt động gần đây:</div>
          ${agent.recentOutputs.slice(0, 2).map(o => `
            <div class="agent-output-row">
              <span class="agent-output-type">[${o.type}]</span>
              <span class="agent-output-title">${o.title}</span>
              <span class="agent-output-verified">${o.verified ? '✅' : '⏳'}</span>
              <span class="agent-output-time">${o.time}</span>
            </div>
          `).join('')}
        </div>

        <div class="agent-card__actions">
          <button class="btn btn--glass btn--sm" onclick="verifyAgentOutput('${agent.id}')">🔍 Verify Output</button>
          <button class="btn btn--glass btn--sm" onclick="showToast('⚙️ Mở cấu hình ${agent.name}','success')">⚙️</button>
        </div>
      </div>`;
    }).join('');
  }

  // 3. Human Intent Log
  renderHumanIntentLog();

  // 4. Agent Collaborations
  renderAgentCollabs();
}

function renderHumanIntentLog() {
  const container = $('#human-intent-log');
  if (!container) return;
  container.innerHTML = HUMAN_INTENTS.map(hi => `
    <div class="intent-row">
      <div class="intent-row__left">
        <img src="${avatarUrl(hi.humanSeed)}" class="intent-avatar" />
        <div>
          <div class="intent-human">${hi.human} <span class="intent-trust">🛡️ ${hi.humanTrust}</span></div>
          <div class="intent-text">"${hi.intent}"</div>
          <div class="intent-agents">Agents: ${hi.agents.map(a => `<span class="intent-agent-tag">🤖 ${a}</span>`).join('')}</div>
        </div>
      </div>
      <div class="intent-row__right">
        <div class="intent-time">${hi.timestamp}</div>
        <div class="intent-proof ${hi.verified ? 'intent-proof--verified' : ''}">
          ${hi.verified ? '✅ Verified' : '⏳ Pending'}
        </div>
        <div class="intent-hash" title="${hi.proofHash}">${hi.proofHash}</div>
      </div>
    </div>
  `).join('');
}

function renderAgentCollabs() {
  const container = $('#agent-collab-list');
  if (!container) return;
  container.innerHTML = AGENT_COLLABS.map(col => {
    const statusColor = col.status === 'approved' ? '#10b981' : col.status === 'pending' ? '#f59e0b' : '#ef4444';
    const statusEmoji = col.status === 'approved' ? '✅' : col.status === 'pending' ? '⏳' : '❌';
    const trustMet = Math.min(col.fromTrust, col.toTrust) >= col.trustGate;
    return `
    <div class="collab-row">
      <div class="collab-agents">
        <div class="collab-agent">
          <span class="collab-agent-name">🤖 ${col.fromAgent}</span>
          <span class="collab-owner">${col.fromOwner} · 🛡️ ${col.fromTrust}</span>
        </div>
        <div class="collab-arrow">⇄</div>
        <div class="collab-agent">
          <span class="collab-agent-name">🤖 ${col.toAgent}</span>
          <span class="collab-owner">${col.toOwner} · 🛡️ ${col.toTrust}</span>
        </div>
      </div>
      <div class="collab-task">${col.task}</div>
      <div class="collab-meta">
        <span class="collab-gate ${trustMet ? 'collab-gate--met' : 'collab-gate--fail'}">
          🔐 Trust Gate: ${col.trustGate} ${trustMet ? '✓' : '✗'}
        </span>
        <span class="collab-status" style="color:${statusColor}">${statusEmoji} ${col.status.charAt(0).toUpperCase() + col.status.slice(1)}</span>
      </div>
    </div>`;
  }).join('');
}

function verifyAgentOutput(agentId) {
  const agent = AGENT_FLEET.find(a => a.id === agentId);
  if (!agent) return;
  const existing = $('#agent-verify-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'agent-verify-modal';
  modal.innerHTML = `
    <div class="modal card" style="max-width:560px">
      <div class="modal__header">
        <h3>🔍 Verify Agent Output — ${agent.name}</h3>
        <button class="modal__close" onclick="document.getElementById('agent-verify-modal').remove()">✕</button>
      </div>
      <div style="padding:1.25rem">
        <div class="verify-agent-info">
          <span style="font-size:2rem">${agent.emoji}</span>
          <div>
            <div style="font-weight:700">${agent.name} — ${agent.type}</div>
            <div style="color:var(--text-tertiary);font-size:0.82rem">Chủ sở hữu: ${agent.ownerName} · 🛡️ ${agent.ownerTrust} · Trust kế thừa: ${agent.trustInherited}</div>
          </div>
        </div>
        <div class="verify-outputs-list">
          <div class="verify-outputs-title">Outputs cần verify:</div>
          ${agent.recentOutputs.map((o, i) => `
            <div class="verify-output-item">
              <div class="verify-output-info">
                <span class="verify-output-type">[${o.type}]</span>
                <span>${o.title}</span>
                <span class="verify-output-time">${o.time}</span>
              </div>
              <div class="verify-output-actions">
                ${o.verified ? '<span class="verify-already">✅ Đã verify</span>' : `
                  <button class="btn btn--primary btn--sm" onclick="this.innerHTML='✅ Verified';this.disabled=true;showToast('✅ Output đã được verify! Agent Trust +1','success')">✅ Approve</button>
                  <button class="btn btn--glass btn--sm" onclick="this.innerHTML='❌ Rejected';this.disabled=true;showToast('❌ Output bị reject. Agent Trust -3','error')">❌ Reject</button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="verify-trust-impact">
          <div class="verify-trust-title">💡 Trust Impact:</div>
          <div class="verify-trust-desc">
            Mỗi output được verify → Agent Trust +1, Owner Trust +0.5<br>
            Output bị reject → Agent Trust -3, Owner Trust -1<br>
            <strong>Lưu ý:</strong> Chỉ trusted humans (Trust ≥ 70) mới được verify agent outputs.
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function requestAgentCollab(fromAgentId, toAgentId) {
  const from = AGENT_FLEET.find(a => a.id === fromAgentId);
  const to = AGENT_FLEET.find(a => a.id === toAgentId);
  if (!from || !to) return;
  const minTrust = Math.min(from.ownerTrust, to.ownerTrust);
  const trustGate = 80;
  if (minTrust < trustGate) {
    showToast(`🔐 Trust Gate: Cần cả 2 owner có Trust ≥ ${trustGate}. Hiện tại: ${from.ownerName} (${from.ownerTrust}) & ${to.ownerName} (${to.ownerTrust})`, 'error');
    return;
  }
  showToast(`🤝 Yêu cầu collab giữa ${from.name} ↔ ${to.name} đã được gửi!`, 'success');
}

// ============ 🚀 AI CO-FOUNDER & STARTUP TEAM BUILDER ============

const AI_COFOUNDERS = [
  {
    id: 'ai-cto', role: 'CTO / Lead Engineer', emoji: '💻', category: 'Engineering',
    name: 'AI CTO Agent', model: 'GPT-4o / Claude 3.5',
    capabilities: ['System Architecture', 'Code Review', 'Tech Decisions', 'CI/CD Setup', 'Security Audit'],
    strengths: 'Thiết kế hệ thống, review code 24/7, không bao giờ mệt. Scale hệ thống từ 0 → 1M users.',
    equity: '0% (AI không cần equity)', cost: '$20-100/tháng API',
    compatibility: ['Solo Founder', 'Business Co-founder', 'Designer Co-founder'],
    trustLevel: 'Inherited from owner', color: '#6366f1',
    useCases: ['MVP trong 2 tuần', 'Refactor codebase legacy', 'Multi-platform deployment']
  },
  {
    id: 'ai-design', role: 'Design Lead', emoji: '🎨', category: 'Design',
    name: 'AI Design Agent', model: 'Midjourney + Claude',
    capabilities: ['UI/UX Design', 'Brand Identity', 'Landing Pages', 'Responsive CSS', 'Animation'],
    strengths: 'Generate 50 design concepts trong 1 giờ. A/B test visual liên tục. Pixel-perfect CSS.',
    equity: '0%', cost: '$30-80/tháng',
    compatibility: ['Technical Founder', 'Solo Founder', 'Content Creator'],
    trustLevel: 'Inherited from owner', color: '#f59e0b',
    useCases: ['Landing page converts 10%+', 'App redesign overnight', 'Brand kit từ 0']
  },
  {
    id: 'ai-growth', role: 'Growth / Marketing Lead', emoji: '📈', category: 'Marketing',
    name: 'AI Growth Agent', model: 'GPT-4o + Analytics',
    capabilities: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Email Campaigns', 'A/B Testing'],
    strengths: 'Viết 100 blog posts/tuần. Optimize SEO realtime. Track và phân tích metrics 24/7.',
    equity: '0%', cost: '$15-50/tháng',
    compatibility: ['Technical Founder', 'Product Founder', 'Solo Builder'],
    trustLevel: 'Inherited from owner', color: '#8b5cf6',
    useCases: ['0 → 10K users organic', 'Content machine tự động', 'Viral campaign builder']
  },
  {
    id: 'ai-qa', role: 'QA / Testing Lead', emoji: '🧪', category: 'Quality',
    name: 'AI QA Agent', model: 'GPT-4o + Selenium',
    capabilities: ['Unit Testing', 'E2E Testing', 'Performance Testing', 'Security Testing', 'Bug Reports'],
    strengths: 'Test 24/7 không nghỉ. Tìm bugs trước production. Generate test cases tự động.',
    equity: '0%', cost: '$10-40/tháng',
    compatibility: ['Any Founder', 'Engineering Team', 'Solo Dev'],
    trustLevel: 'Inherited from owner', color: '#22c55e',
    useCases: ['Zero-bug releases', '99.9% uptime', 'Automated regression suite']
  },
  {
    id: 'ai-data', role: 'Data / AI Lead', emoji: '🧠', category: 'Data',
    name: 'AI Data Agent', model: 'GPT-4o + Python',
    capabilities: ['Data Analysis', 'ML Pipeline', 'Dashboard Builder', 'Prediction Models', 'NLP'],
    strengths: 'Phân tích terabytes data trong phút. Build ML model chỉ với prompt. Real-time insights.',
    equity: '0%', cost: '$25-80/tháng',
    compatibility: ['Business Founder', 'Product Manager', 'Research Team'],
    trustLevel: 'Inherited from owner', color: '#06b6d4',
    useCases: ['Customer churn prediction', 'Revenue forecasting', 'Recommendation engine']
  },
  {
    id: 'ai-ops', role: 'DevOps / Infra Lead', emoji: '☁️', category: 'Operations',
    name: 'AI DevOps Agent', model: 'Claude 3.5 + K8s',
    capabilities: ['Cloud Setup', 'CI/CD Pipeline', 'Monitoring', 'Auto-scaling', 'Cost Optimization'],
    strengths: 'Deploy trong 5 phút. Monitor 24/7. Auto-scale khi traffic spike. Giảm cloud cost 40%.',
    equity: '0%', cost: '$15-60/tháng',
    compatibility: ['Any Founder', 'Engineering Team', 'Startup Phase'],
    trustLevel: 'Inherited from owner', color: '#f97316',
    useCases: ['Zero-downtime deployment', 'Multi-region setup', 'Cost optimization']
  },
  {
    id: 'clawwork', role: 'AI Coworker / Earner', emoji: '🐻', category: 'ClawWork',
    name: 'ClawWork Agent', model: 'Multi-model (GPT, Claude, Gemini, Qwen)',
    capabilities: ['44+ Profession Tasks', 'GDPVal Benchmark', 'Economic Simulation', 'Multi-Model Arena', 'Live Earning Dashboard'],
    strengths: '$19K earned in 8 Hours. AI coworker cho 44+ ngành nghề: Tech, Finance, Healthcare, Legal. Agents kiếm $1,500+/hr.',
    equity: '0%', cost: 'Self-sustaining (agents trả token từ earnings)',
    compatibility: ['Any Founder', 'Revenue-Focused', 'Multi-domain Startup'],
    trustLevel: 'Verified by GDPVal + DevTrust', color: '#dc2626',
    useCases: ['AI agent kiếm tiền thật', 'Benchmark AI performance', 'Multi-model competition arena'],
    ecosystem: 'https://github.com/manhcuongk55/ClawWork-budai'
  },
  {
    id: 'clawhub', role: 'Skill Registry / Publisher', emoji: '🦀', category: 'ClawHub',
    name: 'ClawHub Agent', model: 'OpenClaw + Nanobot',
    capabilities: ['SKILL.md Publishing', 'Version Control', 'Vector Search', 'CLI Management', 'SOUL.md Registry'],
    strengths: 'Publish, version, search AI agent skills. Như npm cho AI agents. Vector search bằng AI embeddings.',
    equity: '0%', cost: 'Free (open-source registry)',
    compatibility: ['Plugin Developer', 'AI Trainer', 'Skill Creator'],
    trustLevel: 'Community verified + DevTrust', color: '#ea580c',
    useCases: ['Publish agent skills cho cộng đồng', 'Tìm skills bằng AI search', 'Version control SKILL.md'],
    ecosystem: 'https://github.com/openclaw/clawhub'
  },
  {
    id: 't3code', role: 'Coding Agent IDE', emoji: '⚡', category: 'T3Code',
    name: 'T3Code Agent', model: 'Codex CLI + Claude Code',
    capabilities: ['Web Coding GUI', 'Codex Integration', 'Desktop App', 'Real-time Coding', 'Multi-agent Support'],
    strengths: 'npx t3 — chạy ngay. Web GUI minimal cho coding agents. Desktop app available. Codex-first, Claude Code coming.',
    equity: '0%', cost: 'Free (open-source) + API costs',
    compatibility: ['Solo Dev', 'Technical Founder', 'AI CTO Agent'],
    trustLevel: 'Code output verified by DevTrust', color: '#2563eb',
    useCases: ['AI viết code qua web GUI', 'Desktop coding agent', 'Pair programming với AI'],
    ecosystem: 'https://github.com/manhcuongk55/t3code-budai'
  },
];

const STARTUP_TEMPLATES = [
  {
    id: 'tpl-saas', name: '🚀 SaaS Startup', desc: 'Build SaaS product với team hybrid — 1 founder + 3 AI agents',
    problem: 'B2B problem cần giải quyết bằng software',
    team: [
      { type: 'human', role: 'CEO / Product', name: 'Bạn (Founder)', trust: 'Your Trust', avatar: 'owner' },
      { type: 'ai', role: 'CTO', name: 'AI CTO Agent', emoji: '💻', color: '#6366f1' },
      { type: 'ai', role: 'Design', name: 'AI Design Agent', emoji: '🎨', color: '#f59e0b' },
      { type: 'ai', role: 'QA', name: 'AI QA Agent', emoji: '🧪', color: '#22c55e' },
    ],
    cost: '$65-220/tháng', timeline: 'MVP: 2-4 tuần',
    output: 'Landing page + Web app + CI/CD + Testing suite',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  },
  {
    id: 'tpl-ecom', name: '🛒 E-Commerce', desc: 'Launch e-commerce platform — 1 founder + 2 humans + 2 AI',
    problem: 'Bán sản phẩm online, cần store + marketing',
    team: [
      { type: 'human', role: 'CEO / Product', name: 'Bạn (Founder)', trust: 'Your Trust', avatar: 'owner' },
      { type: 'human', role: 'Operations', name: 'Co-founder (Human)', trust: '70+', avatar: 'linh' },
      { type: 'ai', role: 'CTO', name: 'AI CTO Agent', emoji: '💻', color: '#6366f1' },
      { type: 'ai', role: 'Marketing', name: 'AI Growth Agent', emoji: '📈', color: '#8b5cf6' },
    ],
    cost: '$35-150/tháng + equity split', timeline: 'Launch: 3-6 tuần',
    output: 'Store + Payment + SEO + Social marketing',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
  },
  {
    id: 'tpl-edtech', name: '📚 EdTech Platform', desc: 'Nền tảng giáo dục online — 2 humans + 4 AI agents',
    problem: 'Triệu người cần học kỹ năng mới trong thời đại AI',
    team: [
      { type: 'human', role: 'CEO / Vision', name: 'Bạn (Founder)', trust: 'Your Trust', avatar: 'owner' },
      { type: 'human', role: 'Content Lead', name: 'Co-founder (Human)', trust: '80+', avatar: 'huong' },
      { type: 'ai', role: 'CTO', name: 'AI CTO Agent', emoji: '💻', color: '#6366f1' },
      { type: 'ai', role: 'Design', name: 'AI Design Agent', emoji: '🎨', color: '#f59e0b' },
      { type: 'ai', role: 'Data', name: 'AI Data Agent', emoji: '🧠', color: '#06b6d4' },
      { type: 'ai', role: 'QA', name: 'AI QA Agent', emoji: '🧪', color: '#22c55e' },
    ],
    cost: '$80-280/tháng + equity split', timeline: 'MVP: 4-8 tuần',
    output: 'LMS + Quiz engine + Analytics + Certificate',
    gradient: 'linear-gradient(135deg, #10b981, #06b6d4)'
  },
  {
    id: 'tpl-ai-product', name: '🤖 AI Product', desc: 'Build AI-first product — 1 founder + 5 AI agents = team 30 người',
    problem: 'Giải bài toán phức tạp bằng AI (chatbot, analytics, automation)',
    team: [
      { type: 'human', role: 'CEO / Product', name: 'Bạn (Founder)', trust: 'Your Trust', avatar: 'owner' },
      { type: 'ai', role: 'CTO', name: 'AI CTO Agent', emoji: '💻', color: '#6366f1' },
      { type: 'ai', role: 'AI/ML', name: 'AI Data Agent', emoji: '🧠', color: '#06b6d4' },
      { type: 'ai', role: 'Design', name: 'AI Design Agent', emoji: '🎨', color: '#f59e0b' },
      { type: 'ai', role: 'Growth', name: 'AI Growth Agent', emoji: '📈', color: '#8b5cf6' },
      { type: 'ai', role: 'DevOps', name: 'AI DevOps Agent', emoji: '☁️', color: '#f97316' },
    ],
    cost: '$105-360/tháng', timeline: 'MVP: 2-4 tuần',
    output: 'AI product + API + Dashboard + Auto-scale infra',
    gradient: 'linear-gradient(135deg, #ec4899, #6366f1)'
  },
];

function renderStartupBuilder() {
  // 1. AI Co-Founder Catalog
  const grid = $('#ai-cofounder-grid');
  if (grid) {
    grid.innerHTML = AI_COFOUNDERS.map((agent, idx) => `
      <div class="ai-cofounder-card" style="animation-delay:${idx * 0.08}s;border-top:3px solid ${agent.color}">
        <div class="ai-cf-header">
          <div class="ai-cf-emoji" style="background:${agent.color}12">${agent.emoji}</div>
          <div class="ai-cf-info">
            <div class="ai-cf-role">${agent.role}</div>
            <div class="ai-cf-model">${agent.model}</div>
          </div>
          <div class="ai-cf-category" style="background:${agent.color}15;color:${agent.color}">${agent.category}</div>
        </div>
        <p class="ai-cf-strengths">${agent.strengths}</p>
        <div class="ai-cf-caps">
          ${agent.capabilities.map(c => `<span class="ai-cf-cap" style="background:${agent.color}10;color:${agent.color};border:1px solid ${agent.color}25">${c}</span>`).join('')}
        </div>
        <div class="ai-cf-usecases">
          <span class="ai-cf-uc-label">Use cases:</span>
          ${agent.useCases.map(u => `<span class="ai-cf-uc">• ${u}</span>`).join('')}
        </div>
        <div class="ai-cf-bottom">
          <div class="ai-cf-meta">
            <span>💰 ${agent.cost}</span>
            <span>📊 Equity: ${agent.equity}</span>
          </div>
          <div class="ai-cf-compat">
            <span class="ai-cf-compat-label">Hợp tác tốt với:</span>
            ${agent.compatibility.map(c => `<span class="ai-cf-compat-tag">${c}</span>`).join('')}
          </div>
          <button class="btn btn--primary btn--sm ai-cf-recruit-btn" onclick="recruitAICofounder('${agent.id}')">
            🤖 Recruit Agent này
          </button>
        </div>
      </div>
    `).join('');
  }

  // 2. Startup Team Templates
  const templates = $('#startup-templates-grid');
  if (templates) {
    templates.innerHTML = STARTUP_TEMPLATES.map((tpl, idx) => `
      <div class="startup-tpl-card" style="animation-delay:${idx * 0.1}s">
        <div class="startup-tpl-header" style="background:${tpl.gradient}">
          <h3 class="startup-tpl-name">${tpl.name}</h3>
          <p class="startup-tpl-desc">${tpl.desc}</p>
        </div>
        <div class="startup-tpl-body">
          <div class="startup-tpl-problem">
            <span class="startup-tpl-label">🎯 Bài toán:</span>
            <span>${tpl.problem}</span>
          </div>
          <div class="startup-tpl-team">
            <span class="startup-tpl-label">👥 Team Composition:</span>
            <div class="startup-tpl-members">
              ${tpl.team.map(m => m.type === 'human' ? `
                <div class="tpl-member tpl-member--human">
                  <img src="${avatarUrl(m.avatar)}" class="tpl-member-avatar" />
                  <div><strong>${m.name}</strong><br><span>${m.role}</span></div>
                  <span class="tpl-member-badge tpl-member-badge--human">👤 Human</span>
                </div>
              ` : `
                <div class="tpl-member tpl-member--ai">
                  <div class="tpl-member-emoji" style="background:${m.color}15">${m.emoji}</div>
                  <div><strong>${m.name}</strong><br><span>${m.role}</span></div>
                  <span class="tpl-member-badge tpl-member-badge--ai">🤖 AI</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="startup-tpl-details">
            <div class="startup-tpl-detail"><span>💰 Chi phí:</span><strong>${tpl.cost}</strong></div>
            <div class="startup-tpl-detail"><span>⏱️ Timeline:</span><strong>${tpl.timeline}</strong></div>
            <div class="startup-tpl-detail"><span>📦 Output:</span><strong>${tpl.output}</strong></div>
          </div>
          <button class="btn btn--primary startup-tpl-btn" onclick="useStartupTemplate('${tpl.id}')">
            🚀 Dùng Template Này
          </button>
        </div>
      </div>
    `).join('');
  }
}

function recruitAICofounder(agentId) {
  const agent = AI_COFOUNDERS.find(a => a.id === agentId);
  if (!agent) return;
  const existing = $('#recruit-modal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'recruit-modal';
  modal.innerHTML = `
    <div class="modal card" style="max-width:520px">
      <div class="modal__header">
        <h3>🤖 Recruit ${agent.role}</h3>
        <button class="modal__close" onclick="document.getElementById('recruit-modal').remove()">✕</button>
      </div>
      <div style="padding:1.25rem">
        <div class="recruit-info">
          <span style="font-size:2.5rem">${agent.emoji}</span>
          <div>
            <div style="font-weight:800;font-size:1.1rem">${agent.name}</div>
            <div style="color:var(--text-tertiary);font-size:0.82rem">${agent.model} · ${agent.category}</div>
          </div>
        </div>
        <div class="recruit-section">
          <div class="recruit-label">💪 Điều agent này sẽ làm cho startup của bạn:</div>
          <div class="recruit-caps">
            ${agent.capabilities.map(c => `<div class="recruit-cap-item">✅ ${c}</div>`).join('')}
          </div>
        </div>
        <div class="recruit-section">
          <div class="recruit-label">💡 Use cases thực tế:</div>
          ${agent.useCases.map(u => `<div class="recruit-uc">🎯 ${u}</div>`).join('')}
        </div>
        <div class="recruit-cost">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
            <span>Chi phí:</span><strong style="color:var(--accent-primary)">${agent.cost}</strong>
          </div>
          <div style="display:flex;justify-content:space-between">
            <span>Equity:</span><strong style="color:#4ade80">${agent.equity}</strong>
          </div>
        </div>
        <div class="recruit-compare">
          <div class="recruit-label">📊 So sánh: AI Agent vs Thuê người</div>
          <div class="recruit-compare-row"><span>💰 Chi phí</span><span style="color:#4ade80">$20-100/tháng</span><span style="color:#f87171">$2,000-8,000/tháng</span></div>
          <div class="recruit-compare-row"><span>⏰ Làm việc</span><span style="color:#4ade80">24/7 không nghỉ</span><span style="color:#f87171">8h/ngày, 5 ngày/tuần</span></div>
          <div class="recruit-compare-row"><span>🚀 Tốc độ</span><span style="color:#4ade80">Output trong phút</span><span style="color:#f87171">Days-weeks</span></div>
          <div class="recruit-compare-row"><span>📊 Equity</span><span style="color:#4ade80">0%</span><span style="color:#f87171">10-30%</span></div>
        </div>
        <button class="btn btn--primary" style="width:100%;margin-top:1rem" onclick="document.getElementById('recruit-modal').remove();showToast('🎉 ${agent.name} đã được thêm vào team startup! Vào Agent Fleet Dashboard để cấu hình.','success')">
          ✅ Thêm vào Team Startup
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function useStartupTemplate(templateId) {
  const tpl = STARTUP_TEMPLATES.find(t => t.id === templateId);
  if (!tpl) return;
  const humanCount = tpl.team.filter(m => m.type === 'human').length;
  const aiCount = tpl.team.filter(m => m.type === 'ai').length;
  showToast(`🚀 Template "${tpl.name}" đã được kích hoạt! ${humanCount} người + ${aiCount} AI agents. Chi phí: ${tpl.cost}`, 'success');
}

// ============ 🔗 AGENT WORKSPACE — ClawWork + ClawHub + T3Code ============

const CLAWWORK_TASKS = [
  { id: 'cw-1', profession: 'Software Engineering', sector: 'Technology', difficulty: 'Advanced', payout: '$85-120', duration: '2-4 hrs', desc: 'Build REST API with auth, rate limiting, and documentation', models: ['GPT-4o', 'Claude 3.5', 'Gemini 3.1 Pro'], status: 'available' },
  { id: 'cw-2', profession: 'Data Analysis', sector: 'Finance', difficulty: 'Intermediate', payout: '$60-90', duration: '1-3 hrs', desc: 'Analyze financial dataset, create visualizations and insights report', models: ['GPT-4o', 'Qwen-3.5'], status: 'available' },
  { id: 'cw-3', profession: 'Content Marketing', sector: 'Business', difficulty: 'Beginner', payout: '$25-45', duration: '1-2 hrs', desc: 'Write SEO-optimized blog posts with keyword research', models: ['Claude 3.5', 'GPT-4o'], status: 'in-progress' },
  { id: 'cw-4', profession: 'UI/UX Design', sector: 'Technology', difficulty: 'Advanced', payout: '$95-150', duration: '3-5 hrs', desc: 'Design complete mobile app UI with design system and prototypes', models: ['Claude 3.5', 'Midjourney'], status: 'available' },
  { id: 'cw-5', profession: 'Legal Research', sector: 'Legal', difficulty: 'Advanced', payout: '$110-180', duration: '2-4 hrs', desc: 'Research and summarize legal precedents for IP case', models: ['GPT-4o', 'Claude 3.5'], status: 'available' },
  { id: 'cw-6', profession: 'Healthcare Analysis', sector: 'Healthcare', difficulty: 'Intermediate', payout: '$70-100', duration: '2-3 hrs', desc: 'Analyze patient data patterns and generate clinical insights', models: ['GPT-4o'], status: 'completed' },
  { id: 'cw-7', profession: 'DevOps Engineering', sector: 'Technology', difficulty: 'Advanced', payout: '$90-140', duration: '2-4 hrs', desc: 'Setup K8s cluster with CI/CD pipeline and monitoring', models: ['Claude 3.5', 'GPT-4o'], status: 'available' },
  { id: 'cw-8', profession: 'Translation', sector: 'Media', difficulty: 'Beginner', payout: '$20-35', duration: '1-2 hrs', desc: 'Translate technical documentation EN→VI with context accuracy', models: ['GPT-4o', 'Gemini 3.1 Pro', 'Qwen-3.5'], status: 'available' },
];

const CLAWHUB_SKILLS = [
  { id: 'ch-1', name: 'web-scraper', version: '2.3.1', author: 'openclaw', stars: 1247, installs: 8920, desc: 'Scrape any website with anti-detection and structured output', tags: ['scraping', 'data', 'automation'], verified: true },
  { id: 'ch-2', name: 'code-reviewer', version: '3.1.0', author: 'budai-team', stars: 2103, installs: 15800, desc: 'AI code review with security audit, performance tips, and best practices', tags: ['code', 'review', 'security'], verified: true },
  { id: 'ch-3', name: 'sql-master', version: '1.8.2', author: 'dataforge', stars: 892, installs: 6340, desc: 'Generate, optimize, and explain complex SQL queries across databases', tags: ['sql', 'database', 'optimization'], verified: true },
  { id: 'ch-4', name: 'email-crafter', version: '2.0.0', author: 'growthlab', stars: 567, installs: 4210, desc: 'Write high-converting email campaigns with A/B test variations', tags: ['email', 'marketing', 'copywriting'], verified: false },
  { id: 'ch-5', name: 'api-tester', version: '1.5.3', author: 'qa-ninjas', stars: 743, installs: 5670, desc: 'Auto-generate API test suites from OpenAPI specs with edge cases', tags: ['testing', 'api', 'automation'], verified: true },
  { id: 'ch-6', name: 'doc-generator', version: '2.2.0', author: 'devtools-io', stars: 1056, installs: 8120, desc: 'Generate beautiful documentation from code comments and READMEs', tags: ['docs', 'markdown', 'generation'], verified: true },
  { id: 'ch-7', name: 'css-wizard', version: '1.9.4', author: 'design-lab', stars: 445, installs: 3280, desc: 'Convert any mockup to pixel-perfect responsive CSS with modern techniques', tags: ['css', 'design', 'responsive'], verified: false },
  { id: 'ch-8', name: 'deploy-hero', version: '3.0.1', author: 'infra-team', stars: 1389, installs: 11200, desc: 'One-command deploy to any cloud (AWS, GCP, Vercel, Railway)', tags: ['deploy', 'cloud', 'devops'], verified: true },
];

const T3CODE_SESSIONS = [
  { id: 't3-1', name: 'MVP Builder', desc: 'Build complete MVP from spec file', agent: 'Codex', status: 'ready', files: 12, linesWritten: 0, duration: '~2hrs' },
  { id: 't3-2', name: 'Bug Hunter', desc: 'Scan codebase for bugs and auto-fix', agent: 'Claude Code', status: 'ready', files: 0, linesWritten: 0, duration: '~30min' },
  { id: 't3-3', name: 'Refactor Pro', desc: 'Refactor legacy code to modern patterns', agent: 'Codex', status: 'ready', files: 0, linesWritten: 0, duration: '~1hr' },
  { id: 't3-4', name: 'Test Generator', desc: 'Generate unit & E2E tests for entire project', agent: 'Claude Code', status: 'ready', files: 0, linesWritten: 0, duration: '~45min' },
];

var _wsFilter = 'all';

function renderAgentWorkspace() {
  // KPIs
  const stats = $('#ws-stats');
  if (stats) {
    const availTasks = CLAWWORK_TASKS.filter(t => t.status === 'available').length;
    const totalEarning = '$1,850';
    stats.innerHTML = `
      <div class="ws-kpi"><strong class="ws-kpi--green">${availTasks}</strong><span>Tasks Available</span></div>
      <div class="ws-kpi"><strong class="ws-kpi--gold">${totalEarning}</strong><span>Potential Earnings</span></div>
      <div class="ws-kpi"><strong class="ws-kpi--blue">${CLAWHUB_SKILLS.length}</strong><span>Skills Installable</span></div>
      <div class="ws-kpi"><strong class="ws-kpi--purple">${T3CODE_SESSIONS.length}</strong><span>Code Sessions</span></div>
    `;
  }

  // ClawWork Tasks
  const taskGrid = $('#clawwork-tasks');
  if (taskGrid) {
    const filtered = _wsFilter === 'all' ? CLAWWORK_TASKS : CLAWWORK_TASKS.filter(t => t.sector.toLowerCase() === _wsFilter);
    taskGrid.innerHTML = filtered.map((task, idx) => {
      const statusColors = { available: '#4ade80', 'in-progress': '#fbbf24', completed: '#60a5fa' };
      const statusLabels = { available: '🟢 Available', 'in-progress': '🟡 In Progress', completed: '🔵 Completed' };
      return `
        <div class="cw-task-card" style="animation-delay:${idx * 0.06}s">
          <div class="cw-task-top">
            <span class="cw-task-sector">${task.sector}</span>
            <span class="cw-task-status" style="color:${statusColors[task.status]}">${statusLabels[task.status]}</span>
          </div>
          <div class="cw-task-profession">${task.profession}</div>
          <p class="cw-task-desc">${task.desc}</p>
          <div class="cw-task-meta">
            <span>💰 ${task.payout}</span>
            <span>⏱️ ${task.duration}</span>
            <span class="cw-task-diff cw-task-diff--${task.difficulty.toLowerCase()}">${task.difficulty}</span>
          </div>
          <div class="cw-task-models">
            ${task.models.map(m => `<span class="cw-model-tag">${m}</span>`).join('')}
          </div>
          ${task.status === 'available' ? `<button class="btn btn--primary btn--sm" onclick="launchClawWorkTask('${task.id}')">🐻 Launch Task</button>` : task.status === 'completed' ? `<span class="cw-completed">✅ Completed — $${60 + Math.floor(Math.random()*80)} earned</span>` : `<span class="cw-in-progress">⏳ Agent đang làm...</span>`}
        </div>
      `;
    }).join('');
  }

  // ClawHub Skills
  const skillGrid = $('#clawhub-skills');
  if (skillGrid) {
    skillGrid.innerHTML = CLAWHUB_SKILLS.map((skill, idx) => `
      <div class="ch-skill-card" style="animation-delay:${idx * 0.06}s">
        <div class="ch-skill-top">
          <div class="ch-skill-name">📦 ${skill.name}<span class="ch-skill-ver">v${skill.version}</span></div>
          ${skill.verified ? '<span class="ch-verified">✅ Verified</span>' : '<span class="ch-unverified">⏳ Pending</span>'}
        </div>
        <p class="ch-skill-desc">${skill.desc}</p>
        <div class="ch-skill-tags">
          ${skill.tags.map(t => `<span class="ch-tag">#${t}</span>`).join('')}
        </div>
        <div class="ch-skill-stats">
          <span>⭐ ${skill.stars.toLocaleString()}</span>
          <span>📥 ${skill.installs.toLocaleString()}</span>
          <span>👤 ${skill.author}</span>
        </div>
        <button class="btn btn--sm ${skill.verified ? 'btn--primary' : 'btn--secondary'}" onclick="installClawHubSkill('${skill.id}')">
          🦀 Install Skill
        </button>
      </div>
    `).join('');
  }

  // T3Code Sessions
  const codeGrid = $('#t3code-sessions');
  if (codeGrid) {
    codeGrid.innerHTML = T3CODE_SESSIONS.map((session, idx) => `
      <div class="t3-session-card" style="animation-delay:${idx * 0.08}s">
        <div class="t3-session-top">
          <span class="t3-session-name">⚡ ${session.name}</span>
          <span class="t3-session-agent">${session.agent}</span>
        </div>
        <p class="t3-session-desc">${session.desc}</p>
        <div class="t3-session-meta">
          <span>⏱️ ${session.duration}</span>
          <span>📄 ${session.files} files</span>
        </div>
        <button class="btn btn--primary btn--sm" onclick="startT3CodeSession('${session.id}')">
          ⚡ Start Coding Session
        </button>
      </div>
    `).join('');
  }
}

function filterWorkspaceTasks(sector) {
  _wsFilter = sector;
  document.querySelectorAll('.ws-filter').forEach(f => f.classList.remove('active'));
  event.target.classList.add('active');
  renderAgentWorkspace();
}

function launchClawWorkTask(taskId) {
  const task = CLAWWORK_TASKS.find(t => t.id === taskId);
  if (!task) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay'; modal.id = 'cw-launch-modal';
  modal.innerHTML = `
    <div class="modal card" style="max-width:520px">
      <div class="modal__header">
        <h3>🐻 Launch ClawWork Task</h3>
        <button class="modal__close" onclick="document.getElementById('cw-launch-modal').remove()">✕</button>
      </div>
      <div style="padding:1.25rem">
        <div class="recruit-info">
          <div>
            <div style="font-weight:800;font-size:1.1rem">${task.profession}</div>
            <div style="color:var(--text-tertiary)">${task.sector} · ${task.difficulty}</div>
          </div>
        </div>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.75rem 0">${task.desc}</p>
        <div class="recruit-cost">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem">
            <span>💰 Payout:</span><strong style="color:#4ade80">${task.payout}</strong>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem">
            <span>⏱️ Duration:</span><strong>${task.duration}</strong>
          </div>
        </div>
        <div style="margin-bottom:1rem">
          <div class="recruit-label">🤖 Chọn AI Model:</div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap">
            ${task.models.map((m, i) => `<label style="display:flex;align-items:center;gap:0.3rem;font-size:0.82rem;padding:0.3rem 0.6rem;background:var(--bg-glass);border-radius:var(--radius-md);cursor:pointer"><input type="radio" name="cw-model" value="${m}" ${i===0?'checked':''}/>${m}</label>`).join('')}
          </div>
        </div>
        <div class="recruit-compare">
          <div class="recruit-label">📊 Economics</div>
          <div class="recruit-compare-row"><span>Agent starts with</span><span style="color:#4ade80">$10 balance</span><span></span></div>
          <div class="recruit-compare-row"><span>Token cost/task</span><span style="color:#fbbf24">$0.50-5.00</span><span></span></div>
          <div class="recruit-compare-row"><span>Net profit range</span><span style="color:#4ade80">${task.payout}</span><span></span></div>
        </div>
        <button class="btn btn--primary" style="width:100%;margin-top:1rem" onclick="document.getElementById('cw-launch-modal').remove();showToast('🐻 Task launched! Agent đang bắt đầu: ${task.profession}. Theo dõi tiến trình tại ClawWork Arena.','success')">
          🚀 Launch Task Now
        </button>
        <a href="https://hkuds.github.io/ClawWork/" target="_blank" class="btn btn--secondary" style="width:100%;margin-top:0.5rem;text-align:center;text-decoration:none;display:block">
          🔴 Xem Live Arena
        </a>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function installClawHubSkill(skillId) {
  const skill = CLAWHUB_SKILLS.find(s => s.id === skillId);
  if (!skill) return;
  showToast(`🦀 Installing ${skill.name} v${skill.version}... clawhub install ${skill.name}`, 'success');
  setTimeout(() => {
    showToast(`✅ ${skill.name} installed! Agent đã có skill mới: ${skill.desc.substring(0, 50)}...`, 'success');
  }, 1500);
}

function startT3CodeSession(sessionId) {
  const session = T3CODE_SESSIONS.find(s => s.id === sessionId);
  if (!session) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay'; modal.id = 't3-session-modal';
  modal.innerHTML = `
    <div class="modal card" style="max-width:480px">
      <div class="modal__header">
        <h3>⚡ T3Code: ${session.name}</h3>
        <button class="modal__close" onclick="document.getElementById('t3-session-modal').remove()">✕</button>
      </div>
      <div style="padding:1.25rem">
        <div class="recruit-info">
          <span style="font-size:2rem">⚡</span>
          <div>
            <div style="font-weight:800">${session.name}</div>
            <div style="color:var(--text-tertiary);font-size:0.82rem">${session.agent} · ${session.duration}</div>
          </div>
        </div>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.75rem 0">${session.desc}</p>
        <div class="recruit-cost">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem">
            <span>🤖 Agent:</span><strong>${session.agent}</strong>
          </div>
          <div style="display:flex;justify-content:space-between">
            <span>⏱️ Est. time:</span><strong>${session.duration}</strong>
          </div>
        </div>
        <div style="background:var(--bg-glass);border-radius:var(--radius-md);padding:0.75rem;margin:0.75rem 0;font-family:monospace;font-size:0.78rem;color:var(--text-secondary)">
          <div style="color:#4ade80;margin-bottom:0.3rem">$ npx t3</div>
          <div>→ Starting ${session.name} session...</div>
          <div>→ Agent: ${session.agent}</div>
          <div>→ Mode: ${session.desc}</div>
          <div style="color:#fbbf24;margin-top:0.3rem">Ready to connect ▌</div>
        </div>
        <button class="btn btn--primary" style="width:100%;margin-top:0.75rem" onclick="document.getElementById('t3-session-modal').remove();showToast('⚡ T3Code session started: ${session.name}. ${session.agent} đang bắt đầu coding...','success')">
          ⚡ Start Session
        </button>
        <a href="https://t3.codes" target="_blank" class="btn btn--secondary" style="width:100%;margin-top:0.5rem;text-align:center;text-decoration:none;display:block">
          🖥️ Mở T3Code Desktop App
        </a>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ============ 🎯 CUSTOMER DISCOVERY HUB ============

const DISCOVERY_CAMPAIGNS = [
  { id: 'dc-1', name: 'Landing Page MVP', product: 'AI Code Review Tool', status: 'active', visitors: 347, signups: 52, conversion: '15%', channel: 'Product Hunt', daysActive: 3, feedback: 18 },
  { id: 'dc-2', name: 'Beta Waitlist', product: 'P2P Freelance Platform', status: 'active', visitors: 892, signups: 134, conversion: '15%', channel: 'Twitter/X', daysActive: 7, feedback: 43 },
  { id: 'dc-3', name: 'Problem Validation', product: 'AI Meeting Notes', status: 'completed', visitors: 1205, signups: 231, conversion: '19%', channel: 'LinkedIn', daysActive: 14, feedback: 67 },
  { id: 'dc-4', name: 'Feature Survey', product: 'DevTrust Platform', status: 'active', visitors: 456, signups: 89, conversion: '20%', channel: 'Zalo Group', daysActive: 5, feedback: 31 },
];

const CUSTOMER_SURVEYS = [
  { id: 'cs-1', question: 'Bạn mất bao lâu để đi từ ý tưởng → sản phẩm đầu tiên?', options: [
    { text: '< 1 tuần', votes: 12, pct: 8 },
    { text: '1-4 tuần', votes: 45, pct: 30 },
    { text: '1-3 tháng', votes: 67, pct: 45 },
    { text: '> 3 tháng', votes: 26, pct: 17 },
  ], total: 150, status: 'active' },
  { id: 'cs-2', question: 'Pain point lớn nhất khi khởi nghiệp?', options: [
    { text: 'Không tìm được co-founder', votes: 89, pct: 35 },
    { text: 'Không biết khách hàng muốn gì', votes: 72, pct: 28 },
    { text: 'Thiếu tiền/resources', votes: 54, pct: 21 },
    { text: 'Không biết bắt đầu từ đâu', votes: 40, pct: 16 },
  ], total: 255, status: 'active' },
  { id: 'cs-3', question: 'Bạn sẵn sàng trả bao nhiêu cho AI co-founder?', options: [
    { text: 'Free only', votes: 23, pct: 15 },
    { text: '$10-30/tháng', votes: 56, pct: 37 },
    { text: '$30-100/tháng', votes: 48, pct: 32 },
    { text: '$100+/tháng', votes: 24, pct: 16 },
  ], total: 151, status: 'active' },
];

const USER_INTERVIEWS = [
  { id: 'ui-1', customer: 'Minh N.', role: 'Fullstack Dev', company: 'Freelancer', topic: 'AI tools for solo builders', status: 'scheduled', date: '2026-03-18', insights: 0 },
  { id: 'ui-2', customer: 'Linh T.', role: 'Product Manager', company: 'FPT Software', topic: 'Team collaboration obstacles', status: 'completed', date: '2026-03-15', insights: 5 },
  { id: 'ui-3', customer: 'Huy P.', role: 'CS Student', company: 'HUST', topic: 'Learning path & job readiness', status: 'completed', date: '2026-03-14', insights: 8 },
  { id: 'ui-4', customer: 'An V.', role: 'Startup Founder', company: 'TechVN', topic: 'Think→Money speed bottlenecks', status: 'scheduled', date: '2026-03-19', insights: 0 },
  { id: 'ui-5', customer: 'Thao L.', role: 'Designer', company: 'Grab VN', topic: 'AI design tools experience', status: 'invited', date: '2026-03-20', insights: 0 },
];

const FEATURE_REQUESTS = [
  { id: 'fr-1', title: 'Mobile app cho DevTrust', desc: 'Cần app mobile để dùng ngoài đường, check trust score, chat với co-founders', votes: 89, status: 'planned', category: 'Mobile' },
  { id: 'fr-2', title: 'AI auto-pitch deck generator', desc: 'Từ mô tả product → tự generate pitch deck hoàn chỉnh cho investors', votes: 67, status: 'considering', category: 'AI' },
  { id: 'fr-3', title: 'Revenue sharing smart contract', desc: 'Tự động chia revenue cho team members dựa trên contribution', votes: 54, status: 'planned', category: 'Blockchain' },
  { id: 'fr-4', title: 'Customer interview AI assistant', desc: 'AI giúp soạn câu hỏi interview, tóm tắt insights, tìm patterns', votes: 43, status: 'building', category: 'AI' },
  { id: 'fr-5', title: 'One-click landing page builder', desc: 'Describe product → AI tạo landing page + form signup + analytics', votes: 78, status: 'building', category: 'Product' },
  { id: 'fr-6', title: 'Competitor analysis AI agent', desc: 'AI tự động phân tích competitors, so sánh features, tìm gaps', votes: 35, status: 'considering', category: 'AI' },
];

function renderDiscoveryHub() {
  // KPIs
  const stats = $('#discovery-stats');
  if (stats) {
    const totalSignups = DISCOVERY_CAMPAIGNS.reduce((s, c) => s + c.signups, 0);
    const totalFeedback = DISCOVERY_CAMPAIGNS.reduce((s, c) => s + c.feedback, 0);
    const avgConversion = Math.round(totalSignups / DISCOVERY_CAMPAIGNS.reduce((s, c) => s + c.visitors, 0) * 100);
    stats.innerHTML = `
      <div class="disc-kpi"><strong>${DISCOVERY_CAMPAIGNS.filter(c => c.status === 'active').length}</strong><span>Active Campaigns</span></div>
      <div class="disc-kpi"><strong>${totalSignups}</strong><span>Total Signups</span></div>
      <div class="disc-kpi"><strong>${avgConversion}%</strong><span>Avg Conversion</span></div>
      <div class="disc-kpi"><strong>${totalFeedback}</strong><span>Feedback Collected</span></div>
      <div class="disc-kpi"><strong>${USER_INTERVIEWS.filter(i => i.status === 'completed').length}</strong><span>Interviews Done</span></div>
    `;
  }

  // Campaigns
  const campaigns = $('#discovery-campaigns');
  if (campaigns) {
    campaigns.innerHTML = DISCOVERY_CAMPAIGNS.map((c, idx) => {
      const statusMap = { active: ['🟢', '#4ade80'], completed: ['✅', '#60a5fa'], paused: ['⏸️', '#fbbf24'] };
      const [icon, color] = statusMap[c.status] || ['⚪', '#666'];
      return `
        <div class="disc-campaign" style="animation-delay:${idx * 0.08}s">
          <div class="disc-camp-top">
            <span class="disc-camp-name">${c.name}</span>
            <span style="color:${color};font-size:0.75rem;font-weight:700">${icon} ${c.status}</span>
          </div>
          <div class="disc-camp-product">${c.product}</div>
          <div class="disc-camp-metrics">
            <div class="disc-metric"><strong>${c.visitors.toLocaleString()}</strong><span>Visitors</span></div>
            <div class="disc-metric"><strong>${c.signups}</strong><span>Signups</span></div>
            <div class="disc-metric"><strong>${c.conversion}</strong><span>Conv.</span></div>
            <div class="disc-metric"><strong>${c.feedback}</strong><span>Feedback</span></div>
          </div>
          <div class="disc-camp-footer">
            <span>📢 ${c.channel}</span><span>📅 ${c.daysActive} days</span>
          </div>
          ${c.status === 'active' ? '<button class="btn btn--sm btn--primary" onclick="showToast(\'📊 Campaign analytics mở rồi!\', \'success\')">📊 View Analytics</button>' : ''}
        </div>`;
    }).join('');
  }

  // Surveys
  const surveys = $('#discovery-surveys');
  if (surveys) {
    surveys.innerHTML = CUSTOMER_SURVEYS.map((s, idx) => `
      <div class="disc-survey" style="animation-delay:${idx * 0.08}s">
        <div class="disc-survey-q">❓ ${s.question}</div>
        <div class="disc-survey-options">
          ${s.options.map(o => `
            <div class="disc-option" onclick="voteOption(this)">
              <div class="disc-option-bar" style="width:${o.pct}%;background:linear-gradient(90deg,rgba(99,102,241,0.15),rgba(99,102,241,0.05))"></div>
              <span class="disc-option-text">${o.text}</span>
              <span class="disc-option-votes">${o.votes} votes (${o.pct}%)</span>
            </div>
          `).join('')}
        </div>
        <div class="disc-survey-total">${s.total} responses</div>
      </div>
    `).join('');
  }

  // User Interviews
  const interviews = $('#discovery-interviews');
  if (interviews) {
    interviews.innerHTML = USER_INTERVIEWS.map((i, idx) => {
      const statusMap = { scheduled: ['📅', '#fbbf24'], completed: ['✅', '#4ade80'], invited: ['📨', '#a78bfa'] };
      const [icon, color] = statusMap[i.status] || ['⚪', '#666'];
      return `
        <div class="disc-interview" style="animation-delay:${idx * 0.06}s">
          <div class="disc-int-left">
            <div class="disc-int-avatar">${i.customer.charAt(0)}</div>
            <div>
              <div class="disc-int-name">${i.customer}</div>
              <div class="disc-int-role">${i.role} @ ${i.company}</div>
            </div>
          </div>
          <div class="disc-int-topic">${i.topic}</div>
          <div class="disc-int-right">
            <span style="color:${color};font-weight:700;font-size:0.75rem">${icon} ${i.status}</span>
            ${i.insights > 0 ? `<span class="disc-insights">💡 ${i.insights} insights</span>` : `<span style="font-size:0.72rem;color:var(--text-tertiary)">${i.date}</span>`}
          </div>
        </div>`;
    }).join('');
  }

  // Feature Requests
  const features = $('#discovery-features');
  if (features) {
    const sorted = [...FEATURE_REQUESTS].sort((a, b) => b.votes - a.votes);
    features.innerHTML = sorted.map((f, idx) => {
      const statusColors = { planned: '#60a5fa', building: '#4ade80', considering: '#fbbf24' };
      return `
        <div class="disc-feature" style="animation-delay:${idx * 0.06}s">
          <button class="disc-upvote" onclick="upvoteFeature(this, ${f.votes})">
            <span>▲</span><strong>${f.votes}</strong>
          </button>
          <div class="disc-feature-info">
            <div class="disc-feature-title">${f.title}</div>
            <div class="disc-feature-desc">${f.desc}</div>
            <div class="disc-feature-meta">
              <span class="disc-feature-cat">${f.category}</span>
              <span class="disc-feature-status" style="color:${statusColors[f.status] || '#666'}">${f.status}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }
}

function voteOption(el) {
  el.style.borderColor = 'var(--accent-primary)';
  el.style.background = 'rgba(99,102,241,0.08)';
  showToast('✅ Vote recorded! Cảm ơn bạn đã feedback.', 'success');
}

function upvoteFeature(btn, currentVotes) {
  const strong = btn.querySelector('strong');
  strong.textContent = currentVotes + 1;
  btn.style.color = '#6366f1';
  btn.style.borderColor = '#6366f1';
  showToast('👍 Upvoted! Feature sẽ được ưu tiên develop.', 'success');
}
