import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogPagination from "../components/blog/BlogPagination";
// import TrustedClients from "../components/Home/TrustedClients"; // if you already have it

export default function Blog() {
  return (
    <main className="bg-[#F4F6F8]">
      <BlogHero />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          {/* LEFT: posts */}
          <div>
            <BlogGrid />
            <BlogPagination />
          </div>

          {/* RIGHT: sidebar */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <BlogSidebar />
          </aside>
        </div>

        {/* Trusted clients row (this is still part of the “main page” in the screenshot) */}
        <div className="mt-12">
          {/* If you already have it, use your component instead */}
          {/* <TrustedClients /> */}
          <div className="flex flex-wrap items-center justify-center gap-10 py-8 text-[#1F2A30]/70">
            <span className="text-xs font-bold tracking-[0.18em] text-[#1F2A30]">
              OUR TRUSTED CLIENTS
            </span>
            <span className="font-semibold">Toy Jesh</span>
            <span className="font-semibold">sefrov</span>
            <span className="font-semibold">waleon</span>
            <span className="font-semibold">calsa</span>
            <span className="font-semibold">Contex</span>
            <span className="font-semibold">Toy Jesh</span>
          </div>
        </div>
      </section>
    </main>
  );
}
