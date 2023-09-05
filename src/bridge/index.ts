import CaptionDisplay from "./CaptionDisplay"
import CharactersCounter from "./CharactersCounter"
import Draft from "./Draft"
import SimpleDisplay from "./SimpleDisplay"

const title = '복원된 지구'
const author = '김형준'
const content = [
    '플라스틱 사용의 감소와',
    '바다 생물 어획량 감소로 인하여',
    '지구는 복원되었다.'
]

// 기능 
// const draft = new Draft(title, author, content)

// 기능 추가
const draft = new CharactersCounter(title, author, content)

// 구현
// const display = new SimpleDisplay()
const display = new CaptionDisplay()

draft.print(display)

// 추가된 기능 사용
console.log(`전체 문자 수: ${draft.getCharactersCounter()}`)