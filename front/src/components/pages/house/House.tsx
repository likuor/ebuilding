import { IHouseProps } from '../../../types/api/index';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function House({ houses }: IHouseProps) {
  const router = useRouter()
  const { id } = router.query
  const house = houses.filter((house) => {
    return house.id.toString() === id
  })
  const urlBuilder = (src: string) => `${process.env.NEXT_PUBLIC_API_BASE_STRAPI_URL}` + src;

  return (
    <div className="w-2/5 p-6 flex flex-col m-auto">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Image loader={() => urlBuilder(`${house[0].attributes.images?.data[0]?.attributes?.url}`)}
          alt={`${house[0].attributes?.images?.data[0]?.attributes?.name}`}
          width={800}
          height={600}
          src={urlBuilder(`${house[0].attributes?.images?.data[0]?.attributes?.url}`)}
          className="h-64 w-full rounded-t pb-6"
        />
        <p className="w-full text-gray-600 text-xs md:text-sm px-6">{house[0].attributes.price}</p>
        <div className="w-full font-bold text-xl text-gray-900 px-6">{house[0].attributes.name}</div>
        <p className="text-gray-800 font-serif text-base px-6 mb-5">
          {house[0].attributes.description}
        </p>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-xs md:text-sm">{house[0].attributes.updatedAt}</p>
        </div>
      </div>
    </div>
  )
}

