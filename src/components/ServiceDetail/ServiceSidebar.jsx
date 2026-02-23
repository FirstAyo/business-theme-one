import CategoriesCard from "./CategoriesCard";
import DownloadCard from "./DownloadCard";
import HelpCard from "./HelpCard";

export default function ServiceSidebar() {
  return (
    <div className="space-y-6">
      <CategoriesCard />
      <DownloadCard />
      <HelpCard />
    </div>
  );
}
