/* =============================================
   DevTrust — P2P Trust Social Network App Logic
   ============================================= */

// ============ GLOBAL VARIABLES ============
let myPeerId = 'user_' + Math.random().toString(36).substr(2, 6);
const PEERS = {}; // Stores WebRTC connections


// ============ DATA ============
const USERS = [
  { id: 1, name: 'Linh Nguyễn', seed: 'linh', online: true, trustScore: 87 },
  { id: 2, name: 'Minh Trần', seed: 'minh', online: true, trustScore: 72 },
  { id: 3, name: 'Hương Phạm', seed: 'huong', online: false, trustScore: 91 },
  { id: 4, name: 'Tuấn Vũ', seed: 'tuan', online: true, trustScore: 95 },
  { id: 5, name: 'Mai Lê', seed: 'mai', online: false, trustScore: 63 },
  { id: 6, name: 'Đức Hoàng', seed: 'duc', online: true, trustScore: 78 },
  { id: 7, name: 'Thảo Ngô', seed: 'thao', online: true, trustScore: 84 },
  { id: 8, name: 'Khoa Đặng', seed: 'khoa', online: false, trustScore: 45 },
  { id: 9, name: 'Anh Bùi', seed: 'anhb', online: true, trustScore: 56 },
  { id: 10, name: 'Quỳnh Trương', seed: 'quynh', online: false, trustScore: 38 },
];

const POSTS = [
  {
    id: 1, userId: 1,
    content: 'Vừa hoàn thành dự án mạng xã hội mới! 🚀 Cảm ơn team đã support. Hành trình từ ý tưởng đến hiện thực không hề dễ dàng nhưng kết quả xứng đáng lắm các bạn ơi! 💪',
    image: 'https://picsum.photos/seed/project1/600/400',
    likes: 234, comments: 45, shares: 12,
    reactions: ['❤️', '🔥', '👏'],
    time: '2 giờ trước',
    commentList: [
      { userId: 2, text: 'Tuyệt vời quá! Chúc mừng team 🎉' },
      { userId: 4, text: 'Nhìn đẹp quá anh ơi, bao giờ launch?' }
    ]
  },
  {
    id: 2, userId: 2,
    content: 'Hà Nội hôm nay đẹp quá! ☀️ Ai muốn đi cafe không? Quán mới mở ở Tây Hồ siêu chill luôn',
    image: 'https://picsum.photos/seed/hanoi2/600/450',
    likes: 189, comments: 32, shares: 5,
    reactions: ['❤️', '😍'],
    time: '4 giờ trước',
    commentList: [
      { userId: 5, text: 'Ở đâu vậy bạn? Share địa chỉ đi!' }
    ]
  },
  {
    id: 3, userId: 4,
    content: 'Tips cho các bạn mới bắt đầu học lập trình:\n\n1. Đừng sợ sai — mỗi bug là một bài học\n2. Code mỗi ngày, dù chỉ 30 phút\n3. Tham gia cộng đồng — đừng học một mình\n4. Build dự án thực tế — lý thuyết không đủ\n5. Kiên nhẫn — thành công cần thời gian 🌱\n\n#coding #tips #developer',
    image: null,
    likes: 567, comments: 89, shares: 134,
    reactions: ['❤️', '👏', '🔥'],
    time: '6 giờ trước',
    commentList: [
      { userId: 6, text: 'Quá chuẩn luôn anh! Đặc biệt tip số 3 👏' },
      { userId: 7, text: 'Saved lại rồi! Cảm ơn anh nhiều' }
    ]
  },
  {
    id: 4, userId: 6,
    content: 'Team building cuối tuần rồi vui quá 😂 Highlight là màn nhảy của sếp! Ai có ảnh thêm thì share vào group nhé',
    image: 'https://picsum.photos/seed/teambuilding/600/400',
    likes: 345, comments: 56, shares: 8,
    reactions: ['😂', '❤️', '🔥'],
    time: '1 ngày trước',
    commentList: [
      { userId: 1, text: 'Ahahaha sếp nhảy đỉnh quá 🤣' },
      { userId: 3, text: 'Tiếc quá không đi được 😢' }
    ]
  },
  {
    id: 5, userId: 7,
    content: 'Review nhanh MacBook Pro M4 sau 1 tháng sử dụng:\n\n✅ Pin trâu cực kỳ — cả ngày không cần sạc\n✅ Mát lịm, quạt gần như không kêu\n✅ Build code nhanh gấp 3 lần\n❌ Giá hơi chát\n❌ Nặng hơn Air\n\nTổng: 9/10, worth every penny! 💻',
    image: 'https://picsum.photos/seed/macbook/600/350',
    likes: 423, comments: 73, shares: 45,
    reactions: ['👏', '🔥', '❤️'],
    time: '1 ngày trước',
    commentList: [
      { userId: 2, text: 'Đang phân vân M4 hay M3, bài review hữu ích quá!' }
    ]
  }
];

