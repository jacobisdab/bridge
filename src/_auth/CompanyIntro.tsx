import { Link } from "react-router-dom";

const CompanyIntro = () => {
  
 return (
    <div className="bg-[#ececec] flex flex-row justify-center w-full">
      <div className="bg-[#ececec] w-[707px] h-[1881px] relative">
        <img className="absolute w-[707px] h-[59px] top-0 left-0" alt="Header" src="/assets/images/header.png" />
        <div className="absolute w-[707px] h-[441px] top-[98px] left-0">
          <div className="absolute w-[289px] h-[98px] top-[31px] left-[20px]">
            <img
              className="absolute w-[284px] h-[93px] top-[4px] left-[2px]"
              alt="Where students build"
              src="/assets/images/where-students-build-businesses-thrive-and-opportunities-unite.png"
            />
            <img className="w-[66px] top-[25px] left-[195px] absolute h-[3px]" alt="Line" src="/assets/images/line-1.png" />
            <img className="w-[70px] top-[94px] left-[219px] absolute h-[3px]" alt="Line" src="/assets/images/line-3.svg" />
            <img className="w-[75px] top-[60px] left-[141px] absolute h-[3px]" alt="Line" src="/assets/images/line-2.svg" />
            <div className="w-[108px] h-[28px] top-0 left-[83px] bg-[#42ff00] absolute mix-blend-darken" />
            <div className="w-[139px] h-[28px] top-[35px] left-0 bg-[#ff01e5de] absolute mix-blend-darken" />
            <div className="w-[164px] h-[28px] top-[70px] left-[52px] bg-[#faff1ede] absolute mix-blend-darken" />
          </div>
          <p className="absolute w-[319px] top-[203px] left-[47px] [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-bold">Bridge</span>
            <span className="font-light">
              {" "}
              connects businesses with a dynamic pool of students from top universities, eager to showcase and apply
              their skills in real-world scenarios.
            </span>
          </p>
          <div className="absolute w-[707px] h-[441px] top-0 left-0">
            <img className="absolute w-[707px] h-[92px] top-[349px] left-0" alt="Vector" src="/assets/images/vector-1.svg" />
            <div className="absolute w-[300px] h-[350px] top-0 left-[381px] bg-white rounded-[15px] overflow-hidden">
              <img
                className="w-[300px] h-[350px] top-0 left-0 absolute object-cover"
                alt="Img"
                src="/assets/images/wechat26c15506a6a1ff6431b22e5a4b5c0fdf-1.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[536px] h-[138px] top-[591px] left-[86px]">
          <p className="absolute w-[536px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal]">
            <span className="font-bold text-[#aa6df7]">Bridge</span>
            <span className="font-medium text-black">
              {" "}
              is the ultimate connection between students hungry for real-world experience and businesses seeking
              cost-effective solutions. It&#39;s a platform where students can earn while they learn, offering their
              skills to businesses with budget constraints.
            </span>
          </p>
          <div className="w-[214px] h-[21px] top-[28px] left-[102px] bg-[#42ff00] absolute mix-blend-darken" />
          <img
            className="w-[230px] h-[21px] top-[51px] left-[77px] absolute mix-blend-darken"
            alt="Rectangle"
            src="/assets/images/rectangle-7.svg"
          />
        </div>
        <div className="absolute w-[120px] h-[120px] top-[861px] left-[56px] bg-white rounded-[10px]">
          <img
            className="w-[115px] h-[90px] top-[15px] left-[2px] absolute object-cover"
            alt="Img"
            src="/assets/images/wechat270012ca5921463318f4dbed4f488aa9-1.png"
          />
        </div>
        <div className="absolute w-[120px] h-[120px] top-[861px] left-[375px] bg-white rounded-[10px]">
          <img
            className="w-[87px] h-[90px] top-[19px] left-[17px] absolute object-cover"
            alt="Img"
            src="/assets/images/wechat93fb8bc1ebc46c9f9f74c2791be33189-1.png"
          />
        </div>
        <div className="absolute w-[120px] h-[120px] top-[820px] left-[216px] bg-white rounded-[10px]">
          <img
            className="w-[90px] h-[90px] top-[15px] left-[15px] absolute object-cover"
            alt="Img"
            src="/assets/images/wechatc4b5e885a85c8c948014445b8e530f23-1.png"
          />
        </div>
        <div className="absolute w-[120px] h-[120px] top-[820px] left-[531px] bg-white rounded-[10px]">
          <img
            className="w-[84px] h-[90px] top-[15px] left-[18px] absolute object-cover"
            alt="Img"
            src="/assets/images/wechat6463563f8eae616600ab7f34dbba9018-1.png"
          />
        </div>
        <div className="absolute w-[120px] h-[95px] top-[993px] left-[56px] flex flex-col items-start gap-[3px]">
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-medium">
              Prompt
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-light text-[8px]">
              Businesses articulate their project needs, and our AI technology expertly refines and specifies project
              prompts, ensuring seamless onboarding for students.
            </span>
          </p>
        </div>
        <div className="absolute w-[120px] h-[109px] top-[991px] left-[375px] flex flex-col items-start gap-[3px]">
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-medium">
              Curate
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-light text-[8px]">
              Businesses have the delightful task of cherry-picking one (or 2 or 3…) project that most resonates with
              their vision from the pool of innovative submissions.
            </span>
          </p>
        </div>
        <div className="absolute w-[120px] h-[95px] top-[945px] left-[539px] flex flex-col items-start gap-[3px]">
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-medium">
              Unite
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-light text-[8px]">
              Once the choice is made, businesses connect with their chosen student collaborator(s) for smooth work
              integration and the next exciting steps in their project journey.
            </span>
          </p>
        </div>
        <div className="absolute w-[120px] h-[113px] top-[950px] left-[220px] flex flex-col items-start gap-[3px]">
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-medium">
              Create
              <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            <span className="font-light text-[8px]">
              Passionate students eagerly craft and submit their unique interpretations of the project, infusing
              creativity and talent into every submission.
            </span>
          </p>
        </div>
        <div className="absolute w-[651px] h-[411px] top-[1159px] left-[28px] rounded-[10px] [background:linear-gradient(180deg,rgba(255,1.06,229.61,0.87)_0%,rgba(251.81,138.33,74.49,0.98)_46.35%,rgb(170,109,247)_88.54%)]">
          <div className="relative w-[590px] h-[229px] top-[81px] left-[41px] flex flex-col items-start gap-[3px]">
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
                “Think of it as the “Uber” of services, with a delightful twist: not just one, but ten skilled drivers
                racing to take you to your destination swiftly and comfortably, each one vying to deliver your vision
                with utmost precision.
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[25px]">
                From building websites for local restaurants to video editing for influencers, Bridge is where
                opportunity meets talent. Plus, their rating system and aggregation based selection process ensures
                businesses get quality on top of work they actually want”
              </span>
            </p>
          </div>
        </div>
        <div className="absolute w-[707px] h-[215px] top-[1666px] left-0 [background:linear-gradient(180deg,rgba(255,1.06,229.61,0.44)_0%,rgba(170,109,247,0.73)_100%)]">
          <div className="absolute w-[129px] top-[27px] left-[289px] [font-family:'Inter',Helvetica] font-extrabold italic text-black text-[24px] tracking-[0] leading-[25px]">
            Bridge Up!
          </div>
          <img
            className="absolute w-[227px] h-[93px] top-[85px] left-[241px]"
            alt="For any inquiries"
            src="/assets/images/for-any-inquiries-please-contact-us-at-bridgeup2023-gmail-com-b.png"
          />
          <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1">
              Get Started
            </Link>
        </div>
      </div>
    </div>

    
            
            
     
  );
};

export default CompanyIntro;
