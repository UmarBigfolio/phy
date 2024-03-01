
import Viz from "../components/Viz"
import RecentTable from "../components/RecentTable";




export default function Home() {

  const data = [
    {
      title:"Current Students",
      subTitle:"+20.1% from last month",
      numbers:"72470"
    },
    {
      title:"Subscribed Students",
      subTitle:"+20.1% from last month",
      numbers:"2060"
    },
    {
      title:"Unsubscribed Students",
      subTitle:"+20.1% from last month",
      numbers:"70410"
    },
    {
      title:"Modules",
      subTitle:"+20.1% from last month",
      numbers:"21"
    },
    {
      title:"Sub Modules",
      subTitle:"+20.1% from last month",
      numbers:"103"
    },
    {
      title:"Videos",
      subTitle:"+20.1% from last month",
      numbers:"1322"
    },
    {
      title:"Blogs",
      subTitle:"+20.1% from last month",
      numbers:"152"
    },
    {
      title:"Reviews",
      subTitle:"+20.1% from last month",
      numbers:"8"
    },
  ]
  
  return (
    <>
    {/* <ScrollArea className="h-[100vh]"> */}
      <div className="md:p-6 md:mt-1">

    <div className="md:pb-6">
    <h1 className="text-[1.875rem] font-bold">DashBoard</h1>
    </div>
      
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto px-5 md:px-0">
    {
      data.map((item)=>{
        return<>
        <div class="rounded-xl border bg-card text-card-foreground shadow 2xl:w-[310px]">
        <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">{item.title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div class="p-6 pt-0">
          <div class="text-2xl font-bold">{item.numbers}</div>
          <p class="text-xs text-muted-foreground">{item.subTitle}</p>
        </div>
      </div>
        </>
      })
    }
    </div>
   
    </div>
    <div className="grid 2xl:grid-cols-2 gap-5 px-5">
    <Viz />
    <RecentTable />
    </div>
    {/* </ScrollArea> */}
    </>
  );
}
