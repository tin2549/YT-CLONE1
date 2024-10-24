
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import { LiaHotjar } from "react-icons/lia";
import { PiMusicNoteLight } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { GoReport } from "react-icons/go";
function Sidebar() {
    const sidebarItems =[
        {
            id:1,
            name:"HOME",
            icon:<GoHome/>
        },
        {
            id:2,
            name:"Shorts",
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:"Subscribe",
            icon:<MdOutlineSubscriptions/>
        },
        
    ];
    const sidebarItems2 = [ 
        {
            id:1,
            name:"History",
            icon:<MdHistory />
        },
        {
            id:2,
            name:"Playlists",
            icon:<MdOutlinePlaylistPlay/>
        },
        {
            id:3,
            name:"Like Videos",
            icon:<AiOutlineLike/>
        },
        {
            id:4,
            name:"Watch Later",
            icon:<MdWatchLater/>
        },
        {
            id:5,
            name:"Download Videos",
            icon:<RiDownloadLine/>
        },
    ];
    const sidebarItems3 = [ 
        {
            id:1,
            name:"Trending",
            icon:<LiaHotjar />
        },
        {
            id:2,
            name:"Music",
            icon:<PiMusicNoteLight/>
        },
        {
            id:3,
            name:"Game",
            icon:<SiYoutubegaming/>
        },
        {
            id:4,
            name:"News",
            icon:<FaRegNewspaper/>
        },
        {
            id:5,
            name:"Sport",
            icon:<TfiCup/>
        },
    ];
    const sidebarItems4 = [ 
        {
            id:1,
            name:"Youtube Music",
            icon:<SiYoutubemusic />
        },
        {
            id:2,
            name:"Youtube Kids",
            icon:<SiYoutubekids/>
        },
    ];
    const sidebarItems5 = [ 
        {
            id:1,
            name:"Setting",
            icon:<IoSettingsOutline />
        },
        {
            id:2,
            name:"Report",
            icon:<IoFlagOutline/>
        },
        {
            id:3,
            name:"Youtube Music",
            icon:< CiCircleQuestion />
        },
        {
            id:4,
            name:"Comment",
            icon:<GoReport/>
        },
    ];
  return (
    <div className="px-6 w-[17%] h-[calc(100vh-6.625rem)] overflow-y-scroll scrollbar-thin overflow-x-hidden mt-16 " >
        {/* Home */}
        <div className="space-y-3  items-center">
           {sidebarItems.map((item) => {
            return (
                    <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>                    
                    </div>                   
            );
        })}           
        </div>
        <br/>
        <hr/>
        {/* You */}
        <div className="mt-4 space-y-3  items-center">
            <div className="flex items-center space-x-2">
                <h1 className="font-semibold">You</h1>
                <FaChevronRight/>
            </div>
           {sidebarItems2.map((item) => {
            return (
                    <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>                    
                    </div>                   
            );
        })}           
        </div>
        <br/>
        <hr/>
        {/* Explore */}
        <div className="mt-4 space-y-3  items-center">
            <div className="flex items-center space-x-2">
                <h1 className="font-semibold">Explore</h1>
            </div>
           {sidebarItems3.map((item) => {
            return (
                    <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>                    
                    </div>                   
            );
        })}           
        </div>
        <br/>
        <hr/>
        {/* More from Youtube */}
        <div className="mt-4 space-y-3  items-center">
            <div className="flex items-center space-x-2">
                <h1 className="font-semibold">More Youtube</h1>
            </div>
           {sidebarItems4.map((item) => {
            return (
                    <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                        <div className="text-xl cursor-pointer text-red-600">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>                    
                    </div>                   
            );
        })}           
        </div>
        <br/>
        <hr/>
        {/* Setting */}
        <div className="mt-4 space-y-3  items-center">
           {sidebarItems5.map((item) => {
            return (
                    <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                        <div className="text-xl cursor-pointer">{item.icon}</div>
                        <span className="cursor-pointer">{item.name}</span>                    
                    </div>                   
            );
        })}  
        <hr/>         
        </div>
        <span className="text-xs font-semibold text-gray-700">
        เกี่ยวกับ สื่อลิขสิทธิ์ ติดต่อเรา <br/> 
        ครีเอเตอร์ โฆษณา <br/> 
        นักพัฒนาซอฟต์แวร์ <br/>
        <p>ข้อกำหนดความเป็นส่วน <br/>
        ตัวนโยบายและความปลอดภัย <br/>
        วิธีการทำงานของ YouTube<br/>
        ทดลองใช้ฟีเจอร์ใหม่</p>
        </span>
        <br/>
        <p className="text-xs font-semibold text-gray-400"> &copy; 2024 Google LLC</p>
    </div>
  );
}

export default Sidebar;