import Link from 'next/link';
import Image from 'next/image';
import { IHouse, IHouseAttribute } from "../types/api";

// import { formatDate, myLoader } from '../helper/Helper';

// type house = {
//   name: string,
//   description: string,
//   price: number,
// }[]

export const HouseCard = ({ house }: any) => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <Link href={'/article/' + house.name}>
        <div>
          {/* <Image
            loader={myLoader}
            width={500}
            height={300}
            alt={house.heroImage.fields.description}
            src={house.heroImage.fields.file.url}
            priority
            className='rounded-t-3xl'
          /> */}
        </div>
        <div className='container mx-auto px-4 py-4 bg-gray-100 rounded-b-3xl'>
          <h4 className='text-1xl font-bold'>{house.description}</h4>
          <h4 className='text-1xl font-bold'>${house.price}</h4>
          {/* <p className='text-gray-400'>{formatDate(article.publishDate)}</p> */}
        </div>
      </Link>
    </div>
  );
};
