import Image from 'next/image';
import Link from 'next/link';
import { IHouseCardProps } from "../../../types/api";

const urlBuilder = (src: string) => `${process.env.NEXT_PUBLIC_API_BASE_STRAPI_URL}` + src;


export const HouseCard = ({ house }: IHouseCardProps) => {
  return (
    <>
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <Link href={`/house/${house.id}`} className="flex flex-wrap no-underline hover:no-underline">
            <Image loader={() => urlBuilder(`${house.attributes?.images?.data[0]?.attributes?.url}`)}
              alt={`${house.attributes?.images?.data[0]?.attributes?.name}`}
              width={800}
              height={600}
              src={urlBuilder(`${house.attributes?.images?.data[0]?.attributes?.url}`)}
              className="h-64 w-full rounded-t pb-6"
            />
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">{house.attributes.price}</p>
            <div className="w-full font-bold text-xl text-gray-900 px-6">{house.attributes.name}</div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {house.attributes.description}
            </p>
          </Link>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-xs md:text-sm">{house.attributes.updatedAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};
