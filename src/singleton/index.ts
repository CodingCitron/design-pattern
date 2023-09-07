import King from "./King";

const king = King.getInsance()
king.sayHello()

const king2 = King.getInsance()

if(king === king2) {
    console.log('같은 인스턴스')
} else {
    console.log('다른 인스턴스')
}