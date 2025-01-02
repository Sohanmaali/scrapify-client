import NotificationListing from "@/app/pages/scrapProducts/NotificationListing"

const NotificationPage =()=>{
    return (<>
    <div>  <div className="w-full flex justify-between aligh-center"><h1 className="text-2xl text-mutedColor font-bold mb-4 border-b-2 border-b border-darkColor ">Notification</h1></div>
    <div><NotificationListing/></div>
    </div>
    </>)
}
export default NotificationPage