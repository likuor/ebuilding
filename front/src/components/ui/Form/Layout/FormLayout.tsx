import { IFormLayout } from "../../../../types/ui";

export const FormLayout = ({ title, desc, children, onSubmit }: IFormLayout) => {

  return (
    <>
      <main className="max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl h-full">
        <section>
          <h3 className="text-center font-bold text-2xl">{title}</h3>
          <p className="text-center text-gray-600 pt-2">{desc}</p>
        </section>
        <section className="mt-10">
          <form className='flex flex-col' onSubmit={onSubmit} >
            {children}
          </form>
        </section>
      </main>
    </>
  )
}