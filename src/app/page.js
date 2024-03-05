import Viz from "../components/Viz";
import RecentTable from "../components/RecentTable";
import { AppleIcon, CircleUserIcon, Component, Package, Rss, Star, UserPlus, UserX, VideoIcon } from "lucide-react";
import {CardDescription} from "../components/ui/card"
export default function Home() {
  const data = [
    {
      title: "Current Students",
      subTitle: "+20.1% from last month",
      numbers: "72470",
      icon:<CircleUserIcon />
    },
    {
      title: "Subscribed Students",
      subTitle: "+20.1% from last month",
      numbers: "2060",
      icon:<UserPlus />
    },
    {
      title: "Unsubscribed Students",
      subTitle: "+20.1% from last month",
      numbers: "70410",
      icon:<UserX />
    },
    {
      title: "Modules",
      subTitle: "+20.1% from last month",
      numbers: "21",
      icon:<Package />
    },
    {
      title: "Sub Modules",
      subTitle: "+20.1% from last month",
      numbers: "103",
      icon:<Component />
    },
    {
      title: "Videos",
      subTitle: "+20.1% from last month",
      numbers: "1322",
      icon:<VideoIcon />
    },
    {
      title: "Blogs",
      subTitle: "+20.1% from last month",
      numbers: "152",
      icon:<Rss />
    },
    {
      title: "Reviews",
      subTitle: "+20.1% from last month",
      numbers: "8",
      icon: <Star/>,
    },
  ];

  return (
    <>
      <div className="md:p-6 md:mt-1">
        <div className="md:pb-6">
          <h1 className="text-[1.875rem] font-bold">Dashboard</h1>
          <CardDescription>Deploy your new project in one-click.</CardDescription>

        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto px-5 md:px-0">
          {data.map((item) => {
            return (
              <>
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">
                      {item.title}
                    </h3>
                    <span
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">{item.numbers}</div>
                    <p className="text-xs text-muted-foreground">{item.subTitle}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="px-5">
        <RecentTable />
      </div>
    </>
  );
}
