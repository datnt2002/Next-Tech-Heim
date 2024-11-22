import { IUser, UserResponseType } from '@/types/user.type'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import useModalStore from './modal'

export interface UserState {
  user: IUser | undefined
  register: (data: UserResponseType) => void
  login: (data: UserResponseType) => void
}

const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: undefined,
      register: (data: UserResponseType) => {
        const { setOpen } = useModalStore.getState()

        setOpen('isSuccessModalOpen', true)
        set((state) => ({ ...state, user: data.data }))
      },
      login: (data: UserResponseType) => {
        set((state) => ({ ...state, user: data.data }))
      },
    }),
    { name: 'UserStore' }
  )
)

export default useUserStore
