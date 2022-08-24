# 피그마 참고 주소


# Book Search & Book Basket

| schedule | 8/18 | 8/19 | 8/20 | 8/21 | 8/22 | 8/23 | 8/24 |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | 
| 주제 선정 | :heavy_check_mark: |  |  |  |  |  |  |
| 레이아웃 디자인 | :heavy_check_mark: |  |  |  |  |  |  |
| 개별 프로젝트 진행 |  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  |  |  |
| 개별 코드 리뷰 및 병합 |  |  |  |  | :heavy_check_mark: |  |  |
| 발표 준비 |  |  |  |  |  | :heavy_check_mark: |  |
| 발표 |  |  |  |  |  |  | :heavy_check_mark: |


01. 무엇을 하려고 ? 
 - 오픈 Api를 찾다가 국내 도서 검색 Open Api를 발견,
 - Open Api 데이터를 이용한 국내 도서 검색 사이트 개발

02. 카카오 API 선택 이유 ?
 - 국내 도서 검색 Open Api로 정하고 관련 Api와 문제가 없는지 서칭, 
 - 그 중 카카오 Open Api가 문제가 없으며(비교적), 정보가 많아 선택

03. 기본적인 베이스 설명 
 - 피그마 링크 : https://www.figma.com/file/UOswQnIczXwF1vGgy7HTf4/Untitled?node-id=0%3A1
 - 피그마 시안 -> 완성된 프로젝트 보여주고 기능 설명   
 - style은 전체적으로 scss 사용 (반응형)
   
--- 전체적인 기능 ---

1. Api 호출 / 책 검색 
2. 최신순, 높은 가격 순, 낮은 가격 순 정렬 
3. 옵션 9개, 12개, 15개 선택, 책 출력 
4. BookList 페이지네이션 기능 구현 (react-js-pagination 라이브러리)
5. 장바구니 기능 구현 (모달창, 책 데이터, 토탈 주문 금액, 삭제, 닫기)
6. 책 상세페이지 ( 라우터 사용 )

7. 받아온 데이터에 이미지 없을 시 defaultImage 추가 
8. 품절 상품 -> 품절처리 및 장바구니 추가 X 
9. ScrollTop버튼 : 클릭 시 최상단으로 이동, (일정 스크롤이 내려가면 출력)
