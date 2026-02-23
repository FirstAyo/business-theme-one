import ServiceDetailContent from "./ServiceDetailContent";
import ServiceSidebar from "./ServiceSidebar";

export default function ServiceDetailLayout() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <ServiceDetailContent />
        <ServiceSidebar />
      </div>
    </section>
  );
}
