
const Header = () => {
  return (
    <div className="w-full h-[59px] flex justify-around items-center">
      <div className="w-[92px] h=[20px] flex justify-center items-center gap-2">
        <img className="w-5 h-5" src="film.png"></img>
        <p className="text-indigo-700 text-[16px] font-bold">Movie Z</p>
      </div>
      <div className="w-[438px] h-[36px] flex justify-center gap-3 ">
        <select className="w-[97px] h-[36px] border-1 rounded-[8px] border-gray-400" name="Genre" id="genre">
          <option>Genre</option>
          <option></option>
          <option></option>
        </select>
        <input className="w-[379px] h-[36px] border-1 rounded-[8px] border-gray-400" placeholder="Search" type="search"></input>
      </div>
      <div className="w-[36px] h-[36px] border-[1px] flex justify-center items-center rounded-xl border-gray-400">
        <img className="w-[16px] h-[16px]" src="moon.png"></img>
      </div>
    </div>
  );
};

export default Header;
