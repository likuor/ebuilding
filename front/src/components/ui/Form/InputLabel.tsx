import { IInputLabel } from "../../../types/ui";

export const InputLabel = ({ label, type, id, htmlfor, name, onChange, value }: IInputLabel) => {

  return (
    <>
      <div className="mb-6 pt-3 rounded bg-gray-200">
        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor={htmlfor}>{label}</label>
        <input type={type} id={id} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" name={name} onChange={onChange} value={value} />
      </div >
    </>
  )
}