const STORIES = [
  { userId: 1, gradient: 'linear-gradient(135deg, #667eea, #764ba2)', text: '✈️ Đà Nẵng Trip' },
  { userId: 2, gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', text: '🍜 Food Tour HN' },
  { userId: 4, gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', text: '💻 Coding Session' },
  { userId: 6, gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', text: '🏋️ Gym Day' },
  { userId: 7, gradient: 'linear-gradient(135deg, #fa709a, #fee140)', text: '☕ Coffee Vibes' },
  { userId: 3, gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', text: '📚 Study Time' },
  { userId: 9, gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)', text: '🌅 Sunset' },
  { userId: 5, gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)', text: '🎵 Music Mood' },
];

const CHATS = [
  { userId: 1, messages: [
    { from: 'them', text: 'Hey! Dự án mới thế nào rồi?', time: '14:30' },
    { from: 'me', text: 'Gần xong rồi, đang test cuối 🔥', time: '14:32' },
    { from: 'them', text: 'Tuyệt vời! Cần support gì không?', time: '14:33' },
    { from: 'me', text: 'Thanks chị! Có gì em ping nhé', time: '14:35' },
    { from: 'them', text: 'OK em, cố lên! 💪', time: '14:36' },
  ], unread: true, lastTime: '14:36' },
  { userId: 2, messages: [
    { from: 'them', text: 'Cuối tuần đi cafe không?', time: '12:15' },
    { from: 'me', text: 'Được ah, quán nào?', time: '12:20' },
    { from: 'them', text: 'Quán mới ở Tây Hồ, view hồ đẹp lắm', time: '12:21' },
  ], unread: true, lastTime: '12:21' },
  { userId: 4, messages: [
    { from: 'me', text: 'Bài viết tips lập trình của a hay quá!', time: '10:00' },
    { from: 'them', text: 'Cảm ơn em! Có gì thắc mắc cứ hỏi nhé', time: '10:05' },
  ], unread: false, lastTime: '10:05' },
  { userId: 7, messages: [
    { from: 'them', text: 'Review MacBook mới post rồi nhé!', time: 'Hôm qua' },
  ], unread: true, lastTime: 'Hôm qua' },
  { userId: 6, messages: [
    { from: 'them', text: 'Ảnh team building đây nè 📸', time: 'Hôm qua' },
    { from: 'me', text: 'Haha sếp nhảy chất quá 😂', time: 'Hôm qua' },
  ], unread: false, lastTime: 'Hôm qua' },
];

const NOTIFICATIONS = [
  { type: 'like', icon: '❤️', userId: 1, text: '<strong>Linh Nguyễn</strong> đã thích bài viết của bạn', time: '5 phút trước', unread: true },
  { type: 'comment', icon: '💬', userId: 2, text: '<strong>Minh Trần</strong> đã bình luận: "Quá đẹp luôn!"', time: '15 phút trước', unread: true },
  { type: 'follow', icon: '👤', userId: 8, text: '<strong>Khoa Đặng</strong> bắt đầu theo dõi bạn', time: '1 giờ trước', unread: true },
  { type: 'like', icon: '❤️', userId: 4, text: '<strong>Tuấn Vũ</strong> và 12 người khác đã thích bài viết của bạn', time: '2 giờ trước', unread: true },
  { type: 'mention', icon: '📢', userId: 7, text: '<strong>Thảo Ngô</strong> đã nhắc đến bạn trong bình luận', time: '3 giờ trước', unread: true },
  { type: 'comment', icon: '💬', userId: 5, text: '<strong>Mai Lê</strong> đã trả lời bình luận của bạn', time: '5 giờ trước', unread: false },
  { type: 'follow', icon: '👤', userId: 10, text: '<strong>Quỳnh Trương</strong> bắt đầu theo dõi bạn', time: '1 ngày trước', unread: false },
  { type: 'like', icon: '❤️', userId: 3, text: '<strong>Hương Phạm</strong> đã thích ảnh của bạn', time: '1 ngày trước', unread: false },
];

const TRENDING = [
  { tag: '#DevTrust', count: '12.5K bài viết', desc: 'Mạng dev trust P2P' },
  { tag: '#TechVN', count: '8.2K bài viết', desc: 'Công nghệ Việt Nam' },
  { tag: '#StartupLife', count: '5.7K bài viết', desc: 'Hành trình khởi nghiệp' },
  { tag: '#AI2026', count: '15.1K bài viết', desc: 'Trí tuệ nhân tạo' },
  { tag: '#CodingTips', count: '3.4K bài viết', desc: 'Mẹo lập trình' },
];

const IDEAS = [
  { id: 1, title: 'Mạng học tập P2P offline cho vùng sâu', desc: 'Xây dựng mạng lưới học tập phân tán với Gun.js, cho phép học sinh vùng sâu học offline và sync qua WiFi/Bluetooth khi gặp bạn bè.', category: 'edu', votes: 142, userId: 4, tags: ['P2P', 'EdTech', 'offline'], time: '2 giờ trước' },
  { id: 2, title: 'Coding House — Cà phê & Code khắp Việt Nam', desc: 'Chuỗi không gian làm việc chung cho dev, kết hợp quán cà phê + phòng code + mentor. Bắt đầu từ 3 thành phố: HN, SG, ĐN.', category: 'business', votes: 98, userId: 1, tags: ['CodingHouse', 'coworking'], time: '5 giờ trước' },
  { id: 3, title: 'Trust Score cho review sản phẩm — chống fake review', desc: 'Dùng Trust Score để đánh giá độ tin cậy của reviewer. Review từ người trust cao được ưu tiên hiển thị. Giảm 90% fake review.', category: 'tech', votes: 215, userId: 7, tags: ['TrustScore', 'anti-fake'], time: '1 ngày trước' },
  { id: 4, title: 'Bình dân học vụ số 2.0 — AI mentor cá nhân', desc: 'AI chatbot hướng dẫn học kỹ năng số cơ bản, chạy offline trên điện thoại rẻ. Đào tạo người cao tuổi, nông dân sử dụng DVC trực tuyến.', category: 'edu', votes: 187, userId: 3, tags: ['AI', 'BDHVS', 'offline'], time: '1 ngày trước' },
  { id: 5, title: 'Plugin marketplace P2P — dev kiếm tiền trực tiếp', desc: 'Cho phép dev publish plugin/mini-app trên IPFS, user cài đặt và trả tiền trực tiếp P2P. Không sàn trung gian.', category: 'tech', votes: 134, userId: 6, tags: ['marketplace', 'P2P', 'IPFS'], time: '2 ngày trước' },
  { id: 6, title: 'Mạng xã hội cho tình nguyện viên', desc: 'Kết nối tình nguyện viên với dự án cộng đồng. Trust Score = uy tín tình nguyện. Match dựa trên kỹ năng + vị trí + passion.', category: 'social', votes: 167, userId: 2, tags: ['volunteer', 'trust', 'matching'], time: '3 ngày trước' },
  { id: 7, title: 'Smile House — Nhà trọ thông minh + creative space', desc: 'Tích hợp quản lý nhà trọ (Smile Home) với không gian sáng tạo cho dev. Sống + code + học tập cùng một nơi.', category: 'business', votes: 89, userId: 1, tags: ['SmileHouse', 'coliving', 'creative'], time: '4 ngày trước' },
  { id: 8, title: 'Hòa bình số — Nền tảng đối thoại liên văn hóa', desc: 'Kết nối người Việt với cộng đồng quốc tế qua dự án hợp tác. Dịch tự động P2P, trust-based matching.', category: 'social', votes: 203, userId: 9, tags: ['peace', 'culture', 'translation'], time: '5 ngày trước' },
];

// ============ INFRASTRUCTURE WARRIORS DATA ============
const WARRIOR_ROLES = [
  {
    id: 'network', icon: '🛡️', title: 'P2P Network Engineer',
    desc: 'Xây dựng core mạng phi tập trung — relay nodes, mesh networking, NAT traversal. Chiến binh tiên phong tạo hạ tầng sạch.',
    skills: ['Gun.js', 'IPFS', 'WebRTC', 'LibP2P', 'Go/Rust'],
    reward: '15% revenue share', spots: 8, filled: 3,
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    trustMin: 75
  },
  {
    id: 'edtech', icon: '🎓', title: 'EdTech Warrior',
    desc: 'Tạo hệ thống học tập offline-first — khóa học P2P, quiz peer-review, chứng chỉ trust-based. Đưa giáo dục đến mọi người.',
    skills: ['Offline-first', 'IndexedDB', 'Quiz Engine', 'IPFS Storage'],
    reward: 'Trust Score 90+', spots: 6, filled: 2,
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    trustMin: 70
  },
  {
    id: 'antifake', icon: '🔍', title: 'Trust & Anti-Fake Specialist',
    desc: 'Phát triển Trust Score algorithm, AI phát hiện deepfake, xác minh nguồn tin, ZK-Proof cho privacy. Bảo vệ sự thật.',
    skills: ['AI/ML', 'Trust Algorithm', 'ZK-Proofs', 'NLP'],
    reward: '10% + Trust 95+', spots: 4, filled: 1,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    trustMin: 80
  },
  {
    id: 'ambassador', icon: '🌍', title: 'Community Ambassador',
    desc: 'Kết nối cộng đồng dev toàn cầu — tổ chức sự kiện, hackathon, mentoring. Lan tỏa sứ mệnh cải tạo hạ tầng.',
    skills: ['Public Speaking', 'Content Writing', 'Community', 'Marketing'],
    reward: '30% referral + Trust', spots: 10, filled: 4,
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    trustMin: 60
  },
  {
    id: 'ux', icon: '🎨', title: 'UX Warrior',
    desc: 'Thiết kế trải nghiệm cho mạng sạch — accessible, beautiful, offline-friendly. Làm cho P2P dễ dùng như mạng xã hội thường.',
    skills: ['Figma', 'CSS', 'Motion Design', 'Accessibility'],
    reward: 'Equity + Trust 85+', spots: 5, filled: 2,
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    trustMin: 65
  },
  {
    id: 'blockchain', icon: '⚡', title: 'Blockchain Guardian',
    desc: 'Xây ví P2P, smart contracts cho revenue sharing, đảm bảo minh bạch tài chính. Không trung gian, 100% P2P.',
    skills: ['Solidity', 'Web3.js', 'Crypto Wallet', 'DeFi'],
    reward: '20% equity', spots: 3, filled: 0,
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    trustMin: 85
  },
];

const WARRIOR_MISSIONS = [
  {
    id: 1, title: 'Build Mesh Network Node cho vùng sâu',
    desc: 'Triển khai relay node Gun.js + IPFS tại 3 điểm nông thôn, cho phép học offline P2P.',
    difficulty: 4, progress: 25, reward: '15% revenue', status: 'recruiting',
    roleId: 'network', slots: 3, filled: 1, deadline: '30/04/2026',
    tags: ['Gun.js', 'IPFS', 'Offline'],
  },
  {
    id: 2, title: 'AI Deepfake Detector — Plugin cho DevTrust',
    desc: 'Xây dựng plugin phát hiện ảnh/video deepfake, tích hợp vào Trust Score engine.',
    difficulty: 5, progress: 10, reward: '10% revenue + Trust 95', status: 'recruiting',
    roleId: 'antifake', slots: 2, filled: 0, deadline: '15/05/2026',
    tags: ['AI', 'DeepFake', 'Trust'],
  },
  {
    id: 3, title: 'Bình dân học vụ số — Khóa 7-10 mới',
    desc: 'Sản xuất 4 khóa học mới: blockchain cơ bản, bảo vệ trẻ online, dịch vụ công điện tử nâng cao, marketing số.',
    difficulty: 3, progress: 40, reward: 'Trust 90+', status: 'active',
    roleId: 'edtech', slots: 4, filled: 2, deadline: '01/06/2026',
    tags: ['EdTech', 'BDHVS', 'Content'],
  },
  {
    id: 4, title: 'Redesign Warrior Dashboard UI',
    desc: 'Thiết kế lại trang quản lý nhiệm vụ cho chiến binh — dark theme, mobile-friendly, khả năng truy cập cao.',
    difficulty: 2, progress: 60, reward: 'Equity + Trust 85', status: 'active',
    roleId: 'ux', slots: 2, filled: 1, deadline: '20/04/2026',
    tags: ['UI/UX', 'Figma', 'Dashboard'],
  },
  {
    id: 5, title: 'P2P Revenue Wallet — Smart Contract',
    desc: 'Xây ví P2P tự động chia revenue 60/30/10 khi user thanh toán khóa học hoặc plugin.',
    difficulty: 5, progress: 5, reward: '20% equity', status: 'recruiting',
    roleId: 'blockchain', slots: 2, filled: 0, deadline: '30/06/2026',
    tags: ['Smart Contract', 'Web3', 'DeFi'],
  },
  {
    id: 6, title: 'DevTrust Hackathon Đà Nẵng 2026',
    desc: 'Tổ chức hackathon P2P tại Đà Nẵng — 50 dev, 2 ngày, Build for Clean Internet.',
    difficulty: 3, progress: 30, reward: '30% referral', status: 'active',
    roleId: 'ambassador', slots: 5, filled: 3, deadline: '15/05/2026',
    tags: ['Event', 'Hackathon', 'ĐN'],
  },
];

const FEATURED_WARRIORS = [
  { name: 'Tuấn Vũ', seed: 'tuan', trust: 95, role: 'EdTech Warrior', missions: 8, badge: '🏆' },
  { name: 'Hương Phạm', seed: 'huong', trust: 91, role: 'Network Engineer', missions: 6, badge: '🛡️' },
  { name: 'Linh Nguyễn', seed: 'linh', trust: 87, role: 'UX Warrior', missions: 5, badge: '🎨' },
  { name: 'Thảo Ngô', seed: 'thao', trust: 84, role: 'Ambassador', missions: 12, badge: '🌍' },
  { name: 'Đức Hoàng', seed: 'duc', trust: 78, role: 'Anti-Fake Specialist', missions: 4, badge: '🔍' },
  { name: 'David Cuong', seed: 'owner', trust: 92, role: 'Founder & Lead', missions: 47, badge: '⚔️' },
  { name: 'Minh Trần', seed: 'minh', trust: 72, role: 'Blockchain Guardian', missions: 3, badge: '⚡' },
  { name: 'Anh Bùi', seed: 'anhb', trust: 56, role: 'Rising Warrior', missions: 1, badge: '🌱' },
];

// ============ WARRIOR SKILL CHALLENGES (per role) ============
const WARRIOR_CHALLENGES = {
  network: {
    title: 'P2P Network Challenge', icon: '🛡️',
    questions: [
      { q: 'NAT Traversal trong WebRTC dùng kỹ thuật nào?', options: ['DNS Lookup', 'STUN/TURN servers', 'HTTP Proxy', 'TCP Handshake'], answer: 1 },
      { q: 'Gun.js sử dụng cấu trúc dữ liệu nào?', options: ['Relational DB', 'Document Store', 'Directed Graph (DAG)', 'Key-Value chỉ đơn'], answer: 2 },
      { q: 'IPFS dùng hàm hash nào để định danh nội dung?', options: ['MD5', 'SHA-256 / Multihash', 'Base64 encoding', 'RSA key'], answer: 1 },
    ]
  },
  edtech: {
    title: 'EdTech Challenge', icon: '🎓',
    questions: [
      { q: 'Offline-first app lưu dữ liệu ở đâu trên browser?', options: ['Cookies only', 'IndexedDB / localStorage', 'Server session', 'URL query string'], answer: 1 },
      { q: 'SCORM là tiêu chuẩn cho gì?', options: ['Bảo mật web', 'Nội dung E-Learning', 'Database query', 'Thiết kế UI'], answer: 1 },
      { q: 'Service Worker giúp gì cho app học offline?', options: ['Tăng RAM', 'Cache tài nguyên để chạy offline', 'Mã hóa dữ liệu', 'Gửi SMS'], answer: 1 },
    ]
  },
  antifake: {
    title: 'Anti-Fake & Trust Challenge', icon: '🔍',
    questions: [
      { q: 'Zero-Knowledge Proof cho phép làm gì?', options: ['Xóa dữ liệu an toàn', 'Chứng minh sự thật mà không lộ dữ liệu', 'Mã hóa file', 'Tạo mật khẩu mạnh'], answer: 1 },
      { q: 'Deepfake detection thường phân tích yếu tố nào?', options: ['File size', 'Bất thường khuôn mặt & ánh sáng', 'Tên file', 'Ngày tạo file'], answer: 1 },
      { q: 'NLP trong phát hiện tin giả dùng để làm gì?', options: ['Dịch ngôn ngữ', 'Phân tích ngữ nghĩa & phát hiện mẫu tin giả', 'Nén dữ liệu', 'Tạo ảnh'], answer: 1 },
    ]
  },
  ambassador: {
    title: 'Community Ambassador Challenge', icon: '🌍',
    questions: [
      { q: 'KPI quan trọng nhất cho community growth?', options: ['Số lượng post', 'Retention rate & active members', 'Số followers', 'Số hastag'], answer: 1 },
      { q: 'Cách tốt nhất để tổ chức hackathon online?', options: ['Chỉ cần đăng link Zoom', 'Lên kế hoạch: theme, mentor, giải, timeline rõ ràng', 'Copy hackathon khác', 'Mời nhiều sponsor'], answer: 1 },
      { q: 'Trust-based community khác gì với community thường?', options: ['Không khác gì', 'Members verify lẫn nhau, đóng góp tạo uy tín', 'Cần trả phí tham gia', 'Chỉ dành cho dev senior'], answer: 1 },
    ]
  },
  ux: {
    title: 'UX Warrior Challenge', icon: '🎨',
    questions: [
      { q: 'WCAG 2.1 là tiêu chuẩn cho gì?', options: ['Bảo mật web', 'Accessibility (khả năng truy cập)', 'SEO ranking', 'Responsive design'], answer: 1 },
      { q: 'Mobile-first design nghĩa là gì?', options: ['Chỉ làm app điện thoại', 'Thiết kế cho màn hình nhỏ trước, scale lên', 'Dùng framework mobile', 'Không cần CSS'], answer: 1 },
      { q: 'Micro-animation giúp UX như thế nào?', options: ['Làm đẹp cho vui', 'Feedback trực quan, guide user, tạo cảm xúc', 'Tốn tài nguyên', 'Chỉ dùng cho game'], answer: 1 },
    ]
  },
  blockchain: {
    title: 'Blockchain Guardian Challenge', icon: '⚡',
    questions: [
      { q: 'Smart Contract là gì?', options: ['Hợp đồng giấy scan', 'Code tự thực thi trên blockchain khi đủ điều kiện', 'App ngân hàng', 'Ví điện tử'], answer: 1 },
      { q: 'Revenue sharing P2P dùng công nghệ nào?', options: ['PayPal API', 'Smart Contract + Crypto Wallet', 'Chuyển khoản ngân hàng', 'Voucher code'], answer: 1 },
      { q: 'Gas fee trong Ethereum là gì?', options: ['Phí Internet', 'Chi phí thực thi giao dịch trên blockchain', 'Tiền nạp ví', 'Phí membership'], answer: 1 },
    ]
  },
};

// ============ AUTO-POST TEMPLATES ============
const AUTO_POST_TEMPLATES = {
  zalo: {
    icon: '💬', name: 'Zalo',
    template: (role) => `🔥 [TUYỂN CHIẾN BINH] ${role.title}

${role.icon} ${role.desc}

💰 Reward: ${role.reward}
🛡️ Trust Score tối thiểu: ${role.trustMin}
📊 Còn ${role.spots - role.filled}/${role.spots} slot

✅ Kỹ năng cần: ${role.skills.join(', ')}

👉 Đăng ký ngay: https://social-network-tau-ten.vercel.app
💬 Zalo Group: https://zalo.me/g/arkdaw947

#DevTrust #TuyểnDev #${role.id} #P2P`
  },
  facebook: {
    icon: '📘', name: 'Facebook',
    template: (role) => `⚔️ DevTrust — Tuyển ${role.title}

Chúng tôi đang tìm những chiến binh ${role.title} cho sứ mệnh cải tạo hạ tầng kết nối nhân loại.

${role.desc}

🎯 Kỹ năng cần:
${role.skills.map(s => '• ' + s).join('\n')}

💰 Reward: ${role.reward}
🛡️ Trust Score ≥ ${role.trustMin}
📊 Còn ${role.spots - role.filled}/${role.spots} vị trí

🌐 Đăng ký: https://social-network-tau-ten.vercel.app
💬 Tham gia Zalo: https://zalo.me/g/arkdaw947

🔥 Làm challenge thử tài → Tự đánh giá level → Đăng ký
Comment "JOIN" để nhận brief! 🚀

#DevTrust #TuyểnChiếnBinh #P2P #OpenSource #Developer`
  },
  linkedin: {
    icon: '💼', name: 'LinkedIn',
    template: (role) => `🚀 We're recruiting: ${role.title}

At DevTrust, we're building a P2P trust-based social network — decentralized, offline-first, no big tech control.

Role: ${role.title}
${role.desc}

Required skills: ${role.skills.join(' · ')}
Reward: ${role.reward}
Trust Score minimum: ${role.trustMin}

${role.spots - role.filled} positions remaining.

Apply → https://social-network-tau-ten.vercel.app

#OpenSource #P2P #DevTrust #Hiring #Developer`
  },
  twitter: {
    icon: '🐦', name: 'Twitter/X',
    template: (role) => `⚔️ Tuyển ${role.title} cho @DevTrust

${role.icon} ${role.desc.substring(0, 80)}...

💰 ${role.reward}
📊 Còn ${role.spots - role.filled} slot

👉 https://social-network-tau-ten.vercel.app

#DevTrust #P2P #${role.id}`
  },
};

// ============ MARKETING METRICS DATA ============
const MARKETING_METRICS = {
  views: 2847,
  challenges: 384,
  signups: 127,
  active: 47,
  referrals: 63,
  conversionRate: 4.5,
  totalSlotsOpen: 0, // computed
  urgencyDeadline: '2026-04-30',
};

// Compute total open slots
MARKETING_METRICS.totalSlotsOpen = WARRIOR_ROLES.reduce((sum, r) => sum + (r.spots - r.filled), 0);

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

function getCategoryLabel(cat) {
  const labels = { tech: '💻 Công nghệ', edu: '🎓 Giáo dục', social: '🌍 Xã hội', business: '💰 Kinh doanh' };
  return labels[cat] || cat;
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

function renderIdeas(filter = 'all') {
  const container = $('#ideas-grid');
  if (!container) return;
  container.innerHTML = '';
  const filtered = filter === 'all' ? IDEAS : IDEAS.filter(i => i.category === filter);
  filtered.sort((a, b) => b.votes - a.votes);
  filtered.forEach((idea, idx) => {
    const user = getUser(idea.userId);
    const el = document.createElement('div');
    el.className = 'idea-card';
    el.style.animationDelay = `${idx * 0.06}s`;
    el.innerHTML = `
      <div class="idea-card__vote">
        <button class="idea-card__vote-btn" data-idea-id="${idea.id}" title="Vote">▲</button>
        <span class="idea-card__vote-count">${idea.votes}</span>
      </div>
      <div class="idea-card__body">
        <span class="idea-card__category idea-card__category--${idea.category}">${getCategoryLabel(idea.category)}</span>
        <h4 class="idea-card__title">${idea.title}</h4>
        <p class="idea-card__desc">${idea.desc}</p>
        <div class="idea-card__meta">
          <div class="idea-card__author">
            <div class="avatar avatar--xs"><img src="${avatarUrl(user ? user.seed : 'anon')}" alt="" /></div>
            <span>${user ? user.name : 'Anonymous'}</span>
            ${user ? getTrustBadge(user.trustScore) : ''}
          </div>
          <span>· ${idea.time}</span>
          ${idea.tags.map(t => `<span class="idea-card__tag">#${t}</span>`).join('')}
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
    renderNotifications();
  }
  if (viewName === 'ideas' && !$('#ideas-grid').children.length) {
    renderIdeas();
    initWarriorsSection();
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
      <span class="webrtc-status" id="webrtc-status-${user.id}" style="font-size: 0.8rem; margin-right: 10px; color: #a1a1aa;">Đang chờ P2P...</span>
      <button class="icon-btn" onclick="initWebrtcCall(${user.id})" title="Kết nối P2P"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
      <button class="icon-btn" title="Gọi video P2P"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
    </div>
  `;
  // Record current selected user for sending messages
  window.currentChatUserId = user.id;
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

  const targetUserId = window.currentChatUserId;

  // Render on UI
  const body = $('#chat-body');
  const msg = document.createElement('div');
  msg.className = 'msg msg--sent';
  msg.innerHTML = `<div>${text}</div><div class="msg__time">${new Date().toLocaleTimeString('vi', { hour: '2-digit', minute: '2-digit' })}</div>`;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
  input.value = '';

  // Try send via WebRTC first
  if (targetUserId && PEERS[targetUserId] && PEERS[targetUserId].channel && PEERS[targetUserId].channel.readyState === 'open') {
    PEERS[targetUserId].channel.send(JSON.stringify({ type: 'text', msg: text, from: myPeerId }));
    console.log('Sent directly via WebRTC!');
    return;
  }
  
  // Try sending via Gun if WebRTC is not ready yet
  if (window._gun && targetUserId) {
    const gunMessages = window._gun.get('devtrust-network').get('messages').get('to_' + targetUserId);
    gunMessages.set({
      from: myPeerId,
      text: text,
      timestamp: Date.now()
    });
    console.log('Sent fallback via Gun P2P network');
  }

  // Simulate reply if no network is connected for demo
  if (!window._gun && !PEERS[targetUserId]) {
    setTimeout(() => {
      const replies = [
        'Oke anh/chị! 👍 (Demo do không có WebRTC)',
        'Tuyệt vời! 🔥 (Demo)',
      ];
      const reply = document.createElement('div');
      reply.className = 'msg msg--received';
      reply.innerHTML = `<div>${replies[Math.floor(Math.random() * replies.length)]}</div><div class="msg__time">${new Date().toLocaleTimeString('vi', { hour: '2-digit', minute: '2-digit' })}</div>`;
      body.appendChild(reply);
      body.scrollTop = body.scrollHeight;
    }, 1000 + Math.random() * 1500);
  }
}


// ============ THEME TOGGLE ============
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isDark = !document.body.classList.contains('light-theme');
  const settingsToggle = $('#settings-dark-toggle');
  if (settingsToggle) settingsToggle.checked = isDark;
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

// ============ WARRIORS RENDER FUNCTIONS ============
function renderWarriorRoles() {
  const container = $('#warrior-roles-grid');
  if (!container || container.children.length) return;
  container.innerHTML = '';
  WARRIOR_ROLES.forEach((role, idx) => {
    const spotsPct = Math.round((role.filled / role.spots) * 100);
    const el = document.createElement('div');
    el.className = 'warrior-role-card';
    el.style.animationDelay = `${idx * 0.1}s`;
    el.innerHTML = `
      <div class="warrior-role-card__header" style="background:${role.gradient}">
        <div class="warrior-role-card__icon">${role.icon}</div>
        <div class="warrior-role-card__trust-min">Trust ≥ ${role.trustMin}</div>
      </div>
      <div class="warrior-role-card__body">
        <h4>${role.title}</h4>
        <p>${role.desc}</p>
        <div class="warrior-role-card__skills">
          ${role.skills.map(s => `<span class="warrior-skill-tag">${s}</span>`).join('')}
        </div>
        <div class="warrior-role-card__footer">
          <div class="warrior-role-card__spots">
            <div class="warrior-spots-bar">
              <div class="warrior-spots-bar__fill" style="width:${spotsPct}%"></div>
            </div>
            <span>${role.filled}/${role.spots} chiến binh</span>
          </div>
          <div class="warrior-role-card__reward">${role.reward}</div>
        </div>
        <div class="warrior-role-card__cta">
          <button class="btn btn--warrior btn--sm warrior-role-challenge-btn" data-role-id="${role.id}">⚔️ Thử thách</button>
          <button class="btn btn--glass btn--sm warrior-role-share-btn" data-role-id="${role.id}">🔗 Chia sẻ</button>
        </div>
      </div>
    `;
    // Attach event listeners
    el.querySelector('.warrior-role-challenge-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      startWarriorChallenge(role.id);
    });
    el.querySelector('.warrior-role-share-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openShareCard(role.id);
    });
    container.appendChild(el);
  });
}

function renderWarriorMissions() {
  const container = $('#missions-grid');
  if (!container || container.children.length) return;
  container.innerHTML = '';
  WARRIOR_MISSIONS.forEach((mission, idx) => {
    const role = WARRIOR_ROLES.find(r => r.id === mission.roleId);
    const difficultyStars = '⭐'.repeat(mission.difficulty);
    const statusLabel = mission.status === 'recruiting'
      ? '<span class="mission-status mission-status--recruiting">🔴 Đang tuyển</span>'
      : '<span class="mission-status mission-status--active">🟢 Đang chạy</span>';
    const el = document.createElement('div');
    el.className = 'mission-card';
    el.style.animationDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <div class="mission-card__top">
        ${statusLabel}
        <span class="mission-card__difficulty">${difficultyStars}</span>
      </div>
      <h4 class="mission-card__title">${mission.title}</h4>
      <p class="mission-card__desc">${mission.desc}</p>
      <div class="mission-card__progress-wrap">
        <div class="mission-card__progress-bar">
          <div class="mission-card__progress-fill" style="width:${mission.progress}%"></div>
        </div>
        <span class="mission-card__progress-text">${mission.progress}%</span>
      </div>
      <div class="mission-card__meta">
        <div class="mission-card__tags">
          ${mission.tags.map(t => `<span class="mission-tag">${t}</span>`).join('')}
        </div>
        <span class="mission-card__deadline">⏰ ${mission.deadline}</span>
      </div>
      <div class="mission-card__footer">
        <span class="mission-card__slots">${role ? role.icon : '⚔️'} ${mission.filled}/${mission.slots} slots</span>
        <span class="mission-card__reward-tag">${mission.reward}</span>
      </div>
    `;
    el.addEventListener('click', () => {
      showToast(`📋 Đã đăng ký nhiệm vụ "${mission.title}"! Kiểm tra Zalo Group để nhận brief.`, 'success');
    });
    container.appendChild(el);
  });
}

function renderWarriorWall() {
  const container = $('#warrior-wall-grid');
  if (!container || container.children.length) return;
  container.innerHTML = '';
  // Sort by trust score desc
  const sorted = [...FEATURED_WARRIORS].sort((a, b) => b.trust - a.trust);
  sorted.forEach((w, idx) => {
    const trustClass = w.trust >= 80 ? 'high' : w.trust >= 50 ? 'mid' : 'low';
    const el = document.createElement('div');
    el.className = 'warrior-wall-card';
    el.style.animationDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <div class="warrior-wall-card__badge">${w.badge}</div>
      <div class="warrior-wall-card__avatar">
        <div class="warrior-trust-ring warrior-trust-ring--${trustClass}">
          <div class="avatar avatar--lg">
            <img src="${avatarUrl(w.seed)}" alt="${w.name}" />
          </div>
        </div>
      </div>
      <div class="warrior-wall-card__name">${w.name}</div>
      <div class="warrior-wall-card__role">${w.role}</div>
      <div class="warrior-wall-card__stats-row">
        <span class="warrior-wall-card__trust warrior-wall-card__trust--${trustClass}">🛡️ ${w.trust}</span>
        <span class="warrior-wall-card__missions">🎯 ${w.missions}</span>
      </div>
    `;
    container.appendChild(el);
  });
}

function animateWarriorStats() {
  const stats = document.querySelectorAll('.warrior-stat');
  if (!stats.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const numEl = entry.target.querySelector('.warrior-stat__number');
        if (!numEl || numEl.dataset.animated) return;
        numEl.dataset.animated = '1';
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 60));
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          numEl.textContent = current.toLocaleString();
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  stats.forEach(stat => observer.observe(stat));
}

function handleWarriorSignup(e) {
  e.preventDefault();
  const name = $('#warrior-name').value.trim();
  const github = $('#warrior-github').value.trim();
  const role = $('#warrior-role').value;
  const mission = $('#warrior-mission').value.trim();

  if (!name) {
    showToast('❌ Vui lòng nhập tên chiến binh!', 'error');
    return;
  }

  // Sync via Gun.js
  if (window._gun) {
    const devtrust = window._gun.get('devtrust-network');
    devtrust.get('warrior-signups').get('warrior_' + Date.now()).put({
      name, github, role, mission,
      timestamp: Date.now(),
      initialTrust: 50,
    });
  }

  showToast(`⚔️ Chào mừng chiến binh ${name}! Trust Score khởi tạo: 50. Hãy hoàn thành nhiệm vụ để tăng Trust!`, 'success');

  // Reset form
  $('#warrior-name').value = '';
  $('#warrior-github').value = '';
  $('#warrior-role').selectedIndex = 0;
  $('#warrior-mission').value = '';
}

function initWarriorsSection() {
  renderWarriorRoles();
  renderWarriorMissions();
  renderWarriorWall();
  animateWarriorStats();
  renderMarketingDashboard();
  renderAutoPostTemplates();
  createWarriorParticles();
}

function createWarriorParticles() {
  const container = $('#warrior-particles');
  if (!container || container.children.length) return;
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'warrior-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (3 + Math.random() * 4) + 's';
    container.appendChild(particle);
  }
}

// ============ WARRIOR SKILL CHALLENGE ENGINE ============
let currentChallenge = null;
let challengeQuestionIdx = 0;
let challengeAnswers = [];
let challengeRoleId = '';

function startWarriorChallenge(roleId) {
  challengeRoleId = roleId || '';
  const challenge = roleId ? WARRIOR_CHALLENGES[roleId] : null;

  if (!challenge) {
    // If no specific role, let user pick
    openChallengeRolePicker();
    return;
  }

  currentChallenge = challenge;
  challengeQuestionIdx = 0;
  challengeAnswers = new Array(challenge.questions.length).fill(-1);
  showChallengeQuestion();
  $('#challenge-modal').classList.remove('hidden');
}

function openChallengeRolePicker() {
  const modal = $('#challenge-modal');
  const body = $('#challenge-modal-body');
  body.innerHTML = `
    <div class="challenge-role-picker">
      <div class="challenge-role-picker__icon">⚔️</div>
      <h3>Chọn Role Thử Thách</h3>
      <p>Làm mini challenge 3 câu → đánh giá kỹ năng → gợi ý vai trò phù hợp</p>
      <div class="challenge-role-picker__grid">
        ${WARRIOR_ROLES.map(r => `
          <button class="challenge-role-btn" data-role-id="${r.id}" style="background:${r.gradient}">
            <span class="challenge-role-btn__icon">${r.icon}</span>
            <span class="challenge-role-btn__title">${r.title}</span>
            <span class="challenge-role-btn__slots">${r.spots - r.filled} slot trống</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  body.querySelectorAll('.challenge-role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      startWarriorChallenge(btn.dataset.roleId);
    });
  });
  $('#challenge-modal-title').textContent = '⚔️ Warrior Skill Challenge';
  $('#challenge-modal-footer').classList.add('hidden');
  modal.classList.remove('hidden');
}

function showChallengeQuestion() {
  if (!currentChallenge) return;
  const q = currentChallenge.questions[challengeQuestionIdx];
  const body = $('#challenge-modal-body');
  const labels = ['A', 'B', 'C', 'D'];
  const role = WARRIOR_ROLES.find(r => r.id === challengeRoleId);

  $('#challenge-modal-title').textContent = `${currentChallenge.icon} ${currentChallenge.title} — Câu ${challengeQuestionIdx + 1}/3`;
  $('#challenge-modal-footer').classList.remove('hidden');

  body.innerHTML = `
    <div class="challenge-progress">
      ${currentChallenge.questions.map((_, i) => `
        <div class="challenge-progress__dot ${i === challengeQuestionIdx ? 'active' : ''} ${i < challengeQuestionIdx ? 'done' : ''}"></div>
      `).join('')}
    </div>
    <div class="challenge-question">${q.q}</div>
    <div class="challenge-options">
      ${q.options.map((opt, i) => `
        <div class="challenge-option ${challengeAnswers[challengeQuestionIdx] === i ? 'selected' : ''}" data-idx="${i}">
          <div class="challenge-option__marker">${labels[i]}</div>
          <span>${opt}</span>
        </div>
      `).join('')}
    </div>
  `;

  body.querySelectorAll('.challenge-option').forEach(el => {
    el.addEventListener('click', () => {
      challengeAnswers[challengeQuestionIdx] = parseInt(el.dataset.idx);
      showChallengeQuestion();
    });
  });

  // Button states
  const nextBtn = $('#btn-challenge-next');
  if (challengeQuestionIdx === currentChallenge.questions.length - 1) {
    nextBtn.textContent = '✅ Nộp bài';
  } else {
    nextBtn.textContent = 'Tiếp →';
  }
}

function nextChallengeQuestion() {
  if (!currentChallenge) return;
  if (challengeQuestionIdx === currentChallenge.questions.length - 1) {
    submitChallenge();
  } else {
    challengeQuestionIdx++;
    showChallengeQuestion();
  }
}

function submitChallenge() {
  if (!currentChallenge) return;
  let correct = 0;
  currentChallenge.questions.forEach((q, i) => {
    if (challengeAnswers[i] === q.answer) correct++;
  });
  const total = currentChallenge.questions.length;
  const passed = correct >= 2;
  const role = WARRIOR_ROLES.find(r => r.id === challengeRoleId);

  const body = $('#challenge-modal-body');
  $('#challenge-modal-footer').classList.add('hidden');

  body.innerHTML = `
    <div class="challenge-result ${passed ? 'challenge-result--pass' : 'challenge-result--fail'}">
      <div class="challenge-result__icon">${passed ? '🎉' : '📖'}</div>
      <h3>${passed ? 'Xuất sắc! Bạn đủ level!' : 'Cần rèn luyện thêm!'}</h3>
      <div class="challenge-result__score">${correct}/${total} đúng</div>
      <p>${passed
        ? `Bạn phù hợp với vai trò <strong>${role ? role.title : 'Chiến binh'}</strong>! Đăng ký ngay bên dưới.`
        : `Đừng lo! Hãy học thêm qua các khóa E-Learning rồi thử lại. Trust Score sẽ tăng khi bạn hoàn thành khóa học.`
      }</p>
      <div class="challenge-result__actions">
        ${passed
          ? `<button class="btn btn--warrior btn--lg" onclick="closeChallengeAndSignup('${challengeRoleId}')">⚔️ Đăng Ký Ngay</button>
             <button class="btn btn--glass" onclick="openShareCard('${challengeRoleId}')">🔗 Chia sẻ kết quả</button>`
          : `<button class="btn btn--primary btn--lg" onclick="closeChallenge(); switchView('learning');">📚 Xem khóa học</button>
             <button class="btn btn--glass" onclick="startWarriorChallenge('${challengeRoleId}')">🔄 Thử lại</button>`
        }
      </div>
    </div>
  `;

  // Bump marketing metrics
  MARKETING_METRICS.challenges++;
  renderMarketingDashboard();
}

function closeChallengeAndSignup(roleId) {
  $('#challenge-modal').classList.add('hidden');
  currentChallenge = null;
  // Auto-select role in signup form
  const roleSelect = $('#warrior-role');
  if (roleSelect && roleId) {
    roleSelect.value = roleId;
  }
  // Scroll to signup form
  const signupEl = $('#warrior-signup');
  if (signupEl) {
    signupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Flash the form
    signupEl.classList.add('warrior-signup--highlight');
    setTimeout(() => signupEl.classList.remove('warrior-signup--highlight'), 2000);
  }
}

function closeChallenge() {
  $('#challenge-modal').classList.add('hidden');
  currentChallenge = null;
}

// ============ SHAREABLE WARRIOR CARD ============
function openShareCard(roleId) {
  const role = WARRIOR_ROLES.find(r => r.id === roleId);
  if (!role) return;
  const modal = $('#share-card-modal');
  const body = $('#share-card-body');
  const slotsLeft = role.spots - role.filled;

  body.innerHTML = `
    <div class="share-card-preview" id="share-card-preview">
      <div class="share-card" style="background:${role.gradient}">
        <div class="share-card__header">
          <span class="share-card__badge">DevTrust</span>
          <span class="share-card__badge share-card__badge--role">${role.icon} ${role.title}</span>
        </div>
        <div class="share-card__icon">${role.icon}</div>
        <h3 class="share-card__title">Tuyển ${role.title}</h3>
        <p class="share-card__desc">${role.desc}</p>
        <div class="share-card__skills">
          ${role.skills.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="share-card__footer">
          <div class="share-card__stat"><strong>${role.reward}</strong><small>Reward</small></div>
          <div class="share-card__stat"><strong>🛡️ ≥${role.trustMin}</strong><small>Trust tối thiểu</small></div>
          <div class="share-card__stat"><strong>${slotsLeft} slot</strong><small>Còn trống</small></div>
        </div>
        <div class="share-card__cta">👉 social-network-tau-ten.vercel.app</div>
      </div>
    </div>
    <div class="share-card-actions">
      <button class="btn btn--primary" onclick="copyShareLink('${roleId}')">📋 Copy Link</button>
      <button class="btn btn--glass" onclick="copyShareText('${roleId}')">📝 Copy Text</button>
    </div>
    <div class="share-card-platforms">
      <h4>📱 Tạo bài post</h4>
      <div class="share-platform-tabs">
        ${Object.entries(AUTO_POST_TEMPLATES).map(([key, p]) => `
          <button class="share-platform-tab" data-platform="${key}">${p.icon} ${p.name}</button>
        `).join('')}
      </div>
      <div class="share-post-preview" id="share-post-preview">
        <p style="opacity:0.5;text-align:center">Chọn nền tảng để xem bài post mẫu</p>
      </div>
    </div>
  `;

  body.querySelectorAll('.share-platform-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      body.querySelectorAll('.share-platform-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const platform = tab.dataset.platform;
      const template = AUTO_POST_TEMPLATES[platform];
      const text = template.template(role);
      const previewEl = body.querySelector('#share-post-preview');
      previewEl.innerHTML = `
        <pre class="share-post-text">${text}</pre>
        <button class="btn btn--primary btn--sm" onclick="copyToClipboard(\`${text.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`)">📋 Copy bài post</button>
      `;
    });
  });

  modal.classList.remove('hidden');
}

function copyShareLink(roleId) {
  const url = `https://social-network-tau-ten.vercel.app?ref=warrior&role=${roleId}`;
  copyToClipboard(url);
}

function copyShareText(roleId) {
  const role = WARRIOR_ROLES.find(r => r.id === roleId);
  if (!role) return;
  const text = `⚔️ DevTrust tuyển ${role.title}! ${role.desc} — Còn ${role.spots - role.filled} slot. Đăng ký: https://social-network-tau-ten.vercel.app`;
  copyToClipboard(text);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Đã copy vào clipboard!', 'success');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('📋 Đã copy vào clipboard!', 'success');
  });
}

// ============ MARKETING METRICS DASHBOARD ============
function renderMarketingDashboard() {
  const container = $('#mkt-dashboard');
  if (!container) return;

  const m = MARKETING_METRICS;
  const daysLeft = Math.max(0, Math.ceil((new Date(m.urgencyDeadline) - new Date()) / (1000*60*60*24)));

  container.innerHTML = `
    <div class="mkt-dash">
      <div class="mkt-dash__header">
        <h4>📊 Warrior Recruitment Funnel</h4>
        <div class="mkt-dash__urgency">
          <span class="mkt-dash__urgency-dot"></span>
          <strong>${m.totalSlotsOpen}</strong> slot trống · <strong>${daysLeft}</strong> ngày còn lại
        </div>
      </div>
      <div class="mkt-dash__funnel">
        <div class="mkt-funnel-step" style="--w:100%">
          <div class="mkt-funnel-step__bar"><div class="mkt-funnel-step__fill" style="width:100%"></div></div>
          <div class="mkt-funnel-step__info">
            <span class="mkt-funnel-step__label">👁️ Views</span>
            <span class="mkt-funnel-step__value">${m.views.toLocaleString()}</span>
          </div>
        </div>
        <div class="mkt-funnel-step" style="--w:${Math.round(m.challenges/m.views*100)}%">
          <div class="mkt-funnel-step__bar"><div class="mkt-funnel-step__fill" style="width:${Math.round(m.challenges/m.views*100)}%"></div></div>
          <div class="mkt-funnel-step__info">
            <span class="mkt-funnel-step__label">⚔️ Challenges</span>
            <span class="mkt-funnel-step__value">${m.challenges}</span>
          </div>
        </div>
        <div class="mkt-funnel-step" style="--w:${Math.round(m.signups/m.views*100)}%">
          <div class="mkt-funnel-step__bar"><div class="mkt-funnel-step__fill" style="width:${Math.round(m.signups/m.views*100)}%"></div></div>
          <div class="mkt-funnel-step__info">
            <span class="mkt-funnel-step__label">📝 Signups</span>
            <span class="mkt-funnel-step__value">${m.signups}</span>
          </div>
        </div>
        <div class="mkt-funnel-step" style="--w:${Math.round(m.active/m.views*100)}%">
          <div class="mkt-funnel-step__bar"><div class="mkt-funnel-step__fill mkt-funnel-step__fill--active" style="width:${Math.round(m.active/m.views*100)}%"></div></div>
          <div class="mkt-funnel-step__info">
            <span class="mkt-funnel-step__label">🛡️ Active Warriors</span>
            <span class="mkt-funnel-step__value">${m.active}</span>
          </div>
        </div>
      </div>
      <div class="mkt-dash__bottom">
        <div class="mkt-dash__metric">
          <span>Conversion</span>
          <strong>${m.conversionRate}%</strong>
        </div>
        <div class="mkt-dash__metric">
          <span>Referrals</span>
          <strong>${m.referrals}</strong>
        </div>
        <div class="mkt-dash__metric mkt-dash__metric--cta">
          <button class="btn btn--warrior btn--sm" onclick="startWarriorChallenge()">⚔️ Thử Challenge</button>
        </div>
      </div>
    </div>
  `;
}

// ============ AUTO-POST TEMPLATES RENDER ============
function renderAutoPostTemplates() {
  const container = $('#auto-post-section');
  if (!container) return;

  container.innerHTML = `
    <h3 class="warriors-section-title"><span>📢</span> Auto-Generate Bài Post Tuyển Chiến Binh</h3>
    <p class="warriors-section-desc">Chọn vai trò + nền tảng → copy bài post sẵn → đăng lên tuyển warriors. 1-click marketing!</p>
    <div class="auto-post-controls">
      <div class="auto-post-role-select">
        <label>Chọn vai trò:</label>
        <select id="auto-post-role-select">
          ${WARRIOR_ROLES.map(r => `<option value="${r.id}">${r.icon} ${r.title} (${r.spots - r.filled} slot)</option>`).join('')}
        </select>
      </div>
      <div class="auto-post-platform-tabs" id="auto-post-platform-tabs">
        ${Object.entries(AUTO_POST_TEMPLATES).map(([key, p], i) => `
          <button class="auto-post-tab ${i === 0 ? 'active' : ''}" data-platform="${key}">${p.icon} ${p.name}</button>
        `).join('')}
      </div>
    </div>
    <div class="auto-post-output" id="auto-post-output">
      <pre id="auto-post-text"></pre>
      <div class="auto-post-actions">
        <button class="btn btn--primary btn--sm" id="btn-copy-auto-post">📋 Copy bài post</button>
        <button class="btn btn--glass btn--sm" id="btn-share-auto-post">🔗 Copy link role</button>
      </div>
    </div>
  `;

  // Generate initial post
  generateAutoPost();

  // Event listeners
  container.querySelector('#auto-post-role-select').addEventListener('change', generateAutoPost);
  container.querySelectorAll('.auto-post-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.auto-post-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      generateAutoPost();
    });
  });
  container.querySelector('#btn-copy-auto-post').addEventListener('click', () => {
    const text = container.querySelector('#auto-post-text').textContent;
    copyToClipboard(text);
  });
  container.querySelector('#btn-share-auto-post').addEventListener('click', () => {
    const roleId = container.querySelector('#auto-post-role-select').value;
    copyShareLink(roleId);
  });
}

function generateAutoPost() {
  const roleId = $('#auto-post-role-select')?.value;
  const activePlatform = document.querySelector('.auto-post-tab.active')?.dataset.platform;
  if (!roleId || !activePlatform) return;

  const role = WARRIOR_ROLES.find(r => r.id === roleId);
  const template = AUTO_POST_TEMPLATES[activePlatform];
  if (!role || !template) return;

  const text = template.template(role);
  const outputEl = $('#auto-post-text');
  if (outputEl) outputEl.textContent = text;
}

// ============ REFERRAL ENGINE ============
function generateReferralLink() {
  const code = 'w_' + Math.random().toString(36).substr(2, 8);
  const link = `https://social-network-tau-ten.vercel.app?ref=${code}`;
  copyToClipboard(link);
  showToast(`🔗 Link referral đã copy! Mỗi người đăng ký qua link → bạn +5 Trust Score`, 'success');

  // Sync referral via Gun.js
  if (window._gun) {
    const devtrust = window._gun.get('devtrust-network');
    devtrust.get('referrals').get(code).put({
      code,
      creator: 'David Cuong',
      createdAt: Date.now(),
      clicks: 0,
      conversions: 0,
    });
  }
}


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

  // ============ GUN.JS P2P INTEGRATION ============
  initP2P();
  
  // ============ SERVICE WORKER REGISTRATION (OFFLINE SUPPORT) ============
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('🛡️ Service Worker registered successfully:', registration.scope);
    }).catch((err) => {
      console.warn('Service Worker registration failed (normal if not localhost/HTTPS):', err);
    });
  }
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
    initWebrtcSignaling(gun);
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

// Start app
document.addEventListener('DOMContentLoaded', init);

// ============ WEBRTC P2P CHAT ============
const rtcConfig = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478' }
  ]
};

