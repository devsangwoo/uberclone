- yarn add typescript ts-node nodemon --dev
  yarn add tslint-config-prettier --dev
  yarn add @types/node --dev  
  definitely Typed

yarn add graphql-yoga

yarn add helmet cors morgan
yarn add @types/cors @types/helmet @types/morgan -D

- 미들웨어는 앱의 연결이나 요청들을 다루는 방식을 수정함
- 미들웨어는 양파임
- 모든 행동 / 요청을 로깅 => 로거
- 보안미들웨어 요청을 멈추고 검사후에 위험하지 않으면 계속진행->헬맷

yarn add graphql-tools merge-graphql-schemas

- 그래프큐엘 올 타입으로 파일로더로 그래프큐엘들의 타입쿼리들을 모아줌
- 올 리졸버로 파일로더로 그래프큐엘 리졸버들을 묶어줌, 묶어준 리졸버는 ts이므로 로더로 묶을때도 전체파일확장자로해야함
- 멀지 타입스, 멀지 리졸버스에 해당녀석들을 합쳐줌
- 합쳐준 녀석들을 실행가능한 스키마로 만들어주는 메소드에 넣고 스키마로 익스포트함
- 해당녀석을 app.ts의 그래프큐엘서버에 인자로 넣어줌,
- 인덱스에서 해당 앱을 실행시킴
