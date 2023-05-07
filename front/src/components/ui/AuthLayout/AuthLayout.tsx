import { ILayout } from "../../../types/ui";
import { useAuthCheck } from './hooks/useAuthCheck'

export const AuthLayout = ({ children }: ILayout) => {
  useAuthCheck();

  return (
    <>
      <main>
        <section>
          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32" >
            <div className="mx-0 sm:mx-6">
              <div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}