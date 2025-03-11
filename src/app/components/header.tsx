
const Header = () => {
  return (
    <div className="w-full h-[59px] flex justify-around items-center">
      <div className="w-[92px] h=[20px] flex justify-center items-center gap-2">
        <img className="w-5 h-5" src="film.png"></img>
        <p className="text-indigo-700 text-[16px] font-bold">Movie Z</p>
      </div>
      <div className="w-[438px] h-[36px] flex justify-center gap-3 ">
        <select className="w-[97px] h-[36px] border-1 rounded-[8px] border-gray-300 outline-0" name="Genre" id="genre">
          <option></option>
          <option></option>
          <option></option>
        </select>
        <div className="flex justify-between items-center gap-3 border-1 rounded-xl pl-4 border-gray-300">
          <img className="w-[16px] h-4" src="magnifier.png"></img>
          <input className="w-[379px] h-[36px] outline-0" placeholder="Search" type="search"></input>
        </div>
      </div>
      <div className="w-[36px] h-[36px] border-[1px] flex justify-center items-center rounded-xl border-gray-300">
        <img className="w-[16px] h-[16px]" src="moon.png"></img>
      </div>
    </div>
  );
};

export default Header;
