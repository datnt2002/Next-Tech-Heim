'use client'
import useModalStore from '@/store/modal'
import useUserStore from '@/store/user'
import { Button } from 'antd'
import dynamic from 'next/dynamic'
import React from 'react'
import ProfileMenuDropdown from '../Dropdown/ProfileMenuDropdown'

const DynamicAuthModal = dynamic(() => import('@/components/organisms/Modal/AuthModal'), { ssr: false })

const ActionBar = () => {
  const { isAuthModalOpen, setOpen } = useModalStore()
  const { user } = useUserStore()

  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        {user ? (
          <ProfileMenuDropdown />
        ) : (
          <Button
            className="md:block hidden self-center"
            type="primary"
            onClick={() => setOpen('isAuthModalOpen', true)}
          >
            Login / Sign Up
          </Button>
        )}
      </div>
      {isAuthModalOpen && <DynamicAuthModal open={isAuthModalOpen} setOpen={setOpen} />}
    </>
  )
}

export default ActionBar
