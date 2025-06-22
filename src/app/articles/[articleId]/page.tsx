"use client";

import Link from "next/link";
import { use } from "react";

type Lang = "en" | "ar";

interface SingleArticleProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: Lang }>;
}

export default function SingleArticle({
  params,
  searchParams,
}: SingleArticleProps) {
  const { articleId: id } = use(params);
  const { lang } = use(searchParams);
  return (
    <section>
      <h1>
        {lang === "ar"
          ? "مرحباً بكم في مقالة الأخبار"
          : "Welcome in News article"}
      </h1>
      <p>Reading in language {lang}</p>

      <div>
        <Link href={`/articles/${id}?lang=en`}>English</Link>
        <Link href={`/articles/${id}?lang=ar`}>arabic</Link>
      </div>
    </section>
  );
}
