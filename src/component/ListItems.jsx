

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Cinema",
    "Live",
    "Dramedy",
    "Gaming",
    "Soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll px-4">
      <div className="flex space-x-4 flex-nowrap">
         {categories.map((category) => {
         return (
         <div key={category} className="mb-4 flex-none bg-gray-200 hover:bg-slate-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700  cursor-pointer">
            {category}
         </div>
            );
            })}
      </div>
    </div>
  );
}

export default ListItems;
