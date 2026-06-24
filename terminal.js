const output  = document.getElementById('output')
const input   = document.getElementById('cmd_input')
const history = []
let histIdx   = -1

const COMMANDS = {
    help() {
        return [
            ['t_info', '사용 가능한 명령어:'],
            ['t_out',  '  ls          — 프로젝트 목록'],
            ['t_out',  '  open <이름>  — 프로젝트 열기'],
            ['t_out',  '  whoami      — 개발자 소개'],
            ['t_out',  '  skills      — 기술 스택'],
            ['t_out',  '  clear       — 화면 지우기'],
            ['t_out',  '  hello       — 인사'],
            ['t_out',  '  date        — 현재 날짜'],
            ['t_out',  '  github      — GitHub 열기'],
        ]
    },
    ls() {
        return [
            ['t_info', '프로젝트 목록:'],
            ['t_ok',   '  siteList   → smallcogwheel.github.io/siteList/'],
            ['t_ok',   '  caffeine   → smallcogwheel.github.io/-_-/'],
            ['t_ok',   '  rps        → smallcogwheel.github.io/Rock_Paper_Scissors/'],
            ['t_ok',   '  pandas     → pandas-nrp0.onrender.com/'],
            ['t_ok',   '  text_game  → smallcogwheel.github.io/text_game/'],
        ]
    },
    whoami() {
        return [
            ['t_info', 'SmallCogwheel'],
            ['t_out',  '  작은 톱니바퀴처럼 착실하게 굴러가는 개발자'],
            ['t_out',  '  HTML / CSS / JS / jQuery / Python'],
        ]
    },
    skills() {
        return [
            ['t_info', '기술 스택:'],
            ['t_out',  '  ████████░░  HTML/CSS'],
            ['t_out',  '  ███████░░░  JavaScript'],
            ['t_out',  '  ██████░░░░  jQuery'],
            ['t_out',  '  █████░░░░░  Python'],
        ]
    },
    hello() {
        const greets = ['안녕하세요!', 'Hello!', 'ㅎㅇ', 'yo', '반갑습니다 👋']
        return [['t_ok', greets[Math.floor(Math.random() * greets.length)]]]
    },
    date() {
        return [['t_out', new Date().toLocaleString('ko-KR')]]
    },
    clear() {
        output.innerHTML = ''
        return []
    },
    github() {
        window.open('https://github.com/smallcogwheel', '_blank')
        return [['t_ok', 'GitHub 열었습니다.']]
    },
}

const OPEN_MAP = {
    sitelist:  'https://smallcogwheel.github.io/siteList/',
    caffeine:  'https://smallcogwheel.github.io/-_-/',
    rps:       'https://smallcogwheel.github.io/Rock_Paper_Scissors/',
    pandas:    'https://pandas-nrp0.onrender.com/',
    text_game: 'https://smallcogwheel.github.io/text_game/',
    textgame:  'https://smallcogwheel.github.io/text_game/',
}

function addLine(cls, text) {
    const d = document.createElement('div')
    d.className =  cls
    d.textContent = text
    output.appendChild(d)
}

function run(raw) {
    const trimmed = raw.trim()
    if (!trimmed) return

    history.unshift(trimmed)
    histIdx = -1

    addLine('t_line', '❯ ' + trimmed)

    const parts = trimmed.toLowerCase().split(/\s+/)
    const cmd   = parts[0]
    const arg   = parts.slice(1).join(' ')

    if (cmd === 'open') {
        const url = OPEN_MAP[arg.replace(/[^a-z_]/g, '')]
        if (url) {
            window.open(url, '_blank')
            addLine('t_ok', '→ ' + url + ' 열었습니다.')
        } else {
            addLine('t_err', "알 수 없는 프로젝트: '" + arg + "'  (ls 로 확인하세요)")
        }
    } else if (COMMANDS[cmd]) {
        const lines = COMMANDS[cmd]()
        lines.forEach(([cls, txt]) => addLine(cls, txt))
    } else {
        addLine('t_err', "'" + cmd + "' 명령어를 찾을 수 없습니다. 'help' 를 입력하세요.")
    }

    addLine('t_line', '')
    output.scrollTop = output.scrollHeight
}

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        run(input.value)
        input.value = ''
    } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx] }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (histIdx > 0) { histIdx--; input.value = history[histIdx] }
        else { histIdx = -1; input.value = '' }
    }
})

document.querySelector('.terminal_window').addEventListener('click', () => input.focus())