function initWebrtcSignaling(gun) {
  const signalRef = gun.get('devtrust-webrtc').get('signals').get(myPeerId);
  
  // Listen for incoming WebRTC signals
  signalRef.on((data) => {
    if (!data || !data.type || !data.from) return;
    const fromId = data.from;
    
    // Ignore own messages
    if (fromId === myPeerId) return;

    if (data.type === 'offer') {
      handleWebRtcOffer(fromId, JSON.parse(data.payload));
    } else if (data.type === 'answer') {
      handleWebRtcAnswer(fromId, JSON.parse(data.payload));
    } else if (data.type === 'candidate') {
      handleWebRtcCandidate(fromId, JSON.parse(data.payload));
    }
  });
  console.log(`📡 WebRTC Signaling initialized for peer: ${myPeerId}`);
}

function sendSignal(toId, type, payload) {
  if (!window._gun) return;
  const targetRef = window._gun.get('devtrust-webrtc').get('signals').get(toId);
  targetRef.put({
    from: myPeerId,
    type: type,
    payload: JSON.stringify(payload),
    timestamp: Date.now()
  });
}

function getOrCreatePeer(targetUserId) {
  if (!PEERS[targetUserId]) {
    const pc = new RTCPeerConnection(rtcConfig);
    
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        sendSignal(targetUserId, 'candidate', event.candidate);
      }
    };
    
    pc.onconnectionstatechange = () => {
      console.log(`WebRTC state with ${targetUserId}: ${pc.connectionState}`);
      updateWebrtcUI(targetUserId, pc.connectionState);
    };

    // Receive data channel from other side
    pc.ondatachannel = (event) => {
      setupDataChannel(targetUserId, event.channel);
    };

    PEERS[targetUserId] = { pc: pc, channel: null };
  }
  return PEERS[targetUserId];
}

