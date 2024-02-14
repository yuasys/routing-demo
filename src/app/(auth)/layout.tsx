// Next.js 14 Tutorial - 20 - Active Links
// https://www.youtube.com/watch?v=8v9P3i4gjGg
"use client"; // このコードがクライアントサイドで動作することを示すディレクティブです。

import Link from "next/link";// Next.jsのLinkコンポーネントをインポート
import { usePathname } from "next/navigation";// usePathnameは、現在のURLのパス名を取得するためのNext.jsのフックです。
import "./styles.css";// スタイルシートをインポートします。

// ナビゲーションリンクの配列を定義します。各リンクは、その名前とhref属性（リンク先のパス）を持つオブジェクトです。
const naviLinks = [
  { name: "Register", href: "register" },
  { name: "Login", href: "login" },
  { name: "Forgot Password", href: "forgot-password" },
];

// AuthLayoutというReactコンポーネントを定義します。このコンポーネントは、子要素を受け取り、それをレンダリングします。
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname = usePathname();// 現在のURLのパス名を取得します。
    console.log(pathname);
    return (
      <div>
        {naviLinks.map((link) => {// ナビゲーションリンクの配列をマップします。各リンクに対して、Linkコンポーネントをレンダリングします。
        const isActive = pathname.startsWith('/'+link.href);
        // console.log('リンクは'+'/'+link.href);
          return (
            <Link
             href={link.href} 
             key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-900 mr-4"} >
              {link.name}
            </Link>
          );
          })}                             
        {children}
      </div>
    );
  }
