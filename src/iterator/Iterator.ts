interface Iterator<T> {
    next(): boolean /* aggregator의 다음 구성 요소를 얻을 수 있다면 true 없으면 false */
    current(): T /* 구성 데이터를 하나 얻음 타입은 어떤 타입이든 가능하도록 Generic을 사용 */
}

export default Iterator