function setupDataChannel(targetUserId, channel) {
  PEERS[targetUserId].channel = channel;
  
  channel.onopen = () => {
    console.log(`Data Channel opened with ${targetUserId}`);
    updateWebrtcUI(targetUserId, 'connected (P2P Data open)');
    showToast(`🔗 Đã kết nối WebRTC P2P trực tiếp với user ${targetUserId}!`, 'success');
  };
  
  channel.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'text') {
        receiveWebrtcMessage(data.from, data.msg);
      }
    } catch (e) {
      console.error('Invalid P2P msg', event.data);
    }
  };
  
  channel.onclose = () => {
    updateWebrtcUI(targetUserId, 'disconnected');
  };
}

async function initWebrtcCall(targetUserId) {
  // If we don't have a specific target ID (e.g calling dummy user ID logic), 
  // we would usually map app user ID to Gun user ID. For demo, we just use string ID
  targetUserId = targetUserId.toString();
  
  const peer = getOrCreatePeer(targetUserId);
  
  // Create our data channel to send messages
  const channel = peer.pc.createDataChannel('chat');
  setupDataChannel(targetUserId, channel);
  
  try {
    const offer = await peer.pc.createOffer();
    await peer.pc.setLocalDescription(offer);
    sendSignal(targetUserId, 'offer', offer);
    updateWebrtcUI(targetUserId, 'đang gọi (sending offer)...');
  } catch (err) {
    console.error('Error creating offer', err);
  }
}

