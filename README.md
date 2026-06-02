# 🖥️ Portfolio Terminal

CMD 창처럼 생긴 인터랙티브 포트폴리오 터미널

---

## 📁 파일 구조

```
├── terminal.html   # 구조 (HTML)
├── terminal.css    # 스타일
└── terminal.js     # 명령어 로직
```

---

## ⌨️ 사용 가능한 명령어

| 명령어 | 설명 |
|---|---|
| `help` | 명령어 목록 출력 |
| `ls` | 프로젝트 목록 출력 |
| `open <이름>` | 해당 프로젝트를 새 탭으로 열기 |
| `whoami` | 개발자 소개 |
| `skills` | 기술 스택 |
| `date` | 현재 날짜 및 시간 |
| `hello` | 랜덤 인사 |
| `github` | GitHub 새 탭으로 열기 |
| `clear` | 화면 초기화 |

### open 명령어 인자값

```
open sitelist
open caffeine
open rps
open pandas
open text_game
```

---

## 🔗 등록된 프로젝트

| 이름 | URL |
|---|---|
| siteList | https://smallcogwheel.github.io/siteList/ |
| 카페인 계산기 | https://smallcogwheel.github.io/-_-/ |
| 가위바위보 | https://smallcogwheel.github.io/Rock_Paper_Scissors/ |
| Pandas | https://pandas-nrp0.onrender.com/ |
| text_game | https://smallcogwheel.github.io/text_game/ |

---

## 💡 기타

- `↑` `↓` 방향키로 이전 명령어 불러오기 가능
- 터미널 창 아무 곳이나 클릭하면 입력창 포커스
- 명령어 추가는 `terminal.js` 의 `COMMANDS` 객체에 함수 추가
- 프로젝트 추가는 `terminal.js` 의 `OPEN_MAP` 객체에 키-URL 추가
