import { commonText } from "../../../common/commonText.json";

export const Header = () => {
  return (
    <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{ backgroundImage: `url('/static/cover.jpg')`, height: '60vh', maxHeight: '460px' }}>
      <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p className="text-white font-extrabold text-3xl md:text-5xl">
          {commonText.header.title}
        </p>
        <p className="text-xl md:text-2xl text-gray-500">{commonText.header.desc}</p>
      </div>
    </div >
  )
}
