# Requirements

-   1주일동안 아래 졸업작품을 마무리하고 제출합니다.
-   이때까지 배운 것을 토대로, 미니 트위터 클론을 완성합니다.
-   NextJS, Prisma, Tailwind, API Routes 그리고 SWR 를 활용하여 아래 페이지를 완성합니다.
-   / : 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
-   /create-account : 계정을 생성하는 페이지입니다.
-   /log-in : 로그인을 진행하는 페이지입니다.
-   /tweet/[id] : 트윗의 상세 정보를 보는 페이지 입니다.

## /:

-   After logging in, in the Home Page, the user should see all the Tweets on the database, the user should also be able to POST a Tweet.
-   로그인이 완료되었을 경우, 사용자는 데이터베이스에 존재하는 모든 트윗을 볼 수 있어야 합니다.
-   또한 트윗을 작성할 수 있어야 합니다.

## /tweet/[id]:

-   The user should be able to see the tweet + a Like button.
-   When the Like button is pressed, save the like on the database and reflect the update using mutate from useSWR.
-   사용자는 id에 해당하는 트윗의 내용과 좋아요 버튼을 볼 수 있어야 합니다.
-   좋아요버튼을 클릭했 을 경우 좋아요의 상태값이 데이터베이스에 저장되어야 하며 useSWR의 mutate를 사용하여 업데이트를 반영해야 합니다.

## 참고사항

-   챌린지 blueprint에는 SQLite을 기반으로 한 Prisma가 설정되어있습니다.
-   prisma.schema파일을 변경했다면 npm run db-sync를 실행하세요.
-   SWR와 tailwind도 챌린지 blueprint에 설정되어 있습니다.

---

# Results

## Deplopyment URL
- https://nomadcoder-react-study-4th-next-js-final.vercel.app/

## Create Account and Login

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/42f126f9-eab7-48de-8cc8-d63a79205a2f

## Logout

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/9f7b667c-248d-4fc1-ba4c-147a4d317f5c

## Edit Profile

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/ac56bb00-db76-4981-a684-a02c537d4b6e

## My Posts

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/36a19fd9-232e-475a-b40e-49fddbfa6deb

## Like and Dislike Post and My Like Posts

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/88c3e474-ad15-45e7-a9b8-446e10f52517

## Write a New Post

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/31458baa-f07a-4f5e-ac01-10c995e27ec5

## Edit Post

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/3c7b01e2-b782-43f0-901e-18a8bfdcb5b1

## Delete Post

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/e79950f6-0124-4967-887d-f0158a5bbd93

## Comment

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/6df06733-5a37-4ea4-8a22-8bb55cf33581

## Search Post

https://github.com/jh0152park/nomadcoder-react-study-4th_NextJS_Final/assets/118165975/f1684291-5b07-42b3-b9e7-4578996af0c7









