# 2025-FE-Github-Flow-Session

이 레포는 2025 FE GitHub Flow 세션 실습을 위한 연습 공간입니다.

GitHub Flow를 정확히 이해하고
Fork, Upstream, Issue, PR, Code Review까지
협업 필수 스킬을 직접 연습해봅시다!

## 📚 Flow 한눈에 보기

| 단계               | 해야 할 일                                    |
| ------------------ | --------------------------------------------- |
| 🏁 **시작**        | Fork, Clone, Upstream 설정                    |
| 🎫 **할 일 등록**  | Issue 생성                                    |
| 🌱 **브랜치 분기** | `feature/#이슈번호-할일`                      |
| 🛠️ **작업**        | 작업 후 Commit, Push                          |
| 🔃 **PR**          | Upstream으로 PR                               |
| 👀 **코드리뷰**    | Approve(코드리뷰 진행) & Merge                |
| 🔄 **최신화**      | 모든 작업 후 충돌 방지를 위해 `pull upstream` |

---

## ⚙️ 실습 순서 예시

### 1️⃣ Fork

원본 저장소를 Fork

### 2️⃣ Clone

```bash
git clone https://github.com/{github 아이디}/2025-FE-Github-Flow-Session.git
```

### 3️⃣ Upstream 등록

```bash
git remote add upstream https://github.com/LikeLion-at-DGU/2025-FE-Github-Flow-Session.git

git remote -v
```

### 4️⃣ Issue 생성

할 일 등록하고 이슈번호 확인하기 (#1, #2 등)

### 5️⃣ 브랜치 생성

```bash
git pull upstream main

git checkout -b feature/#{이슈번호}-{할 일}
```

### 6️⃣ 작업 & 커밋

```bash
git add .

git commit -m "feature/#1: {수행한 작업을 적어주세요}"

git push origin feature/#{이슈번호}-{할 일}
```

#### commit type 예시

> feature: 새로운 기능 개발

> fix: 버그 수정

> chore: 기타 변경

### 7️⃣ PR 템플릿을 활용한 PR 보내기

### 8️⃣ 코드리뷰 & Merge

## 도움을 주신분

|                                이미지                                 |                       소개                       |
| :-------------------------------------------------------------------: | :----------------------------------------------: |
| <img src="https://github.com/sayyyho.png" width="100" height="100" /> | 멋쟁이사자처럼 13기 프론트엔드 교육팀 **박세호** |