async function handleWebRtcOffer(fromId, offerData) {
  console.log('Received offer from', fromId);
  const peer = getOrCreatePeer(fromId);
  try {
    await peer.pc.setRemoteDescription(new RTCSessionDescription(offerData));
    const answer = await peer.pc.createAnswer();
    await peer.pc.setLocalDescription(answer);
    sendSignal(fromId, 'answer', answer);
    updateWebrtcUI(fromId, 'nhận cuộc gọi (sent answer)...');
  } catch (err) {
    console.error('Error handling offer', err);
  }
}

async function handleWebRtcAnswer(fromId, answerData) {
  console.log('Received answer from', fromId);
  const peer = getOrCreatePeer(fromId);
  try {
    await peer.pc.setRemoteDescription(new RTCSessionDescription(answerData));
  } catch (err) {
    console.error('Error handling answer', err);
  }
}

async function handleWebRtcCandidate(fromId, candidateData) {
  const peer = getOrCreatePeer(fromId);
  try {
    await peer.pc.addIceCandidate(new RTCIceCandidate(candidateData));
  } catch (err) {
    console.error('Error adding candidate', err);
  }
}

function updateWebrtcUI(userId, state) {
  const el = document.getElementById(`webrtc-status-${userId}`);
  if (el) {
    el.textContent = `Trạng thái P2P: ${state}`;
    if (state.includes('connected')) el.style.color = '#10b981'; // green
    else el.style.color = '#f59e0b'; // yellow/orange
  }
}

