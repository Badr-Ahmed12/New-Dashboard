import Cards from "@/components/Cards";
import DashboardCharts from "@/components/Dashboard";
import Layout from "@/components/Layout";
import OverviewCard from "@/components/Overview_Card";

export default function Home() {
  return (
  <>  

  <Layout>
    <h1 className="text-4xl font-bold mb-6 font-sans">Dashboard</h1>
    <Cards />
    <DashboardCharts />
    <OverviewCard />
  </Layout>
  
   </>
  );
}

