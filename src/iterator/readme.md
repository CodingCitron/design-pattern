# iterator 반복자 패턴
- 동일한 형태의 데이터 항목을 여러개 가지고 있는 것을 container, aggregator
- 구성 데이터를 하나씩 가져와야 할 때 방법이 다 다르다. 이는 aggregator의 내부 자료구조가 종류에 따라서 모두 다르기 때문 
- 종류로는 Array, Linked List, Tree, Graph, Table(DBMS)...

# 정리
- Iterator 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는 Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있습니다.

- 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된 공통 API로 접근할 수 있음으로 하나의 공통된 알고리즘으로 처리할 수 있다.