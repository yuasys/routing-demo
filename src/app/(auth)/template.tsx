// Next.js 14 Tutorial - 20 - Active Links
// https://youtu.be/jzD1mUd35a0?si=IgGJrZX6OTvxacVT
"use client"; // このコードがクライアントサイドで動作することを示すディレクティブです。

import Link from "next/link";// Next.jsのLinkコンポーネントをインポート
import { usePathname } from "next/navigation";// usePathnameは、現在のURLのパス名を取得するためのNext.jsのフックです。
import "./styles.css";// スタイルシートをインポートします。
import { useState } from "react";// useStateフックをインポートします。

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
    const [input, setInput] = useState("");// ユーザーの入力を保持するための状態を定義します。
    
    return (
      <div>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-orange-300 p-2 mb-1" />  
        </div>
        {naviLinks.map((link) => {// ナビゲーションリンクの配列をマップします。各リンクに対して、Linkコンポーネントをレンダリングします。
        const isActive = pathname.startsWith('/'+link.href);
          return (
            <Link
              href={link.href} 
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-700 mr-4"}
            >
              {link.name}
            </Link>
          );
          })}                             
        {children}
      </div>
    );
  }
