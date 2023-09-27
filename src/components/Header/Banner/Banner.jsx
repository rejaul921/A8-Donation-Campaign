
const Banner = () => {
  return (

    <div  className="relative">
      <div className="w-full bg-cover h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/2Zv5DmD/banner.png'}}></div>
      <div className="absolute bottom-0 left-0 w-full h-full opacity-70 bg-white"></div>
      <div className="text-center flex items-center justify-center absolute bottom-0 left-0 w-full h-full">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-bold">I Grow By Helping People In Need</h1>
          <input type="search" name=""className="mr-2 p-2 rounded-lg " id="search" />
          <button className=" btn-neutral p-2 rounded-lg font-semibold bg-[#FF444A]">Search</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;