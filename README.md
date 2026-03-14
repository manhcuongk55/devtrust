# 🛡️ DevTrust — Tuyển Dev Cải Tạo Thế Giới

### Vì một nhân loại hòa bình & sự thật.

> **Chúng tôi không build app. Chúng tôi build niềm tin.**  
> Mạng xã hội + nền tảng học tập P2P do dev Việt làm chủ — offline-first, trust-based, không big tech kiểm soát.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-devtrust-818cf8?style=for-the-badge)](https://social-network-tau-ten.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-34d399?style=for-the-badge)](LICENSE)
[![P2P](https://img.shields.io/badge/P2P-Gun.js-f59e0b?style=for-the-badge)](https://gun.eco)
[![Join](https://img.shields.io/badge/Join-Zalo%20Group-3b82f6?style=for-the-badge)](https://zalo.me/g/arkdaw947)

---

## 🌍 Mission — Tại Sao Chúng Tôi Làm Điều Này?

Thế giới đang ngập tràn **tin giả, kiểm duyệt, và sự kiểm soát dữ liệu** bởi các nền tảng khổng lồ. Hàng triệu người Việt ở vùng nông thôn **không có internet ổn định** để học kỹ năng số.

**DevTrust** ra đời với vision kép:

> *"Bình dân học vụ 1945 cải cách chữ viết. Bình dân học vụ SỐ 2025 cải cách kỹ năng số — bằng công nghệ P2P."*

### 🎯 Chúng tôi tin:
- **Sự thật** cần được lan tỏa mà không bị kiểm duyệt
- **Giáo dục số** là quyền cơ bản, không phải đặc quyền thành thị
- **Offline-first** — Dân vùng sâu cũng phải được học, dù mạng kém
- **Trust-based** — Teacher/dev verify lẫn nhau, nội dung chất lượng lan truyền tự nhiên
- **Dev Việt Nam** có thể tạo ra thứ thay đổi thế giới

---

## 📚 E-Learning Module — Bình Dân Học Vụ Số P2P

### Kiến trúc học tập phân tán

```
┌──────────────┐     IPFS/Gun.js      ┌──────────────┐
│  Teacher A   │ ←─────────────────→  │  Teacher B   │
│  (Trust 95)  │     P2P Sync         │  (Trust 87)  │
└──────┬───────┘                      └──────┬───────┘
       │ Publish khóa học                     │
       ▼                                      ▼
┌──────────────┐                      ┌──────────────┐
│  Student X   │ ─── Offline Learn ─→ │  Student Y   │
│  Vùng sâu    │     Sync khi gặp    │  Nông thôn   │
│  Mất mạng    │ ←── Quiz P2P ─────  │  WiFi kém    │
└──────────────┘                      └──────────────┘
       │                                      │
       └──────── Trust Score tăng ────────────┘
                 khi verify lẫn nhau
```

### Features đã build:
- 🎓 **Bình dân học vụ số Banner** — Phong trào quốc gia 2025-2026
- 📚 **6 khóa học**: AI cơ bản, Tiếng Anh, Kỹ năng số, An toàn mạng, Python, Kiếm tiền online
- 🎯 **4 bài sát hạch đầu vào** (20 câu) — đánh giá kỹ năng số, AI, an toàn mạng, tiếng Anh
- 📥 **Offline-ready** — Tải bài giảng về máy, học không cần net
- 🔗 **P2P sync** — Gun.js sync tiến độ học khi online/gặp bạn
- 🛡️ **Teacher Trust Chain** — Giảng viên được verify bởi học viên
- 📊 **Progress tracking** — Tiến độ học với progress bars
- 🏆 **Quiz Engine** — Sát hạch với scoring + Trust Score impact

---

## 🏗️ Tech Stack

| Layer | Technology | Vì sao? |
|-------|-----------|---------|
| **P2P Sync** | [Gun.js](https://gun.eco) | Graph DB phân tán, offline-first, realtime |
| **Messaging** | WebRTC | Chat/call trực tiếp browser-to-browser |
| **Storage** | IPFS / IndexedDB | Lưu trữ phân tán, không cần server |
| **Frontend** | Vanilla JS + CSS | Nhẹ, < 50KB bundle, chạy mọi thiết bị |
| **Trust Engine** | Custom algorithm | Score tính từ tương tác, verify, contributions |
| **E-Learning** | Gun.js + IndexedDB | Sync bài giảng P2P, quiz offline |
| **Deploy** | Vercel (static) | Bootstrap node, miễn phí |

---

## 🛡️ Trust Score System

Mỗi user/dev/teacher có **Trust Score** tính tự động từ:

```
Trust Score = (Tương tác × 0.20) + (Verify bạn bè × 0.15) 
            + (Code contributions × 0.20) + (Lịch sử giúp đỡ × 0.10) 
            + (Hoạt động × 0.10) + (Khóa học hoàn thành × 0.15)
            + (Học viên verify × 0.10)
```

| Score | Level | Badge | Ý nghĩa |
|-------|-------|-------|---------|
| 80–100 | 🟢 Trusted | 🛡️ | Core contributor, nội dung ưu tiên lan truyền |
| 50–79 | 🟡 Rising | 🛡️ | Active member, đang xây trust |
| 0–49 | 🔴 New | ⚠️ | Mới tham gia, cần verify thêm |

### Teacher Trust Chain
```
Student hoàn thành khóa → verify Teacher → Teacher Trust +3
Teacher tạo khóa chất lượng → nhiều student verify → Trust 90+
Nội dung Teacher Trust cao → ưu tiên lan truyền P2P cho cộng đồng
```

---

## 💻 Quick Start

```bash
# Clone repo
git clone https://github.com/basao-company/devtrust.git
cd devtrust

# Chạy local (chỉ cần HTTP server)
npx http-server . -p 8080

# Mở browser: http://localhost:8080
```

> **Không cần install backend, database, hay docker.** Mở browser là chạy.

---

## 🔌 Build Plugin (cho dev)

DevTrust cho phép dev build **mini-app/plugin** chạy trên node của user:

```javascript
// Ví dụ: Plugin "E-Learning Quiz P2P"
DevTrust.registerPlugin({
  name: 'Quiz P2P Verifier',
  version: '1.0.0',
  author: 'your-name',
  
  // Plugin verify đáp án quiz qua P2P
  onQuizComplete(student, quiz, score) {
    DevTrust.trust.addScore(student, score >= 80 ? 5 : 2, 'quiz');
    DevTrust.p2p.broadcast('quiz-result', {
      student: student.id, quiz: quiz.id, score
    });
  }
});
```

### Plugin Revenue Model
```
User dùng plugin → revenue sinh ra
├── 60% → Plugin creator (dev)
├── 30% → Người share/referrer  
└── 10% → Community Trust Fund
```

---

## 🎯 Bounty Board

### 🆕 E-Learning Bounties (Mới!)

| Task | Reward | Difficulty |
|------|--------|-----------|
| Build offline lesson downloader (IPFS) | 15% revenue share | ⭐⭐⭐ |
| Quiz peer-review P2P (verify đáp án) | 10% revenue share | ⭐⭐⭐ |
| Teacher Trust Score plugin | 10% revenue share | ⭐⭐ |
| Course marketplace (publish/sell khóa học) | 20% equity | ⭐⭐⭐⭐ |
| Video bài giảng offline player | 10% revenue share | ⭐⭐⭐ |
| Certificate generation (hoàn thành khóa) | Trust 85+ | ⭐⭐ |

### Social Network Bounties

| Task | Reward | Difficulty |
|------|--------|-----------|
| Build chat plugin P2P (WebRTC) | 15% revenue share | ⭐⭐⭐ |
| Cải tiến Trust Score algorithm | 10% + Trust 95+ | ⭐⭐ |
| Offline sync optimizer (CRDT) | 15% revenue share | ⭐⭐⭐⭐ |
| Mobile app wrapper (Flutter) | 20% equity | ⭐⭐⭐ |
| UI/UX thiết kế thêm screens | Trust 85+ | ⭐ |

> **Claim bounty:** Comment "CLAIM" vào issue + submit PR trong 2 tuần.

---

## ⚔️ Mô hình Tuyển "Chiến Binh Được Đào Tạo"

Không tuyển dev freelance thông thường — ta tuyển **chiến binh edtech chân chính**: có tâm huyết, kỹ năng, sẵn sàng contribute lâu dài.

### Giai đoạn 1: Tuyển chọn (1-2 tháng)
- **Tiêu chí**: Tâm huyết edtech + biết ≥1: Gun.js/IPFS/WebRTC/React + có lịch sử open-source
- **Bounty đầu vào**: Submit ý tưởng khóa học offline → nhận Trust Score + invite repo
- **Mục tiêu**: 20-30 chiến binh đầu tiên

### Giai đoạn 2: Bootcamp P2P (2-4 tháng)
- **Tuần 1-2**: Học core P2P (Gun.js, OrbitDB, IPFS, WebRTC) — offline-first
- **Tuần 3-6**: Build module E-Learning (bài giảng IPFS, quiz peer-review, sync P2P)
- **Tuần 7+**: Tích hợp Bình dân học vụ số (khóa học, certificate trust-based)
- **Win-win**: Build plugin thật trong training → nhận % revenue + Trust Score

### Giai đoạn 3: Scale & Loyalty
- Mỗi chiến binh có node riêng → tự lan tỏa (publish, recruit thêm qua trust chain)
- **Reward**: 50% doanh thu module, 30% cho người sync, 20% quỹ trust
- Dạy thực tế tại trung tâm offline (kết hợp kế hoạch mở trung tâm đào tạo)

---

## 🤝 Contributing

### Ai nên join?

✅ Dev thích **P2P, decentralized, offline-first**  
✅ Dev **edtech** (từng làm MOOCs, LMS, Moodle, Google Classroom)  
✅ Dev **blockchain/decentralized** (IPFS, Gun.js, Web3)  
✅ Người quan tâm **giáo dục số** cho cộng đồng  
✅ Ai muốn **portfolio đỉnh** với stack Gun.js + IPFS + WebRTC  
✅ Người tin vào **"internet tự do"**, không phụ thuộc big tech  

❌ Không phù hợp nếu chỉ tìm **lương tháng**  
❌ Không phù hợp nếu **copy-paste** không có ý tưởng cải tiến

### Cách contribute

1. **Fork** repo này
2. Tạo branch: `git checkout -b feature/offline-quiz-p2p`
3. Code + test offline (mở 2 browser tab, test sync)
4. Submit **Pull Request** với mô tả rõ ràng
5. PR được approve → Trust Score của bạn tự động tăng! 🎉

### Nhóm target (kéo dev xịn)

| Cộng đồng | Nơi post |
|-----------|----------|
| Open Source Việt Nam | Facebook group |
| EdTech Việt Nam | Zalo/FB group |
| AI Việt Nam | FB/Viblo |
| Dev Đà Nẵng/HCM/HN | Meetup + online |
| Blockchain Vietnam | Telegram/Discord |

---

## 📊 Roadmap

### Phase 1 — MVP (Tuần 1-2) ✅
- [x] UI prototype (Feed, Explore, Messages, Profile)
- [x] Trust Score display (ring + breakdown)
- [x] Gun.js P2P integration
- [x] Deploy Vercel

### Phase 2 — E-Learning + P2P Core (Tuần 3-6) 🔄
- [x] E-Learning module (6 khóa học, quiz, progress)
- [x] Bình dân học vụ số integration
- [x] Teacher Trust Chain
- [x] Quiz Engine (sát hạch đầu vào)
- [ ] WebRTC chat trực tiếp
- [ ] IPFS storage cho posts/media/bài giảng
- [ ] Offline-first với IndexedDB
- [ ] Plugin system (load/unload)

### Phase 3 — Scale (Tuần 7+)
- [ ] Mobile app (Flutter + WebRTC)
- [ ] Course marketplace (publish/sell)
- [ ] Certificate generation P2P
- [ ] Revenue sharing P2P wallet
- [ ] Partnership trung tâm đào tạo thực tế
- [ ] 50+ dev contributors, 5,000 users

---

## 💰 Revenue Model — P2P Win-Win

```
Không trung gian. Tiền chuyển P2P trực tiếp.

┌─────────────┐    tip/enroll     ┌──────────────┐
│  Học viên   │ ───────────────→ │  Teacher/Dev  │
│  dùng khóa  │                  │  (60%)        │
│  học/plugin │                  └──────────────┘
└─────────────┘                        │
                                       ├── 30% → Referrer
                                       └── 10% → Trust Fund
```

---

## 🌐 Live Demo

🔗 **https://social-network-tau-ten.vercel.app**

Features đã hoạt động:
- 🏠 News Feed với Trust Score badges
- 🔍 Explore grid
- 📚 **E-Learning** — Khóa học, Bình dân học vụ số, Quiz
- 💬 Messages (P2P chat demo)
- 👤 Profile với Trust Score ring + Teacher Trust
- 🔔 Notifications
- ⚙️ Settings
- 🌗 Dark/Light theme
- 🔗 P2P peer indicator (Gun.js)

---

## 📬 Join Community

- **Zalo Group:** [zalo.me/g/arkdaw947](https://zalo.me/g/arkdaw947)
- **GitHub Issues:** Report bugs, suggest features
- **PR = Trust:** Mỗi PR merge = Trust Score +10

---

### 📢 Post mẫu — kéo dev EdTech

> **Tiêu đề:** Ae dev edtech & P2P ơi! Join VConnect DevTrust — Xây mạng học tập phân tán Bình dân học vụ số, offline-first!
>
> Từ kế hoạch mới: Kết hợp VConnect P2P Trust với E-Learning + Bình dân học vụ số:
> - Build nền tảng học offline (tải bài giảng IPFS, học không net, sync P2P)
> - Scale trung tâm đào tạo thực tế + online
> - Trust-based: Teacher/dev verify lẫn nhau
>
> **Bounty:** Build quiz offline P2P → nhận 10% từ module. Comment "JOIN EDU" để nhận task!

---

## 📜 License

MIT License — Tự do sử dụng, fork, modify. 

**Made with ❤️ by Vietnamese dev community.**

> *"Càng hoang tưởng càng tốt"* — DevTrust Team
