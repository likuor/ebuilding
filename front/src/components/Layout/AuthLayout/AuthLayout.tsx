import { ILayout } from "../../../types/ui";
import { useAuthCheck } from './hooks/useAuthCheck'

export const AuthLayout = ({ children }: ILayout) => {
  useAuthCheck();

  return (
    <>
      <main>
        <section>
          <div className='container mx-auto px-4'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3'>
              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}