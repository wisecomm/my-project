nextjs 15 + tailwind 4 + shadcn

참조 : taliwindtcss 4.0
https://www.youtube.com/watch?v=7IK9j9-H0vQ&list=LL&index=6

참조 : https://tailwindcss.com/docs/installation/framework-guides/nextjs

create-next-app@latest my-project --typescript --eslint --app
Tailwind css --> NO

npm install tailwindcss @tailwindcss/postcss postcss

postcss.config.mjs 루트 파일에 생성
const config = {
plugins: {
"@tailwindcss/postcss": {},
},
};
export default config;

globals.css
@import "tailwindcss";

참조 : https://ui.shadcn.com/docs/tailwind-v4
이거 안함 ㅎ : pnpm create next-app@canary --tailwind --eslint --typescript --app --no-src-dir

설치 : npm install -g pnpm
pnpm dlx shadcn@canary init
pnpm dlx shadcn@canary add --all

# theme 적용 참조 사이트
https://github.com/voidcontests/frontend/tree/tailwind/v4
# 나중에 테마 사용시 아래 shadcn 으로 하는게 좋을뜻 ㅎㅎㅎ
https://ui.shadcn.com/docs/tailwind-v4