function receiveWebrtcMessage(fromId, text) {
  // Only display if we are currently chatting with them
  // For demo, we just append to the active chat body if it's open, else show toast
  const body = document.getElementById('chat-body');
  if (body) {
    const reply = document.createElement('div');
    reply.className = 'msg msg--received';
    reply.innerHTML = `<div>${text}</div><div class="msg__time">${new Date().toLocaleTimeString('vi', { hour: '2-digit', minute: '2-digit' })}</div>`;
    body.appendChild(reply);
    body.scrollTop = body.scrollHeight;
  } else {
    showToast(`💬 Tin nhắn WebRTC P2P mới từ ${fromId}`);
  }
}

// ============ IPFS STORAGE HELPER (Helia) ============
async function uploadToIPFS(fileOrText) {
  if (!window._ipfs) {
    showToast('⚠️ IPFS node chưa sẵn sàng!', 'warning');
    return null;
  }
  
  try {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(fileOrText);
    const cid = await window._ipfs.addBytes(bytes);
    console.log('Added to IPFS with CID:', cid.toString());
    showToast('📦 Đã lưu trữ lên IPFS thành công!', 'success');
    return cid.toString();
  } catch (err) {
    console.error('IPFS Upload Error', err);
    showToast('❌ Lỗi tải lên IPFS', 'error');
    return null;
  }
}

