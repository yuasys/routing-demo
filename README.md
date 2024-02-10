# README

`npx create-next-app@latest`した跡の経過は次のとおりです。

1. src/appを全削除
2. 改めてsrc/appディレクトリを作成
3. さらにsrc/app配下に/about/、/blog/、/profile/を作成し、それぞれにpage.tsxファイルを作成

この時点で`git status`した結果が下記のとおりです。

```bash
❯❯❯ git status
On branch main
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    src/app/favicon.ico
        deleted:    src/app/globals.css
        modified:   src/app/layout.tsx
        modified:   src/app/page.tsx


Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/app/about/
        src/app/blog/
        src/app/profile/

no changes added to commit (use "git add" and/or "git commit -a")

```

5. README.MDに上記の経過を追記

<hr/>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
