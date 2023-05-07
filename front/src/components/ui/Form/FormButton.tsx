import { IFormButton } from "../../../types/ui";

export const FormButton = ({ text }: IFormButton) => {

  return (
    <>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 h-" type="submit">
        {text}
      </button>
    </>
  )
}