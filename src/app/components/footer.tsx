const Footer = () => {
  return (
    <div className="w-screen h-[280px] bg-indigo-700 text-white mt-20 flex justify-center items-center">
      <div className="w-screen h-[200px] ml-27 flex justify-between">
        <div className="w-[247px] h-200px">
          <div className="w-[300px]">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5 " src="/vector.png"></img>
              <p className="text-white text-[16px] font-bold">Movie Z</p>
            </div>
            <p className="mt-2">© 2024 Movie Z. All Rights Reserved.</p>
          </div>
        </div>

        <div className="w-[713px] h-[200px] flex gap-20">
          <div>
            <p>Contact Information </p>
            <div className="mt-3">
              <img className="w-4 h-4 border-white" src="/email.png"></img>
              <p>Email:</p>
              <p>support@movieZ.com</p>
            </div>

            <div className="mt-3">
              <img className="w-4 h-4" src="/telephone.png"></img>
              <p>Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>

          <div>
            <p>Follow us</p>
            <p className="mt-3">Facebook Instagram twitter Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