async function fetchFromIPFS(cidStr) {
  if (!window._ipfs) return null;
  try {
    const chunks = [];
    for await (const chunk of window._ipfs.cat(cidStr)) {
      chunks.push(chunk);
    }
    const decoder = new TextDecoder();
    return decoder.decode(chunks[0]);
  } catch (err) {
    console.error('IPFS Fetch Error', err);
    return null;
  }
}

// Attach to global for easy access from UI buttons
window.DevTrustIPFS = {
  upload: uploadToIPFS,
  fetch: fetchFromIPFS
};

// ============ PLUGIN / EXTENSION SYSTEM ============
window.DevTrust = window.DevTrust || {};
window.DevTrust.Plugins = {
  loaded: {},

  // Plugin structure expected: { id: '...', name: '...', init: function(appContext) {} }
  register: function(pluginObj) {
    if (!pluginObj || !pluginObj.id) {
      console.error('Plugin thiếu ID!');
      return;
    }
    if (this.loaded[pluginObj.id]) {
      console.warn(`Plugin ${pluginObj.id} đã được load trước đó.`);
      return;
    }
    
    try {
      // Pass globals to plugin
      const context = {
        users: USERS,
        posts: POSTS,
        gun: window._gun,
        ipfs: window.DevTrustIPFS,
        ui: {
          showToast: showToast,
          switchView: switchView,
          renderPosts: renderPosts
        }
      };
      
      pluginObj.init(context);
      this.loaded[pluginObj.id] = pluginObj;
      console.log(`🧩 Plugin Loaded: ${pluginObj.name} (${pluginObj.id})`);
      showToast(`🧩 Đã kích hoạt Plugin: ${pluginObj.name}`, 'success');
    } catch (err) {
      console.error(`Lỗi khi khởi tạo Plugin ${pluginObj.id}:`, err);
    }
  },

  loadFromUrl: async function(url) {
    try {
      showToast('Đang tải Plugin...', 'info');
      // Dynamic import
      const module = await import(url);
      if (module && module.default) {
        this.register(module.default);
      }
    } catch (err) {
      console.error('Failed to load plugin from URL', err);
      showToast('❌ Lỗi tải Plugin', 'error');
    }
  },
  
  loadFromIPFS: async function(cidStr) {
    const code = await fetchFromIPFS(cidStr);
    if (!code) {
      showToast('Không tìm thấy code Plugin trên IPFS', 'error');
      return;
    }
    try {
      // For demo only. In production, use sandboxing (e.g Web Workers or iframe)
      const blob = new Blob([code], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      await this.loadFromUrl(url);
    } catch(err) {
      console.error("Lỗi chạy Plugin IPFS", err);
    }
  }
};

