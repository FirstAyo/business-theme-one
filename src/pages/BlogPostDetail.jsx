import BlogDetailHero from "../components/BlogDetail/BlogDetailHero";
import BlogDetailArticle from "../components/BlogDetail/BlogDetailArticle";

import heroImg from "../assets/images/hero3.png"; // replace with your banner image
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";

export default function BlogPostDetail() {
  const demoPost = {
    title: "Profitable business makes your profit",
    author: "David Smith",
    date: "15 Jan, 2023",
    category: "Business Solution",
  };

  return (
    <main className="bg-white">
      {/* Hero background */}
      <BlogDetailHero image={heroImg} />

      {/* Article card that overlaps hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="my-20">
            <BlogDetailArticle post={demoPost} />
          </div>
        </div>
      </section>

      <NewsletterCta />
      <FooterDarkSimple />
    </main>
  );
}
