# ExchangeDiary_Server

Nexters 19th 고영희미만다꾸러팀 Server Repository


## 로컬 개발 환경 세팅

1. db 세팅

```
cd dev-infra
docker-compose up -d
```


## 실행

```
npm install
npm run start:dev
```


## 마이그레이션

`npm run migrate` : 마이그레이션 실행

`npm run generate-migration -- -n <name>` : 마이그레이션 파일 자동 생성

* 자동 생성은 build된 파일 기준이니 이 명령어 돌리기 전에 반드시 build해야 함! (build 안해놓고 돌리면 꼬일 수 있음!!)

* 마이그레이션은 현재 디비 스키마와 정의된 스키마를 비교해 생성함. 그래서 현재 디비 스키마가 최신 상태임을 반드시 확인한 후 마이그레이션 생성할 것.


## 팁

* 새로운 모듈 생성
```
nest g module <name>
nest g controller <name>
nest g service <name>
```


## CI/CD

* commit이 push되면 CI 자동으로 돌아감

* master에 머지되거나 v0.0.0-dev 같은 형태의 release를 생성하면 dev에 배포

* ~~v0.0.0-prod 형태의 release를 생성하면 prod에 배포~~ (아직 prod는 연결 안함)

* dev base url : https://dev.api.voda-diary.com
