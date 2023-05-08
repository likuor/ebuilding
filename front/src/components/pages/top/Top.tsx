import Image from 'next/image'
import { HouseCard } from "../../ui/House/HouseCard";
import { AuthLayout } from "../../../components/ui/AuthLayout/AuthLayout";
import { Header } from '../../..//components/ui/Header/Header';
import Link from 'next/link';
import { IHouse, IHouseProps } from '../../../types/api/index';
import { useFetchQuery } from '../../hooks/useFetchQuery';
import { commonText } from "../../../common/commonText.json";

export const Top = ({ housesData }: IHouseProps) => {
  const { isSuccess, isLoading, isError, error, houses } = useFetchQuery({ housesData })
  if (isLoading) return <h2>...Loading</h2>
  if (isError) return <pre>{JSON.stringify(error)}</pre>

  return (
    <>
      <Header />
      <AuthLayout>
        {/* <!--Top Card--> */}
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
          <Link href={'/'} className="flex flex-wrap no-underline hover:no-underline">
            <div className="w-full md:w-2/3 rounded-t">
              <Image alt="image" width={800} height={600} src={`${commonText.top.image}`} className="h-full w-full shadow" />
            </div>

            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{commonText.top.subtitle}</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">{commonText.top.title}</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  {commonText.top.desc}
                </p>
              </div>

              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <!--Posts Container--> */}
        {/* <!--1/3 col --> */}
        <div className="flex flex-wrap justify-between pt-12 -mx-6">
          {isSuccess && houses?.map((house: IHouse) => {
            return <HouseCard house={house} key={house.id} />
          }
          )}
        </div>
      </AuthLayout>
    </>
  )
}
