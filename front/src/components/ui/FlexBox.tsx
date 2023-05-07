import { IFlexBox } from "../../types/ui";

export const FlexBox = ({ children }: IFlexBox) => {

  return (
    <>
      <div className=' bg-red-900 flex justify-center align-middle p-2'>
        {children}
      </div>
    </>
  )
}