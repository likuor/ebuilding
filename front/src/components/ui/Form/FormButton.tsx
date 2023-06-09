import { IFormButton } from "../../../types/ui";

export const FormButton = ({ text, bgColor }: IFormButton) => {

  return (
    <>
      <button className={`${bgColor} hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 h-" type="submit"`}>
        {text}
      </button>
    </>
  )
}