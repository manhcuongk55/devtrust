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
    renderNotifications();
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
  if (viewName === 'fund') {
    if (!$('#fund-grid').children.length) renderFundFeed();
  }
  if (viewName === 'match') {
    if (!$('#match-grid').children.length) renderMatchFeed();
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

// ============ FUNDRAISING & RESOURCE POOL ENGINE ============

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

// Start app
document.addEventListener('DOMContentLoaded', init);
